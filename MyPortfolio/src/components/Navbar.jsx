import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Terminal, Sparkles } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState("hero");
  const [theme, setTheme] = useState("dark");

  // Track theme changes
  useEffect(() => {
    const checkTheme = () => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    };
    
    checkTheme();
    
    // Observer to detect theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    
    return () => observer.disconnect();
  }, []);

  // Improved scroll handler with throttling for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const isDark = theme === "dark";

  return (
    <>
      {/* Fixed navbar container - no layout shift */}
      <nav
        aria-label="Primary navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          // Smooth background transitions based on scroll and theme
          scrolled
            ? isDark
              ? "bg-obsidian/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20"
              : "bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-md"
            : "bg-transparent"
        )}
      >
        {/* Starry effect for dark mode when scrolled */}
        {isDark && scrolled && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-2 left-[10%] w-1 h-1 bg-indigo-300/40 rounded-full animate-pulse"></div>
            <div className="absolute top-5 left-[25%] w-0.5 h-0.5 bg-indigo-200/30 rounded-full"></div>
            <div className="absolute top-3 right-[15%] w-1 h-1 bg-indigo-400/50 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
            <div className="absolute top-6 right-[35%] w-0.5 h-0.5 bg-indigo-300/30 rounded-full"></div>
            <div className="absolute top-4 left-[50%] w-0.5 h-0.5 bg-white/20 rounded-full"></div>
          </div>
        )}
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
            {/* Logo */}
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center gap-2 sm:gap-2.5 font-bold text-base sm:text-lg group relative z-10"
              aria-label="Navigate to home"
            >
              <div
                className={cn(
                  "p-1.5 sm:p-2 rounded-lg border transition-all duration-300",
                  isDark
                    ? "bg-white/[0.04] border-white/[0.08] group-hover:border-primary/40 group-hover:bg-white/[0.08]"
                    : "bg-slate-100 border-slate-200 group-hover:border-primary group-hover:bg-slate-50"
                )}
              >
                <Terminal
                  className={cn(
                    "w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300",
                    isDark
                      ? "text-primary group-hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]"
                      : "text-primary group-hover:scale-110"
                  )}
                />
              </div>
              <span
                className={cn(
                  "tracking-wide font-heading transition-colors",
                  isDark ? "text-white" : "text-slate-900"
                )}
              >
                Dhivanujan<span className="text-primary">Portfolio</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      spy={true}
                      onSetActive={() => setActiveSection(item.to)}
                      onClick={() => setActiveSection(item.to)}
                      className={cn(
                        "relative cursor-pointer px-3 xl:px-4 py-2 font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg group transition-all duration-200",
                        isDark
                          ? activeSection === item.to
                            ? "text-white"
                            : "text-slate-300 hover:text-white"
                          : activeSection === item.to
                          ? "text-slate-900"
                          : "text-slate-600 hover:text-slate-900"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {/* Active indicator */}
                      <span
                        className={cn(
                          "absolute inset-x-1 bottom-1 h-0.5 rounded-full transform origin-left transition-all duration-300",
                          isDark ? "bg-primary" : "bg-primary",
                          activeSection === item.to
                            ? "scale-x-100 opacity-100"
                            : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-50"
                        )}
                      ></span>
                      {/* Hover background */}
                      <span
                        className={cn(
                          "absolute inset-0 rounded-lg transition-all duration-200",
                          isDark
                            ? "bg-white/[0.03] group-hover:bg-white/[0.06]"
                            : "bg-slate-100/0 group-hover:bg-slate-100",
                          activeSection === item.to
                            ? isDark
                              ? "bg-white/[0.06]"
                              : "bg-slate-100"
                            : "opacity-0 group-hover:opacity-100"
                        )}
                      ></span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={cn(
                    "cursor-pointer px-4 xl:px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    isDark
                      ? "bg-primary hover:bg-primary/90 text-white shadow-[0_0_12px_rgba(99,102,241,0.25)] hover:shadow-[0_0_16px_rgba(99,102,241,0.4)] hover:scale-105"
                      : "bg-primary hover:bg-indigo-600 text-white shadow-md hover:shadow-lg hover:scale-105"
                  )}
                  aria-label="Navigate to contact section"
                >
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Mobile/Tablet Menu Toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isDark
                    ? "text-white hover:bg-white/10"
                    : "text-slate-900 hover:bg-slate-100"
                )}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <div
                className={cn(
                  "absolute inset-0",
                  isDark
                    ? "bg-obsidian/90 backdrop-blur-sm"
                    : "bg-slate-900/20 backdrop-blur-sm"
                )}
              />
            </motion.div>

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={cn(
                "fixed top-0 right-0 bottom-0 z-50 w-full sm:w-80 lg:hidden overflow-y-auto",
                isDark
                  ? "bg-obsidian/95 backdrop-blur-xl border-l border-white/10"
                  : "bg-white backdrop-blur-xl border-l border-slate-200 shadow-2xl"
              )}
              id="mobile-menu"
            >
              {/* Mobile menu header */}
              <div className={cn(
                "flex items-center justify-between p-4 sm:p-6 border-b",
                isDark ? "border-slate-800" : "border-slate-200"
              )}>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "p-2 rounded-lg border",
                      isDark
                        ? "bg-white/[0.04] border-white/[0.08]"
                        : "bg-slate-100 border-slate-200"
                    )}
                  >
                    <Terminal
                      className={cn(
                        "w-4 h-4",
                        isDark ? "text-primary" : "text-primary"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "font-bold text-base",
                      isDark ? "text-white" : "text-slate-900"
                    )}
                  >
                    Menu
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    isDark
                      ? "text-slate-400 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  )}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="p-4 sm:p-6">
                <ul className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        spy={true}
                        onSetActive={() => setActiveSection(item.to)}
                        onClick={() => {
                          setActiveSection(item.to);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 cursor-pointer px-4 py-3 rounded-lg font-medium text-base transition-all duration-200 group",
                          isDark
                            ? activeSection === item.to
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "text-slate-300 hover:text-white hover:bg-white/[0.05] border border-transparent"
                            : activeSection === item.to
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-transparent"
                        )}
                      >
                        {activeSection === item.to && (
                          <Sparkles className="w-4 h-4 flex-shrink-0" />
                        )}
                        <span>{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-center w-full cursor-pointer px-6 py-3.5 rounded-lg font-bold text-base shadow-lg transition-all duration-300",
                      isDark
                        ? "bg-gradient-to-r from-primary to-indigo-500 text-white hover:shadow-xl hover:scale-[1.02]"
                        : "bg-primary text-white hover:bg-indigo-600 hover:shadow-xl hover:scale-[1.02]"
                    )}
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
