import Link from "next/link";

export default function NotFound() {
  return (
    <section className="cs-hero">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This page doesn't exist.</h1>
        <p className="lede">The case studies are still here, though.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/projects">
            See my work
          </Link>
          <Link className="btn btn-secondary" href="/">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
