import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Floating particles component
const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-br from-indigo-400/40 to-purple-400/40 dark:from-indigo-400/30 dark:to-purple-400/30"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// Animated rings component
const AnimatedRings = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full border border-indigo-500/20 dark:border-indigo-400/15"
                    style={{
                        width: `${180 + i * 80}px`,
                        height: `${180 + i * 80}px`,
                    }}
                    animate={{
                        rotate: i % 2 === 0 ? 360 : -360,
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 20 + i * 10,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 4 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />
            ))}
        </div>
    );
};

// Glowing orbs component
const GlowingOrbs = () => {
    return (
        <>
            <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/20 blur-2xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [-10, 10, -10],
                    y: [-5, 15, -5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500/25 to-indigo-500/20 blur-2xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                    x: [10, -10, 10],
                    y: [5, -10, 5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-violet-500/20 to-pink-500/10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </>
    );
};

// Geometric shapes floating
const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Hexagon */}
            <motion.div
                className="absolute top-[15%] right-[20%]"
                animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
            >
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-indigo-500/30 dark:text-indigo-400/20">
                    <polygon
                        points="20,2 38,12 38,28 20,38 2,28 2,12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>
            </motion.div>

            {/* Triangle */}
            <motion.div
                className="absolute bottom-[25%] left-[15%]"
                animate={{
                    y: [10, -10, 10],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                }}
            >
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-purple-500/30 dark:text-purple-400/20">
                    <polygon
                        points="15,3 28,27 2,27"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>
            </motion.div>

            {/* Circle */}
            <motion.div
                className="absolute top-[60%] right-[10%]"
                animate={{
                    y: [-15, 15, -15],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg width="25" height="25" viewBox="0 0 25 25" className="text-cyan-500/30 dark:text-cyan-400/20">
                    <circle cx="12.5" cy="12.5" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </motion.div>

            {/* Square */}
            <motion.div
                className="absolute top-[30%] left-[10%]"
                animate={{
                    y: [5, -15, 5],
                    rotate: [45, 135, 45],
                }}
                transition={{
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                }}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-indigo-400/25 dark:text-indigo-300/15">
                    <rect x="2" y="2" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </motion.div>

            {/* Plus sign */}
            <motion.div
                className="absolute bottom-[15%] right-[25%]"
                animate={{
                    y: [-8, 8, -8],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-violet-500/30 dark:text-violet-400/20">
                    <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="2" />
                    <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="2" />
                </svg>
            </motion.div>
        </div>
    );
};

// Main component combining all effects
const Hero3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px] relative">
            {/* Background gradient mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-transparent to-indigo-50/30 dark:from-slate-900/50 dark:via-transparent dark:to-indigo-900/20 rounded-3xl" />
            
            {/* Glowing orbs */}
            <GlowingOrbs />
            
            {/* Animated rings */}
            <AnimatedRings />
            
            {/* Floating particles */}
            <FloatingParticles />
            
            {/* Geometric shapes */}
            <FloatingShapes />
            
            {/* Center gradient spotlight */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Subtle grid overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />
        </div>
    );
};

export default Hero3D;
