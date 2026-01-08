import Section from "./Section";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "AI Documentation Assistant",
        description: "RAG-based chatbot for technical docs using OpenAI & Vector DB.",
        tags: ["Python", "React", "FastAPI", "OpenAI"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
    {
        title: "E-Commerce Microservices",
        description: "Scalable backend with Node.js, Docker, and RabbitMQ.",
        tags: ["Node.js", "MongoDB", "Docker", "RabbitMQ"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
    {
        title: "Collaborative Dashboard",
        description: "Real-time task management with WebSockets and Redux.",
        tags: ["React", "Socket.io", "Redux", "Tailwind"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
    },
    {
        title: "Network Packet Analyzer",
        description: "Low-level traffic analysis tool built in C for TCP/IP inspection.",
        tags: ["C", "Linux", "Networking", "TCP/IP"],
        image: "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
    }
];

const Projects = () => {
    return (
        <Section id="projects" className="bg-secondary/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Featured Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        {/* Image Overlay */}
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a href={project.github} className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <Github className="h-4 w-4 mr-1" /> Code
                                </a>
                                <a href={project.demo} className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
