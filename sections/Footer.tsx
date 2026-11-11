import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="dots" />
      <div className="container footer-inner">
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
        {/* Year updates automatically */}
        <p>© {new Date().getFullYear()} Christian Jay Alag. Filipino-built. Globally inspired.</p>
        <a href="#top" className="back-top">
          BACK TO TOP <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
