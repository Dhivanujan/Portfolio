import { motion, useMotionValue, useTransform, useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, Terminal, Download } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Hero3D from "./Hero3D";

// Text reveal animation variants
const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.03, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }
    })
};

const Hero = () => {
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Scroll-based parallax
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

    const rotateX = useTransform(y, [0, window.innerHeight], [5, -5]);
    const rotateY = useTransform(x, [0, window.innerWidth], [-5, 5]);
    
    // Smooth spring physics for mouse movement
    const springConfig = { stiffness: 100, damping: 30 };
    const mouseXSpring = useSpring(x, springConfig);
    const mouseYSpring = useSpring(y, springConfig);

    const [text, setText] = useState("");
    const fullText = "Full Stack Developer";
    const [index, setIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 80);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    function handleMouse(event) {
        x.set(event.clientX);
        y.set(event.clientY);
    }

    return (
        <section
            ref={containerRef}
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-0"
            onMouseMove={handleMouse}
        >
            {/* Animated gradient orbs */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"
            />
            
            <motion.div 
                style={{ opacity, scale }}
                className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full max-w-7xl pt-10 md:pt-0"
            >
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/[0.05] backdrop-blur-md shadow-lg"
                    >
                        <span className="relative flex h-2 w-2 mr-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-[13px] font-medium text-primary/90 tracking-wide">Available for opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-100 to-slate-300">
                             Creative
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-400 to-violet-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.25)]">
                            Developer
                        </span>
                    </motion.h1>

                    <motion.div
                        className="h-8 mb-8 text-lg md:text-xl font-mono text-primary/80 flex items-center justify-center lg:justify-start"
                    >
                        <Terminal className="w-4 h-4 mr-2.5" />
                        <span className="text-slate-400">I build </span>
                        <span className="ml-2 font-semibold text-slate-100">{text}</span>
                        <span className="animate-pulse ml-0.5 text-primary">_</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-base md:text-lg text-slate-400 max-w-lg mb-10 leading-relaxed"
                    >
                        Crafting scalable, accessible, and user-centric digital experiences with clean, maintainable code.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="relative inline-flex group items-center justify-center px-8 py-3.5 text-white transition-all duration-200 bg-transparent font-medium focus:outline-none cursor-pointer"
                        >
                            <div className="absolute inset-0 w-full h-full rounded-full bg-primary border border-primary/20 transition-all duration-300 group-hover:bg-primary/90 group-hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]" />
                            
                            <span className="relative flex items-center tracking-wide text-sm">
                                View Projects 
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>
                        
                        <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-2">
                             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 p-3.5 border border-white/[0.06] bg-white/[0.03] rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:border-white/[0.15] group">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all duration-300 hover:scale-110 p-3.5 border border-white/[0.06] bg-white/[0.03] rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-primary/30 group">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* 3D Object */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-1 lg:order-2 flex justify-center items-center h-full min-h-[400px]"
                >
                    <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
                        {/* Refined Glow effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/[0.08] rounded-full blur-[70px] animate-pulse-slow"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-primary/[0.08] rounded-full blur-[50px] animate-spin-slow"></div>
                        
                        {/* 3D Background Element */}
                        <div className="absolute inset-0 z-0 scale-100 opacity-70">
                            <Hero3D />
                        </div>

                        {/* Profile Image - Cleaner Integration */}
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
                            className="relative z-10 w-60 h-60 md:w-72 md:h-72 rounded-full isolate"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-indigo-400 p-[2px] shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                <div className="absolute inset-0 bg-obsidian rounded-full m-[2px] overflow-hidden">
                                     <img 
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                                        alt="Profile" 
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Badge - More minimal */}
                        <motion.div 
                            animate={{ y: [-8, 8, -8] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute right-4 md:-right-2 bottom-20 z-30 glass-panel px-5 py-3 rounded-xl border-l-2 border-l-primary/60 shadow-lg"
                        >
                            <div className="flex items-center gap-2.5">
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Experience</p>
                                    <p className="text-xl font-bold text-white">5+ Years</p>
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
                <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center pt-1.5"
                >
                    <motion.div className="w-1 h-1.5 bg-slate-500 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};


export default Hero;

