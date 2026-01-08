import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 bg-obsidian border-t border-white/10 text-center text-slate-500 text-sm relative z-10">
            <div className="container mx-auto px-4">
                <p className="flex items-center justify-center gap-2">
                    &copy; {new Date().getFullYear()} John Doe. Made with <Heart className="w-4 h-4 text-neon-pink animate-pulse" /> using React & Tailwind.
                </p>
                <div className="flex justify-center gap-6 mt-4 opacity-50">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
