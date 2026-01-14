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
                    <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">Who I Am</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* About summary */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="perspective-1000"
                    >
                        <div className="relative group cursor-default">
                            {/* Subtle border accent */}
                            <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 rounded-2xl opacity-10 group-hover:opacity-20 transition-all duration-700" />
                            
                            <div 
                                className="p-8 rounded-2xl relative border border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                                        <Code2 className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Problem Solver & Builder</h3>
                                </div>
                                
                                <div className="space-y-4 text-slate-300 leading-relaxed">
                                    <p>
                                        I'm a results-driven <strong className="text-white font-semibold">Full Stack Developer</strong> with a strong foundation in computer science fundamentals and a passion for building <strong className="text-indigo-400">scalable, maintainable solutions</strong>.
                                    </p>
                                    <p>
                                        My approach focuses on understanding business requirements, designing efficient architectures, and delivering high-quality code that solves real problems. I thrive in environments that challenge me to learn and grow.
                                    </p>
                                    <p>
                                        With expertise spanning the <strong className="text-indigo-400">MERN stack</strong>, system design, and modern development practices, I build full-stack applications from concept to deployment, always prioritizing <strong className="text-white">user experience and code quality</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 gap-5"
                    >
                        {[
                            {
                                icon: Globe,
                                title: "Full Stack Development",
                                desc: "End-to-end development from database design to responsive UIs, ensuring seamless user experiences.",
                                color: "text-indigo-400",
                                gradient: "from-indigo-400 to-indigo-600",
                                border: "border-indigo-400/20",
                            },
                            {
                                icon: Cpu,
                                title: "System Architecture",
                                desc: "Designing scalable, maintainable architectures with focus on performance, security, and reliability.",
                                color: "text-indigo-500",
                                gradient: "from-indigo-500 to-indigo-700",
                                border: "border-indigo-500/20",
                            },
                            {
                                icon: Rocket,
                                title: "Continuous Learning",
                                desc: "Always exploring emerging technologies like AI/ML integration to stay ahead in the evolving tech landscape.",
                                color: "text-indigo-300",
                                gradient: "from-indigo-300 to-indigo-500",
                                border: "border-indigo-300/20",
                            }
                        ].map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ 
                                    x: 8, 
                                    scale: 1.01,
                                    transition: { type: "spring", stiffness: 400, damping: 17 }
                                }}
                                className="group flex items-start p-6 rounded-xl transition-all duration-300 border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-sm relative overflow-hidden"
                            >
                                {/* Icon */}
                                <div className={`relative p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10 mr-4 flex-shrink-0 border ${feature.border}`}>
                                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                </div>
                                
                                <div className="relative z-10">
                                    <h4 className={`text-lg font-bold text-white mb-2 group-hover:${feature.color} transition-colors duration-300`}>{feature.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
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
