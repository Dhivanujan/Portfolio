import { Heart, Github, Linkedin, Twitter, ArrowUp, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const footerLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
];

const NAV_OFFSET = -88;

const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", hoverColor: "hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", hoverColor: "hover:text-blue-600 hover:border-blue-400 dark:hover:border-blue-500" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", hoverColor: "hover:text-sky-500 hover:border-sky-400 dark:hover:border-sky-500" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email", hoverColor: "hover:text-pink-500 hover:border-pink-400 dark:hover:border-pink-500" },
];

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900/95 dark:to-slate-950 backdrop-blur-xl">
            {/* Gradient line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-10 max-w-6xl py-16 relative">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-4 gap-10 mb-12">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link
                            to="hero"
                            smooth={true}
                            duration={500}
                            className="inline-flex items-center gap-2 cursor-pointer mb-4"
                        >
                            <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
                                <span className="text-white font-bold text-lg">D</span>
                            </div>
                            <span className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                                Dhivanujan<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Portfolio</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mb-6">
                            Senior AI, Cloud & DevOps Engineer crafting intelligent systems and scalable infrastructure. 
                            Let's build something amazing together.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <motion.a 
                                    key={social.label}
                                    href={social.href} 
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    whileHover={{ y: -3 }}
                                    className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all duration-300 hover:shadow-lg ${social.hoverColor}`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.slice(0, 4).map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={NAV_OFFSET}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* More Links & CTA */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Resources</h4>
                        <ul className="space-y-3 mb-6">
                            {footerLinks.slice(4).map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={NAV_OFFSET}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-indigo-500 transition-colors" />
                                    Resume
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </li>
                        </ul>
                        
                        {/* Back to Top */}
                        <Link
                            to="hero"
                            smooth={true}
                            duration={800}
                            offset={NAV_OFFSET}
                            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 cursor-pointer text-sm font-medium"
                        >
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                            Back to top
                        </Link>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2 flex-wrap justify-center">
                        © {new Date().getFullYear()} Dhivanujan. Crafted with 
                        <Heart className="w-4 h-4 text-red-500 animate-pulse inline" /> 
                        using React, Tailwind & Framer Motion
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-500">
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
