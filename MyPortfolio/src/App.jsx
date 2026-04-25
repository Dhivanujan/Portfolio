import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import EcoBackground from "./components/EcoBackground";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="min-h-screen relative selection:bg-primary/30 font-sans overflow-x-hidden transition-colors duration-300">
      {/* Lightweight CSS-only background — replaces the ~882KB Three.js StarBackground */}
      <EcoBackground />

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
