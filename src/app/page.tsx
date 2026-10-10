import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { CountUp } from "@/components/Motion";
import { ProjectCard } from "@/components/ProjectCard";
import { SystemCard } from "@/components/SystemCard";
import { projects } from "@/content/projects";
import { about, experience, hero, site } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          {site.availability && (
            <p className="status-line">
              {site.availability} · {site.location}
            </p>
          )}
          <h1 id="hero-title">{hero.headline}</h1>
          <p className="intro">{hero.intro}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="#work">
              See case studies
            </Link>
            <a className="btn btn-ghost" href={`mailto:${site.email}`}>
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="stats" aria-label="Highlights">
            {hero.proof.map((p) => (
              <li key={p.label}>
                <strong>
                  <CountUp value={p.value} />
                </strong>
                <span>{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head" data-reveal>
            <h2 id="work-title">Selected work</h2>
            <Link className="text-link" href="/projects">
              All work
            </Link>
          </div>
          <ul className="project-list">
            {projects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i === 0} />
            ))}
            <SystemCard />
          </ul>
        </div>
      </section>

      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container two-col">
          <h2 id="about-title" data-reveal>
            {about.heading}
          </h2>
          <div data-reveal>
            <div className="prose">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <dl className="inline-list">
              <dt>What I do</dt>
              <dd>{about.skills.join(" · ")}</dd>
              <dt>Tools</dt>
              <dd>{about.tools.join(" · ")}</dd>
            </dl>
          </div>
        </div>
      </section>

      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="container two-col">
          <div data-reveal>
            <h2 id="experience-title">Experience</h2>
            <p style={{ marginTop: 16 }}>
              <a className="text-link" href={site.resume} target="_blank" rel="noopener">
                Full resume (PDF)
              </a>
            </p>
          </div>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.company + e.period} data-reveal>
                <p className="period">{e.period}</p>
                <div>
                  <h3>
                    {e.role} <span>· {e.company}</span>
                  </h3>
                  <p>{e.summary}</p>
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
