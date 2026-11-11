import { Button } from "@/components/Button";
import { HeroBackground } from "@/components/HeroBackground";
import GradientText from "@/components/GradientText";
import Image from "next/image";

// Server Component (no "use client"): it only renders static HTML.
export function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <HeroBackground />
      <div className="hero-glow hero-glow--violet" />
      <div className="hero-glow hero-glow--orange" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="status">
            <i /> OPEN FOR SELECT PROJECTS — clean, professional, and concise.
          </p>
          <h1 id="hero-title">
            Hey, I’m
            <br />
            <GradientText
              colors={["#8b5cf6", "#ff7a45", "#8b5cf6"]}
              animationSpeed={4}
              showBorder={false}
            >
              Christian Jay Alag
            </GradientText>
          </h1>
          <div className="role-line">
            <strong>WordPress Developer</strong>
            <span className="slash">/</span>
            <span className="role-rotator">
              <i>Custom Theme Developer</i>
              <i>Web Solutions Developer</i>
              <i>Frontend Engineer</i>
            </span>
          </div>
          <p className="hero-intro">
            Building modern WordPress experiences through custom development,
            clean design, and purposeful engineering.
          </p>
          <div className="button-row">
            <Button href="#projects" icon>
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Let’s Talk
            </Button>
          </div>
          <div className="hero-meta">
            <span>BASED IN</span>
            <strong>Davao Del Norte, 8105, Philippines</strong>
            <i />
          </div>
        </div>
        <div
          className="hero-visual"
          aria-label="Portrait placeholder for Christian Jay Alag"
        >
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          {/* TODO: replace this placeholder with your photo using next/image */}
          <div className="portrait portrait--hero">
            <div className="portrait-photo">
              <Image
                src="/portfolio-headshot.jpg"
                alt="Christian Jay Alag, WordPress Developer"
                fill
                priority
                sizes="330px"
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />
            </div>
          </div>
          <span className="code-float code-float--top">
            &lt;wordpress_developer /&gt;
          </span>
          <span className="code-float code-float--bottom">
            7+ years_experience
          </span>
        </div>
      </div>
      <a href="#about" className="scroll-cue">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </a>
    </section>
  );
}
