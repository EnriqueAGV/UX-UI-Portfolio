import Link from "next/link";
import type { Project } from "@/content/projects";
import { Device } from "./Device";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const cover = project.screens[project.cover ?? 0];
  const metric = project.outcomes?.[0];
  const showMetric = metric && (project.status === "Launched" || project.status === "Live");
  return (
    <li className="project-card" data-reveal style={{ "--accent": project.accent } as React.CSSProperties}>
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
        <p className="meta-line">
          <span className="sw" aria-hidden="true" />
          {[project.status, project.date, ...project.tags.slice(0, 2)].filter(Boolean).join(" · ")}
        </p>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.tab}</Link>
        </h3>
        <p className="card-headline">{project.headline}</p>
        {showMetric && (
          <p className="card-metric">
            <strong>{metric.value}</strong> {metric.label}
          </p>
        )}
        <span className="card-cta" aria-hidden="true">
          Read case study <span>→</span>
        </span>
      </div>
    </li>
  );
}
