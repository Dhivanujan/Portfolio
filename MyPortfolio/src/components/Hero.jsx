import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Terminal, Cloud, Shield } from "lucide-react";
import { Link } from "react-scroll";

import profile from "../assets/Profile.JPG";

// Constants
const NAV_OFFSET = -88;

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-[100svh] lg:h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-20 md:pt-16 lg:pt-20 pb-10 md:pb-8 lg:pb-6 bg-slate-50 dark:bg-slate-950"
        >
            {/* Subtle Gradient Background - Static & Professional */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 w-full max-w-7xl">
                
                {/* Left Column: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="order-2 lg:order-1 text-center lg:text-left"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-indigo-200 dark:border-indigo-900 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 mb-6"
                    >
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Available for new opportunities
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-6">
                        Building Scalable <br className="hidden lg:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                            Cloud & AI Solutions
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                        I bridge the gap between complex AI models and production infrastructure. 
                        My focus is on designing secure, cost-effective, and automated systems that drive real business value.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                        {[
                            { icon: Terminal, text: "AI Engineering" },
                            { icon: Cloud, text: "Cloud Architecture" },
                            { icon: Shield, text: "DevSecOps" }
                        ].map((skill, idx) => (
                            <div key={idx} className="flex items-center px-4 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-sm font-medium text-slate-700 dark:text-slate-300">
                                <skill.icon className="w-4 h-4 mr-2 text-indigo-500" />
                                {skill.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={NAV_OFFSET}
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm cursor-pointer hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            View Projects
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-transparent text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:-translate-y-0.5"
                        >
                            <FileText className="mr-2 w-4 h-4" />
                            Download Resume
                        </a>
                    </div>

                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-5 text-slate-500 dark:text-slate-400">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    <div className="relative">
                        {/* Decorative background element behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-[2rem] blur-xl opacity-75 dark:opacity-50"></div>
                        
                        <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border border-white/50 dark:border-slate-700 shadow-2xl bg-white dark:bg-slate-800">
                            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-900 animate-pulse" /> {/* Placeholder while loading if needed */}
                            <img
                                src={profile}
                                alt="Dhivanujan - AI Engineer"
                                className="relative w-full h-full object-cover z-10 hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay gradient for better text contrast if we had text over image, but looks nice for polish */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent z-20 pointer-events-none"></div>
                        </div>

                        {/* Floating Badge - Experience */}
                        <div className="absolute -bottom-6 -left-6 z-30 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                                3+
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Experience</span>
                                <span className="text-sm font-bold text-slate-900 dark:text-white">Years Working</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
