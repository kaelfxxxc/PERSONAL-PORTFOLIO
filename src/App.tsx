import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
