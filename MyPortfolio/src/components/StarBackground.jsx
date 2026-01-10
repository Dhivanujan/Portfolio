import React, { useState, useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";

const StarField = ({ count = 5000, color = "#aaabec", radius = 1.2, rotationSpeed = 1, ...props }) => {
  const ref = useRef();
  
  const { positions, colors } = useMemo(() => {
     const positions = new Float32Array(count * 3);
     const colors = new Float32Array(count * 3);
     const baseColor = new THREE.Color(color);
     const altColor = new THREE.Color("#22d3ee"); // Neon cyan highlight

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

        // subtle color variation
        const c = Math.random() > 0.8 ? altColor : baseColor;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
     }
     return { positions, colors };
  }, [count, radius, color]);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / (15 / rotationSpeed);
        ref.current.rotation.y -= delta / (20 / rotationSpeed);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

export const StarBackground = () => {
  const [count, setCount] = useState(4000);

  useEffect(() => {
      const isMobile = window.innerWidth < 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isMobile || reducedMotion) {
          setCount(2000);
      }
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 z-0 bg-obsidian pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarField count={count} radius={1.2} rotationSpeed={1} />
          {/* Second layer for depth - faster and wider */}
          <StarField count={count / 2} radius={1.5} rotationSpeed={1.5} color="#a855f7" /> 
        </Suspense>
        <Preload all />
      </Canvas>
      {/* Nebula/Aurora effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-500/5 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Vignette Overlay for Depth & Contrast */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-obsidian/40 to-obsidian/90 z-0" />
    </div>
  );
};
