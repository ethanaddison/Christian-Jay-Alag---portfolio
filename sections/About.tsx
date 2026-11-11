import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";

export function About() {
  return (
    <section className="section section--border" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="THE PERSON BEHIND THE CODE"
          title={
            <>
              Designed with intention. Developed with{" "}
              <span className="gradient-text">purpose.</span>
            </>
          }
        />
        <div className="about-grid">
          <div className="about-copy">
            <p className="lead">
              With over <em>7 years</em> of hands-on experience, I specialize in
              building custom WordPress websites, e-commerce platforms, and
              tailored digital solutions for businesses.
            </p>
            <p>
              I bridge the gap between creative design and reliable development,
              crafting responsive, scalable, and high-performing websites that
              deliver seamless user experiences and make managing digital
              content effortless.
            </p>
            <div className="about-signature">
              <span>CJA</span>
              <i />
              <small>WORDPRESS DEVELOPER</small>
            </div>
          </div>
          <Card className="photo-card">
            {/* TODO: replace with your photo using next/image */}
            <div className="photo-frame">
              <Image
                src="/snapshot-dashboard.png"
                alt="Screenshot of a WordPress dashboard I built"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <div className="photo-caption">
              <i />
              <span>Open to remote work worldwide</span>
            </div>
          </Card>
        </div>
        <div className="stats-grid">
          <Card className="stat">
            <strong>
              7<span>+</span>
            </strong>
            <p>
              Years of
              <br />
              Experience
            </p>
          </Card>
          <Card className="stat">
            <strong>
              20<span>+</span>
            </strong>
            <p>
              Completed
              <br />
              Projects
            </p>
          </Card>
          <Card className="stat">
            <strong>
              96<span>%</span>
            </strong>
            <p>
              Client
              <br />
              Satisfaction
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
