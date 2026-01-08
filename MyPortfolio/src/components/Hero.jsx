import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Animations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-[600px] h-[600px] bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm"
                    >
                        <span className="text-sm font-medium text-muted-foreground">Available for work</span>
                        <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                             Simplicity
                        </span>
                        <br />
                        <span className="text-foreground">in Code.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-muted-foreground max-w-lg mb-10"
                    >
                        I'm a Software Engineer specializing in building scalable systems and intuitive interfaces suitable for high-growth environments.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="cursor-pointer inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 group"
                        >
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-4">
                             <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative order-1 md:order-2 flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Decorative Circle Behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                             {/* Placeholder URL - User will update this */}
                             <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                                alt="Profile" 
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-xl border border-border animate-bounce duration-[3000ms]">
                             <div className="flex items-center gap-3">
                                 <div className="p-2 bg-green-500/10 rounded-lg">
                                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                 </div>
                                 <div className="text-sm">
                                     <p className="font-bold">Open to Work</p>
                                     <p className="text-xs text-muted-foreground">Remote / Hybrid</p>
                                 </div>
                             </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
