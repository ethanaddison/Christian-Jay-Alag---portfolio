import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// next/font downloads the fonts at build time and self-hosts them (no external links).
// Each font exposes a CSS variable that globals.css uses (--font-space-grotesk, etc.).
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

// Metadata API: controls the page title and description (SEO / link previews)
export const metadata: Metadata = {
  title: "Christian Jay Alag | WordPress Developer",
  description:
    "WordPress Developer with 7+ years of experience building custom themes, plugins, and business websites.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Font variables go on <html> so :root in globals.css can read them
    <html lang="en" className={cn(spaceGrotesk.variable, inter.variable, jetbrainsMono.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
