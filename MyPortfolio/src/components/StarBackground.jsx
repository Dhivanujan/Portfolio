import React, { useState, useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const StarField = ({ count = 3000, color = "#7886a8", radius = 1.2, rotationSpeed = 0.3, ...props }) => {
  const ref = useRef();
  
  const { positions, colors } = useMemo(() => {
     const positions = new Float32Array(count * 3);
     const colors = new Float32Array(count * 3);
     const baseColor = new THREE.Color(color);
     const altColor = new THREE.Color("#8b94b0"); // Subtle variation

     for(let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = radius * Math.cbrt(Math.random()); 
        
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);
        
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Very subtle color variation - only 5% get alternate color
        const c = Math.random() > 0.95 ? altColor : baseColor;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
     }
     return { positions, colors };
  }, [count, radius, color]);

  useFrame((state, delta) => {
    if (ref.current) {
        // Much slower rotation for subtle movement
        ref.current.rotation.x -= delta / (40 / rotationSpeed);
        ref.current.rotation.y -= delta / (50 / rotationSpeed);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

export const StarBackground = () => {
  const [count, setCount] = useState(2500);

  useEffect(() => {
      const isMobile = window.innerWidth < 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isMobile || reducedMotion) {
          setCount(1200);
      }
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 z-0 bg-obsidian pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField count={count} radius={1.2} rotationSpeed={0.3} />
        </Suspense>
        <Preload all />
      </Canvas>
      
      {/* Dark gradient overlay for better contrast - subtle and professional */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian/70 z-10" />
      
      {/* Very subtle ambient glow - barely visible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-indigo-900/[0.02] rounded-full blur-[200px]" />
        <div className="absolute bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-indigo-800/[0.02] rounded-full blur-[200px]" />
      </div>
    </div>
  );
};
