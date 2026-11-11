import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { SectionTitle } from "@/components/SectionTitle";
import { marqueeWords, skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section className="section section--tinted" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="BEHIND THE BUILD"
          title={
            <>
              The tools and technologies
              <br />
              behind my <span className="gradient-text">work.</span>
            </>
          }
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Card key={group.title} className="skill-card">
              <div className="skill-head">
                <span>{group.label}</span>
                <h3>{group.title}</h3>
              </div>
              <div className="chip-list">
                {group.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* The word list is repeated twice so the CSS marquee loops seamlessly */}
      <div className="marquee" aria-hidden="true">
        <div>
          {[0, 1].flatMap((i) =>
            marqueeWords.map((word) => (
              <span key={`${i}-${word}`}>
                {word}
                <i>✦</i>
              </span>
            )),
          )}
        </div>
      </div>
    </section>
  );
}
