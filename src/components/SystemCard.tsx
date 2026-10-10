import Link from "next/link";
import { system } from "@/content/system";

// The design system's card shows a strip of its palette instead of a screenshot.
export function SystemCard() {
  return (
    <li className="project-card" data-reveal style={{ "--accent": system.accent } as React.CSSProperties}>
      <div className="card-stage system-stage" aria-hidden="true">
        {system.palettes.slice(0, 5).map((p) => (
          <div key={p.name} className="system-row">
            {p.shades.map((hex) => (
              <span key={hex} style={{ background: hex }} />
            ))}
          </div>
        ))}
      </div>
      <div className="card-body">
        <p className="meta-line">
          <span className="sw" aria-hidden="true" />
          Design system · One App
        </p>
        <h3>
          <Link href={`/projects/${system.slug}`}>{system.tab}</Link>
        </h3>
        <p className="card-headline">Color, type and components behind One App.</p>
        <span className="card-cta" aria-hidden="true">
          Explore the system <span>→</span>
        </span>
      </div>
    </li>
  );
}
