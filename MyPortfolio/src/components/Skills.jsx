import Section from "./Section";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Languages",
        items: ["C", "Java", "Python", "JavaScript (ES6+)"],
    },
    {
        category: "Frontend",
        items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend & Systems",
        items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "Docker", "VS Code", "Postman"],
    },
    {
        category: "Concepts & AI",
        items: ["Data Structures & Algorithms", "Networking", "Authentication (JWT)", "LLM Integration", "System Design"],
    },
];

const Skills = () => {
    return (
        <Section id="skills">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillsData.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card border border-border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full border border-border/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
