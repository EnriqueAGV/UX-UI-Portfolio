import Link from "next/link";
import { projects } from "@/content/projects";
import { system } from "@/content/system";

const order = [
  ...projects.map((p) => ({ slug: p.slug, tab: p.tab, blurb: p.blurb, accent: p.accent })),
  { slug: system.slug, tab: system.tab, blurb: "The design system behind One App: color, type and components.", accent: system.accent },
];

export function NextProject({ current }: { current: string }) {
  const next = order[(order.findIndex((p) => p.slug === current) + 1) % order.length];
  return (
    <aside className="next-project" aria-label="Next case study" style={{ "--accent": next.accent } as React.CSSProperties}>
      <div>
        <p className="eyebrow">Next project</p>
        <h2>
          <Link href={`/projects/${next.slug}`}>{next.tab}</Link>
        </h2>
        <p>{next.blurb}</p>
      </div>
      <span className="arr" aria-hidden="true">
        →
      </span>
    </aside>
  );
}
