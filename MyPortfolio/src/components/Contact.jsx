import Section from "./Section";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
    return (
        <Section id="contact" className="bg-secondary/20">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        I am currently looking for new opportunities as a Software Engineer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="space-y-6">
                        <a href="mailto:hello@example.com" className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors">
                            <div className="p-3 bg-background rounded-full border border-border">
                                <Mail className="h-6 w-6" />
                            </div>
                            <span className="font-medium">hello@example.com</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors">
                            <div className="p-3 bg-background rounded-full border border-border">
                                <Linkedin className="h-6 w-6" />
                            </div>
                            <span className="font-medium">LinkedIn Profile</span>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors">
                            <div className="p-3 bg-background rounded-full border border-border">
                                <Github className="h-6 w-6" />
                            </div>
                            <span className="font-medium">GitHub Profile</span>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                placeholder="name@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                            <textarea 
                                id="message" 
                                rows="4" 
                                className="w-full px-4 py-3 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                placeholder="Something nice..."
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                            <span>Send Message</span>
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
