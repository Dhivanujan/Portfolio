import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Section from "./Section";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Decorations */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-border bg-background/50 backdrop-blur-sm"
                >
                    <span className="text-sm font-medium text-muted-foreground">Available for work</span>
                    <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
                >
                    Software Engineer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10"
                >
                    Building scalable, performant systems and intuitive user experiences with clean code and modern architecture.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all group"
                    >
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                         className="cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-all font-semibold"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5, duration: 0.8 }}
                     className="mt-16 flex space-x-8"
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full">
                        <Github className="h-6 w-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full">
                        <Linkedin className="h-6 w-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-full">
                        <Mail className="h-6 w-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
