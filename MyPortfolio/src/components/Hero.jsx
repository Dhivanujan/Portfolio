import { motion, useMotionValue, useTransform, useScroll, useSpring } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Hero3D from "./Hero3D";
import profile from "../assets/Profile.JPG";

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
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

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
            {/* Subtle gradient background accents */}
            <motion.div 
                style={{ y: y1 }}
                className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/[0.08] rounded-full blur-[120px] pointer-events-none"
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
                        className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2 mr-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-[13px] font-medium text-indigo-400 tracking-wide">Available for opportunities</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-4 leading-[1.1]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-100 to-slate-300">
                             Software
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600">
                            Engineer
                        </span>
                    </motion.h1>

                    {/* Clear value proposition */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg md:text-xl text-slate-300 max-w-lg mb-8 leading-relaxed font-light"
                    >
                        Building scalable web applications with modern technologies and clean, maintainable code
                    </motion.p>


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
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-white transition-all duration-300 bg-indigo-600 hover:bg-indigo-500 font-medium focus:outline-none cursor-pointer rounded-lg shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30"
                        >
                            <span className="relative flex items-center tracking-wide text-sm">
                                View Projects 
                                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </Link>
                        
                        <a 
                            href="#" 
                            download
                            className="group inline-flex items-center justify-center px-8 py-4 text-slate-300 hover:text-white transition-all duration-300 font-medium border border-slate-700 hover:border-slate-600 bg-slate-800/50 hover:bg-slate-800 rounded-lg"
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
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 p-3 border border-slate-700 bg-slate-800/50 rounded-lg hover:shadow-lg hover:border-slate-600">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-all duration-300 hover:scale-110 p-3 border border-slate-700 bg-slate-800/50 rounded-lg hover:shadow-lg hover:border-indigo-600">
                            <Linkedin className="h-5 w-5" />
                        </a>
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
                        {/* Subtle glow effects */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/[0.06] rounded-full blur-[80px]"></div>
                        
                        {/* 3D Background Element */}
                        <div className="absolute inset-0 z-0 scale-100 opacity-80">
                            <Hero3D />
                        </div>

                        {/* Profile Image - Optional */}
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
                            className="relative z-10 w-60 h-60 md:w-72 md:h-72 rounded-full isolate"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-[2px] shadow-[0_0_30px_rgba(99,102,241,0.15)]">
                                <div className="absolute inset-0 bg-obsidian rounded-full m-[2px] overflow-hidden">
                                     <img 
                                        src="/assets/Profile.JPG" 
                                        alt="Profile" 
                                        className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
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

