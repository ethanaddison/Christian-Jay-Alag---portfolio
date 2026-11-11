import { Card } from "@/components/Card";
import { languages } from "@/data/content";

export function Education() {
  return (
    <section className="section compact-section">
      <div className="container education-grid">
        <Card className="education-card">
          <p className="eyebrow">
            <span>//</span> EDUCATION
          </p>
          <span className="education-year">2008 — 2010</span>
          <h3>BS Information Technology</h3>
          <p>Coursework completed</p>
          <div className="school">
            <span>UIC</span>
            <div>
              <strong>University of the Immaculate Conception</strong>
              <small>Davao City, Philippines</small>
            </div>
          </div>
        </Card>
        <Card className="languages-card">
          <p className="eyebrow">
            <span>//</span> LANGUAGES
          </p>
          {languages.map((lang) => (
            <div key={lang.name}>
              <span>{lang.name}</span>
              <strong>{lang.level}</strong>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}
