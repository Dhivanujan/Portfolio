import Section from "./Section";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
    {
        type: "work",
        title: "Software Engineer Intern",
        company: "Tech Solutions Inc.",
        period: "June 2024 - Present",
        description: "Contributed to the development of high-traffic web applications using React and Node.js. Optimized database queries in MongoDB, reducing response times by 30%.",
        color: "text-primary",
        glow: "shadow-[0_0_20px_rgba(99,102,241,0.3)]",
        border: "border-primary"
    },
    {
        type: "work",
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        period: "Jan 2023 - May 2024",
        description: "Designed and deployed custom websites for local businesses. Managed end-to-end development lifecycle, from client requirements to deployment on AWS.",
        color: "text-indigo-400",
        glow: "shadow-[0_0_20px_rgba(129,140,248,0.3)]",
        border: "border-indigo-400"
    },
    {
        type: "education",
        title: "Computer Science Student",
        company: "University of Technology",
        period: "2021 - 2025",
        description: "Focusing on Algorithms, Data Structures, and Software Engineering. Active member of the Coding Club and organizer of university hackathons.",
        color: "text-primary",
        glow: "shadow-[0_0_20px_rgba(99,102,241,0.3)]",
        border: "border-primary"
    }
];

const ExperienceCard = ({ exp, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal gap-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            {/* Empty Space for layout */}
            <div className="hidden md:block w-5/12"></div>

            {/* Timeline Dot */}
            <div className={`absolute left-0 md:left-1/2 w-8 h-8 -ml-4 md:-ml-4 rounded-full bg-obsidian border-4 ${exp.type === "work" ? "border-primary" : "border-indigo-400"} z-20 flex items-center justify-center ${exp.glow}`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Content Card */}
            <div className="w-full md:w-5/12 pl-10 md:pl-0">
                <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group shadow-lg after:absolute after:inset-0 after:bg-gradient-to-r after:from-primary/5 after:to-transparent after:opacity-0 after:group-hover:opacity-100 after:transition-opacity"
                >
                     <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.type === "work" ? "from-primary to-transparent" : "from-indigo-400 to-transparent"}`}></div>
                     
                     <div className="flex items-center gap-3 mb-2">
                        {exp.type === "work" ? <Briefcase size={16} className="text-primary" /> : <GraduationCap size={16} className="text-indigo-400" />}
                        <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">{exp.period}</span>
                     </div>

                    <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-primary transition-all">{exp.title}</h3>
                    <h4 className={`text-sm font-medium ${exp.color} mb-4`}>{exp.company}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <Section id="experience" className="relative">
             <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    Experience <span className="text-slate-200">&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Education</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    My professional journey and academic background.
                </p>
            </motion.div>

            <div ref={ref} className="relative max-w-5xl mx-auto">
                {/* Center Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -ml-[1px] md:-ml-0.5"></div>
                <motion.div 
                    style={{ scaleY, originY: 0 }}
                     className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-indigo-600 to-indigo-900 -ml-[1px] md:-ml-0.5 z-10"
                ></motion.div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
