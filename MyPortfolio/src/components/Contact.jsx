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
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-gradient-to-r from-neon-blue/10 via-purple-500/10 to-pink-500/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                {/* Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Connect</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                        I am currently looking for new opportunities as a Software Engineer. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="space-y-6">
                        <a href="mailto:hello@example.com" className="group flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all duration-300">
                            <div className="p-3 bg-obsidian rounded-full text-neon-blue group-hover:scale-110 transition-transform">
                                <Mail className="h-6 w-6" />
                            </div>
                            <span className="font-medium text-slate-300 group-hover:text-white">hello@example.com</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-300">
                            <div className="p-3 bg-obsidian rounded-full text-neon-purple group-hover:scale-110 transition-transform">
                                <Linkedin className="h-6 w-6" />
                            </div>
                            <span className="font-medium text-slate-300 group-hover:text-white">LinkedIn Profile</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 p-4 rounded-xl glass-card hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all duration-300 shadow-md">
                            <div className="p-3 bg-obsidian/50 rounded-full text-white group-hover:scale-110 transition-transform">
                                <Github className="h-6 w-6" />
                            </div>
                            <span className="font-medium text-text-secondary group-hover:text-white">GitHub Profile</span>
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
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-50 group-hover:opacity-100 blur-sm transition-all duration-500" />
                    
                    <div className="glass-card p-8 rounded-2xl relative border border-white/10 shadow-2xl bg-obsidian/80 backdrop-blur-xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-blue/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-neon-purple/20 to-transparent rounded-full blur-3xl" />
                        
                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>

                            <div className="relative group/input">
                                <input 
                                    type="text" 
                                    id="name" 
                                    required
                                    className="peer w-full px-4 py-4 pt-6 rounded-xl bg-white/5 border border-white/10 focus:border-neon-blue focus:bg-white/10 text-white placeholder-transparent outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                                    placeholder="Your Name"
                                />
                                <label htmlFor="name" className="absolute left-4 top-2 text-xs font-medium text-neon-blue/80 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-neon-blue">Name</label>
                            </div>
                            <div className="relative group/input">
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    className="peer w-full px-4 py-4 pt-6 rounded-xl bg-white/5 border border-white/10 focus:border-neon-purple focus:bg-white/10 text-white placeholder-transparent outline-none transition-all duration-300 focus:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="email" className="absolute left-4 top-2 text-xs font-medium text-neon-purple/80 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-neon-purple">Email</label>
                            </div>
                            <div className="relative group/input">
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    required
                                    className="peer w-full px-4 py-4 pt-6 rounded-xl bg-white/5 border border-white/10 focus:border-neon-pink focus:bg-white/10 text-white placeholder-transparent outline-none transition-all duration-300 resize-none focus:shadow-[0_0_20px_rgba(236,72,153,0.15)]"
                                    placeholder="Something nice..."
                                ></textarea>
                                <label htmlFor="message" className="absolute left-4 top-2 text-xs font-medium text-neon-pink/80 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-neon-pink">Message</label>
                            </div>
                            
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                disabled={isSubmitting}
                                className={`w-full font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg ${
                                    isSubmitted 
                                        ? "bg-green-500 text-white" 
                                        : "bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-neon-blue/25"
                                }`}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
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
