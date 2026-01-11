import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, Icosahedron, OrbitControls, Sparkles } from "@react-three/drei";

const Shape = () => {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = time * 0.1;
            mesh.current.rotation.y = time * 0.15;
        }
    });

    return (
        <Float floatIntensity={1.5} speed={2} rotationIntensity={0.3}>
            <group>
                <Icosahedron ref={mesh} args={[1.3, 0]}>
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={1}
                        samples={16}
                        thickness={1.8}
                        anisotropicBlur={0.05}
                        iridescence={1}
                        iridescenceIOR={1}
                        iridescenceThicknessRange={[0, 1400]}
                        clearcoat={1}
                        attenuationDistance={0.5}
                        attenuationColor="#ffffff"
                        color="#7c7ff7" 
                        roughness={0.05}
                        transmission={0.98}
                        ior={1.5}
                        chromaticAberration={0.04}
                        distortion={0.15}
                        distortionScale={0.2}
                        temporalDistortion={0.05}
                    />
                </Icosahedron>
                
                <Icosahedron args={[0.85, 0]} position={[0,0,0]}>
                    <meshBasicMaterial color="#6366f1" wireframe wireframeLinewidth={1.5} transparent opacity={0.2} />
                </Icosahedron>

                <Float speed={3.5} rotationIntensity={0.8} floatIntensity={1.5}>
                    <mesh position={[2.2, 1.2, -1]} scale={0.25}>
                        <octahedronGeometry />
                        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={1.5} toneMapped={false} />
                    </mesh>
                </Float>
                <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5} delay={1}>
                    <mesh position={[-2.2, -1.2, 1]} scale={0.2}>
                        <dodecahedronGeometry />
                        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1.5} toneMapped={false} />
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
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} intensity={0.8} angle={0.3} penumbra={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
                
                <Environment preset="city" />

                <Shape />
                
                <Sparkles 
                    count={30} 
                    scale={5} 
                    size={1.5} 
                    speed={0.3} 
                    opacity={0.3} 
                    color="#ffffff"
                />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
