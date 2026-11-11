import Image from "next/image";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { Icon } from "@/components/Icon";
import type { Project } from "@/data/content";

// One project card. Used by the home page AND the /projects page.
export function ProjectCard({ project, number }: { project: Project; number: string }) {
  return (
    <Card className={`project-card project-card--${project.tone}`}>
      <div className="project-mockup">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>
            {project.url ? project.url.replace(/^https?:\/\//, "") : `christianjay.dev/work/${number}`}
          </span>
        </div>

        {project.image ? (
          // Real screenshot (set `image` in data/content.ts)
          <div className="mock-content mock-content--shot">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(max-width: 900px) 100vw, 640px"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        ) : (
          // Placeholder mockup shown until you add a screenshot
          <div className="mock-content">
            <div className="mock-nav">
              <b>CJ/</b>
              <span />
              <span />
              <span />
            </div>
            <div className="mock-hero">
              <div>
                <small>{project.type}</small>
                <strong>{project.title}</strong>
                <p />
                <p />
                <button />
              </div>
              <div className="mock-art">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="project-copy">
        <div className="project-label">
          <span>{number}</span>
          {project.type}
        </div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <div className="chip-list">
          {project.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
        {project.url && (
          <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
            Live Site <Icon name="external" size={17} />
          </a>
        )}
      </div>
      <span className="project-index">{number}</span>
    </Card>
  );
}