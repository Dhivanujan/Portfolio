import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import {
    ArrowRight,
    Cloud,
    FileText,
    Github,
    Linkedin,
    Shield,
    Sparkles,
    Braces,
    Zap
} from "lucide-react";
import { Link } from "react-scroll";

import profile from "../assets/Profile.JPG";
const Hero3D = lazy(() => import("./Hero3D"));

// Static data
const HIGHLIGHTS = [
    { text: "AI/ML Delivery", icon: Sparkles, color: "from-violet-500 to-indigo-500" },
    { text: "Cloud Architecture", icon: Cloud, color: "from-cyan-500 to-blue-500" },
    { text: "Secure DevOps", icon: Shield, color: "from-emerald-500 to-teal-500" }
];

const FLOATING_STATS = [
    { value: 50, suffix: "+", label: "Projects", icon: Braces },
    { value: 99, suffix: "%", label: "Uptime", icon: Zap },
    { value: 3, suffix: "+", label: "Years Exp", icon: Sparkles }
];

const ROLES = ["AI Engineer", "Cloud Architect", "DevOps Specialist", "Full-Stack Developer"];

// Constants
const NAV_OFFSET = -88;

// ── Word-by-word stagger animation ──
const headingContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
};

const wordVariant = {
    hidden: { opacity: 0, y: 40, rotateX: -40 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    }
};

// ── Count-up Hook ──
const useCountUp = (target, duration = 2000, startDelay = 500) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const timer = setTimeout(() => {
            const start = performance.now();
            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(eased * target));
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }, startDelay);
        return () => clearTimeout(timer);
    }, [inView, target, duration, startDelay]);

    return { count, ref };
};

// ── Typing Role Animation ──
const RoleTyper = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const role = ROLES[roleIndex];
        const speed = deleting ? 40 : 80;

        if (!deleting && charIndex === role.length) {
            const pause = setTimeout(() => setDeleting(true), 2000);
            return () => clearTimeout(pause);
        }

        if (deleting && charIndex === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
            return;
        }

        const timer = setTimeout(() => {
            setCharIndex((prev) => prev + (deleting ? -1 : 1));
        }, speed);

        return () => clearTimeout(timer);
    }, [charIndex, deleting, roleIndex]);

    return (
        <span className="text-indigo-500 dark:text-indigo-400 font-bold">
            {ROLES[roleIndex].slice(0, charIndex)}
            <span className="animate-pulse text-indigo-400">|</span>
        </span>
    );
};

// ── Stat Card ──
const StatCard = ({ stat, index }) => {
    const { count, ref } = useCountUp(stat.value, 1800, 600 + index * 200);
    const Icon = stat.icon;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6 + index * 0.12, type: "spring", stiffness: 100 }}
            className="
                group relative flex flex-col items-center gap-1.5 px-5 py-4 rounded-2xl
                bg-white/60 dark:bg-white/[0.04]
                border border-slate-200/80 dark:border-white/[0.08]
                backdrop-blur-xl shadow-lg shadow-slate-900/5 dark:shadow-black/20
                hover:border-indigo-400/50 dark:hover:border-indigo-500/30
                hover:shadow-indigo-500/10
                transition-all duration-300 min-w-[90px]
            "
        >
            <Icon className="w-4 h-4 text-indigo-500/70 dark:text-indigo-400/60 mb-0.5" />
            <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {count}{stat.suffix}
            </div>
            <div className="text-[11px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
                {stat.label}
            </div>
        </motion.div>
    );
};

const Hero = () => {
    const [showHero3D, setShowHero3D] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

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

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 20);
        mouseY.set(y * 20);
    };

    const headingWords = ["Crafting", "Intelligent", "&", "Resilient"];

    return (
        <section
            id="hero"
            className="min-h-[100svh] lg:h-screen flex items-center justify-center relative isolate overflow-hidden pt-24 sm:pt-20 md:pt-16 lg:pt-20 pb-10 md:pb-8 lg:pb-6"
            onMouseMove={handleMouseMove}
        >
            {/* ── Layered Background ── */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Soft radial glows */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(ellipse_at_85%_15%,rgba(6,182,212,0.14),transparent_38%),radial-gradient(ellipse_at_50%_85%,rgba(168,85,247,0.12),transparent_45%)]" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                        maskImage:
                            "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%)"
                    }}
                />

                {/* Diagonal accent line */}
                <div className="absolute top-0 right-0 w-[1px] h-[60%] bg-gradient-to-b from-indigo-500/30 via-purple-500/20 to-transparent rotate-[20deg] origin-top-right translate-x-[-40vw]" />
            </div>

            {/* ── Hero Content ── */}
            <motion.div
                className="container mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start lg:items-center relative z-10 w-full max-w-7xl pt-4 sm:pt-2 md:pt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* ── Text Section ── */}
                <div className="flex flex-col items-center lg:items-start lg:justify-center text-center lg:text-left z-10 order-2 lg:order-1">

                    {/* Status badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="
                            mb-5 inline-flex items-center gap-3 px-5 py-2.5 rounded-full
                            border border-indigo-500/20 dark:border-indigo-400/15
                            bg-white/70 dark:bg-white/[0.04]
                            backdrop-blur-xl shadow-lg shadow-indigo-500/5
                        "
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                            <span className="absolute inline-flex h-[150%] w-[150%] -top-[25%] -left-[25%] rounded-full bg-emerald-400/20 animate-pulse" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                        </span>
                        <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Available for new opportunities
                        </span>
                    </motion.div>

                    {/* ── Cinematic Heading ── */}
                    <motion.h1
                        variants={headingContainer}
                        initial="hidden"
                        animate="visible"
                        className="
                            text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem]
                            font-heading font-bold tracking-tight
                            mb-2 sm:mb-3 leading-[1.12]
                            perspective-1000
                        "
                    >
                        <span className="flex flex-wrap justify-center lg:justify-start gap-x-3">
                            {headingWords.map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordVariant}
                                    className={
                                        i < 2
                                            ? "bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300"
                                            : "bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-slate-300 dark:to-slate-400"
                                    }
                                    style={{ display: "inline-block" }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </span>

                        <motion.span
                            variants={wordVariant}
                            className="relative inline-block mt-1"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 heading-glow animate-text-shimmer bg-[length:200%_100%]">
                                Systems
                            </span>
                            <span className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 animate-shimmer bg-[length:200%_100%]" />
                        </motion.span>
                    </motion.h1>

                    {/* ── Role Typer ── */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-5 h-9"
                    >
                        <RoleTyper />
                    </motion.div>

                    {/* ── Description ── */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-5 sm:mb-6 leading-relaxed"
                    >
                        Specializing in{" "}
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold">AI/ML</span>,{" "}
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">Cloud</span>, and{" "}
                        <span className="text-cyan-600 dark:text-cyan-400 font-semibold">DevOps</span>{" "}
                        engineering. I build production-ready systems that scale, secure, and
                        deliver measurable business impact.
                    </motion.p>

                    {/* ── Highlight Pills ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.55 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6"
                    >
                        {HIGHLIGHTS.map((item, idx) => (
                            <motion.span
                                key={item.text}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.55 + idx * 0.1 }}
                                className="
                                    group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                                    bg-white/80 dark:bg-white/[0.04]
                                    border border-slate-200 dark:border-white/[0.08]
                                    text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200
                                    shadow-sm hover:shadow-lg
                                    transition-all duration-300
                                    hover:-translate-y-0.5
                                    hover:border-indigo-300 dark:hover:border-indigo-500/40
                                "
                            >
                                <span className={`p-1 rounded-lg bg-gradient-to-br ${item.color} shadow-sm`}>
                                    <item.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                                </span>
                                {item.text}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* ── CTA Buttons ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={NAV_OFFSET}
                            className="
                                group relative inline-flex items-center justify-center px-7 py-3.5
                                text-white font-semibold focus:outline-none cursor-pointer rounded-xl
                                overflow-hidden isolate
                                transition-all duration-300
                            "
                        >
                            {/* Animated gradient bg */}
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_100%] animate-gradient rounded-xl" />
                            {/* Shine sweep */}
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            </span>
                            {/* Shadow */}
                            <span className="absolute inset-0 rounded-xl shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-500/50 transition-shadow duration-300" />
                            <span className="relative flex items-center tracking-wide text-sm">
                                Explore My Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="
                                group relative inline-flex items-center justify-center px-7 py-3.5
                                font-semibold rounded-xl overflow-hidden isolate
                                text-slate-700 dark:text-slate-200
                                transition-all duration-300
                            "
                        >
                            {/* Rotating gradient border */}
                            <span className="absolute inset-0 rounded-xl p-[2px] hero-rotating-border">
                                <span className="absolute inset-[2px] rounded-[10px] bg-white dark:bg-slate-900 transition-colors duration-300" />
                            </span>
                            <span className="relative flex items-center text-sm tracking-wide">
                                <FileText className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                                Get Resume
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* ── Profile Visual Section ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[280px] sm:min-h-[360px] mt-6 sm:mt-8 lg:mt-10"
                >
                    <motion.div
                        style={{ x: springX, y: springY }}
                        className="relative w-full max-w-[480px] sm:max-w-[560px] aspect-[5/6] flex items-center justify-center"
                    >
                        {/* Morphing Blob Background */}
                        <div className="absolute inset-[-10%] hero-blob opacity-60 dark:opacity-40" />

                        {/* 3D Background */}
                        <div className="absolute inset-x-0 top-4 bottom-2 z-0 rounded-[34px] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-indigo-50/40 dark:from-slate-900/60 dark:to-slate-800/40 backdrop-blur-sm rounded-[34px] border border-slate-200/50 dark:border-slate-700/40" />
                            {showHero3D && (
                                <Suspense fallback={null}>
                                    <Hero3D variant="enterprise" />
                                </Suspense>
                            )}
                        </div>

                        {/* Floating Decoration Dots */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-8 right-8 w-3 h-3 rounded-full bg-indigo-500/40 blur-[1px] z-20"
                        />
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-16 left-8 w-2.5 h-2.5 rounded-full bg-purple-500/40 blur-[1px] z-20"
                        />
                        <motion.div
                            animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/3 left-4 w-2 h-2 rounded-full bg-cyan-500/40 blur-[1px] z-20"
                        />

                        {/* Profile Photo with Rotating Gradient Border */}
                        <motion.div
                            initial={{ scale: 0.88, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
                            className="relative z-10 w-48 h-56 sm:w-56 sm:h-64 md:w-64 md:h-72 rounded-[28px] isolate group"
                        >
                            {/* Rotating gradient glow */}
                            <div className="absolute -inset-1.5 rounded-[32px] hero-rotating-border opacity-80 blur-[2px]" />

                            {/* Inner rotating border */}
                            <div className="absolute -inset-0.5 rounded-[30px] hero-rotating-border">
                                <div className="absolute inset-[2px] bg-slate-900 dark:bg-slate-950 rounded-[28px] overflow-hidden">
                                    <img
                                        src={profile}
                                        alt="Portrait of Dhivanujan"
                                        className="w-full h-full object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* ── Scroll Indicator ── */}
            <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-60">
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-9 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                </motion.div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-medium">
                    Scroll
                </span>
            </div>
        </section>
    );
};

export default Hero;
