import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const TREND_TAGS = [
    { text: "Agentic AI", top: "17%", left: "8%", delay: 0 },
    { text: "Cloud Native", top: "22%", right: "8%", delay: 0.12 },
    { text: "Zero Trust", bottom: "17%", left: "12%", delay: 0.24 },
    { text: "Platform Ops", bottom: "20%", right: "10%", delay: 0.36 },
];

const Hero3D = () => {
    const prefersReducedMotion = useReducedMotion();
    const [isLiteMode, setIsLiteMode] = useState(false);

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const smoothRotateX = useSpring(rotateX, { stiffness: 110, damping: 22, mass: 0.6 });
    const smoothRotateY = useSpring(rotateY, { stiffness: 110, damping: 22, mass: 0.6 });

    const particles = useMemo(
        () =>
            Array.from({ length: 22 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 1,
                delay: Math.random() * 2.5,
                duration: Math.random() * 3 + 3,
            })),
        []
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

        rotateY.set((px - 0.5) * 8);
        rotateX.set((0.5 - py) * 8);
    };

    const onPointerLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <div className="w-full h-[420px] md:h-[620px] relative [perspective:1400px]">
            <motion.div
                className="absolute inset-0 overflow-hidden isolate rounded-[30px] border border-slate-200/80 dark:border-white/10 shadow-[0_24px_90px_rgba(15,23,42,0.18)] dark:shadow-[0_24px_90px_rgba(2,8,23,0.45)]"
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
                            "radial-gradient(circle at 10% 15%, rgba(14,165,233,0.24) 0%, transparent 36%), radial-gradient(circle at 85% 12%, rgba(99,102,241,0.25) 0%, transparent 42%), radial-gradient(circle at 80% 85%, rgba(168,85,247,0.2) 0%, transparent 40%), linear-gradient(140deg, rgba(248,250,252,0.9) 0%, rgba(224,231,255,0.7) 44%, rgba(238,242,255,0.8) 100%)",
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
                            "radial-gradient(circle at 14% 20%, rgba(6,182,212,0.25) 0%, transparent 40%), radial-gradient(circle at 82% 10%, rgba(99,102,241,0.35) 0%, transparent 46%), radial-gradient(circle at 82% 84%, rgba(168,85,247,0.3) 0%, transparent 45%), linear-gradient(145deg, rgba(2,6,23,0.98) 0%, rgba(15,23,42,0.94) 45%, rgba(23,37,84,0.9) 100%)",
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
                    className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    }}
                />

                <motion.div
                    className="absolute left-1/2 top-[55%] h-[42%] w-[140%] -translate-x-1/2 [transform:translateZ(-80px)_rotateX(76deg)]"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(99,102,241,0.24) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.2) 1px, transparent 1px)",
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
                    transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        transform: "translateZ(35px)",
                        background:
                            "conic-gradient(from 0deg, rgba(99,102,241,0.45), rgba(6,182,212,0.25), rgba(168,85,247,0.4), rgba(99,102,241,0.45))",
                        filter: "blur(1px)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                />

                <div className="absolute left-1/2 top-1/2 h-[312px] w-[312px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 dark:border-white/15 bg-white/45 dark:bg-slate-950/35 backdrop-blur-xl" style={{ transform: "translateZ(45px)" }} />

                <motion.div
                    className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/40 dark:border-white/20 bg-white/65 dark:bg-slate-900/55 backdrop-blur-xl"
                    style={{ transform: "translateZ(75px)" }}
                    animate={isLiteMode ? undefined : { y: [-4, 4, -4] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-cyan-500/10 to-purple-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center text-[11px] font-bold tracking-[0.16em] text-slate-700 dark:text-slate-200">
                        NEXT
                    </div>
                </motion.div>

                {!isLiteMode &&
                    TREND_TAGS.map((tag) => (
                        <motion.div
                            key={tag.text}
                            className="absolute px-3 py-1.5 rounded-full border border-white/40 dark:border-white/15 bg-white/55 dark:bg-slate-900/45 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold tracking-wide text-slate-700 dark:text-slate-200"
                            style={{
                                ...tag,
                                transform: "translateZ(65px)",
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
                            className="absolute rounded-full bg-indigo-500/35 dark:bg-indigo-300/45"
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

                <motion.div
                    className="absolute -inset-[45%] pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.35) 48%, transparent 72%)",
                        transform: "translateZ(120px)",
                    }}
                    animate={isLiteMode ? undefined : { x: ["-30%", "35%"] }}
                    transition={{ duration: 5.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
                />

                <div className="absolute inset-0 rounded-[30px] border border-white/40 dark:border-white/10 pointer-events-none" />
            </motion.div>
        </div>
    );
};

export default Hero3D;
