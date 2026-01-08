import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial, Float } from "@react-three/drei";

const AnimatedShape = () => {
    const meshRef = useRef(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
                <MeshDistortMaterial
                    color="#a855f7" // neon-purple
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </TorusKnot>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1.5} color="#22d3ee" />
                <directionalLight position={[-2, -5, -2]} intensity={1.5} color="#ec4899" />
                <AnimatedShape />
            </Canvas>
        </div>
    );
};

export default Hero3D;
