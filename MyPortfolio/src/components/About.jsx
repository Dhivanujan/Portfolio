import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Section from "./Section";
import { Code2, Cpu, Globe, Rocket, Sparkles, ArrowRight } from "lucide-react";

// 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
    
    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / rect.width - 0.5;
        const yPct = mouseY / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };
    
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <Section id="about" className="relative">
            <div ref={ref} className="max-w-6xl mx-auto">
                 <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Get to know me</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-indigo-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* 3D Glass Card with Tilt Effect */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="perspective-1000"
                    >
                        <TiltCard className="relative group cursor-default">
                            {/* Animated gradient border */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-indigo-500 to-indigo-400 rounded-2xl opacity-20 group-hover:opacity-50 blur-sm transition-all duration-700" />
                            
                            <div 
                                className="glass-card p-8 rounded-2xl relative border border-white/[0.08] shadow-2xl overflow-hidden"
                                style={{ transform: "translateZ(50px)" }}
                            >
                                {/* Floating particles effect */}
                                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Sparkles className="w-20 h-20 text-primary" />
                                </div>
                                
                                {/* Spotlight effect on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_50%)]" />
                                </div>
                                
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/15 to-indigo-500/15 border border-white/[0.08]">
                                        <Code2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary">Engineering with Passion</h3>
                                </div>
                                
                                <p className="text-text-secondary mb-5 leading-relaxed">
                                    I am a results-oriented Software Engineer with a deep understanding of core computer science principles and a passion for building scalable, efficient systems. My journey in tech is driven by curiosity to solve complex problems.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    With strong foundations in <strong className="text-indigo-400 font-semibold">C, Java, and Python</strong>, I have expanded my expertise to modern web technologies, specializing in the <strong className="text-primary font-semibold">MERN stack</strong>. I don't just write code; I design solutions.
                                </p>
                                
                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-indigo-500 to-indigo-400 opacity-30" />
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 gap-5"
                    >
                        {[
                            { icon: Globe, title: "Web Development", desc: "Building responsive, modern web applications with cutting-edge frameworks.", color: "text-primary", gradient: "from-primary to-indigo-400" },
                            { icon: Cpu, title: "System Architecture", desc: "Designing scalable and efficient backend systems for high-performance needs.", color: "text-indigo-400", gradient: "from-indigo-400 to-indigo-600" },
                            { icon: Rocket, title: "Innovation", desc: "Exploring AI and Machine Learning to create smarter software solutions.", color: "text-indigo-300", gradient: "from-indigo-300 to-indigo-500" }
                        ].map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ 
                                    x: 8, 
                                    scale: 1.01,
                                    transition: { type: "spring", stiffness: 400, damping: 17 }
                                }}
                                className="group flex items-start p-5 rounded-xl transition-all duration-300 border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02] backdrop-blur-sm shadow-md hover:shadow-xl hover:shadow-black/10 relative overflow-hidden"
                            >
                                {/* Hover gradient background */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500`} />
                                
                                {/* Icon with gradient background */}
                                <div className={`relative p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10 mr-4 group-hover:scale-105 transition-transform duration-300 shadow-md`}>
                                    <feature.icon className="w-5 h-5 text-white" />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-lg opacity-15 blur-md -z-10`} />
                                </div>
                                
                                <div className="relative z-10">
                                    <h4 className={`text-lg font-bold text-text-primary mb-1.5 group-hover:${feature.color} transition-colors duration-300`}>{feature.title}</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                                
                                {/* Subtle arrow indicator */}
                                <motion.div 
                                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-40 transition-opacity"
                                    initial={{ x: -10 }}
                                    whileHover={{ x: 0 }}
                                >
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
