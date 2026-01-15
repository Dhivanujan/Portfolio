import Section from "./Section";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
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
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-lg"
        >
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent dark:from-slate-900 dark:via-slate-900/60"></div>
                
                {/* Role badge on image */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
                    <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wide">
                        {project.role}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Outcome/Impact Badge */}
                <div className="mb-4 inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-indigo-500/10 border border-emerald-200 dark:border-indigo-500/20">
                    <svg className="w-4 h-4 text-emerald-600 dark:text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-emerald-700 dark:text-indigo-400 font-medium">{project.outcome}</span>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-5">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-500 uppercase tracking-wide mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <a 
                        href={project.github} 
                        className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <Github className="h-4 w-4 mr-1.5" /> Code
                    </a>
                    <a 
                        href={project.demo} 
                        className="flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                        <ExternalLink className="h-4 w-4 mr-1.5" /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <Section id="projects" className="relative py-24">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <span className="text-indigo-500 dark:text-indigo-400 font-medium tracking-wider uppercase text-sm">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4 text-slate-900 dark:text-white">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-400 dark:to-indigo-600">Projects</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
                    Real-world solutions showcasing technical depth, problem-solving, and measurable business impact
                </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        project={project} 
                        index={index}
                    />
                ))}
            </div>
            
            <div className="text-center mt-12">
                <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold text-sm transition-colors group">
                    View All Projects <ArrowUpRight className="ml-1.5 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </Section>
    );
};

export default Projects;
