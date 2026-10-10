import { contact, site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-card">
          <h2 id="contact-title">{contact.heading}</h2>
          <p>{contact.body}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a className="btn btn-secondary" href={site.resume} target="_blank" rel="noopener">
              Download resume<span className="visually-hidden"> (PDF)</span>
            </a>
            <a
              className="btn btn-secondary"
              href={site.socials.find((s) => s.label === "LinkedIn")?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
