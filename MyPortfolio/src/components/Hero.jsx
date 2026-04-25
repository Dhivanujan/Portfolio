import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Terminal, Cloud, Shield, Leaf } from "lucide-react";
import { Link } from "react-scroll";

import profile from "../assets/Profile.JPG";

// Constants
const NAV_OFFSET = -88;

// Animation variants — single-pass, no infinite loops
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: "blur(3px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.88 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const SKILLS = [
    { icon: Terminal, text: "AI Engineering" },
    { icon: Cloud, text: "Cloud Architecture" },
    { icon: Shield, text: "DevSecOps" },
];

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-[100svh] flex items-center justify-center relative overflow-hidden pt-24 sm:pt-20 md:pt-16 lg:pt-20 pb-10 md:pb-8 lg:pb-6"
        >
            {/* Lightweight mesh gradient — CSS only, no GPU render loop */}
            <div
                className="hero-mesh absolute w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
            />

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-3xl mx-auto"
            >
                {/* ── Profile Image with Rotating Ring ── */}
                <motion.div variants={scaleIn} className="mb-8">
                    <div className="hero-avatar-ring p-[3px] rounded-full">
                        <div className="rounded-full p-[3px] bg-white dark:bg-[#020205]">
                            <img
                                src={profile}
                                alt="Dhivanujan — AI Engineer"
                                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
                                width="128"
                                height="128"
                                loading="eager"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* ── Eco Badge — unique green software identifier ── */}
                <motion.div variants={itemVariants} className="mb-4">
                    <span className="eco-badge">
                        <Leaf className="w-4 h-4" />
                        Eco-Friendly Portfolio — Built with Green Software Principles
                    </span>
                </motion.div>

                {/* ── Status Badge ── */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Available for new opportunities
                </motion.div>

                {/* ── Heading ── */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5"
                >
                    Building Scalable{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-500 to-emerald-500 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 animate-text-shimmer bg-[length:200%_100%]">
                        Cloud & AI Solutions
                    </span>
                </motion.h1>

                {/* ── Subtitle with typing effect ── */}
                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8"
                >
                    <span className="typing-cursor">
                        I bridge the gap between complex AI models and production infrastructure —
                        designing secure, cost-effective, and automated systems that drive real business value
                    </span>
                </motion.p>

                {/* ── Skill Pills ── */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-2.5 mb-10"
                >
                    {SKILLS.map((skill, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-slate-700/60 backdrop-blur-sm text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all duration-300"
                        >
                            <skill.icon className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                            {skill.text}
                        </div>
                    ))}
                </motion.div>

                {/* ── CTA Buttons ── */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 mb-10"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={NAV_OFFSET}
                        className="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm cursor-pointer hover:bg-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                    >
                        View Projects
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm"
                    >
                        <FileText className="mr-2 w-4 h-4" />
                        Download Resume
                    </a>
                </motion.div>

                {/* ── Social Links ── */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-4"
                >
                    {[
                        { href: "https://github.com/Dhivanujan", label: "GitHub", Icon: Github },
                        { href: "https://www.linkedin.com/in/dhivanujan-nesiah-a56a94240/", label: "LinkedIn", Icon: Linkedin },
                    ].map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="p-2.5 rounded-full text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all duration-300 hover:scale-110"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
