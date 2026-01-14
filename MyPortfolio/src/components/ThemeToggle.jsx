import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check local storage or system preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-transparent" aria-hidden="true" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative p-2 rounded-lg transition-all duration-300 group",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        isDark
          ? "bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-primary/30"
          : "bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-primary/30"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? (
          <Sun className={cn(
            "h-5 w-5 transition-colors",
            "text-yellow-400 group-hover:text-yellow-300"
          )} />
        ) : (
          <Moon className={cn(
            "h-5 w-5 transition-colors",
            "text-slate-700 group-hover:text-slate-900"
          )} />
        )}
      </motion.div>
      
      {/* Subtle glow effect on hover */}
      <span
        className={cn(
          "absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
          isDark
            ? "shadow-[0_0_12px_rgba(250,204,21,0.2)]"
            : "shadow-[0_0_8px_rgba(99,102,241,0.15)]"
        )}
      />
    </motion.button>
  );
};

export default ThemeToggle;
