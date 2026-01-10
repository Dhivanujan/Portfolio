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
        <Float floatIntensity={2} speed={2} rotationIntensity={0.5}>
            <group>
                <Icosahedron ref={mesh} args={[1.3, 0]}>
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={1}
                        samples={16}
                        thickness={2}
                        anisotropicBlur={0.1}
                        iridescence={1}
                        iridescenceIOR={1}
                        iridescenceThicknessRange={[0, 1400]}
                        clearcoat={1}
                        attenuationDistance={0.5}
                        attenuationColor="#ffffff"
                        color="#a855f7" 
                        roughness={0.1}
                        transmission={0.95}
                        ior={1.5}
                        chromaticAberration={0.06}
                        distortion={0.2}
                        distortionScale={0.3}
                        temporalDistortion={0.1}
                    />
                </Icosahedron>
                
                <Icosahedron args={[0.8, 0]} position={[0,0,0]}>
                    <meshBasicMaterial color="#22d3ee" wireframe wireframeLinewidth={2} transparent opacity={0.3} />
                </Icosahedron>

                <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                    <mesh position={[2, 1, -1]} scale={0.3}>
                        <octahedronGeometry />
                        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={2} toneMapped={false} />
                    </mesh>
                </Float>
                <Float speed={3} rotationIntensity={1} floatIntensity={2} delay={1}>
                    <mesh position={[-2, -1, 1]} scale={0.25}>
                        <dodecahedronGeometry />
                        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} toneMapped={false} />
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
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} intensity={1} angle={0.3} penumbra={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
                
                <Environment preset="city" />

                <Shape />
                
                <Sparkles 
                    count={40} 
                    scale={5} 
                    size={2} 
                    speed={0.4} 
                    opacity={0.4} 
                    color="#ffffff"
                />

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} enablePan={false} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
