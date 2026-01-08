import Section from "./Section";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Languages",
        items: ["C", "Java", "Python", "JavaScript (ES6+)"],
        color: "from-blue-400 to-blue-600"
    },
    {
        category: "Frontend",
        items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
        color: "from-cyan-400 to-cyan-600"
    },
    {
        category: "Backend & Systems",
        items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
        color: "from-purple-400 to-purple-600"
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
        color: "from-pink-400 to-pink-600"
    },
    {
        category: "Concepts & AI",
        items: ["Data Structures & Algorithms", "Networking", "Authentication (JWT)", "LLM Integration"],
        color: "from-emerald-400 to-emerald-600"
    },
];

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
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Skills</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A comprehensive toolkit that enables me to build end-to-end solutions.
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
                {skillsData.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, rotateX: -30, y: 50 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                            delay: index * 0.1, 
                            type: "spring", 
                            stiffness: 100,
                            damping: 20
                        }}
                        whileHover={{ 
                            translateY: -10, 
                            rotateX: 5, 
                            boxShadow: "0 20px 40px -5px rgba(0,0,0,0.4)" 
                        }}
                        className="group relative preserve-3d"
                    >
                         {/* Card Background & Border */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 rounded-xl blur-sm transform translate-z-[-20px]"></div>
                        <div className="relative h-full bg-obsidian/60 backdrop-blur-md border border-white/10 p-6 rounded-xl overflow-hidden glass-panel">
                            {/* Decorative Gradient */}
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skillGroup.color} opacity-10 blur-2xl rounded-bl-full -mr-10 -mt-10 transition-opacity group-hover:opacity-20`}></div>
                            
                            <h3 className="text-xl font-bold mb-6 text-white group-hover:text-neon-blue transition-colors relative z-10 flex items-center">
                                <span className={`w-2 h-8 bg-gradient-to-b ${skillGroup.color} rounded-r-full mr-3`}></span>
                                {skillGroup.category}
                            </h3>
                            
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {skillGroup.items.map((skill, idx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 + (idx * 0.05) }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="px-4 py-2 text-sm font-medium bg-white/5 text-slate-300 rounded-lg border border-white/5 hover:border-white/20 hover:bg-white/10 hover:text-white transition-all cursor-default shadow-md"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
