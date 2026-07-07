import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { CursorTrail } from "@/components/CursorTrail";
import { PageRipple } from "@/components/PageRipple";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CursorTrail />
      <PageRipple />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
