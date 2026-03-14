import React, { useState, useRef, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Enhanced star field with multiple layers for depth
const StarField = ({ count = 3000, color = "#7886a8", radius = 1.2, rotationSpeed = 0.3, ...props }) => {
  const ref = useRef();
  
  const { positions, colors, sizes } = useMemo(() => {
     const positions = new Float32Array(count * 3);
     const colors = new Float32Array(count * 3);
     const sizes = new Float32Array(count);
     
     // Create color palette for variety
     const colorPalette = [
        new THREE.Color("#7886a8"),  // Base blue-gray
        new THREE.Color("#8b94b0"),  // Lighter blue
        new THREE.Color("#a5b4fc"),  // Indigo tint
        new THREE.Color("#c4b5fd"),  // Purple tint
        new THREE.Color("#67e8f9"),  // Cyan accent (rare)
     ];

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

        // Weighted color selection - mostly base color with occasional accents
        const rand = Math.random();
        let c;
        if (rand > 0.98) c = colorPalette[4]; // 2% cyan
        else if (rand > 0.95) c = colorPalette[3]; // 3% purple
        else if (rand > 0.90) c = colorPalette[2]; // 5% indigo
        else if (rand > 0.80) c = colorPalette[1]; // 10% light blue
        else c = colorPalette[0]; // 80% base
        
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        
        // Variable sizes for depth perception
        sizes[i] = 0.0008 + Math.random() * 0.0012;
     }
     return { positions, colors, sizes };
  }, [count, radius, color]);

  useFrame((state, delta) => {
    if (ref.current) {
        // Smoother, slower rotation for elegance
        ref.current.rotation.x -= delta / (45 / rotationSpeed);
        ref.current.rotation.y -= delta / (55 / rotationSpeed);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.0018}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7}
        />
      </Points>
    </group>
  );
};

// Secondary layer for bright stars
const BrightStars = ({ count = 150 }) => {
  const ref = useRef();
  
  const { positions, colors } = useMemo(() => {
     const positions = new Float32Array(count * 3);
     const colors = new Float32Array(count * 3);
     const accentColor = new THREE.Color("#e0e7ff");

     for(let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const r = 1.1 * Math.cbrt(Math.random()); 
        
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = r * Math.cos(phi);
        
        colors[i * 3] = accentColor.r;
        colors[i * 3 + 1] = accentColor.g;
        colors[i * 3 + 2] = accentColor.b;
     }
     return { positions, colors };
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 60;
        ref.current.rotation.y -= delta / 70;
    }
  });

  return (
    <group rotation={[0.2, 0.1, Math.PI / 3]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.5}
        />
      </Points>
    </group>
  );
};

export const StarBackground = () => {
  const [count, setCount] = useState(1800);
  const [brightCount, setBrightCount] = useState(90);

  useEffect(() => {
      const isMobile = window.innerWidth < 768;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isMobile || reducedMotion) {
          setCount(800);
          setBrightCount(40);
      }
  }, []);

  return (
    <div className="w-full h-full fixed inset-0 z-0 bg-obsidian pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <StarField count={count} radius={1.2} rotationSpeed={0.25} />
          <BrightStars count={brightCount} />
        </Suspense>
      </Canvas>
      
      {/* Enhanced gradient overlay for depth and contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/30 to-obsidian/60 z-10" />
      
      {/* Radial vignette for focus */}
      <div className="absolute inset-0 z-10" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(10, 10, 20, 0.4) 100%)'
        }}
      />
      
      {/* Subtle ambient glow - professionally balanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-900/[0.025] rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-900/[0.02] rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-cyan-900/[0.015] rounded-full blur-[200px]" />
      </div>
    </div>
  );
};
