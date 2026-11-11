import { Card } from "@/components/Card";
import { Icon } from "@/components/Icon";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/data/content";

export function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionTitle
          eyebrow="WHAT I BUILD"
          title={
            <>
              Bringing ideas to life through <span className="gradient-text">code.</span>
            </>
          }
          intro="From concept to launch and beyond, I build thoughtful digital experiences that help businesses grow."
        />
        <div className="services-grid">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`service-card ${service.wide ? "service-card--wide" : ""}`}
            >
              <span className="service-number">{service.num}</span>
              <div className="icon-box">
                <Icon name={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="card-arrow">
                <Icon name="arrow" size={18} />
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
