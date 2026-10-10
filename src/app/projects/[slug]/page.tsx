import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shot } from "@/components/Shot";
import { ContactSection } from "@/components/ContactSection";
import { getProject, projects, type Block } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.title} case study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: project.headline,
      description: project.summary,
      images: [{ url: encodeURI(project.cover.src), alt: project.cover.alt }],
    },
  };
}

export default async function CaseStudy({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="cs-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/projects">Work</Link> / <span aria-current="page">{project.title}</span>
          </nav>
          <div className="project-meta">
            <span className="pill pill-status">{project.status}</span>
            <span>{project.date}</span>
            {project.tags.map((t) => (
              <span className="pill" key={t}>
                {t}
              </span>
            ))}
          </div>
          <h1>{project.headline}</h1>
          <p className="lede">{project.summary}</p>
          <dl className="meta-grid">
            {project.meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="container">
        <Shot shot={project.cover} className="cs-cover" sizes="(max-width: 1160px) 100vw, 1160px" priority />
      </div>

      <section className="cs-block" aria-labelledby="tldr-title">
        <div className="container">
          <h2 id="tldr-title" className="visually-hidden">
            Summary
          </h2>
          <dl className="tldr">
            <div>
              <dt>Problem</dt>
              <dd>{project.tldr.problem}</dd>
            </div>
            <div>
              <dt>My role</dt>
              <dd>{project.tldr.role}</dd>
            </div>
            <div>
              <dt>Outcome</dt>
              <dd>{project.tldr.outcome}</dd>
            </div>
          </dl>
          {project.outcomes && (
            <ul className="outcomes" style={{ marginTop: 16 }} aria-label="Key numbers">
              {project.outcomes.map((o) => (
                <li key={o.label}>
                  <strong>{o.value}</strong>
                  <span>{o.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {project.blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}

      <div className="container">
        <aside className="next-project" aria-label="Next case study">
          <div>
            <p className="eyebrow">Next case study</p>
            <h2>
              <Link href={`/projects/${next.slug}`}>{next.title} →</Link>
            </h2>
            <p className="muted" style={{ marginTop: 8, maxWidth: "56ch" }}>
              {next.cardSummary}
            </p>
          </div>
        </aside>
      </div>

      <ContactSection />
    </article>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "quote":
      return (
        <section className="cs-block">
          <div className="container">
            <blockquote className="pullquote">
              <p>“{block.text}”</p>
              {block.cite && <footer className="muted">{block.cite}</footer>}
            </blockquote>
          </div>
        </section>
      );
    case "text":
      return (
        <section className="cs-block">
          <div className="container">
            {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
            <h2>{block.heading}</h2>
            <div className="prose">
              {block.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      );
    case "facts":
      return (
        <section className="cs-block">
          <div className="container">
            <h2>{block.heading}</h2>
            <dl className="meta-grid">
              {block.items.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      );
    case "problems":
    case "principles":
    case "personas":
      return (
        <section className="cs-block">
          <div className="container">
            <h2>{block.heading}</h2>
            <ul className="card-grid">
              {block.kind === "problems" &&
                block.items.map((it) => (
                  <li key={it.title}>
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                    {it.quote && <blockquote>“{it.quote}”</blockquote>}
                  </li>
                ))}
              {block.kind === "principles" &&
                block.items.map((it) => (
                  <li key={it.title}>
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </li>
                ))}
              {block.kind === "personas" &&
                block.items.map((it) => (
                  <li key={it.name}>
                    <h3>{it.name}</h3>
                    <p className="meta">{it.meta}</p>
                    <p>{it.body}</p>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      );
    case "insights":
      return (
        <section className="cs-block">
          <div className="container">
            <h2>{block.heading}</h2>
            {block.items.map((it, i) => (
              <div className="insight" key={it.title}>
                <p className="num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.finding}</p>
                </div>
                <div className="decision">
                  <strong>Design decision</strong>
                  <p>{it.decision}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    case "modules":
      return (
        <section className="cs-block">
          <div className="container">
            <h2>{block.heading}</h2>
            {block.items.map((m) => (
              <div className="module" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.summary}</p>
                <div className="features">
                  {m.features.map((f) => (
                    <div className="feature" key={f.title}>
                      <figure>
                        <Shot shot={f.shot} sizes="(max-width: 820px) 100vw, 33vw" />
                      </figure>
                      <h4>{f.title}</h4>
                      <p>{f.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    case "steps":
      return (
        <section className="cs-block">
          <div className="container">
            <h2>{block.heading}</h2>
            <ol className="steps">
              {block.items.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );
    case "gallery":
      return (
        <section className="cs-block">
          <div className="container">
            <h2>{block.heading}</h2>
            {block.intro && (
              <p className="muted" style={{ marginTop: -12, marginBottom: 24 }}>
                {block.intro}
              </p>
            )}
            <ol className="gallery">
              {block.shots.map((s, i) => (
                <li key={s.src + i}>
                  <figure>
                    <Shot shot={s} sizes="(max-width: 640px) 50vw, 220px" />
                    {s.caption && (
                      <figcaption>
                        <span>{String(i + 1).padStart(2, "0")}</span>
                        {s.caption}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ol>
          </div>
        </section>
      );
    case "list":
      return (
        <section className="cs-block">
          <div className="container">
            <h2>{block.heading}</h2>
            {block.intro && <p className="muted">{block.intro}</p>}
            <ul className="bullets">
              {block.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        </section>
      );
  }
}
