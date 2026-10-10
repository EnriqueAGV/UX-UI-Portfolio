import Link from "next/link";
import type { Project } from "@/content/projects";
import { Device } from "./Device";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const cover = project.screens[project.cover ?? 0];
  const headline = project.outcomes?.[0];
  const showOutcome = headline && (project.status === "Launched" || project.status === "Live");
  return (
    <li className="project-card" style={{ "--accent": project.accent } as React.CSSProperties}>
      <div className={`card-stage${project.frame === "browser" ? " wide" : ""}`}>
        <Device
          frame={project.frame}
          url={project.url}
          src={cover.src}
          alt={cover.t}
          sizes={project.frame === "phone" ? "220px" : "(max-width: 820px) 100vw, 560px"}
          priority={priority}
        />
      </div>
      <div className="card-body">
        <div className="project-meta">
          <span className="pill pill-status">{project.status}</span>
          {project.date && <span>{project.date}</span>}
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.tab}</Link>
        </h3>
        <p className="card-headline">{project.headline}</p>
        <p className="muted">{project.blurb}</p>
        <div className="project-meta" style={{ marginTop: 16 }}>
          {project.tags.map((t) => (
            <span className="pill" key={t}>
              {t}
            </span>
          ))}
        </div>
        {showOutcome && (
          <p className="card-outcome">
            <strong>{headline.value}</strong> {headline.label}
          </p>
        )}
        <span className="card-cta" aria-hidden="true">
          Read case study →
        </span>
      </div>
    </li>
  );
}
