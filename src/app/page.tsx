import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/content/projects";
import { about, experience, hero, site } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          {site.availability && <p className="badge">{site.availability} · {site.location}</p>}
          <h1 id="hero-title">{hero.headline}</h1>
          <p className="intro">{hero.intro}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="#work">
              See case studies
            </Link>
            <a className="btn btn-secondary" href={`mailto:${site.email}`}>
              Get in touch
            </a>
          </div>
          <ul className="proof" aria-label="Highlights">
            {hero.proof.map((p) => (
              <li key={p.label}>
                <strong>{p.value}</strong>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Case studies</h2>
            </div>
            <Link className="text-link" href="/projects">
              All work →
            </Link>
          </div>
          <ul className="project-list">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i === 0} />
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container two-col">
          <div>
            <p className="eyebrow">About</p>
            <h2 id="about-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginTop: 8 }}>
              {about.heading}
            </h2>
          </div>
          <div>
            <div className="prose">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <h3 className="subhead">What I do</h3>
            <ul className="chips">
              {about.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <h3 className="subhead">Tools</h3>
            <ul className="chips">
              {about.tools.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginTop: 8 }}>
              Where I've worked
            </h2>
            <p style={{ marginTop: 20 }}>
              <a className="text-link" href={site.resume} target="_blank" rel="noopener">
                Full resume (PDF) →
              </a>
            </p>
          </div>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.company + e.period}>
                <p className="period">{e.period}</p>
                <div>
                  <h3>{e.role}</h3>
                  <p className="company">{e.company}</p>
                  <p className="muted">{e.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
