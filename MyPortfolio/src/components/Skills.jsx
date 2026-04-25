import Section from "./Section";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Brain, Cloud, Code2, Database, Network,
    Wrench, Workflow, Shield,
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
    }
];

const SkillBar = ({ skill, delay, accentColor }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.05, duration: 0.5 }}
        >
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 break-words pr-2">
                    {skill.name}
                </span>
                <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
                >
                    {skill.level}%
                </span>
            </div>

            <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: delay * 0.05 + 0.2, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${accentColor}, ${accentColor}cc)`
                    }}
                />
            </div>
        </motion.div>
    );
};

const SkillCard = ({ skillGroup, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const IconComponent = skillGroup.icon;

    const displayedSkills = isExpanded
        ? skillGroup.items
        : skillGroup.items.slice(0, 4);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className="h-full relative group"
        >
            <div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition"
                style={{
                    background: `linear-gradient(135deg, ${skillGroup.accentColor}40, transparent)`
                }}
            />

            <div className="relative h-full flex flex-col p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-xl transition">

                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skillGroup.gradient}`}>
                        <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            {skillGroup.category}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            {skillGroup.description}
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="space-y-4 flex-1">
                    {displayedSkills.map((skill, idx) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            delay={idx}
                            accentColor={skillGroup.accentColor}
                        />
                    ))}
                </div>

                {/* Toggle */}
                {skillGroup.items.length > 4 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-5 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                    >
                        {isExpanded ? "Show less" : `Show ${skillGroup.items.length - 4} more`}
                        <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                                isExpanded ? "rotate-90" : ""
                            }`}
                        />
                    </button>
                )}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Section id="skills" className="py-24 relative overflow-hidden">

            <div className="max-w-7xl mx-auto" ref={ref}>

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                        Skills &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                            Technologies
                        </span>
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
                        Full-stack development, AI/ML, cloud, DevOps, and systems expertise.
                    </p>
                </div>

                {/* GRID FIXED */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {skillsData.map((skillGroup, index) => (
                        <SkillCard
                            key={skillGroup.category}
                            skillGroup={skillGroup}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom Tags */}
                <div className="mt-14 flex flex-wrap justify-center gap-3">
                    {[
                        "AI/ML", "Cloud", "DevOps", "Networking",
                        "Microservices", "Security", "APIs", "System Design"
                    ].map((t) => (
                        <span
                            key={t}
                            className="px-3 py-1 text-sm rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;