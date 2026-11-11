"use client";
// "use client" = this component runs in the browser.
// We need it because the mobile menu uses useState / useEffect (interactivity).

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { navItems } from "@/data/content";
import Link from "next/link";
import Image from "next/image";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="nav-wrap">
      <nav className="nav-pill" aria-label="Main navigation">
        <Link className="brand" href="/#top">
          <Image
            src="/CJAdev-logo-transparent.png"
            alt="Christian Jay Alag"
            width={120}
            height={48}
            priority
            className="brand-logo"
          />
        </Link>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link href="/#contact" className="nav-hire">
            Hire Me
          </Link>
        </div>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
      </nav>
    </header>
  );
}
