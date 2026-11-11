// This page is a Server Component. It just arranges the sections.
// Only Nav and Contact are Client Components (they use state).
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Nav } from "@/sections/Nav";
import { Projects } from "@/sections/Projects";
import { Services } from "@/sections/Services";
import { Skills } from "@/sections/Skills";

export default function Home() {
  return (
    <div className="site-shell">
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
