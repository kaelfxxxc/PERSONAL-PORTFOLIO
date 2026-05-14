import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PageLoader from "./components/PageLoader";
import ScrollToTop from "./components/ScrollToTop";
import VisitorCounter from "./components/VisitorCounter";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <>
      <CustomCursor />
      <PageLoader />
      <div className="min-h-screen bg-zinc-950 text-white antialiased">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
      <ScrollToTop />
      <VisitorCounter />
    </>
  );
}