import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Attribution } from "@/components/Attribution";
import { ContactSection } from "@/components/ContactSection";
import { NextProject } from "@/components/NextProject";
import { ProjectNav } from "@/components/ProjectNav";
import { ScreenViewer } from "@/components/ScreenViewer";
import { getProject, projects, type Block } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const cover = project.screens[project.cover ?? 0];
  return {
    title: `${project.tab} case study`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.headline, description: project.summary, images: [{ url: cover.src, alt: cover.t }] },
  };
}

export default async function CaseStudy({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <div style={{ "--accent": project.accent } as React.CSSProperties}>
      <ProjectNav current={project.slug} />
      <article className="container">
        <header className="cs-hero">
          <div className="cs-intro">
            <div>
              <div className="project-meta">
                <span className="pill pill-status">{project.status}</span>
                {project.date && <span>{project.date}</span>}
                {project.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <h1>{project.headline}</h1>
              <p className="lede">{project.summary}</p>
            </div>
            <Attribution {...project.attribution} />
          </div>
          <dl className="facts">
            {project.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section aria-labelledby="tldr-title">
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
            <ul className="outcomes" aria-label="Key numbers">
              {project.outcomes.map((o) => (
                <li key={o.label}>
                  <strong>{o.value}</strong>
                  <span>{o.label}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <ScreenViewer
          title={project.tab}
          frame={project.frame}
          url={project.url}
          screens={project.screens}
          decisions={project.decisions}
        />

        {project.blocks?.map((block, i) => <BlockView key={i} block={block} />)}

        <NextProject current={project.slug} />
        <p className="back-link">
          <Link href="/projects">← All work</Link>
        </p>
      </article>
      <ContactSection />
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "quote":
      return (
        <section className="cs-block">
          <blockquote className="pullquote">
            <p>“{block.text}”</p>
            {block.cite && <footer>{block.cite}</footer>}
          </blockquote>
        </section>
      );
    case "text":
      return (
        <section className="cs-block">
          {block.eyebrow && <p className="eyebrow">{block.eyebrow}</p>}
          <h2>{block.heading}</h2>
          <div className="prose">
            {block.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      );
    case "insights":
      return (
        <section className="cs-block">
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
        </section>
      );
    case "problems":
    case "principles":
    case "personas":
      return (
        <section className="cs-block">
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
        </section>
      );
    case "steps":
      return (
        <section className="cs-block">
          <h2>{block.heading}</h2>
          <ol className="steps">
            {block.items.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>
      );
    case "list":
      return (
        <section className="cs-block">
          <h2>{block.heading}</h2>
          <ul className="bullets">
            {block.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </section>
      );
  }
}
