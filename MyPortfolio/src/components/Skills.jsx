import Section from "./Section";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Layout, Server, Wrench, Brain } from "lucide-react";

const skillsData = [
    {
        category: "Languages",
        items: ["C", "Java", "Python", "JavaScript (ES6+)"],
        color: "from-blue-400 to-cyan-400",
        icon: Code2,
        accentColor: "#22d3ee"
    },
    {
        category: "Frontend",
        items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
        color: "from-cyan-400 to-teal-400",
        icon: Layout,
        accentColor: "#2dd4bf"
    },
    {
        category: "Backend & Systems",
        items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
        color: "from-purple-400 to-violet-500",
        icon: Server,
        accentColor: "#a855f7"
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
        color: "from-pink-400 to-rose-500",
        icon: Wrench,
        accentColor: "#ec4899"
    },
    {
        category: "Concepts & AI",
        items: ["Data Structures & Algorithms", "Networking", "Authentication (JWT)", "LLM Integration"],
        color: "from-emerald-400 to-green-500",
        icon: Brain,
        accentColor: "#10b981"
    },
];

const SkillPill = ({ skill, delay, accentColor }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.05, type: "spring", stiffness: 200 }}
            whileHover={{ 
                scale: 1.08, 
                backgroundColor: `${accentColor}20`,
                borderColor: `${accentColor}60`,
                boxShadow: `0 0 20px ${accentColor}30`
            }}
            className="px-4 py-2 text-sm font-medium bg-white/5 text-text-secondary rounded-lg border border-white/10 transition-all duration-300 cursor-default backdrop-blur-sm hover:text-white"
        >
            {skill}
        </motion.span>
    );
};

const Skills = () => {
    return (
        <Section id="skills" className="relative">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Skills</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A comprehensive toolkit that enables me to build end-to-end solutions.
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {skillsData.map((skillGroup, index) => {
                    const IconComponent = skillGroup.icon;
                    return (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                delay: index * 0.1, 
                                type: "spring", 
                                stiffness: 100,
                                damping: 20
                            }}
                            className="group relative h-full"
                        >
                            {/* Animated border glow on hover */}
                            <div className={`absolute -inset-[1px] bg-gradient-to-r ${skillGroup.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`} />
                            
                            <div className="glass-card h-full flex flex-col p-6 rounded-2xl transition-all duration-500 group-hover:bg-white/[0.08] relative overflow-hidden border border-white/10 group-hover:border-transparent">
                                {/* Decorative Gradient Background */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${skillGroup.color} opacity-0 blur-3xl rounded-full transition-all duration-700 group-hover:opacity-20 group-hover:scale-150`} />
                                
                                {/* Header with Icon */}
                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skillGroup.color} bg-opacity-20 shadow-lg`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors duration-300">
                                        {skillGroup.category}
                                    </h3>
                                </div>
                                
                                {/* Skill Pills */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {skillGroup.items.map((skill, idx) => (
                                        <SkillPill 
                                            key={skill} 
                                            skill={skill} 
                                            delay={idx} 
                                            accentColor={skillGroup.accentColor}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default Skills;
