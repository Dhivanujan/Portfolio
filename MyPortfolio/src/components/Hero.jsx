import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Cloud,
    FileText,
    Github,
    Linkedin,
    Shield,
    Sparkles
} from "lucide-react";
import { Link } from "react-scroll";

import profile from "../assets/Profile.JPG";
const Hero3D = lazy(() => import("./Hero3D"));

// Static data
const HIGHLIGHTS = [
    { text: "AI/ML Delivery", icon: Sparkles },
    { text: "Cloud Architecture", icon: Cloud },
    { text: "Secure DevOps", icon: Shield }
];

const FLOATING_STATS = [
    { value: "50+", label: "Projects", delay: 0 },
    { value: "99%", label: "Uptime", delay: 0.1 },
    { value: "3+", label: "Years Exp", delay: 0.2 }
];

// Constants
const NAV_OFFSET = -88;
const Hero = () => {
    const [showHero3D, setShowHero3D] = useState(false);

    useEffect(() => {
        const canRender3D =
            window.innerWidth >= 1024 &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!canRender3D) {
            setShowHero3D(false);
            return;
        }

        const mount3D = () => setShowHero3D(true);

        if ("requestIdleCallback" in window) {
            const idleId = window.requestIdleCallback(mount3D, { timeout: 800 });
            return () => window.cancelIdleCallback(idleId);
        }

        const timeoutId = window.setTimeout(mount3D, 180);
        return () => window.clearTimeout(timeoutId);
    }, []);

    return (
        <section
            id="hero"
            className="min-h-[100svh] lg:h-screen flex items-center justify-center relative isolate overflow-hidden pt-24 sm:pt-20 md:pt-16 lg:pt-8 pb-10 md:pb-8 lg:pb-6"
        >
            {/* Static lightweight background */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.14),transparent_36%),radial-gradient(circle_at_85%_18%,rgba(6,182,212,0.12),transparent_34%),radial-gradient(circle_at_50%_80%,rgba(168,85,247,0.12),transparent_40%)]" />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    maskImage:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)"
                }}
            />

            {/* Hero Content */}
            <motion.div
                className="container mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center relative z-10 w-full max-w-6xl pt-4 sm:pt-2 md:pt-0"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
            >
                {/* Text Section */}
                <div
                    className="
                        flex flex-col items-center lg:items-start lg:justify-center
                        text-center lg:text-left
                        z-10 order-2 lg:order-1
                    "
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="
                            mb-4 sm:mb-5 inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full
                            border border-indigo-500/30
                            bg-gradient-to-r from-indigo-500/10 to-purple-500/10
                            backdrop-blur-xl shadow-lg shadow-indigo-500/5
                        "
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>

                        <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Available for new opportunities
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                        className="
                            text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.25rem]
                            font-heading font-bold tracking-tight
                            mb-3 sm:mb-4
                            leading-[1.12]
                        "
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300">
                            Crafting Intelligent
                        </span>
                        <br />

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400">
                            &amp; Resilient
                        </span>{" "}

                        <span className="relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 heading-glow">
                                Systems
                            </span>

                            <span
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                style={{ transformOrigin: "left", transform: "scaleX(1)" }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-4 sm:mb-6 leading-relaxed"
                    >
                        Specializing in{" "}
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                            AI/ML
                        </span>
                        ,{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">
                            Cloud
                        </span>
                        , and{" "}
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                            DevOps
                        </span>{" "}
                        engineering. I build production-ready systems that scale, secure, and
                        deliver measurable business impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.55 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
                    >
                        {HIGHLIGHTS.map((item, idx) => (
                            <motion.span
                                key={item.text}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="
                                    group inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl
                                    bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10
                                    text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200
                                    shadow-sm hover:shadow-md
                                    hover:border-indigo-300 dark:hover:border-indigo-500/50
                                    transition-colors duration-200
                                "
                            >
                                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-500" />
                                {item.text}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 w-full sm:w-auto"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={NAV_OFFSET}
                            className="
                                group relative inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5
                                text-white font-semibold focus:outline-none cursor-pointer rounded-xl
                                transition-all duration-300
                                bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600
                                shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40
                                overflow-hidden
                            "
                        >
                            <span className="relative flex items-center tracking-wide text-sm">
                                Explore My Work
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </span>
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="
                                group inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5
                                text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white
                                transition-all duration-300 font-semibold
                                border-2 border-slate-200 dark:border-slate-700
                                hover:border-indigo-400 dark:hover:border-indigo-500
                                bg-white/80 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20
                                rounded-xl shadow-sm hover:shadow-lg backdrop-blur-sm
                            "
                        >
                            <FileText className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-sm tracking-wide">Get Resume</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-200 dark:border-slate-800 w-full"
                    >
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group relative p-3 rounded-xl
                                    text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white
                                    border border-slate-200 dark:border-slate-700
                                    bg-white dark:bg-slate-800/50
                                    transition-all duration-300
                                    hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600
                                "
                            >
                                <Github className="h-5 w-5" />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    GitHub
                                </span>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group relative p-3 rounded-xl
                                    text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400
                                    border border-slate-200 dark:border-slate-700
                                    bg-white dark:bg-slate-800/50
                                    transition-all duration-300
                                    hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600
                                "
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    LinkedIn
                                </span>
                            </a>
                        </div>

                        <div className="hidden md:flex items-center gap-5 ml-auto">
                            {FLOATING_STATS.map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + stat.delay }}
                                    className="text-center"
                                >
                                    <div className="text-xl font-bold text-slate-900 dark:text-white">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Profile Visual Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[280px] sm:min-h-[340px] mt-6 sm:mt-8 lg:mt-10"
                >
                    <div className="relative w-full max-w-[450px] sm:max-w-[540px] aspect-[5/6] flex items-center justify-center">
                        <div className="absolute inset-x-0 top-6 bottom-4 z-0 rounded-[30px] border border-slate-200/80 dark:border-slate-700/60 bg-gradient-to-br from-white/70 to-indigo-50/50 dark:from-slate-900/65 dark:to-slate-800/40 backdrop-blur-md" />
                        {showHero3D && (
                            <div className="absolute inset-x-0 top-6 bottom-4 z-0 overflow-hidden rounded-[30px]">
                                <Suspense fallback={null}>
                                    <Hero3D variant="enterprise" />
                                </Suspense>
                            </div>
                        )}

                        <motion.div
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
                            className="relative z-10 w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 rounded-[28px] isolate group"
                        >
                            <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-indigo-500/70 via-purple-500/65 to-cyan-500/70 opacity-70 blur-sm" />

                            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-indigo-600 via-purple-500 to-cyan-500 p-[2px] shadow-[0_0_50px_rgba(99,102,241,0.25)]">
                                <div className="absolute inset-0 bg-slate-900 dark:bg-slate-950 rounded-[26px] m-[2px] overflow-hidden">
                                    <img
                                        src={profile}
                                        alt="Portrait of Dhivanujan"
                                        className="w-full h-full object-cover opacity-95"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-70">
                <div className="w-5 h-8 border-2 border-slate-600 dark:border-slate-700 rounded-full flex justify-center pt-1.5 relative">
                    <div className="w-1 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_6px_rgba(99,102,241,0.5)]" />
                </div>
            </div>
        </section>
    );
};

export default Hero;

