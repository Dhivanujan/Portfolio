import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const StarBackground = lazy(() =>
  import("./components/StarBackground").then((module) => ({
    default: module.StarBackground,
  }))
);

function App() {
  const [isDark, setIsDark] = useState(true);
  const [showStarBackground, setShowStarBackground] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
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

  useEffect(() => {
    const scheduleBackground = () => setShowStarBackground(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(scheduleBackground, {
        timeout: 1200,
      });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(scheduleBackground, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-primary/30 font-sans overflow-x-hidden transition-colors duration-300">
      {/* Only show StarBackground in dark mode */}
      {isDark && showStarBackground && (
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      )}
      
      <Navbar />
      <main className="flex flex-col relative z-10 w-full overflow-hidden">
        <Hero />

        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
