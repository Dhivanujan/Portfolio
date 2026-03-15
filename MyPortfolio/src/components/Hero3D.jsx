import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const PRESETS = {
    enterprise: {
        label: "Enterprise Clean",
        tilt: 4,
        particleCount: 6,
        chipCount: 2,
        ringDuration: 30,
        gridDuration: 6,
        showBeams: false,
        showSheen: false,
        darkVignette: "radial-gradient(ellipse at center, transparent 38%, rgba(2,6,23,0.35) 100%)",
        ringGradient:
            "conic-gradient(from 0deg, rgba(99,102,241,0.34), rgba(34,211,238,0.16), rgba(168,85,247,0.24), rgba(99,102,241,0.34))",
        glowClass: "shadow-[inset_0_0_70px_rgba(99,102,241,0.1)] dark:shadow-[inset_0_0_80px_rgba(6,182,212,0.12)]",
        chipClass:
            "border-white/55 dark:border-cyan-100/15 bg-white/75 dark:bg-slate-900/45 text-slate-700 dark:text-cyan-100/85",
    },
    cinematic: {
        label: "Cinematic Showcase",
        tilt: 7,
        particleCount: 12,
        chipCount: 3,
        ringDuration: 18,
        gridDuration: 2.8,
        showBeams: true,
        showSheen: true,
        darkVignette: "radial-gradient(ellipse at center, transparent 34%, rgba(2,6,23,0.58) 100%)",
        ringGradient:
            "conic-gradient(from 0deg, rgba(99,102,241,0.62), rgba(34,211,238,0.3), rgba(168,85,247,0.5), rgba(99,102,241,0.62))",
        glowClass: "shadow-[inset_0_0_120px_rgba(99,102,241,0.16)] dark:shadow-[inset_0_0_140px_rgba(6,182,212,0.22)]",
        chipClass:
            "border-white/55 dark:border-cyan-100/20 bg-white/70 dark:bg-slate-900/55 text-slate-700 dark:text-cyan-100",
    },
    cyber: {
        label: "Cyber Future",
        tilt: 9,
        particleCount: 20,
        chipCount: 3,
        ringDuration: 12,
        gridDuration: 1.9,
        showBeams: true,
        showSheen: true,
        darkVignette: "radial-gradient(ellipse at center, transparent 30%, rgba(2,6,23,0.72) 100%)",
        ringGradient:
            "conic-gradient(from 0deg, rgba(34,211,238,0.8), rgba(99,102,241,0.78), rgba(217,70,239,0.72), rgba(34,211,238,0.8))",
        glowClass: "shadow-[inset_0_0_140px_rgba(99,102,241,0.24)] dark:shadow-[inset_0_0_170px_rgba(34,211,238,0.32)]",
        chipClass:
            "border-cyan-200/70 dark:border-cyan-100/40 bg-cyan-50/70 dark:bg-slate-900/70 text-cyan-700 dark:text-cyan-100",
    },
};

const INSIGHT_CHIPS = [
    { text: "AI Strategy", top: "16%", left: "9%", delay: 0 },
    { text: "Cloud Platform", top: "18%", right: "9%", delay: 0.14 },
    { text: "Security First", bottom: "16%", right: "11%", delay: 0.28 },
];

const Hero3D = ({ variant = "enterprise" }) => {
    const activePreset = PRESETS[variant] || PRESETS.enterprise;
    const prefersReducedMotion = useReducedMotion();
    const [isLiteMode, setIsLiteMode] = useState(false);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const smoothRotateX = useSpring(rotateX, { stiffness: 110, damping: 22, mass: 0.6 });
    const smoothRotateY = useSpring(rotateY, { stiffness: 110, damping: 22, mass: 0.6 });

    const particles = useMemo(
        () =>
            Array.from({ length: activePreset.particleCount }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 1,
                delay: Math.random() * 2.5,
                duration: Math.random() * 3 + 3,
            })),
        [activePreset.particleCount]
    );

    useEffect(() => {
        const checkLiteMode = () => {
            setIsLiteMode(window.innerWidth < 1024 || prefersReducedMotion);
        };

        checkLiteMode();
        window.addEventListener("resize", checkLiteMode);
        return () => window.removeEventListener("resize", checkLiteMode);
    }, [prefersReducedMotion]);

    const onPointerMove = (event) => {
        if (isLiteMode) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;

        rotateY.set((px - 0.5) * activePreset.tilt);
        rotateX.set((0.5 - py) * activePreset.tilt);
    };

    const onPointerLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div className="w-full h-[420px] md:h-[620px] relative [perspective:1400px]">
            <motion.div
                className="absolute inset-0 overflow-hidden isolate rounded-[30px] border border-slate-200/90 dark:border-cyan-200/15 shadow-[0_24px_90px_rgba(15,23,42,0.16)] dark:shadow-[0_30px_120px_rgba(2,8,23,0.6)]"
                onMouseMove={onPointerMove}
                onMouseLeave={onPointerLeave}
                style={{
                    rotateX: smoothRotateX,
                    rotateY: smoothRotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 12% 18%, rgba(14,165,233,0.18) 0%, transparent 34%), radial-gradient(circle at 88% 16%, rgba(99,102,241,0.2) 0%, transparent 38%), linear-gradient(145deg, rgba(252,253,255,0.95) 0%, rgba(233,238,255,0.8) 48%, rgba(245,247,255,0.92) 100%)",
                    }}
                    animate={
                        isLiteMode
                            ? undefined
                            : {
                                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                              }
                    }
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    className="absolute inset-0 dark:block hidden"
                    style={{
                        background:
                            "radial-gradient(circle at 12% 18%, rgba(34,211,238,0.26) 0%, transparent 36%), radial-gradient(circle at 88% 14%, rgba(99,102,241,0.36) 0%, transparent 42%), radial-gradient(circle at 76% 82%, rgba(168,85,247,0.28) 0%, transparent 40%), linear-gradient(148deg, rgba(2,6,23,1) 0%, rgba(10,16,36,0.96) 44%, rgba(13,23,56,0.95) 100%)",
                    }}
                    animate={
                        isLiteMode
                            ? undefined
                            : {
                                  backgroundPosition: ["0% 0%", "100% 0%", "0% 100%", "0% 0%"],
                              }
                    }
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <div
                    className="absolute inset-0 opacity-[0.025] dark:opacity-[0.06]"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />

                <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(148,163,184,0.08)_100%)]" />
                <div className="absolute inset-0 dark:block hidden" style={{ background: activePreset.darkVignette }} />

                {activePreset.showBeams && !isLiteMode && (
                    <>
                        <motion.div
                            className="absolute -top-16 left-[8%] h-[170%] w-28 rotate-[16deg]"
                            style={{
                                background: "linear-gradient(to right, rgba(34,211,238,0.16), transparent)",
                                filter: "blur(2px)",
                                transform: "translateZ(-12px)",
                            }}
                            animate={{ opacity: [0.22, 0.45, 0.22], x: [-10, 16, -10] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -top-20 right-[10%] h-[180%] w-24 -rotate-[14deg]"
                            style={{
                                background: "linear-gradient(to left, rgba(99,102,241,0.2), transparent)",
                                filter: "blur(2px)",
                                transform: "translateZ(-8px)",
                            }}
                            animate={{ opacity: [0.15, 0.38, 0.15], x: [12, -12, 12] }}
                            transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </>
                )}

                <motion.div
                    className="absolute left-1/2 top-[55%] h-[42%] w-[140%] -translate-x-1/2 [transform:translateZ(-80px)_rotateX(76deg)]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(99,102,241,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.22) 1px, transparent 1px)",
                        backgroundSize: "42px 42px",
                        maskImage:
                            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 46%, rgba(0,0,0,0) 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.35) 46%, rgba(0,0,0,0) 100%)",
                    }}
                    animate={
                        isLiteMode
                            ? undefined
                            : {
                                  backgroundPositionY: [0, 42],
                              }
                    }
                    transition={{ duration: activePreset.gridDuration, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        transform: "translateZ(35px)",
                        background: activePreset.ringGradient,
                        filter: "blur(1px)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: activePreset.ringDuration, repeat: Infinity, ease: "linear" }}
                />

                <div
                    className="absolute left-1/2 top-1/2 h-[302px] w-[302px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 dark:border-cyan-100/20 bg-white/55 dark:bg-slate-950/45 backdrop-blur-xl"
                    style={{ transform: "translateZ(45px)" }}
                />

                <motion.div
                    className="absolute left-1/2 top-1/2 h-36 w-44 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/45 dark:border-cyan-100/25 bg-white/70 dark:bg-slate-900/65 backdrop-blur-xl overflow-hidden"
                    style={{ transform: "translateZ(76px)" }}
                    animate={isLiteMode ? undefined : { y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/18 via-cyan-500/12 to-purple-500/18" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-400/60 dark:bg-cyan-300/70" />
                    <div className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.18em] text-slate-500 dark:text-cyan-100/80">
                        {activePreset.label}
                    </div>
                    <div className="absolute left-4 right-4 top-11 space-y-2">
                        <div className="h-2.5 rounded-full bg-slate-300/75 dark:bg-cyan-300/40" />
                        <div className="h-2.5 w-[72%] rounded-full bg-slate-300/65 dark:bg-indigo-300/35" />
                        <div className="h-2.5 w-[46%] rounded-full bg-slate-300/55 dark:bg-violet-300/35" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400/85" />
                        <span className="h-2 w-2 rounded-full bg-cyan-400/80" />
                        <span className="h-2 w-2 rounded-full bg-indigo-400/80" />
                    </div>
                </motion.div>

                {!isLiteMode &&
                    INSIGHT_CHIPS.slice(0, activePreset.chipCount).map((tag) => (
                        <motion.div
                            key={tag.text}
                            className={`absolute px-3 py-1.5 rounded-full border backdrop-blur-md text-[10px] sm:text-[11px] font-semibold tracking-wide ${activePreset.chipClass}`}
                            style={{
                                ...tag,
                                transform: "translateZ(64px)",
                            }}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: [0, -6, 0] }}
                            transition={{ delay: tag.delay, duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {tag.text}
                        </motion.div>
                    ))}

                {!isLiteMode &&
                    particles.map((particle) => (
                        <motion.span
                            key={particle.id}
                            className="absolute rounded-full bg-indigo-500/40 dark:bg-cyan-300/65"
                            style={{
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                transform: "translateZ(18px)",
                            }}
                            animate={{
                                y: [-6, 6, -6],
                                opacity: [0.15, 0.7, 0.15],
                            }}
                            transition={{
                                duration: particle.duration,
                                repeat: Infinity,
                                delay: particle.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                {activePreset.showSheen && !isLiteMode && (
                    <motion.div
                        className="absolute -inset-[45%] pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(110deg, transparent 22%, rgba(255,255,255,0.45) 48%, transparent 72%)",
                            transform: "translateZ(120px)",
                        }}
                        animate={{ x: ["-30%", "35%"] }}
                        transition={{ duration: 5.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
                    />
                )}

                <div className="absolute inset-0 rounded-[30px] border border-white/55 dark:border-cyan-100/15 pointer-events-none" />
                <div className={`absolute inset-0 rounded-[30px] pointer-events-none ${activePreset.glowClass}`} />
            </motion.div>
        </div>
    );
};

export default Hero3D;
