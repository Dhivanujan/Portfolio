import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Enhanced floating particles with depth layers
const FloatingParticles = () => {
    const particles = useMemo(() => 
        Array.from({ length: 35 }, (_, i) => ({
            id: i,
            size: Math.random() * 6 + 2,
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 8,
            layer: Math.floor(Math.random() * 3), // 0: back, 1: mid, 2: front
            type: Math.random() > 0.7 ? 'glow' : 'solid',
        })), []
    );

    const layerStyles = {
        0: { opacity: 0.15, blur: 'blur-[1px]', scale: 0.6 },
        1: { opacity: 0.3, blur: '', scale: 0.8 },
        2: { opacity: 0.5, blur: '', scale: 1 },
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => {
                const style = layerStyles[particle.layer];
                return (
                    <motion.div
                        key={particle.id}
                        className={`absolute rounded-full ${style.blur} ${
                            particle.type === 'glow' 
                                ? 'bg-gradient-to-br from-cyan-400/60 to-indigo-400/40 shadow-lg shadow-cyan-500/20' 
                                : 'bg-gradient-to-br from-indigo-400/50 to-purple-400/30'
                        }`}
                        style={{
                            width: particle.size * style.scale,
                            height: particle.size * style.scale,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [-30 * style.scale, 30 * style.scale, -30 * style.scale],
                            x: [-15 * style.scale, 15 * style.scale, -15 * style.scale],
                            scale: [1, 1.3, 1],
                            opacity: [style.opacity * 0.5, style.opacity, style.opacity * 0.5],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
};

// Modern animated rings with glassmorphism
const AnimatedRings = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: `${160 + i * 90}px`,
                        height: `${160 + i * 90}px`,
                        border: `1px solid`,
                        borderColor: i % 2 === 0 
                            ? 'rgba(99, 102, 241, 0.15)' 
                            : 'rgba(139, 92, 246, 0.12)',
                        background: i === 1 
                            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)' 
                            : 'transparent',
                    }}
                    animate={{
                        rotate: i % 2 === 0 ? 360 : -360,
                        scale: [1, 1.03 + i * 0.01, 1],
                    }}
                    transition={{
                        rotate: {
                            duration: 30 + i * 15,
                            repeat: Infinity,
                            ease: "linear",
                        },
                        scale: {
                            duration: 5 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                />
            ))}
            
            {/* Central pulsing ring */}
            <motion.div
                className="absolute w-24 h-24 rounded-full border-2 border-indigo-500/20"
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0, 0.4],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                }}
            />
        </div>
    );
};

// Enhanced glowing orbs with modern gradients
const GlowingOrbs = () => {
    return (
        <>
            {/* Primary orb - top left with cyan accent */}
            <motion.div
                className="absolute top-[15%] left-[15%] w-44 h-44 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.5, 0.8, 0.5],
                    x: [-20, 20, -20],
                    y: [-10, 20, -10],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Secondary orb - bottom right with purple accent */}
            <motion.div
                className="absolute bottom-[20%] right-[15%] w-52 h-52 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 70%)',
                    filter: 'blur(50px)',
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4],
                    x: [15, -15, 15],
                    y: [10, -15, 10],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Accent orb - center with mixed gradient */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 65%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Small accent orb - floating */}
            <motion.div
                className="absolute top-[60%] left-[25%] w-20 h-20 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                }}
                animate={{
                    y: [-30, 30, -30],
                    x: [-10, 20, -10],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </>
    );
};

// Modern geometric shapes with professional styling
const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* 3D Cube wireframe */}
            <motion.div
                className="absolute top-[12%] right-[18%]"
                animate={{
                    y: [-15, 15, -15],
                    rotateX: [0, 360],
                    rotateY: [0, 360],
                }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotateX: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                }}
                style={{ perspective: '200px' }}
            >
                <svg width="50" height="50" viewBox="0 0 50 50" className="text-indigo-500/25 dark:text-indigo-400/20">
                    <g fill="none" stroke="currentColor" strokeWidth="1">
                        <polygon points="15,10 35,10 40,20 20,20" />
                        <polygon points="15,10 20,20 20,40 15,30" />
                        <polygon points="35,10 40,20 40,40 35,30" />
                        <polygon points="20,20 40,20 40,40 20,40" />
                        <line x1="15" y1="30" x2="20" y2="40" />
                        <line x1="35" y1="30" x2="40" y2="40" />
                        <line x1="15" y1="30" x2="35" y2="30" />
                    </g>
                </svg>
            </motion.div>

            {/* Hexagon with glow */}
            <motion.div
                className="absolute top-[25%] left-[12%]"
                animate={{
                    y: [-12, 12, -12],
                    rotate: [0, 60, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <svg width="45" height="45" viewBox="0 0 45 45" className="text-cyan-500/30 dark:text-cyan-400/20 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                    <polygon
                        points="22.5,3 41,13 41,32 22.5,42 4,32 4,13"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <polygon
                        points="22.5,10 34,17 34,31 22.5,38 11,31 11,17"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.75"
                        opacity="0.5"
                    />
                </svg>
            </motion.div>

            {/* Diamond/Rhombus */}
            <motion.div
                className="absolute bottom-[28%] left-[18%]"
                animate={{
                    y: [10, -10, 10],
                    rotate: [0, 180, 360],
                    opacity: [0.25, 0.5, 0.25],
                }}
                transition={{
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <svg width="35" height="35" viewBox="0 0 35 35" className="text-purple-500/35 dark:text-purple-400/25">
                    <polygon
                        points="17.5,2 32,17.5 17.5,33 3,17.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>
            </motion.div>

            {/* Animated circles group */}
            <motion.div
                className="absolute top-[55%] right-[12%]"
                animate={{
                    y: [-18, 18, -18],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg width="40" height="40" viewBox="0 0 40 40" className="text-indigo-400/25 dark:text-indigo-300/18">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.7" />
                    <circle cx="20" cy="20" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                </svg>
            </motion.div>

            {/* Cross/Plus with rotation */}
            <motion.div
                className="absolute bottom-[18%] right-[28%]"
                animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.55, 0.3],
                }}
                transition={{
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                <svg width="28" height="28" viewBox="0 0 28 28" className="text-violet-500/35 dark:text-violet-400/25">
                    <line x1="14" y1="4" x2="14" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </motion.div>

            {/* Triangle outline */}
            <motion.div
                className="absolute top-[70%] left-[8%]"
                animate={{
                    y: [8, -12, 8],
                    rotate: [0, -120, 0],
                }}
                transition={{
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
            >
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-cyan-500/25 dark:text-cyan-400/18">
                    <polygon
                        points="16,4 30,28 2,28"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                </svg>
            </motion.div>

            {/* Dots pattern */}
            <motion.div
                className="absolute top-[40%] right-[5%]"
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <svg width="30" height="30" viewBox="0 0 30 30" className="text-indigo-500/30">
                    <circle cx="5" cy="5" r="2" fill="currentColor" />
                    <circle cx="15" cy="5" r="2" fill="currentColor" />
                    <circle cx="25" cy="5" r="2" fill="currentColor" />
                    <circle cx="5" cy="15" r="2" fill="currentColor" />
                    <circle cx="15" cy="15" r="2" fill="currentColor" />
                    <circle cx="25" cy="15" r="2" fill="currentColor" />
                    <circle cx="5" cy="25" r="2" fill="currentColor" />
                    <circle cx="15" cy="25" r="2" fill="currentColor" />
                    <circle cx="25" cy="25" r="2" fill="currentColor" />
                </svg>
            </motion.div>
        </div>
    );
};

// Connection lines between elements
const ConnectionLines = () => {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(99, 102, 241, 0.15)" />
                    <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.05)" />
                </linearGradient>
                <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
                    <stop offset="100%" stopColor="rgba(99, 102, 241, 0.15)" />
                </linearGradient>
            </defs>
            
            <motion.path
                d="M 15% 20% Q 50% 35% 85% 25%"
                fill="none"
                stroke="url(#lineGradient1)"
                strokeWidth="1"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <motion.path
                d="M 10% 70% Q 45% 55% 80% 75%"
                fill="none"
                stroke="url(#lineGradient2)"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
            />
        </svg>
    );
};

// Floating tech icons
const TechIcons = () => {
    const icons = [
        { path: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", x: "8%", y: "35%", size: 24 },
        { path: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", x: "88%", y: "45%", size: 22 },
        { path: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z", x: "92%", y: "68%", size: 20 },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none">
            {icons.map((icon, idx) => (
                <motion.div
                    key={idx}
                    className="absolute"
                    style={{ left: icon.x, top: icon.y }}
                    animate={{
                        y: [-8, 8, -8],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 5 + idx * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.5,
                    }}
                >
                    <svg width={icon.size} height={icon.size} viewBox="0 0 24 24" className="text-indigo-500/20 dark:text-indigo-400/15">
                        <path d={icon.path} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

// Main component combining all effects
const Hero3D = () => {
    const prefersReducedMotion = useReducedMotion();
    const [isLiteMode, setIsLiteMode] = useState(false);

    useEffect(() => {
        const checkLiteMode = () => {
            setIsLiteMode(window.innerWidth < 1024 || prefersReducedMotion);
        };

        checkLiteMode();
        window.addEventListener("resize", checkLiteMode);

        return () => window.removeEventListener("resize", checkLiteMode);
    }, [prefersReducedMotion]);

    return (
        <div className="w-full h-[420px] md:h-[620px] relative">
            {/* Background gradient mesh - enhanced */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-indigo-50/30 to-purple-50/40 dark:from-slate-900/60 dark:via-indigo-950/40 dark:to-purple-950/30 rounded-3xl" />
            
            {/* Noise texture overlay for depth */}
            <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] rounded-3xl"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
            
            {/* Glowing orbs - back layer */}
            <GlowingOrbs />
            
            {/* Connection lines */}
            {!isLiteMode && <ConnectionLines />}
            
            {/* Animated rings */}
            <AnimatedRings />
            
            {/* Floating particles */}
            {!isLiteMode && <FloatingParticles />}
            
            {/* Geometric shapes */}
            {!isLiteMode && <FloatingShapes />}
            
            {/* Tech icons */}
            {!isLiteMode && <TechIcons />}
            
            {/* Center gradient spotlight - enhanced */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 35%, rgba(6,182,212,0.03) 55%, transparent 70%)",
                }}
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.7, 1, 0.7],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Secondary spotlight */}
            <motion.div
                className="absolute top-[30%] left-[60%] w-48 h-48 rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 60%)",
                }}
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.4, 0.7, 0.4],
                    x: [-20, 20, -20],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            
            {/* Modern grid overlay */}
            <div 
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] rounded-3xl"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
            />
            
            {/* Gradient border glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl blur-sm pointer-events-none" />
        </div>
    );
};

export default Hero3D;
