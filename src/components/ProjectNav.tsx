import Link from "next/link";
import { projects } from "@/content/projects";
import { system } from "@/content/system";

const items = [...projects.map((p) => ({ slug: p.slug, tab: p.tab, accent: p.accent })), system];

// Project switcher shown on every case study, like tabs in a design file.
export function ProjectNav({ current }: { current: string }) {
  return (
    <nav className="project-nav" aria-label="Case studies">
      <div className="container">
        <ul>
          {items.map((it) => (
            <li key={it.slug}>
              <Link
                href={`/projects/${it.slug}`}
                aria-current={it.slug === current ? "page" : undefined}
                style={{ "--accent": it.accent } as React.CSSProperties}
              >
                <span className="sw" aria-hidden="true" />
                {it.tab}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
