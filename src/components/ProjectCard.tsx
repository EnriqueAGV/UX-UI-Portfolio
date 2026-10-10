import Link from "next/link";
import type { Project } from "@/content/projects";
import { Shot } from "./Shot";

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const href = `/projects/${project.slug}`;
  const headline = project.outcomes?.[0];
  return (
    <li className="project-card">
      <Shot shot={project.cover} priority={priority} />
      <div>
        <div className="project-meta">
          <span className="pill pill-status">{project.status}</span>
          <span>{project.date}</span>
        </div>
        <h3>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p className="muted">{project.cardSummary}</p>
        <div className="project-meta" style={{ marginTop: 16 }}>
          {project.tags.map((t) => (
            <span className="pill" key={t}>
              {t}
            </span>
          ))}
        </div>
        {headline && project.status === "Launched" && (
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
