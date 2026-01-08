import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { StarBackground } from "./components/StarBackground";

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-300 relative selection:bg-neon-blue/30 font-sans overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main className="flex flex-col relative z-10 space-y-24 md:space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
