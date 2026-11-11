import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/content";
import { Footer } from "@/sections/Footer";
import { Nav } from "@/sections/Nav";

// Each page can set its own title and description
export const metadata: Metadata = {
  title: "Projects | Christian Jay Alag",
  description: "A collection of WordPress websites designed and developed by Christian Jay Alag.",
};

export default function ProjectsPage() {
  // Shows ALL projects. To show only the ones NOT on the home page, use:
  // const list = projects.filter((project) => !project.featured);
  const list = projects;

  return (
    <div className="site-shell">
      <Nav />
      <main id="top">
        <section className="section projects-page">
          <div className="container">
            <div className="projects-head">
              <SectionTitle
                eyebrow="ALL PROJECTS"
                title={
                  <>
                    Every site I’ve
                    <br />
                    <span className="gradient-text">built.</span>
                  </>
                }
              />
              <p>
                A growing collection of WordPress websites, from custom themes and plugins to full
                business builds.
              </p>
            </div>
            <div className="projects-list">
              {list.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  number={String(index + 1).padStart(2, "0")}
                />
              ))}
            </div>
            <div className="projects-more">
              <Button href="/" variant="secondary">
                Back to home
              </Button>
              <Button href="/#contact" icon>
                Let’s Talk
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}