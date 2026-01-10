import Section from "./Section";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    {
        title: "AI Documentation Assistant",
        description: "RAG-based chatbot for technical docs using OpenAI & Vector DB.",
        tags: ["Python", "React", "FastAPI", "OpenAI"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        color: "group-hover:text-primary",
        glow: "hover:shadow-primary/20"
    },
    {
        title: "E-Commerce Microservices",
        description: "Scalable backend with Node.js, Docker, and RabbitMQ.",
        tags: ["Node.js", "MongoDB", "Docker", "RabbitMQ"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        color: "group-hover:text-indigo-400",
        glow: "hover:shadow-indigo-400/20"
    },
    {
        title: "Collaborative Dashboard",
        description: "Real-time task management with WebSockets and Redux.",
        tags: ["React", "Socket.io", "Redux", "Tailwind"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        color: "group-hover:text-indigo-300",
        glow: "hover:shadow-indigo-300/20"
    },
    {
        title: "Network Packet Analyzer",
        description: "Low-level traffic analysis tool built in C for TCP/IP inspection.",
        tags: ["C", "Linux", "Networking", "TCP/IP"],
        image: "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        color: "group-hover:text-white",
        glow: "hover:shadow-white/20"
    }
];

const ProjectCard = ({ project, index, isHovered, isDimmed, onHover, onLeave }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseEnter = () => {
        onHover();
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        onLeave();
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            // Added conditional opacity for focus effect
            className={`relative h-[28rem] w-full rounded-2xl glass-card group cursor-pointer perspective-1000 transition-all duration-500 ${isDimmed ? 'opacity-50 blur-[2px] scale-95' : 'opacity-100 scale-100'} ${isHovered ? 'z-20' : 'z-10'}`}
        >
            <div 
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className={`absolute inset-4 rounded-xl shadow-2xl ${project.glow} transition-shadow duration-500 overflow-hidden bg-obsidian/40 border border-white/5`}
            >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-transparent"></div>
                </div>

                {/* Content Layer */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-z-10">
                    <h3 
                        style={{ transform: "translateZ(50px)" }}
                        className={`text-2xl font-bold mb-2 text-text-primary ${project.color} transition-colors`}
                    >
                        {project.title}
                    </h3>
                    <p 
                        style={{ transform: "translateZ(30px)" }}
                        className="text-base text-text-secondary mb-4 line-clamp-2 leading-relaxed font-light"
                    >
                        {project.description}
                    </p>
                    
                    <div 
                        style={{ transform: "translateZ(20px)" }}
                        className="flex flex-wrap gap-2 mb-4"
                    >
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium px-2 py-1 bg-white/5 text-slate-200 rounded-md backdrop-blur-md border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div 
                        style={{ transform: "translateZ(40px)" }}
                        className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0"
                    >
                         <a href={project.github} className="flex items-center text-sm font-bold text-white hover:text-primary transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20">
                            <Github className="h-4 w-4 mr-2" /> Code
                        </a>
                        <a href={project.demo} className="flex items-center text-sm font-bold text-white hover:text-indigo-300 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/20">
                            <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Section id="projects" className="relative">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text-primary">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Projects</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-400 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4 perspective-1000">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index}
                        isHovered={hoveredIndex === index}
                        isDimmed={hoveredIndex !== null && hoveredIndex !== index}
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                    />
                ))}
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center text-primary font-semibold hover:tracking-wide transition-all group">
                    View Full Archive <ArrowUpRight className="ml-1 w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </Section>
    );
};

export default Projects;
