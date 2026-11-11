"use client";

import { FormEvent, useState } from "react";
import { sendContact } from "@/app/actions/contact";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/content";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const nextErrors: Record<string, string> = {};

    // Quick checks in the browser (instant feedback)
    if (!String(form.get("name") || "").trim())
      nextErrors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.get("email") || "")))
      nextErrors.email = "Enter a valid email address";
    if (String(form.get("message") || "").trim().length < 10)
      nextErrors.message = "Tell me a little more about your project";

    setErrors(nextErrors);
    setServerError("");
    setSent(false);
    if (Object.keys(nextErrors).length > 0) return;

    // Send to the server action (runs on the server and emails you)
    setSending(true);
    const result = await sendContact(form);
    setSending(false);

    if (result.ok) {
      setSent(true);
      formEl.reset();
    } else {
      setErrors(result.errors ?? {});
      setServerError(result.message ?? "");
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-orb" />
      <div className="container">
        <SectionTitle
          eyebrow="GET IN TOUCH"
          title={
            <>
              Let’s build something
              <br />
              <span className="gradient-text">great together.</span>
            </>
          }
          intro="Have a project in mind or just want to say hello? My inbox is always open."
        />
        <div className="contact-grid">
          <form className="contact-form" onSubmit={submitContact} noValidate>
            {/* Honeypot: hidden from people, bots fill it in */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hp-field"
            />
            <div className={`field ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="name">YOUR NAME</label>
              <input
                id="name"
                name="name"
                placeholder="How should I call you?"
                onChange={() => setErrors({ ...errors, name: "" })}
              />
              {errors.name && <small>{errors.name}</small>}
            </div>
            <div className={`field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                onChange={() => setErrors({ ...errors, email: "" })}
              />
              {errors.email && <small>{errors.email}</small>}
            </div>
            <div className={`field ${errors.message ? "has-error" : ""}`}>
              <label htmlFor="message">TELL ME ABOUT YOUR PROJECT</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="A few details about your idea, timeline, or goals..."
                onChange={() => setErrors({ ...errors, message: "" })}
              />
              {errors.message && <small>{errors.message}</small>}
            </div>
            <Button type="submit" icon>
              {sending ? "Sending..." : sent ? "Message Sent" : "Send Message"}
            </Button>
            {serverError && <p className="form-error">{serverError}</p>}
            {sent && (
              <p className="form-success">
                <Icon name="check" size={16} /> Thanks. I’ll get back to you
                soon.
              </p>
            )}
          </form>
          <div className="contact-details">
            <div>
              <span className="icon-box">
                <Icon name="mail" />
              </span>
              <p>
                <small>EMAIL ME</small>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            </div>
            <div>
              <span className="icon-box">
                <Icon name="phone" />
              </span>
              <p>
                <small>CALL ME</small>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </p>
            </div>
            <div>
              <span className="icon-box">
                <Icon name="pin" />
              </span>
              <p>
                <small>LOCATION</small>
                <strong>
                  Panabo City, Davao del Norte
                  <br />
                  Philippines
                </strong>
              </p>
            </div>
            <div className="socials">
              <a href={profile.linkedin} aria-label="LinkedIn">
                <Icon name="linkedin" />
              </a>
              <a href={profile.github} aria-label="GitHub">
                <Icon name="github" />
              </a>
              <span>FOLLOW MY WORK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
