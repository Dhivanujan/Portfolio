import Section from "./Section";
import { motion } from "framer-motion";
import { 
    Brain, Cloud, Code2, Database, Lock, Network, 
    Server, Wrench, Workflow, Globe, Container, Shield
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
        accentColor: "#8b5cf6"
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
        accentColor: "#10b981"
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
        accentColor: "#6366f1"
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
        accentColor: "#f59e0b"
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
        accentColor: "#14b8a6"
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
        accentColor: "#ec4899"
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
        accentColor: "#ef4444"
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
        accentColor: "#3b82f6"
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
                <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: delay * 0.05 + 0.2, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ 
                        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}dd)` 
                    }}
                />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <Section id="skills" className="relative py-24">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-500 dark:text-indigo-400 font-medium tracking-wider uppercase text-sm">Technical Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4 text-slate-900 dark:text-white">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-400 dark:to-indigo-600">Technologies</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
                        Comprehensive expertise across AI/ML, cloud infrastructure, DevOps, networking, and full-stack development
                    </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillsData.map((skillGroup, index) => {
                        const IconComponent = skillGroup.icon;
                        return (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    delay: index * 0.08, 
                                    duration: 0.5
                                }}
                                className="group relative h-full"
                            >
                                {/* Card container */}
                                <div className="h-full flex flex-col p-6 rounded-xl transition-all duration-300 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 backdrop-blur-sm shadow-sm hover:shadow-md">
                                    {/* Header with Icon */}
                                    <div className="flex items-start gap-3.5 mb-4">
                                        <div 
                                            className="p-2.5 rounded-lg shadow-sm flex-shrink-0"
                                            style={{ 
                                                background: `${skillGroup.accentColor}15`,
                                                border: `1px solid ${skillGroup.accentColor}30`
                                            }}
                                        >
                                            <IconComponent 
                                                className="w-5 h-5" 
                                                style={{ color: skillGroup.accentColor }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 leading-tight">
                                                {skillGroup.category}
                                            </h3>
                                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                                {skillGroup.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Skill Bars */}
                                    <div className="space-y-3.5 mt-2">
                                        {skillGroup.items.map((skill, idx) => (
                                            <SkillBar 
                                                key={skill.name} 
                                                skill={skill} 
                                                delay={idx} 
                                                accentColor={skillGroup.accentColor}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Core Competencies Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-12 p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm shadow-sm"
                >
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 text-center">Core Competencies</h4>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "AI/ML Integration", 
                            "Cloud Architecture", 
                            "Container Orchestration", 
                            "Network Design", 
                            "CI/CD Pipelines",
                            "Infrastructure as Code",
                            "RESTful APIs",
                            "Microservices",
                            "System Design",
                            "Agile/Scrum",
                            "Performance Tuning",
                            "Security Best Practices"
                        ].map((item) => (
                            <span 
                                key={item}
                                className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-white transition-colors"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
