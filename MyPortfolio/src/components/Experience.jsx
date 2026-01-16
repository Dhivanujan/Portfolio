import Section from "./Section";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight, Sparkles } from "lucide-react";

const experiences = [
    {
        type: "work",
        title: "Software Engineer Intern",
        company: "Tech Solutions Inc.",
        location: "San Francisco, CA",
        period: "June 2024 - Present",
        description: "Contributed to the development of high-traffic web applications using React and Node.js. Optimized database queries in MongoDB, reducing response times by 30%.",
        achievements: [
            "Reduced API response times by 30% through query optimization",
            "Implemented real-time features using WebSocket technology",
            "Collaborated with 5+ team members in Agile sprints"
        ],
        gradient: "from-indigo-500 to-purple-600"
    },
    {
        type: "work",
        title: "Freelance Full Stack Developer",
        company: "Self-Employed",
        location: "Remote",
        period: "Jan 2023 - May 2024",
        description: "Designed and deployed custom websites for local businesses. Managed end-to-end development lifecycle, from client requirements to deployment on AWS.",
        achievements: [
            "Delivered 15+ production-ready websites",
            "Achieved 98% client satisfaction rating",
            "Implemented CI/CD pipelines reducing deployment time by 50%"
        ],
        gradient: "from-cyan-500 to-blue-600"
    },
    {
        type: "education",
        title: "Computer Science Student",
        company: "University of Technology",
        location: "Boston, MA",
        period: "2021 - 2025",
        description: "Focusing on Algorithms, Data Structures, and Software Engineering. Active member of the Coding Club and organizer of university hackathons.",
        achievements: [
            "Dean's List for 4 consecutive semesters",
            "Led a team of 8 in winning inter-university hackathon",
            "Published research on ML optimization techniques"
        ],
        gradient: "from-emerald-500 to-teal-600"
    }
];

const ExperienceCard = ({ exp, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });
    
    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className={`relative flex items-stretch justify-between md:justify-normal gap-6 md:gap-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            {/* Empty Space for layout */}
            <div className="hidden md:block w-[45%]"></div>

            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
                <motion.div 
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.gradient} shadow-lg flex items-center justify-center`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                >
                    {exp.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-white" />
                    ) : (
                        <GraduationCap className="w-5 h-5 text-white" />
                    )}
                </motion.div>
            </div>

            {/* Content Card */}
            <div className="w-full md:w-[45%] pl-16 md:pl-0">
                <motion.div
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden bg-white dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    {/* Gradient accent line */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Background glow */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 blur-3xl rounded-full transition-opacity duration-500`} />
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start gap-3 mb-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                        </div>
                        {exp.location && (
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium">
                                <MapPin className="w-3.5 h-3.5" />
                                {exp.location}
                            </div>
                        )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {exp.title}
                    </h3>
                    <h4 className={`text-sm font-semibold mb-4 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                        {exp.company}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                        {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.15 + 0.3 + idx * 0.1 }}
                                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                                <ChevronRight className="w-4 h-4 text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
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
        <Section id="experience" className="relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-40 right-0 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20"
            >
                <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                >
                    <Sparkles className="w-4 h-4" />
                    My Journey
                </motion.span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mt-3 mb-5 text-slate-900 dark:text-white">
                    Experience <span className="text-slate-400 dark:text-slate-500">&</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-500">Education</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    Professional experience and continuous learning journey
                </p>
            </motion.div>

            <div ref={ref} className="relative max-w-5xl mx-auto">
                {/* Center Line - Background */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 md:-translate-x-1/2"></div>
                
                {/* Center Line - Animated progress */}
                <motion.div 
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 md:-translate-x-1/2 z-10"
                />

                <div className="space-y-12 md:space-y-20">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} index={index} />
                    ))}
                </div>
                
                {/* End dot */}
                <motion.div 
                    className="absolute left-6 md:left-1/2 bottom-0 md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg z-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                />
            </div>
        </Section>
    );
};

export default Experience;
