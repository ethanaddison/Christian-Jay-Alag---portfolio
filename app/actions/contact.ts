"use server";
// "use server" = this code runs ONLY on the server (never in the browser).
// That keeps your secret API key safe. The form calls this function directly.

import { Resend } from "resend";

export type ContactResult = {
  ok: boolean;
  errors?: Record<string, string>;
  message?: string;
};

export async function sendContact(formData: FormData): Promise<ContactResult> {
  // Honeypot: real people never see this hidden field, spam bots fill it in.
  if (String(formData.get("website") || "").trim() !== "") {
    return { ok: true }; // pretend it worked so bots don't retry
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // Always validate on the server too. Browser checks can be bypassed.
  const errors: Record<string, string> = {};
  if (!name || name.length > 100) errors.name = "Please enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200)
    errors.email = "Enter a valid email address";
  if (message.length < 10 || message.length > 5000)
    errors.message = "Tell me a little more about your project";
  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL in .env.local");
    return { ok: false, message: "The contact form isn't set up yet. Please email me directly." };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to,
      replyTo: email, // so you can just hit "Reply" in your inbox
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    if (error) {
      console.error("Resend error:", error);
      return { ok: false, message: "Sorry, the message couldn't be sent. Please try again." };
    }
    return { ok: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { ok: false, message: "Something went wrong. Please try again later." };
  }
}