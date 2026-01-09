import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out",
        scrolled
          ? "top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[850px] rounded-2xl bg-obsidian/70 backdrop-blur-xl border border-white/10 shadow-xl py-3"
          : "top-0 w-full bg-transparent py-8 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-3 font-bold text-xl group"
        >
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-blue/50 transition-colors">
            <Terminal className="text-neon-blue w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" />
          </div>
          <span className="text-white tracking-wide font-heading">Dev<span className="text-neon-blue">Portfolio</span></span>
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative cursor-pointer px-4 py-2 text-slate-300 hover:text-white transition-colors font-medium text-sm lg:text-base group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-neon-blue transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></span>
                </Link>
              </li>
            ))}
          </ul>
          {/* <ThemeToggle /> */}
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer px-5 py-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-sm shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105 transition-all"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
            {/* <ThemeToggle /> */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-obsidian/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-8 space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer text-slate-300 hover:text-neon-blue transition-colors font-medium text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold shadow-lg"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

