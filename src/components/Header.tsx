import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          {site.name} <span>· {site.role}</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/projects">Work</Link>
          <Link href="/#about" className="nav-optional">
            About
          </Link>
          <Link href="/#experience" className="nav-optional">
            Experience
          </Link>
          <Link href="/#contact" className="nav-optional">
            Contact
          </Link>
          <a href={site.resume} className="btn btn-primary btn-small" target="_blank" rel="noopener">
            Resume<span className="visually-hidden"> (PDF, opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
