import Section from "./Section";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <Section id="contact" className="relative pb-32">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-indigo-500 dark:text-indigo-400 font-medium tracking-wider uppercase text-sm">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-6 text-slate-900 dark:text-white">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-400 dark:to-indigo-600">Connect</span>
                    </h2>
                    <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                        Open to AI/ML Engineering, Cloud Architecture, DevOps, and Full-Stack development opportunities. Let's discuss how I can contribute to your team's success.
                    </p>
                    
                    <div className="space-y-4">
                        <a href="mailto:hello@example.com" className="group flex items-center space-x-3.5 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-all duration-300 shadow-sm">
                            <div className="p-2.5 bg-indigo-500/10 rounded-full text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform border border-indigo-500/20">
                                <Mail className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">hello@example.com</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3.5 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-all duration-300 shadow-sm">
                            <div className="p-2.5 bg-indigo-500/10 rounded-full text-indigo-500 dark:text-indigo-400 group-hover:scale-110 transition-transform border border-indigo-500/20">
                                <Linkedin className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">LinkedIn Profile</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3.5 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-900/70 transition-all duration-300 shadow-sm">
                            <div className="p-2.5 bg-slate-200 dark:bg-slate-700/50 rounded-full text-slate-700 dark:text-white group-hover:scale-110 transition-transform">
                                <Github className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-sm text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">GitHub Profile</span>
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form - Modern Glassmorphic Design */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="p-8 rounded-xl relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm shadow-md">
                        <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>

                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    required
                                    className="peer w-full px-4 py-3.5 pt-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 text-sm"
                                    placeholder="Your Name"
                                />
                                <label htmlFor="name" className="absolute left-4 top-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 dark:peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400">Name</label>
                            </div>
                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    className="peer w-full px-4 py-3.5 pt-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 text-sm"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="email" className="absolute left-4 top-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 dark:peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400">Email</label>
                            </div>
                            <div className="relative">
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    required
                                    className="peer w-full px-4 py-3.5 pt-5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-800 text-slate-900 dark:text-white placeholder-transparent outline-none transition-all duration-300 resize-none text-sm"
                                    placeholder="Something nice..."
                                ></textarea>
                                <label htmlFor="message" className="absolute left-4 top-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 dark:peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-600 dark:peer-focus:text-indigo-400">Message</label>
                            </div>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full font-medium py-3.5 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 text-sm ${
                                    isSubmitted 
                                        ? "bg-green-500 text-white" 
                                        : "bg-indigo-600 text-white hover:bg-indigo-500"
                                }`}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : isSubmitted ? (
                                    <span>Message Sent!</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="h-4 w-4" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Contact;
