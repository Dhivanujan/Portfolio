import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, Icosahedron, OrbitControls, Sparkles } from "@react-three/drei";

const Shape = () => {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            // Much slower, more elegant rotation
            mesh.current.rotation.x = time * 0.05;
            mesh.current.rotation.y = time * 0.08;
        }
    });

    return (
        <Float floatIntensity={0.8} speed={1.5} rotationIntensity={0.15}>
            <group>
                <Icosahedron ref={mesh} args={[1.3, 0]}>
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={1}
                        samples={16}
                        thickness={1.8}
                        anisotropicBlur={0.03}
                        iridescence={1}
                        iridescenceIOR={1}
                        iridescenceThicknessRange={[0, 1400]}
                        clearcoat={1}
                        attenuationDistance={0.5}
                        attenuationColor="#ffffff"
                        color="#6366f1" 
                        roughness={0.05}
                        transmission={0.98}
                        ior={1.5}
                        chromaticAberration={0.02}
                        distortion={0.1}
                        distortionScale={0.15}
                        temporalDistortion={0.03}
                    />
                </Icosahedron>
                
                <Icosahedron args={[0.85, 0]} position={[0,0,0]}>
                    <meshBasicMaterial color="#6366f1" wireframe wireframeLinewidth={1.5} transparent opacity={0.15} />
                </Icosahedron>

                {/* Slower floating accent shapes */}
                <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
                    <mesh position={[2.2, 1.2, -1]} scale={0.2}>
                        <octahedronGeometry />
                        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} toneMapped={false} />
                    </mesh>
                </Float>
                <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8} delay={1}>
                    <mesh position={[-2.2, -1.2, 1]} scale={0.18}>
                        <dodecahedronGeometry />
                        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.8} toneMapped={false} />
                    </mesh>
                </Float>
            </group>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas 
                camera={{ position: [0, 0, 6], fov: 40 }}
                gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
                dpr={[1, 1.5]}
            >
                <ambientLight intensity={0.3} />
                <spotLight position={[10, 10, 10]} intensity={0.5} angle={0.3} penumbra={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.2} color="#8b5cf6" />
                
                <Environment preset="city" />

                <Shape />
                
                {/* Reduced sparkles for professional look */}
                <Sparkles 
                    count={15} 
                    scale={4} 
                    size={1} 
                    speed={0.15} 
                    opacity={0.2} 
                    color="#ffffff"
                />

                {/* Much slower auto-rotation */}
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
