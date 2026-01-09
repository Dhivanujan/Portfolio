import { Heart, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-white/5">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent" />
            
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-heading font-bold text-white mb-2">
                            Dev<span className="text-neon-blue">Portfolio</span>
                        </h3>
                        <p className="text-slate-500 text-sm">Building digital experiences</p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                           className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                           className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-neon-blue hover:border-neon-blue/30 hover:bg-neon-blue/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                           className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-neon-purple hover:border-neon-purple/30 hover:bg-neon-purple/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                    
                    {/* Back to Top */}
                    <div className="flex justify-center md:justify-end">
                        <Link
                            to="hero"
                            smooth={true}
                            duration={800}
                            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-sm">Back to top</span>
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm flex items-center gap-2">
                        &copy; {new Date().getFullYear()} John Doe. Crafted with 
                        <Heart className="w-4 h-4 text-neon-pink animate-pulse" /> 
                        using React & Tailwind.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-600">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
