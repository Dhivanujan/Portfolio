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
                                className="p-8 rounded-2xl relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-all duration-300 backdrop-blur-sm shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                                        <Code2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Senior-Level Engineer</h3>
                                </div>
                                
                                <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                                    <p>
                                        I'm a <strong className="text-slate-900 dark:text-white font-semibold">Senior AI, Cloud & DevOps Engineer</strong> specializing in building intelligent, 
                                        scalable infrastructure and deploying production-ready machine learning systems.
                                    </p>
                                    <p>
                                        My expertise spans <strong className="text-indigo-600 dark:text-indigo-400">AI/ML deployment</strong>, cloud architecture 
                                        (AWS, Azure, GCP), container orchestration, and network engineering. I design systems that combine automation, 
                                        performance optimization, and enterprise security.
                                    </p>
                                    <p>
                                        From developing <strong className="text-slate-900 dark:text-white">RESTful ML APIs</strong> to architecting CI/CD pipelines and 
                                        implementing cloud-native solutions, I deliver end-to-end systems that drive measurable business outcomes while 
                                        maintaining <strong className="text-indigo-600 dark:text-indigo-400">reliability and security</strong> at scale.
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
                                title: "AI & ML Engineering",
                                desc: "Deploying intelligent systems with ML model integration, REST APIs, and containerized services for production environments.",
                                color: "text-indigo-500 dark:text-indigo-400",
                                gradient: "from-indigo-400 to-indigo-600",
                                border: "border-indigo-400/20",
                            },
                            {
                                icon: Cpu,
                                title: "Cloud & DevOps",
                                desc: "Architecting cloud infrastructure (AWS, Azure), CI/CD pipelines, Kubernetes orchestration, and Infrastructure as Code with Terraform.",
                                color: "text-indigo-600 dark:text-indigo-500",
                                gradient: "from-indigo-500 to-indigo-700",
                                border: "border-indigo-500/20",
                            },
                            {
                                icon: Rocket,
                                title: "Networking & Security",
                                desc: "Implementing secure network architectures, VPC design, load balancing, and applying security best practices (OWASP, TLS, IAM).",
                                color: "text-indigo-400 dark:text-indigo-300",
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
                                className="group flex items-start p-6 rounded-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 backdrop-blur-sm relative overflow-hidden shadow-sm hover:shadow-md"
                            >
                                {/* Icon */}
                                <div className={`relative p-3 rounded-lg bg-gradient-to-br ${feature.gradient} bg-opacity-10 mr-4 flex-shrink-0 border ${feature.border}`}>
                                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                                </div>
                                
                                <div className="relative z-10">
                                    <h4 className={`text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:${feature.color} transition-colors duration-300`}>{feature.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
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
