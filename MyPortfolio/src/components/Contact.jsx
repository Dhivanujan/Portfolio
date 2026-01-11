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
             {/* Decorative Background for Contact */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-gradient-to-r from-primary/[0.06] via-indigo-500/[0.06] to-indigo-800/[0.06] blur-[100px] rounded-full z-0 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Connect</span>
                    </h2>
                    <p className="text-base text-slate-400 mb-8 leading-relaxed">
                        I am currently looking for new opportunities as a Software Engineer. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="space-y-4">
                        <a href="mailto:hello@example.com" className="group flex items-center space-x-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/40 hover:bg-primary/[0.05] transition-all duration-300">
                            <div className="p-2.5 bg-obsidian rounded-full text-primary group-hover:scale-110 transition-transform">
                                <Mail className="h-5 w-5" />
                            </div>
                            <span className="font-medium text-sm text-slate-300 group-hover:text-white">hello@example.com</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-400/40 hover:bg-indigo-400/[0.05] transition-all duration-300">
                            <div className="p-2.5 bg-obsidian rounded-full text-indigo-400 group-hover:scale-110 transition-transform">
                                <Linkedin className="h-5 w-5" />
                            </div>
                            <span className="font-medium text-sm text-slate-300 group-hover:text-white">LinkedIn Profile</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-3.5 p-4 rounded-xl glass-card hover:border-primary/40 hover:bg-primary/[0.03] transition-all duration-300 shadow-md">
                            <div className="p-2.5 bg-obsidian/50 rounded-full text-white group-hover:scale-110 transition-transform">
                                <Github className="h-5 w-5" />
                            </div>
                            <span className="font-medium text-sm text-text-secondary group-hover:text-white">GitHub Profile</span>
                        </a>
                    </div>
                </motion.div>

                {/* Contact Form - Modern Glassmorphic Design */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group"
                >
                    {/* Animated border gradient */}
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-indigo-500 to-indigo-700 rounded-xl opacity-30 group-hover:opacity-60 blur-sm transition-all duration-500" />
                    
                    <div className="glass-card p-7 rounded-xl relative border border-white/[0.08] shadow-2xl bg-obsidian/80 backdrop-blur-xl">
                        <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-primary/[0.12] to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-indigo-500/[0.12] to-transparent rounded-full blur-3xl" />
                        
                        <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>

                            <div className="relative group/input">
                                <input 
                                    type="text" 
                                    id="name" 
                                    required
                                    className="peer w-full px-4 py-3.5 pt-5 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-primary focus:bg-white/[0.06] text-white placeholder-transparent outline-none transition-all duration-300 text-sm"
                                    placeholder="Your Name"
                                />
                                <label htmlFor="name" className="absolute left-4 top-1.5 text-[11px] font-medium text-primary/70 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-primary">Name</label>
                            </div>
                            <div className="relative group/input">
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    className="peer w-full px-4 py-3.5 pt-5 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-primary focus:bg-white/[0.06] text-white placeholder-transparent outline-none transition-all duration-300 text-sm"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="email" className="absolute left-4 top-1.5 text-[11px] font-medium text-primary/70 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-primary">Email</label>
                            </div>
                            <div className="relative group/input">
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    required
                                    className="peer w-full px-4 py-3.5 pt-5 rounded-lg bg-white/[0.03] border border-white/[0.08] focus:border-primary focus:bg-white/[0.06] text-white placeholder-transparent outline-none transition-all duration-300 resize-none text-sm"
                                    placeholder="Something nice..."
                                ></textarea>
                                <label htmlFor="message" className="absolute left-4 top-1.5 text-[11px] font-medium text-primary/70 transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-primary">Message</label>
                            </div>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full font-semibold py-3.5 px-6 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg text-sm ${
                                    isSubmitted 
                                        ? "bg-green-500 text-white" 
                                        : "bg-primary text-white hover:bg-primary/90 hover:shadow-primary/20"
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
