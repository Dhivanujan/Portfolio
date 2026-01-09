import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float, Sphere, Trail } from "@react-three/drei";

// Floating orbs that orbit around the main shape
const OrbitingOrb = ({ radius, speed, color, size = 0.08, offset = 0 }) => {
    const ref = useRef();
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime() * speed + offset;
        ref.current.position.x = Math.sin(t) * radius;
        ref.current.position.z = Math.cos(t) * radius;
        ref.current.position.y = Math.sin(t * 2) * (radius * 0.3);
    });

    return (
        <Trail width={1} length={8} color={color} attenuation={(t) => t * t}>
            <Sphere ref={ref} args={[size, 16, 16]}>
                <meshBasicMaterial color={color} toneMapped={false} />
            </Sphere>
        </Trail>
    );
};

// Main animated icosahedron with distortion
const AnimatedShape = () => {
    const meshRef = useRef(null);
    const wireframeRef = useRef(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.15;
            meshRef.current.rotation.y = time * 0.2;
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.x = -time * 0.1;
            wireframeRef.current.rotation.y = -time * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
            <group>
                {/* Main shape with distortion */}
                <Icosahedron ref={meshRef} args={[1.2, 4]}>
                    <MeshDistortMaterial
                        color="#6366f1"
                        attach="material"
                        distort={0.35}
                        speed={1.5}
                        roughness={0.15}
                        metalness={0.9}
                        emissive="#4f46e5"
                        emissiveIntensity={0.1}
                    />
                </Icosahedron>
                
                {/* Outer wireframe shell */}
                <Icosahedron ref={wireframeRef} args={[1.6, 1]}>
                    <meshBasicMaterial 
                        color="#22d3ee" 
                        wireframe 
                        transparent 
                        opacity={0.15}
                    />
                </Icosahedron>
                
                {/* Orbiting particles */}
                <OrbitingOrb radius={2} speed={0.8} color="#22d3ee" offset={0} />
                <OrbitingOrb radius={2.2} speed={0.6} color="#a855f7" offset={Math.PI * 0.66} />
                <OrbitingOrb radius={1.8} speed={1} color="#ec4899" offset={Math.PI * 1.33} />
            </group>
        </Float>
    );
};

// Ambient particles floating in background
const FloatingParticles = ({ count = 50 }) => {
    const mesh = useRef();
    
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10
                ],
                scale: Math.random() * 0.03 + 0.01
            });
        }
        return temp;
    }, [count]);
    
    useFrame((state) => {
        mesh.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    });
    
    return (
        <group ref={mesh}>
            {particles.map((particle, i) => (
                <mesh key={i} position={particle.position}>
                    <sphereGeometry args={[particle.scale, 8, 8]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
                </mesh>
            ))}
        </group>
    );
};

// Slow cinematic orbit around the center for a more dynamic 3D feel
const CameraOrbiter = () => {
    const { camera } = useThree();

    useFrame((state) => {
        const t = state.clock.getElapsedTime() * 0.15;
        const radius = 6;
        camera.position.x = Math.sin(t) * radius;
        camera.position.z = Math.cos(t) * radius;
        camera.lookAt(0, 0, 0);
    });

    return null;
};

const Hero3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px]">
            <Canvas 
                camera={{ position: [0, 0, 6], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
                <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#ec4899" />
                <pointLight position={[0, 0, 3]} intensity={0.5} color="#a855f7" />

                <CameraOrbiter />
                <FloatingParticles count={40} />
                <AnimatedShape />
            </Canvas>
        </div>
    );
};

export default Hero3D;
