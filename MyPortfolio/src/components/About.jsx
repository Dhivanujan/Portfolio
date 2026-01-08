import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import { Code2, Cpu, Globe, Rocket } from "lucide-react";

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
                    <span className="text-neon-purple font-medium tracking-wider uppercase text-sm">Get to know me</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* 3D Glass Card Effect */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="relative group perspective-1000"
                    >
                        <div className="relative transform-style-3d transition-transform duration-700 group-hover:rotate-y-12">
                             <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple to-neon-blue rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                             <div className="glass-card p-8 rounded-2xl relative bg-obsidian/80 border border-white/10">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Code2 size={120} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">Engineering with Passion</h3>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    I am a results-oriented Software Engineer with a deep understanding of core computer science principles and a passion for building scalable, efficient systems. My journey in tech is driven by a curiosity to solve complex problems.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    With strong foundations in <strong className="text-neon-blue">C, Java, and Python</strong>, I have expanded my expertise to modern web technologies, specializing in the <strong className="text-neon-purple">MERN stack</strong>. I don't just write code; I design solutions.
                                </p>
                             </div>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 gap-6"
                    >
                        {[
                            { icon: Globe, title: "Web Development", desc: "Building responsive, modern web applications with cutting-edge frameworks.", color: "text-neon-blue" },
                            { icon: Cpu, title: "System Architecture", desc: "Designing scalable and efficient backend systems for high-performance needs.", color: "text-neon-purple" },
                            { icon: Rocket, title: "Innovation", desc: "Exploring AI and Machine Learning to create smarter software solutions.", color: "text-neon-pink" }
                        ].map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                className="flex items-start p-4 rounded-xl transition-colors border border-transparent hover:border-white/5"
                            >
                                <div className={`p-3 rounded-lg bg-white/5 border border-white/10 mr-4 ${feature.color}`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
