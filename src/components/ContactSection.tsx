import { contact, site } from "@/content/site";

export function ContactSection() {
  const linkedin = site.socials.find((s) => s.label === "LinkedIn")?.href;
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container" data-reveal>
        <h2 id="contact-title">{contact.heading}</h2>
        <p>{contact.body}</p>
        <a className="contact-email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <p className="contact-links">
          <a href={site.resume} target="_blank" rel="noopener">
            Resume<span className="visually-hidden"> (PDF)</span>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
