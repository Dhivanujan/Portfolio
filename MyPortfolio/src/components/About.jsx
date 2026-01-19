import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "./Section";
import { Code2, Cpu, Globe, Rocket, Award, Users, Zap, TrendingUp } from "lucide-react";

const stats = [
    { icon: Award, value: "50+", label: "Projects Completed", color: "from-indigo-500 to-purple-500" },
    { icon: Users, value: "25+", label: "Happy Clients", color: "from-cyan-500 to-blue-500" },
    { icon: Zap, value: "99%", label: "Success Rate", color: "from-amber-500 to-orange-500" },
    { icon: TrendingUp, value: "3+", label: "Years Experience", color: "from-emerald-500 to-teal-500" }
];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } }
    };

    return (
        <Section id="about" className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div ref={ref}>
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.span 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    >
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                        Who I Am
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-5  text-slate-900 dark:text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-500">Me</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Passionate engineer turning complex challenges into elegant solutions
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 md:mb-14"
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className="group relative p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 text-center overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                            <motion.div 
                                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                <stat.icon className="w-5 h-5 text-white" />
                            </motion.div>
                            <motion.div 
                                className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + idx * 0.1, type: "spring" }}
                            >
                                {stat.value}
                            </motion.div>
                            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-tight">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
                    {/* About summary */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="relative group">
                            {/* Gradient border effect */}
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />
                            
                            <div 
                                className="relative p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm shadow-xl"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25">
                                        <Code2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Software Engineer</h3>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">AI • Cloud • DevOps</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4 sm:space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                                    <p className="text-base sm:text-lg">
                                        I'm an <strong className="text-slate-900 dark:text-white font-semibold"> AI, Cloud & DevOps Engineer</strong> with a passion for building intelligent, 
                                        scalable infrastructure and deploying production-ready machine learning systems.
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        My expertise spans <span className="text-indigo-600 dark:text-indigo-400 font-semibold">AI/ML deployment</span>, cloud architecture 
                                        (AWS, Azure, GCP), container orchestration, and network engineering. I design systems that combine automation, 
                                        performance optimization, and enterprise security.
                                    </p>
                                    <p className="text-sm sm:text-base">
                                        From developing <strong className="text-slate-900 dark:text-white">RESTful ML APIs</strong> to architecting CI/CD pipelines and 
                                        implementing cloud-native solutions, I deliver end-to-end systems that drive measurable outcomes.
                                    </p>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl" />
                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Expertise Cards */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid gap-4"
                    >
                        {[
                            {
                                icon: Globe,
                                title: "AI & ML Engineering",
                                desc: "Deploying intelligent systems with ML model integration, REST APIs, and containerized services for production environments.",
                                gradient: "from-violet-500 to-purple-600",
                                iconBg: "bg-violet-500/10",
                            },
                            {
                                icon: Cpu,
                                title: "Cloud & DevOps",
                                desc: "Architecting cloud infrastructure (AWS, Azure), CI/CD pipelines, Kubernetes orchestration, and Infrastructure as Code with Terraform.",
                                gradient: "from-cyan-500 to-blue-600",
                                iconBg: "bg-cyan-500/10",
                            },
                            {
                                icon: Rocket,
                                title: "Networking & Security",
                                desc: "Implementing secure network architectures, VPC design, load balancing, and applying security best practices (OWASP, TLS, IAM).",
                                gradient: "from-amber-500 to-orange-600",
                                iconBg: "bg-amber-500/10",
                            }
                        ].map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ 
                                    x: 8, 
                                    scale: 1.02,
                                    transition: { type: "spring", stiffness: 400, damping: 17 }
                                }}
                                className="group flex items-start gap-4 sm:gap-5 p-4 sm:p-6 rounded-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-gradient-to-r hover:from-slate-50 hover:to-white dark:hover:from-slate-900/70 dark:hover:to-slate-900/50 backdrop-blur-sm relative overflow-hidden shadow-sm hover:shadow-xl"
                            >
                                {/* Hover gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                                
                                {/* Icon */}
                                <motion.div 
                                    className={`relative p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg flex-shrink-0`}
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <feature.icon className="w-6 h-6 text-white" />
                                </motion.div>
                                
                                <div className="relative z-10">
                                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{feature.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                                
                                {/* Arrow indicator */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                        <Rocket className="w-4 h-4 text-indigo-500 rotate-45" />
                                    </div>
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
