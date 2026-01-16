import { Heart, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-slate-200 dark:border-white/5 bg-white/95 dark:bg-obsidian/90 backdrop-blur">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <div className="container mx-auto px-6 md:px-10 max-w-6xl py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white mb-2">
                            Dhivanujan<span className="text-primary">Portfolio</span>
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Crafting reliable, modern web experiences</p>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                           className="p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-white transition-all duration-300 hover:shadow-lg dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:hover:text-white dark:hover:border-white/30 dark:hover:bg-white/10">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                           className="p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:shadow-lg dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:hover:text-primary dark:hover:border-primary/30 dark:hover:bg-primary/10">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                           className="p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-indigo-500 hover:border-indigo-400/40 hover:bg-indigo-400/10 transition-all duration-300 hover:shadow-lg dark:bg-white/5 dark:border-white/10 dark:text-slate-400 dark:hover:text-indigo-400 dark:hover:border-indigo-400/30 dark:hover:bg-indigo-400/10">
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
                <div className="mt-10 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2">
                        &copy; {new Date().getFullYear()} Dhivanujan. Crafted with 
                        <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
                        using React & Tailwind.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
                        <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
