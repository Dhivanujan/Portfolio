import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const StarField = ({ count = 5000, ...props }) => {
  const ref = useRef();
  
  const [sphere] = useState(() => {
     const coords = new Float32Array(count * 3);
     for(let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = 1.2 * Math.cbrt(Math.random()); 
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        coords[i * 3] = x;
        coords[i * 3 + 1] = y;
        coords[i * 3 + 2] = z;
     }
     return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#aaabec"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={2}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

export const StarBackground = () => {
  const [count, setCount] = useState(5000);

  useEffect(() => {
      const isMobile = window.innerWidth < 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isMobile || reducedMotion) {
          setCount(2500);
      }
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 z-0 bg-obsidian pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField key={count} count={count} />
        </Suspense>
        <Preload all />
      </Canvas>
      {/* Vignette Overlay for Depth & Contrast */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-obsidian/40 to-obsidian/90 z-0" />
    </div>
  );
};
