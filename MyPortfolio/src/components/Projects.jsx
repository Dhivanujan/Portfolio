import Section from "./Section";
import { Github, ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "AI-Powered Documentation Assistant",
        description: "A secure, RAG-based chatbot that helps developers query technical documentation efficiently. Integrated with OpenAI API and vector databases for semantic search.",
        tags: ["Python", "React", "FastAPI", "OpenAI", "Vector DB"],
        github: "#",
        demo: "#",
    },
    {
        title: "E-Commerce Microservices Platform",
        description: "A scalable e-commerce backend built with a microservices architecture using Node.js and Docker. Features robust authentication, product inventory management, and order processing.",
        tags: ["Node.js", "Express", "MongoDB", "Docker", "RabbitMQ"],
        github: "#",
        demo: "#",
    },
    {
        title: "Real-Time Collaborative Dashboard",
        description: "A task management tool allowing teams to edit boards in real-time. Built with WebSockets for instant updates and collaborative editing features.",
        tags: ["React", "Socket.io", "Redux", "Tailwind CSS"],
        github: "#",
        demo: "#",
    },
    {
        title: "Network Packet Analyzer",
        description: "A low-level network traffic analysis tool built in C to capture and inspect packets. Demonstrates strong understanding of TCP/IP protocols and memory management.",
        tags: ["C", "Linux", "Networking", "TCP/IP"],
        github: "#",
        demo: "#",
    }
];

const Projects = () => {
    return (
        <Section id="projects" className="bg-secondary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col"
                    >
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Code className="h-6 w-6" />
                                </div>
                                <div className="flex space-x-2">
                                    <a href={project.github} className="p-2 hover:bg-secondary rounded-full transition-colors" title="View Source">
                                        <Github className="h-5 w-5 text-muted-foreground" />
                                    </a>
                                    <a href={project.demo} className="p-2 hover:bg-secondary rounded-full transition-colors" title="Live Demo">
                                        <ExternalLink className="h-5 w-5 text-muted-foreground" />
                                    </a>
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-muted-foreground mb-6 flex-1">
                                {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
