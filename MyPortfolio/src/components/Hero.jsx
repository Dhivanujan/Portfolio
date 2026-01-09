import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import Hero3D from "./Hero3D";

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [0, window.innerHeight], [5, -5]); // Reduced rotation for 3D canvas
    const rotateY = useTransform(x, [0, window.innerWidth], [-5, 5]);

    const [text, setText] = useState("");
    const fullText = "Full Stack Developer";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText[index]);
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    function handleMouse(event) {
        x.set(event.clientX);
        y.set(event.clientY);
    }

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-0"
            onMouseMove={handleMouse}
        >
            <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full max-w-7xl">
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse shadow-[0_0_8px_#22d3ee] mr-2"></span>
                        <span className="text-sm font-medium text-neon-blue tracking-wide">Available for freelance</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6 leading-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-400">
                             Creative
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradient-x drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                            Developer
                        </span>
                    </motion.h1>

                    <motion.div
                        className="h-8 mb-8 text-xl md:text-2xl font-mono text-neon-blue/90 flex items-center justify-center lg:justify-start"
                    >
                        <Terminal className="w-5 h-5 mr-3" />
                        <span>I build </span>
                        <span className="ml-2 font-bold text-text-primary">{text}</span>
                        <span className="animate-pulse ml-1 text-neon-purple">_</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-lg md:text-xl text-text-secondary max-w-lg mb-10 leading-relaxed font-light text-shadow-sm"
                    >
                        Crafting scalable, accessible, and user-centric digital experiences. I transform complex problems into elegant code.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="relative inline-flex group items-center justify-center px-8 py-4 text-white transition-all duration-200 bg-transparent font-pj focus:outline-none cursor-pointer"
                        >
                            <div className="absolute inset-0 w-full h-full rounded-xl bg-neon-blue/10 border border-neon-blue/20 backdrop-blur-md transition-all duration-300 group-hover:bg-neon-blue/20 group-hover:border-neon-blue/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]" />
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl opacity-20 blur transition-all duration-300 group-hover:opacity-40 group-hover:blur-md" />
                            
                            <span className="relative flex items-center font-bold tracking-wide">
                                View Projects 
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>
                        
                        <div className="flex items-center gap-6 mt-6 sm:mt-0 sm:ml-4">
                             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 p-4 glass-panel rounded-full hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:border-white/40 group">
                                <Github className="h-6 w-6 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-blue transition-all duration-300 hover:scale-110 p-4 glass-panel rounded-full hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:border-neon-blue/40 group">
                                <Linkedin className="h-6 w-6 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
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
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[80px] animate-pulse-slow"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[60px] animate-spin-slow"></div>
                        
                        {/* 3D Background Element */}
                        <div className="absolute inset-0 z-0 scale-100 opacity-80 pointer-events-none">
                            <Hero3D />
                        </div>

                        {/* Profile Image - Cleaner Integration */}
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
                            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full isolate"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple p-[2px] shadow-[0_0_40px_rgba(168,85,247,0.3)]">
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
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute right-4 md:-right-4 bottom-20 z-30 glass-panel p-4 rounded-2xl border-l-4 border-l-neon-blue"
                        >
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Experience</p>
                                    <p className="text-2xl font-bold text-white">5+ Years</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


export default Hero;

