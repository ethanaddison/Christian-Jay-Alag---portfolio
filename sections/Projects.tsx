import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/content";

export function Projects() {
  // Only the top 4 projects marked `featured: true` show on the home page
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <section className="section section--border" id="projects">
      <div className="container">
        <div className="projects-head">
          <SectionTitle
            eyebrow="BUILT & DELIVERED"
            title={
              <>
                A showcase of thoughtful
                <br />
                <span className="gradient-text">development.</span>
              </>
            }
          />
          <p>
            Exploring the balance between clean design, seamless experiences, and solid development.
          </p>
        </div>
        <div className="projects-list">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
        <div className="projects-more">
          <Button href="/projects" variant="secondary" icon>
            View more projects
          </Button>
        </div>
      </div>
    </section>
  );
}