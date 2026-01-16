import Section from "./Section";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
    Brain, Cloud, Code2, Database, Lock, Network, 
    Server, Wrench, Workflow, Globe, Container, Shield,
    ChevronRight, Sparkles
} from "lucide-react";

const skillsData = [
    {
        category: "Artificial Intelligence & Data",
        description: "Machine learning and intelligent systems",
        items: [
            { name: "Machine Learning (Supervised/Unsupervised)", level: 75 },
            { name: "Deep Learning Concepts (CNN, RNN, Transformers)", level: 70 },
            { name: "NLP (spaCy, Hugging Face)", level: 72 },
            { name: "Model Deployment (REST APIs, Docker)", level: 80 },
            { name: "NumPy & Pandas", level: 85 },
            { name: "Model Evaluation & Optimization", level: 75 }
        ],
        icon: Brain,
        accentColor: "#8b5cf6",
        gradient: "from-violet-500 to-purple-600"
    },
    {
        category: "Networking & Systems",
        description: "Network engineering and protocols",
        items: [
            { name: "TCP/IP & OSI Model", level: 85 },
            { name: "Routing & Switching (Static, OSPF)", level: 75 },
            { name: "DNS, DHCP, NAT", level: 80 },
            { name: "Network Security Fundamentals", level: 78 },
            { name: "Load Balancing", level: 72 },
            { name: "Cloud Networking (VPC, Subnets, Gateways)", level: 80 }
        ],
        icon: Network,
        accentColor: "#10b981",
        gradient: "from-emerald-500 to-teal-600"
    },
    {
        category: "Web Development",
        description: "Modern full-stack web applications",
        items: [
            { name: "HTML5, CSS3, JavaScript (ES6+)", level: 90 },
            { name: "React.js & Next.js", level: 88 },
            { name: "Node.js & Express.js", level: 85 },
            { name: "REST APIs & JWT Authentication", level: 87 },
            { name: "Responsive Design & Accessibility", level: 90 },
            { name: "Performance Optimization", level: 82 }
        ],
        icon: Code2,
        accentColor: "#6366f1",
        gradient: "from-indigo-500 to-blue-600"
    },
    {
        category: "DevOps & Automation",
        description: "CI/CD and infrastructure automation",
        items: [
            { name: "Linux & Shell Scripting", level: 82 },
            { name: "Git, GitHub, GitLab", level: 90 },
            { name: "CI/CD (GitHub Actions, GitLab CI)", level: 80 },
            { name: "Docker & Docker Compose", level: 85 },
            { name: "Kubernetes (Core Concepts)", level: 75 },
            { name: "Monitoring (Prometheus, Grafana)", level: 70 }
        ],
        icon: Workflow,
        accentColor: "#f59e0b",
        gradient: "from-amber-500 to-orange-600"
    },
    {
        category: "Cloud Platforms",
        description: "AWS, Azure, and GCP services",
        items: [
            { name: "AWS (EC2, S3, IAM, VPC, RDS, Lambda)", level: 82 },
            { name: "Azure (VMs, Storage, Networking)", level: 75 },
            { name: "GCP (Compute Engine, Cloud Storage)", level: 70 },
            { name: "Infrastructure as Code (Terraform)", level: 76 },
            { name: "Serverless Architecture", level: 72 }
        ],
        icon: Cloud,
        accentColor: "#14b8a6",
        gradient: "from-teal-500 to-cyan-600"
    },
    {
        category: "Databases & Storage",
        description: "Data persistence and management",
        items: [
            { name: "MySQL & PostgreSQL", level: 80 },
            { name: "MongoDB", level: 82 },
            { name: "Database Design & Optimization", level: 78 },
            { name: "Cloud Storage & Backup Strategies", level: 75 }
        ],
        icon: Database,
        accentColor: "#ec4899",
        gradient: "from-pink-500 to-rose-600"
    },
    {
        category: "Security & Best Practices",
        description: "Application and infrastructure security",
        items: [
            { name: "Authentication & Authorization", level: 85 },
            { name: "Secure API Design", level: 82 },
            { name: "OWASP Top 10 Awareness", level: 80 },
            { name: "Secrets Management", level: 78 },
            { name: "HTTPS & TLS Fundamentals", level: 85 }
        ],
        icon: Shield,
        accentColor: "#ef4444",
        gradient: "from-red-500 to-rose-600"
    },
    {
        category: "Tools & Platforms",
        description: "Development and collaboration tools",
        items: [
            { name: "VS Code & IntelliJ", level: 95 },
            { name: "Postman & API Testing", level: 90 },
            { name: "Cloud CLI & Dashboards", level: 85 },
            { name: "Jira, Trello, Agile/Scrum", level: 80 },
            { name: "Markdown & OpenAPI/Swagger", level: 88 }
        ],
        icon: Wrench,
        accentColor: "#3b82f6",
        gradient: "from-blue-500 to-indigo-600"
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
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skill.name}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                    {skill.level}%
                </span>
            </div>
            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: delay * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full relative"
                    style={{ 
                        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc)` 
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </motion.div>
            </div>
        </motion.div>
    );
};

const SkillCard = ({ skillGroup, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const IconComponent = skillGroup.icon;
    const displayedSkills = isExpanded ? skillGroup.items : skillGroup.items.slice(0, 4);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                delay: index * 0.08, 
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className="group relative h-full"
        >
            <div 
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"
                style={{ background: `linear-gradient(135deg, ${skillGroup.accentColor}40, transparent)` }}
            />
            
            <div className="h-full flex flex-col p-6 rounded-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-sm shadow-sm hover:shadow-xl relative overflow-hidden">
                <div 
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: skillGroup.accentColor }}
                />
                
                <div className="flex items-start gap-4 mb-5">
                    <motion.div 
                        className={`p-3 rounded-xl shadow-lg flex-shrink-0 bg-gradient-to-br ${skillGroup.gradient}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight truncate">
                            {skillGroup.category}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {skillGroup.description}
                        </p>
                    </div>
                </div>
                
                <div className="space-y-4 mt-2 flex-1">
                    {displayedSkills.map((skill, idx) => (
                        <SkillBar 
                            key={skill.name} 
                            skill={skill} 
                            delay={idx} 
                            accentColor={skillGroup.accentColor}
                        />
                    ))}
                </div>
                
                {skillGroup.items.length > 4 && (
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                        whileHover={{ x: 3 }}
                    >
                        {isExpanded ? 'Show less' : `+${skillGroup.items.length - 4} more`}
                        <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
        <Section id="skills" className="relative py-24 overflow-hidden">
            <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-7xl mx-auto" ref={ref}>
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
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    >
                        <Sparkles className="w-4 h-4" />
                        Technical Expertise
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-5 text-slate-900 dark:text-white">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-500">Technologies</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Comprehensive expertise across AI/ML, cloud infrastructure, DevOps, networking, and full-stack development
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <SkillCard 
                            key={skillGroup.category}
                            skillGroup={skillGroup}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-16 relative"
                >
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-2xl opacity-20" />
                    
                    <div className="relative p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl">
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">Core Competencies</h4>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { text: "AI/ML Integration", color: "from-violet-500 to-purple-500" },
                                { text: "Cloud Architecture", color: "from-cyan-500 to-blue-500" },
                                { text: "Container Orchestration", color: "from-teal-500 to-emerald-500" },
                                { text: "Network Design", color: "from-emerald-500 to-green-500" },
                                { text: "CI/CD Pipelines", color: "from-amber-500 to-orange-500" },
                                { text: "Infrastructure as Code", color: "from-orange-500 to-red-500" },
                                { text: "RESTful APIs", color: "from-blue-500 to-indigo-500" },
                                { text: "Microservices", color: "from-indigo-500 to-purple-500" },
                                { text: "System Design", color: "from-pink-500 to-rose-500" },
                                { text: "Agile/Scrum", color: "from-rose-500 to-pink-500" },
                                { text: "Performance Tuning", color: "from-purple-500 to-violet-500" },
                                { text: "Security Best Practices", color: "from-red-500 to-rose-500" }
                            ].map((item, idx) => (
                                <motion.span 
                                    key={item.text}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + idx * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="group relative px-4 py-2.5 text-sm font-semibold rounded-xl cursor-default overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 group-hover:opacity-0 transition-opacity duration-300" />
                                    <div className="absolute inset-0 border border-slate-200 dark:border-slate-700 group-hover:border-transparent rounded-xl transition-colors duration-300" />
                                    <span className="relative text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </span>
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
