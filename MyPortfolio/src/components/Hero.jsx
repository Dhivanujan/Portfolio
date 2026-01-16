import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, FileText, CheckCircle2 } from "lucide-react";
import Hero3D from "./Hero3D";
import profile from "../assets/Profile.JPG";

const highlights = [
    "AI/ML delivery", 
    "Cloud-first systems", 
    "Secure DevOps"
];

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Scroll-based parallax
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

    const rotateX = useTransform(y, [0, window.innerHeight], [5, -5]);
    const rotateY = useTransform(x, [0, window.innerWidth], [-5, 5]);
    
    function handleMouse(event) {
        x.set(event.clientX);
        y.set(event.clientY);
    }

    return (
        <section
            id="hero"
            className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-28 md:pt-20"
            onMouseMove={handleMouse}
        >
            {/* Subtle gradient background accents */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/[0.08] rounded-full blur-[120px] pointer-events-none"
            />
            
            <motion.div 
                style={{ opacity, scale }}
                className="container mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10 w-full max-w-6xl pt-6 md:pt-0"
            >
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/25 bg-indigo-500/[0.08] backdrop-blur-md shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-[13px] font-semibold text-indigo-500 dark:text-indigo-300 tracking-wide">Open for impactful roles</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-heading font-bold tracking-tight mb-6 leading-[1.08]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-slate-100 dark:to-slate-300">
                            Building intelligent, resilient platforms
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 dark:from-indigo-400 dark:via-indigo-500 dark:to-indigo-600 heading-glow">
                            AI • Cloud • DevOps • Networking
                        </span>
                    </motion.h1>

                    {/* Professional summary - senior-level positioning */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-7 leading-relaxed font-normal"
                    >
                        Designing <strong className="text-slate-900 dark:text-white font-semibold">human-centered systems</strong> that blend AI, networking, and cloud-native engineering. I orchestrate automation, observability, and security so teams can ship faster with confidence.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.22, duration: 0.55 }}
                        className="flex flex-wrap items-center gap-3 mb-8"
                    >
                        {highlights.map((item) => (
                            <span key={item} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[13px] font-semibold text-slate-700 dark:text-slate-200 shadow-sm">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                {item}
                            </span>
                        ))}
                    </motion.div>


                    {/* Primary and Secondary CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-white transition-all duration-300 bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-600 dark:hover:bg-indigo-500 font-semibold focus:outline-none cursor-pointer rounded-lg shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 hover:scale-[1.02]"
                        >
                            <span className="relative flex items-center tracking-wide text-sm">
                                View Projects 
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>
                        
                        <a 
                            href="/resume.pdf" 
                            download
                            className="group inline-flex items-center justify-center px-8 py-4 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 font-semibold border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg shadow-sm hover:shadow-md"
                        >
                            <FileText className="mr-2 w-4 h-4" />
                            <span className="text-sm tracking-wide">Download Resume</span>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex items-center gap-4 mt-8"
                    >
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-300 hover:scale-110 p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-lg hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110 p-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 rounded-lg hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </motion.div>
                </div>

                {/* 3D Object */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[420px]"
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                >
                    <div className="relative w-full max-w-[520px] aspect-[5/6] flex items-center justify-center">
                        {/* Subtle glow effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/[0.06] rounded-full blur-[80px]"></div>
                        
                        {/* 3D Background Element */}
                        <div className="absolute inset-0 z-0 scale-100 opacity-80">
                            <Hero3D />
                        </div>

                        {/* Profile Image - Optional */}
                        <motion.div 
                            initial={{ scale: 0.92, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 80 }}
                            className="relative z-10 w-60 h-72 md:w-72 md:h-80 rounded-[28px] isolate"
                        >
                            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-indigo-600 to-indigo-400 p-[2px] shadow-[0_0_34px_rgba(99,102,241,0.16)]">
                                <div className="absolute inset-0 bg-obsidian rounded-[24px] m-[2px] overflow-hidden">
                                     <img 
                                        src={profile} 
                                        alt="Portrait of Dhivanujan" 
                                        className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>
                            </div>
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

