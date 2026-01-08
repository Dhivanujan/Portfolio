import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [0, window.innerHeight], [10, -10]);
    const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);

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
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 perspective-1000"
            onMouseMove={handleMouse}
        >
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full max-w-7xl">
                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-neon-blue/30 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                    >
                        <span className="text-sm font-medium text-neon-blue">Available for work</span>
                        <span className="ml-2 w-2 h-2 bg-neon-blue rounded-full animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
                    </motion.div>

                    <motion.h1
                        style={{ rotateX, rotateY, z: 50 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-5xl md:text-8xl font-heading font-extrabold tracking-tight mb-6 preserve-3d"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 drop-shadow-xl">
                             Hi, I'm <br />
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradient-x drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            John Doe
                        </span>
                    </motion.h1>

                    <motion.div
                        className="h-8 mb-8 text-xl md:text-2xl font-mono text-neon-blue/80 flex items-center"
                    >
                        <Terminal className="w-5 h-5 mr-2" />
                        <span>{text}</span>
                        <span className="animate-pulse ml-1">|</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed"
                    >
                        Specializing in building exceptional digital experiences. Currently focused on building accessible, human-centered products at <span className="text-neon-purple">TechCorp</span>.
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
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-neon-blue/10 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-blue border border-neon-blue/50 hover:bg-neon-blue/20 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
                        >
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                            <span className="relative flex items-center">
                                View Projects
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        
                        <div className="flex items-center gap-6 mt-4 sm:mt-0 sm:ml-4">
                             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white hover:scale-110 transition-all p-2 glass-panel rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-neon-blue hover:scale-110 transition-all p-2 glass-panel rounded-full hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* 3D Object / Profile Image */}
                <motion.div
                    style={{ rotateX, rotateY, z: 50 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-1 md:order-2 flex justify-center perspective-1000"
                >
                    <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] preserve-3d">
                        {/* Decorative background elements */}
                        <div className="absolute inset-4 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-[2rem] blur-xl animate-pulse-slow"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-pink rounded-[2.5rem] opacity-30 blur-lg animate-spin-slow"></div>
                        
                        {/* Glass Container */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                             {/* Overlay for depth */}
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian/80 z-20"></div>
                             
                             <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                                alt="Profile" 
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div 
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 bottom-12 z-30 bg-obsidian/80 backdrop-blur-md border border-neon-purple/50 p-4 rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-neon-purple/20 rounded-lg">
                                    <Terminal className="w-6 h-6 text-neon-purple" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">Experience</p>
                                    <p className="text-lg font-bold text-white">5+ Years</p>
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

