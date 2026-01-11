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
            className={`relative h-[26rem] w-full rounded-xl glass-card group cursor-pointer perspective-1000 transition-all duration-500 ${isDimmed ? 'opacity-40 blur-[1px] scale-[0.98]' : 'opacity-100 scale-100'} ${isHovered ? 'z-20' : 'z-10'}`}
        >
            <div 
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className={`absolute inset-3 rounded-lg shadow-xl ${project.glow} transition-shadow duration-500 overflow-hidden bg-obsidian/40 border border-white/[0.06]`}
            >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/95 to-obsidian/40"></div>
                </div>

                {/* Content Layer */}
                <div className="absolute bottom-0 left-0 w-full p-5 z-20 transform translate-z-10">
                    <h3 
                        style={{ transform: "translateZ(50px)" }}
                        className={`text-xl font-bold mb-2 text-text-primary ${project.color} transition-colors`}
                    >
                        {project.title}
                    </h3>
                    <p 
                        style={{ transform: "translateZ(30px)" }}
                        className="text-[14px] text-text-secondary mb-4 line-clamp-2 leading-relaxed"
                    >
                        {project.description}
                    </p>
                    
                    <div 
                        style={{ transform: "translateZ(20px)" }}
                        className="flex flex-wrap gap-2 mb-4"
                    >
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[11px] font-medium px-2.5 py-1 bg-white/[0.04] text-slate-300 rounded-md backdrop-blur-md border border-white/[0.08]">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div 
                        style={{ transform: "translateZ(40px)" }}
                        className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0"
                    >
                         <a href={project.github} className="flex items-center text-[13px] font-semibold text-white hover:text-primary transition-colors bg-white/[0.08] px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/[0.12]">
                            <Github className="h-4 w-4 mr-1.5" /> Code
                        </a>
                        <a href={project.demo} className="flex items-center text-[13px] font-semibold text-white hover:text-indigo-300 transition-colors bg-white/[0.08] px-4 py-2 rounded-full backdrop-blur-md hover:bg-white/[0.12]">
                            <ExternalLink className="h-4 w-4 mr-1.5" /> Live Demo
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
                className="text-center mb-14"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-text-primary">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Projects</span>
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-primary to-indigo-400 mx-auto rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 perspective-1000">
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
            
            <div className="text-center mt-10">
                <a href="#" className="inline-flex items-center text-primary font-semibold text-sm hover:tracking-wide transition-all group">
                    View Full Archive <ArrowUpRight className="ml-1 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </Section>
    );
};

export default Projects;
