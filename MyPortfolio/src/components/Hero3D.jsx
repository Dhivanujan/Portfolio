import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const VARIANT_COLORS = {
    enterprise: {
        primary: "#6366f1",
        secondary: "#06b6d4",
        emissive: "#4338ca",
    },
    cinematic: {
        primary: "#8b5cf6",
        secondary: "#ec4899",
        emissive: "#6d28d9",
    },
    cyber: {
        primary: "#06b6d4",
        secondary: "#a855f7",
        emissive: "#0891b2",
    },
};

/* ── Floating Torus Knot ── */
const FloatingMesh = ({ variant = "enterprise" }) => {
    const meshRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });
    const { viewport } = useThree();
    const colors = VARIANT_COLORS[variant] || VARIANT_COLORS.enterprise;

    const colorPrimary = useMemo(() => new THREE.Color(colors.primary), [colors.primary]);
    const colorEmissive = useMemo(() => new THREE.Color(colors.emissive), [colors.emissive]);

    useFrame(({ clock, pointer }) => {
        if (!meshRef.current) return;

        // Smooth mouse follow
        mouseRef.current.x += (pointer.x * 0.3 - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.05;

        const t = clock.getElapsedTime();

        // Gentle auto-rotation + mouse parallax
        meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.2 + mouseRef.current.y * 0.4;
        meshRef.current.rotation.y = t * 0.12 + mouseRef.current.x * 0.4;
        meshRef.current.rotation.z = Math.cos(t * 0.1) * 0.1;

        // Subtle breathing scale
        const breathe = 1 + Math.sin(t * 0.6) * 0.03;
        meshRef.current.scale.setScalar(breathe);
    });

    const scaleFactor = Math.min(viewport.width, viewport.height) * 0.22;

    return (
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
            <mesh ref={meshRef} scale={scaleFactor}>
                <torusKnotGeometry args={[1, 0.35, 200, 32, 2, 3]} />
                <MeshDistortMaterial
                    color={colorPrimary}
                    emissive={colorEmissive}
                    emissiveIntensity={0.35}
                    roughness={0.2}
                    metalness={0.8}
                    distort={0.25}
                    speed={2}
                    transparent
                    opacity={0.85}
                />
            </mesh>
        </Float>
    );
};

/* ── Ambient Particles ── */
const Particles = ({ count = 40, variant = "enterprise" }) => {
    const ref = useRef();
    const colors = VARIANT_COLORS[variant] || VARIANT_COLORS.enterprise;

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 8;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
        }
        return pos;
    }, [count]);

    useFrame(({ clock }) => {
        if (!ref.current) return;
        const t = clock.getElapsedTime();
        const posArr = ref.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            posArr[i * 3 + 1] += Math.sin(t * 0.3 + i) * 0.002;
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.04}
                color={colors.secondary}
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

/* ── Main Hero3D Component ── */
const Hero3D = ({ variant = "enterprise" }) => {
    return (
        <div className="w-full h-full relative pointer-events-none" aria-hidden="true">
            <Canvas
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <directionalLight position={[-3, -3, 2]} intensity={0.3} color="#8b5cf6" />
                <FloatingMesh variant={variant} />
                <Particles variant={variant} />
            </Canvas>
        </div>
    );
};

export default Hero3D;
