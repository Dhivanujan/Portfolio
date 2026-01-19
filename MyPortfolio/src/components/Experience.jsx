import Section from "./Section";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, ChevronRight, Sparkles, Target, Rocket, Code, Cloud, Network } from "lucide-react";

// Education Data
const educationData = [
    {
        title: "BSc (Hons) in Software Engineering",
        institution: "University",
        period: "2023 – Present",
        isCurrent: true,
        description: "Comprehensive focus on software development, programming fundamentals, database management, and system design principles.",
        highlights: [
            "Software Development & Programming",
            "Database Design & Management",
            "System Architecture & Design",
            "Agile Methodologies"
        ],
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        title: "NVQ Level 4 – Computer Network Technician",
        institution: "Technical Institute",
        period: "2022",
        isCurrent: false,
        description: "Hands-on practical training in networking technologies, hardware maintenance, troubleshooting, and system administration.",
        highlights: [
            "Network Configuration & Maintenance",
            "Hardware Troubleshooting",
            "System Administration",
            "Technical Support"
        ],
        gradient: "from-cyan-500 to-blue-600"
    },
    {
        title: "G.C.E. Advanced Level (A/L)",
        institution: "Secondary Education",
        period: "2021",
        isCurrent: false,
        description: "Successfully completed Advanced Level examinations, building a strong foundation for higher education.",
        highlights: [],
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        title: "G.C.E. Ordinary Level (O/L)",
        institution: "Secondary Education",
        period: "2018",
        isCurrent: false,
        description: "Completed Ordinary Level examinations with a strong academic record.",
        highlights: [],
        gradient: "from-amber-500 to-orange-600"
    }
];

// Career Objective / Internship Goals
const careerObjective = {
    title: "Seeking Internship Opportunities",
    fields: [
        { name: "Software Engineering", icon: Code, color: "from-indigo-500 to-purple-600" },
        { name: "Cloud Computing", icon: Cloud, color: "from-cyan-500 to-blue-600" },
        { name: "Networking", icon: Network, color: "from-emerald-500 to-teal-600" }
    ],
    description: "Passionate and dedicated Software Engineering student actively seeking an internship opportunity to apply academic knowledge in real-world projects.",
    strengths: [
        "Strong problem-solving and analytical skills",
        "Eager to learn and adapt to new technologies",
        "Solid foundation in programming and system design",
        "Hands-on experience through academic projects and technical training",
        "Excellent communication and teamwork abilities"
    ]
};

// Education Card Component
const EducationCard = ({ edu, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });
    
    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative flex items-stretch gap-3 sm:gap-4 md:gap-8"
        >
            {/* Timeline Dot */}
            <div className="flex flex-col items-center">
                <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${edu.gradient} shadow-lg flex items-center justify-center flex-shrink-0`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                >
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
                {/* Connector Line */}
                <div className="w-0.5 flex-1 bg-gradient-to-b from-slate-300 dark:from-slate-700 to-transparent mt-3"></div>
            </div>

            {/* Content Card */}
            <div className="flex-1 pb-6 md:pb-8 lg:pb-12">
                <motion.div
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group p-4 sm:p-5 md:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 relative overflow-hidden bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-800/90 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                    {/* Gradient accent line */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${edu.gradient} opacity-90`} />
                    
                    {/* Background glow */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-10 blur-3xl rounded-full transition-opacity duration-500`} />
                    
                    {/* Header with badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.period}
                        </div>
                        {edu.isCurrent && (
                            <motion.span 
                                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold shadow-sm"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                            >
                                ✨ Current
                            </motion.span>
                        )}
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                        🎓 {edu.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
                        {edu.description}
                    </p>
                    
                    {/* Highlights */}
                    {edu.highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {edu.highlights.map((highlight, idx) => (
                                <motion.span 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: index * 0.1 + 0.3 + idx * 0.05 }}
                                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700/50"
                                >
                                    {highlight}
                                </motion.span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.div>
    );
};

// Career Objective Card Component
const CareerObjectiveCard = () => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });
    
    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
        >
            <div className="p-6 md:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 relative overflow-hidden bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm shadow-xl">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-20 blur-sm -z-10" />
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <motion.div 
                        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <Target className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                💼 {careerObjective.title}
                            </h3>
                            <motion.span 
                                className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-sm"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                            >
                                🚀 Internship Seeker
                            </motion.span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
                            {careerObjective.description}
                        </p>
                    </div>
                </div>

                {/* Interested Fields */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wider">
                        Areas of Interest
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {careerObjective.fields.map((field, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                whileHover={{ y: -3, scale: 1.02 }}
                                className={`p-4 rounded-xl bg-gradient-to-br ${field.color} text-white shadow-md cursor-default`}
                            >
                                <field.icon className="w-6 h-6 mb-2" />
                                <span className="font-semibold text-sm">{field.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Strengths */}
                <div>
                    <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 uppercase tracking-wider">
                        Key Strengths
                    </h4>
                    <div className="space-y-2">
                        {careerObjective.strengths.map((strength, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + idx * 0.08 }}
                                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                            >
                                <ChevronRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm md:text-base">{strength}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section id="experience" className="relative overflow-hidden">
            {/* Background decoration - subtle for readability */}
            <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 right-0 w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Section Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                >
                    <Sparkles className="w-4 h-4" />
                    My Journey
                </motion.span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-5 text-slate-900 dark:text-white">
                    Education <span className="text-slate-400 dark:text-slate-500">&</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-500">Career Goals</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                    Building a strong foundation through continuous learning and practical experience
                </p>
            </motion.div>

            <div ref={ref} className="relative max-w-4xl mx-auto">
                
                {/* Career Objective Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                            Career Objective
                        </h3>
                    </div>
                    <CareerObjectiveCard />
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                            Education
                        </h3>
                    </div>
                    
                    <div className="space-y-0">
                        {educationData.map((edu, index) => (
                            <EducationCard key={index} edu={edu} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Experience;
