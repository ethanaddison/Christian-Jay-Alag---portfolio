// ALL the editable content of your portfolio lives here.
// Change text in this file and the site updates, with no need to touch the sections.
import type { IconName } from "@/components/Icon";
import Image from "next/image";

export const profile = {
  name: "Christian Jay Alag",
  role: "WordPress Developer",
  email: "cjayalag9@gmail.com",
  phone: "+63 919 9284 261",
  phoneHref: "tel:+639199284261",
  location: "Panabo City, Davao del Norte, Philippines",
  linkedin: "#", // TODO: put your LinkedIn URL
  github: "#", // TODO: put your GitHub URL
};

export const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

export const services: {
  icon: IconName;
  title: string;
  text: string;
  wide?: boolean;
  num: string;
}[] = [
  {
    icon: "globe",
    title: "Custom WordPress Development",
    text: "Custom WordPress solutions designed around your vision and built for growth.",
    wide: true,
    num: "01",
  },
  {
    icon: "layers",
    title: "Custom Themes",
    text: "Lightweight, custom-coded themes built for speed, flexibility, and lasting performance.",
    num: "02",
  },
  {
    icon: "puzzle",
    title: "Custom Plugins",
    text: "Focused functionality without unnecessary bloat.",
    num: "03",
  },
  {
    icon: "code",
    title: "Responsive Implementation",
    text: "Pixel-precise experiences on every screen size.",
    num: "04",
  },
  {
    icon: "blocks",
    title: "Elementor / Divi / Gutenberg",
    text: "Easy-to-manage builds your team can confidently update.",
    wide: true,
    num: "05",
  },
  {
    icon: "tools",
    title: "Troubleshooting & Maintenance",
    text: "Reliable fixes, updates, and ongoing site care.",
    num: "06",
  },
];

export const skillGroups = [
  {
    label: "01",
    title: "WordPress",
    skills: ["Custom development", "Themes", "Plugins", "Responsive implementation"],
  },
  {
    label: "02",
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Web Design"],
  },
  {
    label: "03",
    title: "Builders",
    skills: ["Elementor", "Divi", "Gutenberg Editor", "Custom Blocks"],
  }, 
  {
    label: "04",
    title: "Development",
    skills: ["PHP", "Hosting", "Theme & plugin customization", "Troubleshooting & maintenance"],
  },
];

export const marqueeWords = [
  "WORDPRESS",
  "PHP",
  "JAVASCRIPT",
  "ELEMENTOR",
  "GUTENBERG",
  "CSS3",
  "HTML5",
  "DIVI",
  "PHOTOSHOP",
  "CUSTOM BLOCKS",
];

export const experiences = [
  {
    dates: "JUNE 2026 - JULY 2026",
    role: "WORDPRESS DEVELOPER",
    company: "Tara AI Community",
    bullets: [
      "Converted an AI-generated website into a fully functional WordPress website using Elementor Pro.",
      "Recreated and customized website layouts to match the original design and branding.",
      "Developed responsive pages optimized for desktop, tablet, and mobile devices.",
    ],
  },
  {
    dates: "MAY 2026 - JUNE 2026",
    role: "FRONT-END DEVELOPER (KAJABI)",
    company: "Lion Sales Funnels",
    bullets: [
      "Developed and customized responsive landing pages, websites, and sales funnels using the Kajabi platform.",
      "Implemented custom HTML, CSS, and JavaScript to enhance Kajabi's native functionality and create tailored user experiences.",
      "Optimized website layouts and frontend interfaces for responsiveness, usability, and visual consistency across devices.",
    ],
  },
  {
    dates: "JUNE 2019 — MAY 2026",
    role: "WordPress Developer",
    company: "Spending Crypto",
    bullets: [
      "Built and maintained high-converting WordPress experiences.",
      "Developed custom themes, plugins, and responsive interfaces.",
      "Optimized performance and resolved complex technical issues.",
    ],
  },
  {
    dates: "JANUARY 2018 — MARCH 2022",
    role: "WordPress Developer",
    company: "Digital Anvil",
    bullets: [
      "Translated creative designs into polished WordPress builds.",
      "Delivered Elementor, Divi, and Gutenberg solutions.",
      "Collaborated remotely to meet ambitious client deadlines.",
    ],
  },
];

// TODO: replace these placeholders with your real projects (and add a `url` for each).
export type Project = {
  type: string; // small label, e.g. "ECOMMERCE"
  title: string;
  text: string;
  tags: string[];
  tone: "violet" | "orange" | "blue" | "green"; // card color
  featured?: boolean; // true = shows on the home page (max 4) AND on /projects
  url?: string; // live site link. The "Live Site" button only shows if this is set
  image?: string; // screenshot in /public, e.g. "/projects/site-one.png"
};

// Put your 4 best projects first and mark them featured: true.
// Everything else only appears on the /projects page.
export const projects: Project[] = [
  {
    type: "AI AUTOMATION & WEB DEVELOPMENT",
    title: "Tara AI",
    text: "Designed and developed Tara AI, a professional AI automation agency website built to showcase AI-powered business solutions. Developed the platform from scratch to launch, focusing on modern UI/UX, responsive design, service presentation, and conversion-focused user experience.",
    tags: ["Web Development", "UI/UX Design", "Landing Page Development", "Conversion Optimization"],
    tone: "orange",
    featured: true,
    url: "https://taraai.ph/",
    image: "/projects/taraai-website.png",
  },
  {
    type: "CRYPTO",
    title: "Spending Crypto",
    text: "A comprehensive crypto and Web3 resource directory featuring cryptocurrency tools, blockchain platforms, educational guides, and digital asset resources.",
    tags: ["Web Development", "UI/UX Implementation", "Frontend Development"],
    tone: "orange",
    featured: true,
    url: "https://spendingcrypto.com/",
    image: "/projects/ss-spending.png",
  },
  {
    type: "BUSINESS WEBSITE DEVELOPMENT",
    title: "Gray Ghost Plantation",
    text: "Developed a professional business website for Gray Ghost Plantation, showcasing its property, accommodations, company information, and customer services. Built with a focus on responsive design, intuitive navigation, clear content presentation, and a user-friendly inquiry experience.",
    tags: ["Business Website Development", "Responsive Web Design", "Website Deployment"],
    tone: "orange",
    featured: true,
    url: "https://www.grayghostplantation.com/",
    image: "/projects/ss-gray.png",
  },
  {
    type: "BUSINESS WEBSITE DEVELOPMENT",
    title: "Contractor Safety Management",
    text: "Developed a professional web platform for contractor safety management, helping businesses streamline contractor compliance, safety documentation, risk management, and operational workflows. Built with a focus on usability, professional presentation, responsive design, and efficient business processes.",
    tags: ["Kajabi", "Web Application Development", "Website Deployment"],
    tone: "orange",
    featured: true,
    url: "https://www.contractorsafetymanagement.com/",
    image: "/projects/ss-contractor.png",
  },
  {
    type: "HOSPITALITY WEBSITE DEVELOPMENT",
    title: "Smarties Guest House",
    text: "Developed a professional hospitality website for Smarties Guest House, showcasing its accommodations, guest facilities, and hospitality services. Built with a focus on responsive design, intuitive navigation, engaging property presentation, and a user-friendly experience for potential guests.",
    tags: ["Hospitality Website", "Accommodation Website", "Website Deployment"],
    tone: "orange",
    featured: true,
    url: "https://smartiesguesthouse.co.uk/",
    image: "/projects/ss-smarties.png",
  },
  {
    type: "REAL ESTATE WEBSITE DEVELOPMENT",
    title: "Ecuador Shores Realty",
    text: "Developed a professional real estate website for Ecuador Shores Realty, featuring property listings, detailed property information, and an engaging browsing experience for potential buyers and investors. Built from scratch to launch, with a focus on responsive design, intuitive navigation, property presentation, and user-friendly functionality.",
    tags: ["Real Estate Website", "Property Listing Integration", "Website Deployment"],
    tone: "orange",
    featured: true,
    url: "https://ecuadorshoresrealty.com/",
    image: "/projects/ss-ecuador.png",
  },
  {
    type: "CORPORATE WEBSITE DEVELOPMENT",
    title: "Critical Data",
    text: "Designed and developed a professional corporate website for Critical Data, an Ireland-based data recovery specialist. Built from scratch to launch, focusing on professional branding, responsive layouts, service presentation, intuitive navigation, and customer inquiry functionality. The website provides a clear and accessible platform for presenting the company's technical services and expertise.",
    tags: ["Corporate Website Development", "Service Page Development", "Website Deployment"],
    tone: "orange",
    featured: true,
    url: "https://www.criticaldata.ie/",
    image: "/projects/ss-critical.png",
  },
  {
    type: "TOURISM WEBSITE DEVELOPMENT",
    title: "Airboat Rides Deerfield",
    text: "Designed and developed a professional tourism website for Airboat Rides Deerfield, showcasing private Everglades airboat tours, tour packages, pricing information, and customer booking inquiries. Built from scratch to launch, focusing on responsive design, engaging visual presentation, intuitive navigation, and user-friendly customer experiences.",
    tags: ["Tourism Website Development", "Business Website Development", "Responsive Web Design"],
    tone: "orange",
    featured: true,
    url: "https://airboatridesdeerfield.com/",
    image: "/projects/ss-everglade.png",
  },
  {
    type: "WEBSITE DEVELOPMENT",
    title: "Vikings Cornwall",
    text: "Designed and developed a professional website for Vikings Cornwall, bringing the business's brand and services online through a modern, responsive, and user-friendly platform. Handled the website development from scratch to launch, focusing on intuitive navigation, engaging visual presentation, responsive layouts, and a seamless user experience.",
    tags: ["Frontend Development", "Performance Optimization", "Website Deployment"],
    tone: "orange",
    featured: true,
    url: "https://vikings-cornwall.com/",
    image: "/projects/ss-viking.png",
  },
  {
    type: "BUSINESS WEBSITE DEVELOPMENT",
    title: "Dogtastic Doggy Daycare",
    text: "Designed and developed a professional website for Dogtastic Doggy Daycare, showcasing its dog daycare services, puppy training programmes, facilities, and customer booking options. Developed from scratch to launch, focusing on responsive layouts, intuitive navigation, engaging service presentation, and a user-friendly experience for pet owners.",
    tags: ["Business Website Development", "Service Page Development", "Frontend Development"],
    tone: "orange",
    featured: true,
    url: "https://www.dogtasticdoggydaycare.co.uk/",
    image: "/projects/ss-dogdaycare.png",
  },
  {
    type: "BUSINESS WEBSITE DEVELOPMENT",
    title: "Hamilton Painting",
    text: "Designed and developed a professional business website for Hamilton Painting, showcasing its residential painting services, company expertise, and customer-focused solutions. Developed from scratch to launch, with an emphasis on clean UI/UX, responsive layouts, service presentation, and user-friendly quote request functionality.",
    tags: ["Business Website Development", "Service Page Development", "Responsive Web Design"],
    tone: "orange",
    featured: true,
    url: "https://hamilton-painting.com/",
    image: "/projects/ss-hamiltonpainting.png",
  },
  {
    type: "EDUCATION WEBSITE DEVELOPMENT",
    title: "Vincent Academy",
    text: "Designed and developed a professional online academy website for Vincent Academy, providing a digital platform to showcase educational programmes, professional magic training, coaching services, and personal development resources. Developed from scratch to launch, focusing on responsive design, intuitive navigation, engaging content presentation, and user-friendly application forms.",
    tags: ["Educational Website Development", "Content Management", "Website Deployment"],
    tone: "orange",
    featured: true,
    url: "https://www.vincentacademy.co.uk/",
    image: "/projects/ss-vincentacademy.png",
  },
];

export const languages = [
  { name: "English", level: "Basic" },
  { name: "Tagalog", level: "Intermediate" },
  { name: "Bisaya", level: "Fluent" },
];
