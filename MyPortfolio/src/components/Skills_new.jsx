import Section from "./Section";
import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench, Brain, Cloud } from "lucide-react";

const skillsData = [
    {
        category: "Frontend Development",
        description: "Building responsive, modern user interfaces",
        items: [
            { name: "React.js", level: 90 },
            { name: "JavaScript (ES6+)", level: 85 },
            { name: "HTML5 & CSS3", level: 90 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Framer Motion", level: 75 }
        ],
        icon: Layout,
        accentColor: "#6366f1"
    },
    {
        category: "Backend & APIs",
        description: "Scalable server-side solutions",
        items: [
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 85 },
            { name: "REST APIs", level: 80 },
            { name: "Python", level: 75 },
            { name: "Java", level: 70 }
        ],
        icon: Server,
        accentColor: "#8b5cf6"
    },
    {
        category: "Database & Storage",
        description: "Data management and persistence",
        items: [
            { name: "MongoDB", level: 80 },
            { name: "MySQL", level: 75 },
            { name: "PostgreSQL", level: 70 },
            { name: "Redis", level: 65 }
        ],
        icon: Database,
        accentColor: "#10b981"
    },
    {
        category: "Tools & DevOps",
        description: "Development workflow and deployment",
        items: [
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 75 },
            { name: "VS Code", level: 95 },
            { name: "Postman", level: 85 },
            { name: "Linux", level: 70 }
        ],
        icon: Wrench,
        accentColor: "#ec4899"
    },
    {
        category: "Core Concepts",
        description: "Computer science fundamentals",
        items: [
            { name: "Data Structures & Algorithms", level: 85 },
            { name: "System Design", level: 75 },
            { name: "Networking", level: 70 },
            { name: "Security (JWT, OAuth)", level: 75 }
        ],
        icon: Brain,
        accentColor: "#14b8a6"
    },
    {
        category: "AI & Modern Tech",
        description: "Emerging technologies",
        items: [
            { name: "LLM Integration", level: 70 },
            { name: "OpenAI API", level: 75 },
            { name: "WebSockets", level: 80 },
            { name: "Microservices", level: 65 }
        ],
        icon: Cloud,
        accentColor: "#f59e0b"
    },
];

const SkillBar = ({ skill, delay, accentColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.05, duration: 0.5 }}
            className="group"
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {skill.name}
                </span>
                <span className="text-xs text-slate-500 font-medium">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: delay * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ 
                        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}dd)` 
                    }}
                />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <Section id="skills" className="relative py-24">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-400 font-medium tracking-wider uppercase text-sm">My Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Technologies</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
                        A comprehensive toolkit built through hands-on experience and continuous learning
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                    duration: 0.5
                                }}
                                className="group relative h-full"
                            >
                                {/* Card container */}
                                <div className="h-full flex flex-col p-6 rounded-xl transition-all duration-300 border border-slate-800 bg-slate-900/50 hover:bg-slate-900/70 hover:border-slate-700 backdrop-blur-sm">
                                    {/* Header with Icon */}
                                    <div className="flex items-start gap-3.5 mb-4">
                                        <div 
                                            className="p-2.5 rounded-lg shadow-lg flex-shrink-0"
                                            style={{ 
                                                background: `${skillGroup.accentColor}15`,
                                                border: `1px solid ${skillGroup.accentColor}30`
                                            }}
                                        >
                                            <IconComponent 
                                                className="w-5 h-5" 
                                                style={{ color: skillGroup.accentColor }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1">
                                                {skillGroup.category}
                                            </h3>
                                            <p className="text-xs text-slate-500">
                                                {skillGroup.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Skill Bars */}
                                    <div className="space-y-4 mt-2">
                                        {skillGroup.items.map((skill, idx) => (
                                            <SkillBar 
                                                key={skill.name} 
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

                {/* Additional Skills Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-16 p-8 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
                >
                    <h4 className="text-lg font-bold text-white mb-4 text-center">Additional Competencies</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["Agile/Scrum", "CI/CD", "Testing (Jest)", "Responsive Design", "Performance Optimization", "Code Review"].map((item) => (
                            <span 
                                key={item}
                                className="px-4 py-2 text-sm font-medium bg-slate-800 text-slate-300 rounded-lg border border-slate-700 hover:border-indigo-600 hover:text-white transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
