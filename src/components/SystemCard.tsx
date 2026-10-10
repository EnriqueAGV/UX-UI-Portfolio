import Link from "next/link";
import { system } from "@/content/system";

// Compact card for the design system: a strip of its primitive palette instead of a screenshot.
export function SystemCard() {
  return (
    <li className="project-card system-card" style={{ "--accent": system.accent } as React.CSSProperties}>
      <div className="card-stage system-stage" aria-hidden="true">
        {system.palettes.slice(0, 6).map((p) => (
          <div key={p.name} className="system-row">
            {p.shades.map((hex) => (
              <span key={hex} style={{ background: hex }} />
            ))}
          </div>
        ))}
      </div>
      <div className="card-body">
        <div className="project-meta">
          <span className="pill pill-status">Design system</span>
        </div>
        <h3>
          <Link href={`/projects/${system.slug}`}>{system.tab}</Link>
        </h3>
        <p className="card-headline">The system behind One App</p>
        <p className="muted">Primitive and semantic color, an Albert Sans type scale mapped to iOS and Android, and the component library the team builds with.</p>
        <span className="card-cta" aria-hidden="true">
          Explore the system →
        </span>
      </div>
    </li>
  );
}
