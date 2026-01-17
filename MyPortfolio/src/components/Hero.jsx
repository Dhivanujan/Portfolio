import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, FileText, Sparkles, Zap, Shield, Cloud } from "lucide-react";
import Hero3D from "./Hero3D";
import profile from "../assets/Profile.JPG";

const highlights = [
    { text: "AI/ML Delivery", icon: Sparkles },
    { text: "Cloud Architecture", icon: Cloud },
    { text: "Secure DevOps", icon: Shield }
];

const floatingStats = [
    { value: "50+", label: "Projects", delay: 0 },
    { value: "99%", label: "Uptime", delay: 0.1 },
    { value: "3+", label: "Years Exp", delay: 0.2 }
];

const Hero = () => {
    // Scroll-based parallax
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-20"
        >
            {/* Animated gradient orbs */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/10 rounded-full blur-[100px] pointer-events-none"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-indigo-500/10 rounded-full blur-[100px] pointer-events-none"
                animate={{ 
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Decorative grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            
            <motion.div 
                style={{ opacity, scale }}
                className="container mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full max-w-6xl pt-6 md:pt-0"
            >
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
                    {/* Animated status badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-xl shadow-lg shadow-indigo-500/5"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Available for new opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-6xl font-heading font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-100 dark:to-slate-300">
                            Crafting Intelligent
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400">
                            & Resilient
                        </span>{" "}
                        <span className="relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 heading-glow">
                                Systems
                            </span>
                            <motion.span 
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Professional summary */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-xl mb-8 leading-relaxed"
                    >
                        Specializing in <span className="text-indigo-600 dark:text-indigo-400 font-semibold">AI/ML</span>, <span className="text-purple-600 dark:text-purple-400 font-semibold">Cloud</span>, and <span className="text-cyan-600 dark:text-cyan-400 font-semibold">DevOps</span> engineering. I build production-ready systems that scale, secure, and deliver measurable business impact.
                    </motion.p>

                    {/* Highlight chips with icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.55 }}
                        className="flex flex-wrap items-center gap-3 mb-8"
                    >
                        {highlights.map((item, idx) => (
                            <motion.span 
                                key={item.text} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <item.icon className="w-4 h-4 text-indigo-500 group-hover:scale-110 transition-transform" />
                                {item.text}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 font-semibold focus:outline-none cursor-pointer rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:scale-[1.02] overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <span className="relative flex items-center tracking-wide text-sm">
                                Explore My Work
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>
                        
                        <a 
                            href="/resume.pdf" 
                            download
                            className="group inline-flex items-center justify-center px-8 py-4 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 bg-white/80 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-xl shadow-sm hover:shadow-lg backdrop-blur-sm"
                        >
                            <FileText className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span className="text-sm tracking-wide">Get Resume</span>
                        </a>
                    </motion.div>

                    {/* Social Links & Stats Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.6 }}
                        className="flex items-center gap-6 mt-10 pt-8 border-t border-slate-200 dark:border-slate-800 w-full"
                    >
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group relative text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-300 p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-xl hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-1">
                                <Github className="h-5 w-5" />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group relative text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-xl hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600 hover:-translate-y-1">
                                <Linkedin className="h-5 w-5" />
                                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                            </a>
                        </div>
                        
                        {/* Mini Stats */}
                        <div className="hidden sm:flex items-center gap-6 ml-auto">
                            {floatingStats.map((stat, idx) => (
                                <motion.div 
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + stat.delay }}
                                    className="text-center"
                                >
                                    <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Visual Effects & Profile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[420px]"
                >
                    <div className="relative w-full max-w-[520px] aspect-[5/6] flex items-center justify-center">
                        {/* Animated Background Effects */}
                        <div className="absolute inset-0 z-0">
                            <Hero3D />
                        </div>

                        {/* Profile Image */}
                        <motion.div 
                            initial={{ scale: 0.92, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
                            className="relative z-10 w-60 h-72 md:w-72 md:h-80 rounded-[28px] isolate group"
                        >
                            {/* Animated border glow */}
                            <motion.div 
                                className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-60 blur-sm group-hover:opacity-80 transition-opacity duration-500"
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    backgroundSize: "200% 200%",
                                }}
                            />
                            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-indigo-600 to-purple-500 p-[2px] shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                                <div className="absolute inset-0 bg-slate-900 dark:bg-slate-950 rounded-[26px] m-[2px] overflow-hidden">
                                    <img 
                                        src={profile} 
                                        alt="Portrait of Dhivanujan" 
                                        className="w-full h-full object-cover opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            
                            {/* Floating accent dots */}
                            <motion.div 
                                className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg shadow-indigo-500/30"
                                animate={{ y: [-5, 5, -5], scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div 
                                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/30"
                                animate={{ y: [5, -5, 5], scale: [1, 1.15, 1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
            
            {/* Scroll indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-slate-500 tracking-widest uppercase font-medium">Scroll</span>
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center pt-1.5"
                >
                    <motion.div className="w-1 h-1.5 bg-slate-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};


export default Hero;

