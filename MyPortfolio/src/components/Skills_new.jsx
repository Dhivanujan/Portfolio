import Section from "./Section";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench, Brain, Cloud, TrendingUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const skillsData = [
    {
        category: "Frontend Development",
        description: "Building responsive, modern user interfaces",
        items: [
            { name: "React.js", level: 90, color: "#61dafb" },
            { name: "JavaScript (ES6+)", level: 85, color: "#f7df1e" },
            { name: "HTML5 & CSS3", level: 90, color: "#e34f26" },
            { name: "Tailwind CSS", level: 85, color: "#06b6d4" },
            { name: "Framer Motion", level: 75, color: "#bb4bf5" }
        ],
        icon: Layout,
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        accentColor: "#6366f1",
        featured: true
    },
    {
        category: "Backend & APIs",
        description: "Scalable server-side solutions",
        items: [
            { name: "Node.js", level: 85, color: "#68a063" },
            { name: "Express.js", level: 85, color: "#ffffff" },
            { name: "REST APIs", level: 80, color: "#ff6b6b" },
            { name: "Python", level: 75, color: "#3776ab" },
            { name: "Java", level: 70, color: "#f89820" }
        ],
        icon: Server,
        gradient: "from-purple-500 via-violet-500 to-indigo-500",
        accentColor: "#8b5cf6"
    },
    {
        category: "Database & Storage",
        description: "Data management and persistence",
        items: [
            { name: "MongoDB", level: 80, color: "#47a248" },
            { name: "MySQL", level: 75, color: "#4479a1" },
            { name: "PostgreSQL", level: 70, color: "#336791" },
            { name: "Redis", level: 65, color: "#dc382d" }
        ],
        icon: Database,
        gradient: "from-emerald-500 via-green-500 to-teal-500",
        accentColor: "#10b981",
        featured: true
    },
    {
        category: "Tools & DevOps",
        description: "Development workflow and deployment",
        items: [
            { name: "Git & GitHub", level: 90, color: "#f05032" },
            { name: "Docker", level: 75, color: "#2496ed" },
            { name: "VS Code", level: 95, color: "#007acc" },
            { name: "Postman", level: 85, color: "#ff6c37" },
            { name: "Linux", level: 70, color: "#fcc624" }
        ],
        icon: Wrench,
        gradient: "from-pink-500 via-rose-500 to-red-500",
        accentColor: "#ec4899"
    },
    {
        category: "Core Concepts",
        description: "Computer science fundamentals",
        items: [
            { name: "Data Structures & Algorithms", level: 85, color: "#14b8a6" },
            { name: "System Design", level: 75, color: "#06b6d4" },
            { name: "Networking", level: 70, color: "#0ea5e9" },
            { name: "Security (JWT, OAuth)", level: 75, color: "#8b5cf6" }
        ],
        icon: Brain,
        gradient: "from-cyan-500 via-teal-500 to-emerald-500",
        accentColor: "#14b8a6",
        featured: true
    },
    {
        category: "AI & Modern Tech",
        description: "Emerging technologies",
        items: [
            { name: "LLM Integration", level: 70, color: "#f59e0b" },
            { name: "OpenAI API", level: 75, color: "#10a37f" },
            { name: "WebSockets", level: 80, color: "#f97316" },
            { name: "Microservices", level: 65, color: "#ef4444" }
        ],
        icon: Cloud,
        gradient: "from-amber-500 via-orange-500 to-red-500",
        accentColor: "#f59e0b"
    },
];


// Circular Progress Indicator Component
const CircularProgress = ({ skill, delay }) => {
    const [progress, setProgress] = useState(0);
    const circumference = 2 * Math.PI * 36; // radius = 36
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(skill.level);
        }, delay * 50 + 200);
        return () => clearTimeout(timer);
    }, [skill.level, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.05, duration: 0.5, type: "spring" }}
            className="relative group cursor-pointer"
        >
            <div className="relative w-20 h-20">
                {/* Background circle */}
                <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="none"
                        className="text-slate-800/50"
                    />
                    {/* Progress circle with glow */}
                    <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke={skill.color}
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                        style={{
                            filter: `drop-shadow(0 0 8px ${skill.color}40)`
                        }}
                    />
                </svg>
                {/* Center percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white group-hover:scale-110 transition-transform">
                        {progress}%
                    </span>
                </div>
            </div>
            {/* Skill name below */}
            <p className="text-center text-xs font-medium text-slate-400 mt-2 group-hover:text-white transition-colors">
                {skill.name}
            </p>
        </motion.div>
    );
};

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
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {skill.name}
                </span>
                <span className="text-xs text-slate-500 font-medium">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
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

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count}{suffix}</span>;
};


const Skills = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [hoveredCard, setHoveredCard] = useState(null);

    const filteredSkills = activeTab === "all" 
        ? skillsData 
        : skillsData.filter(skill => skill.featured);

    return (
        <Section id="skills" className="relative py-24 overflow-hidden">
            {/* Ambient background effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4"
                    >
                        <Zap className="w-4 h-4 text-indigo-400" />
                        <span className="text-indigo-400 font-medium tracking-wider uppercase text-xs">
                            Technical Arsenal
                        </span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mt-4 mb-6">
                        Skills & 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 ml-3">
                            Expertise
                        </span>
                    </h2>
                    
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                        A comprehensive toolkit built through hands-on experience, continuous learning, and passion for technology
                    </p>

                    {/* Stats Row */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-8 mt-8"
                    >
                        {[
                            { label: "Technologies", value: 30, suffix: "+" },
                            { label: "Years Experience", value: 3, suffix: "+" },
                            { label: "Projects", value: 25, suffix: "+" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center gap-3 mt-12"
                    >
                        {[
                            { id: "all", label: "All Skills" },
                            { id: "featured", label: "Core Expertise" }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                                        : "bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bento Grid Layout for Skills */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {filteredSkills.map((skillGroup, index) => {
                        const IconComponent = skillGroup.icon;
                        const isFeatured = skillGroup.featured;
                        
                        return (
                            <motion.div
                                key={skillGroup.category}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ 
                                    delay: index * 0.1, 
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`group relative h-full ${isFeatured ? 'lg:col-span-1' : ''}`}
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                                
                                {/* Card container with glassmorphism */}
                                <div className="h-full flex flex-col p-6 rounded-2xl transition-all duration-500 border bg-slate-900/40 backdrop-blur-xl relative overflow-hidden
                                    border-slate-800 group-hover:border-slate-700 
                                    group-hover:bg-slate-900/60 group-hover:shadow-2xl
                                    group-hover:scale-[1.02] group-hover:-translate-y-1"
                                >
                                    {/* Animated gradient overlay */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${skillGroup.gradient}`} />
                                    
                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>

                                    {/* Header with Icon */}
                                    <div className="flex items-start gap-4 mb-6 relative z-10">
                                        <motion.div 
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6, type: "spring" }}
                                            className="p-3 rounded-xl shadow-lg flex-shrink-0 relative"
                                            style={{ 
                                                background: `linear-gradient(135deg, ${skillGroup.accentColor}20, ${skillGroup.accentColor}10)`,
                                                border: `1px solid ${skillGroup.accentColor}30`
                                            }}
                                        >
                                            <IconComponent 
                                                className="w-6 h-6 relative z-10" 
                                                style={{ color: skillGroup.accentColor }}
                                            />
                                            {/* Icon glow */}
                                            <div 
                                                className="absolute inset-0 rounded-xl blur-lg opacity-50"
                                                style={{ background: skillGroup.accentColor }}
                                            />
                                        </motion.div>
                                        
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                                                {skillGroup.category}
                                            </h3>
                                            <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                                                {skillGroup.description}
                                            </p>
                                        </div>

                                        {isFeatured && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                                            >
                                                ⭐ Featured
                                            </motion.div>
                                        )}
                                    </div>
                                    
                                    {/* Skills Display - Toggle between bar and circular based on card size */}
                                    <div className="relative z-10 flex-1">
                                        {isFeatured ? (
                                            // Circular progress for featured skills
                                            <div className="grid grid-cols-2 gap-4 justify-items-center">
                                                {skillGroup.items.map((skill, idx) => (
                                                    <CircularProgress
                                                        key={skill.name}
                                                        skill={skill}
                                                        delay={idx}
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            // Skill bars for regular cards
                                            <div className="space-y-4">
                                                {skillGroup.items.map((skill, idx) => (
                                                    <SkillBar 
                                                        key={skill.name} 
                                                        skill={skill} 
                                                        delay={idx} 
                                                        accentColor={skillGroup.accentColor}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover indicator */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skillGroup.gradient} origin-left`}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Enhanced Additional Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl blur-2xl" />
                    
                    <div className="relative p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <TrendingUp className="w-5 h-5 text-indigo-400" />
                                <h4 className="text-xl font-bold text-white">Additional Competencies</h4>
                            </div>
                            
                            <div className="flex flex-wrap justify-center gap-3">
                                {[
                                    "Agile/Scrum", 
                                    "CI/CD", 
                                    "Testing (Jest)", 
                                    "Responsive Design", 
                                    "Performance Optimization", 
                                    "Code Review",
                                    "Technical Writing",
                                    "Problem Solving"
                                ].map((item, index) => (
                                    <motion.span 
                                        key={item}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="group relative px-5 py-2.5 text-sm font-medium rounded-lg border overflow-hidden
                                            bg-slate-800/50 text-slate-300 border-slate-700
                                            hover:border-indigo-500/50 hover:text-white hover:bg-slate-800
                                            transition-all duration-300 cursor-default"
                                    >
                                        <span className="relative z-10">{item}</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-400 mb-4">Interested in working together?</p>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
                    >
                        Let's Connect
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </Section>
    );
};

export default Skills;
