import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { SectionTitle } from "@/components/SectionTitle";
import { experiences } from "@/data/content";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="HISTORY OF BUILDING"
          title={
            <>
              Where I've built, learned,
              <br />
              <span className="gradient-text">and grown.</span>
            </>
          }
        />
        <div className="timeline">
          {experiences.map((job, index) => (
            <div className="timeline-row" key={job.company}>
              <div className="timeline-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <Card className="timeline-card">
                <p className="timeline-date">{job.dates}</p>
                <div className="timeline-title">
                  <h3>{job.role}</h3>
                  <span>@ {job.company}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Icon name="check" size={16} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
