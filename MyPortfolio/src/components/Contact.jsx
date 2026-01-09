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

                {/* Contact Form - 3D Floating Effect */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="perspective-1000"
                >
                    <div className="glass-card p-8 rounded-2xl relative border border-white/10 shadow-2xl">
                        
                        <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-obsidian/50 border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-white placeholder-slate-600 outline-none transition-all shadow-inner"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-obsidian/50 border border-white/10 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple text-white placeholder-slate-600 outline-none transition-all shadow-inner"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
                                <textarea 
                                    id="message" 
                                    rows="4" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-obsidian/50 border border-white/10 focus:border-neon-pink focus:ring-1 focus:ring-neon-pink text-white placeholder-slate-600 outline-none transition-all resize-none shadow-inner"
                                    placeholder="Something nice..."
                                ></textarea>
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
