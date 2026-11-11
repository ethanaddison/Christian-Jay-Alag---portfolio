import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

// href="/projects" -> next/link (fast page navigation)
// href="#contact"  -> normal anchor (scrolls on the same page)
export function Button({
  children,
  href,
  variant = "primary",
  icon,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  icon?: boolean;
  type?: "button" | "submit";
}) {
  const className = `button button--${variant}`;
  const content = (
    <>
      {children}
      {icon && <Icon name="arrow" size={18} />}
    </>
  );

  if (!href) {
    return (
      <button className={className} type={type}>
        {content}
      </button>
    );
  }
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {content}
      </Link>
    );
  }
  return (
    <a className={className} href={href}>
      {content}
    </a>
  );
}