import Section from "./Section";
import { Github, ExternalLink, ArrowUpRight, Sparkles, Eye, Star, GitFork } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    {
        title: "AI Documentation Assistant",
        description: "Built an intelligent RAG-based chatbot that helps developers navigate technical documentation 3x faster using semantic search and contextual responses.",
        role: "Full Stack Developer",
        outcome: "Reduced documentation search time by 65%",
        tags: ["Python", "React", "FastAPI", "OpenAI", "Vector DB"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        featured: true,
        stats: { stars: 128, forks: 34 }
    },
    {
        title: "E-Commerce Microservices",
        description: "Architected a scalable microservices backend handling 10k+ concurrent users with message queuing, containerization, and automated deployment.",
        role: "Backend Engineer",
        outcome: "Improved system reliability to 99.9% uptime",
        tags: ["Node.js", "MongoDB", "Docker", "RabbitMQ", "Kubernetes"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        featured: true,
        stats: { stars: 89, forks: 21 }
    },
    {
        title: "Real-Time Collaboration Platform",
        description: "Developed a task management dashboard with WebSocket-powered real-time updates, state management, and role-based access control.",
        role: "Full Stack Developer",
        outcome: "Enabled 50+ teams to collaborate seamlessly",
        tags: ["React", "Socket.io", "Redux", "Node.js", "Tailwind"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        featured: false,
        stats: { stars: 56, forks: 12 }
    },
    {
        title: "Network Packet Analyzer",
        description: "Created a low-level network analysis tool in C for TCP/IP packet inspection, protocol analysis, and traffic monitoring for security audits.",
        role: "Systems Developer",
        outcome: "Detected 95% of anomalous network patterns",
        tags: ["C", "Linux", "Networking", "TCP/IP", "Security"],
        image: "https://images.unsplash.com/photo-1558494949-ef2bb6db8744?q=80&w=1000&auto=format&fit=crop",
        github: "#",
        demo: "#",
        featured: false,
        stats: { stars: 45, forks: 8 }
    }
];

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    
    // 3D tilt effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
    
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: isHovered ? rotateX : 0,
                rotateY: isHovered ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className="group relative h-full perspective-1000"
        >
            {/* Glow effect */}
            <div className={`absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 ${project.featured ? 'group-hover:opacity-40' : ''}`} />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-2xl h-full flex flex-col"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Featured badge */}
                {project.featured && (
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-lg">
                        <Sparkles className="w-3 h-3" />
                        Featured
                    </div>
                )}
                
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ 
                            scale: isHovered ? 1.1 : 1,
                            transition: "all 0.5s ease-out"
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
                    
                    {/* Overlay content on image */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                        {/* Role badge */}
                        <span className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                            {project.role}
                        </span>
                        
                        {/* Stats */}
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1 text-white/80 text-xs">
                                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                {project.stats.stars}
                            </span>
                            <span className="flex items-center gap-1 text-white/80 text-xs">
                                <GitFork className="w-3.5 h-3.5" />
                                {project.stats.forks}
                            </span>
                        </div>
                    </div>
                    
                    {/* Hover overlay with links */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/70 to-indigo-900/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                        <motion.a 
                            href={project.github}
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a 
                            href={project.demo}
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ scale: 1.1 }}
                            animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-colors"
                        >
                            <Eye className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1" style={{ transform: "translateZ(20px)" }}>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                        {project.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                    </p>

                    {/* Outcome/Impact Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-200 dark:border-emerald-500/20">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">{project.outcome}</span>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-5 mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                                <motion.span 
                                    key={tag} 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                    className="text-xs font-medium px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default"
                                >
                                    {tag}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <a 
                            href={project.github} 
                            className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group/link"
                        >
                            <Github className="h-4 w-4 group-hover/link:scale-110 transition-transform" /> 
                            View Code
                        </a>
                        <a 
                            href={project.demo} 
                            className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group/link"
                        >
                            <ExternalLink className="h-4 w-4 group-hover/link:scale-110 transition-transform" /> 
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <Section id="projects" className="relative py-24 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
            
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
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Sparkles className="w-4 h-4" />
                    Portfolio
                </motion.span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-5 text-slate-900 dark:text-white">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Projects</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Real-world solutions showcasing technical depth, problem-solving, and measurable business impact
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index}
                    />
                ))}
            </div>
            
            <motion.div 
                className="text-center mt-14"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <a href="#" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 font-semibold text-sm transition-all shadow-sm hover:shadow-md">
                    View All Projects 
                    <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
            </motion.div>
        </Section>
    );
};

export default Projects;
