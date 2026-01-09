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
                        className="group relative h-full perspective-1000"
                    >
                         {/* Card Background & Border */}
                        <div className="glass-card h-full flex flex-col justify-between p-6 rounded-2xl transition-transform duration-300 group-hover:-translate-y-2 relative overflow-hidden">
                            {/* Decorative Gradient */}
                            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${skillGroup.color} opacity-10 blur-3xl rounded-full transition-all group-hover:opacity-20 group-hover:scale-110`}></div>
                            
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-text-primary group-hover:text-neon-blue transition-colors relative z-10 flex items-center">
                                    <span className={`w-1 h-6 bg-gradient-to-b ${skillGroup.color} rounded-full mr-3`}></span>
                                    {skillGroup.category}
                                </h3>
                                
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {skillGroup.items.map((skill, idx) => (
                                        <div
                                            key={skill}
                                            className="px-3 py-1.5 text-sm font-medium bg-white/5 text-text-secondary rounded-md border border-white/10 group-hover:border-white/20 transition-colors backdrop-blur-md"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
