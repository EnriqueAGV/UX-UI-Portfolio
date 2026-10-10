import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactSection } from "@/components/ContactSection";
import { NextProject } from "@/components/NextProject";
import { ProjectNav } from "@/components/ProjectNav";
import { system } from "@/content/system";

export const metadata: Metadata = {
  title: "Limitless Design System",
  description: system.summary,
  alternates: { canonical: `/projects/${system.slug}` },
};

export default function DesignSystem() {
  const groups = ["Corporate", "Complementary"] as const;
  return (
    <div style={{ "--accent": system.accent } as React.CSSProperties}>
      <ProjectNav current={system.slug} />
      <article className="container">
        <header className="cs-hero">
          <p className="meta-line">
            <span className="sw" aria-hidden="true" />
            Design system · One App
          </p>
          <h1>{system.headline}</h1>
          <p className="lede">{system.summary}</p>
          <dl className="facts">
            {system.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="cs-block" data-reveal aria-labelledby="color-title">
          <div className="sec-h">
            <h2 id="color-title">Color</h2>
            <span className="note">Primitive palettes. ★ marks the base color of each scale.</span>
          </div>
          {groups.map((g) => (
            <div key={g} className="ds-group">
              <h3 className="eyebrow">{g} colors</h3>
              <div className="ds-palettes">
                {system.palettes
                  .filter((p) => p.group === g)
                  .map((p) => (
                    <div className="ds-palette" key={p.name}>
                      <h4>{p.name}</h4>
                      <ul className="ds-scale" aria-label={`${p.name} scale`}>
                        {p.shades.map((hex, i) => (
                          <li key={hex}>
                            <span className="chip" style={{ background: hex }}>
                              {p.base.includes(i) && <span aria-label="Base color">★</span>}
                            </span>
                            <code>{hex.slice(1).toUpperCase()}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <h3 className="eyebrow" style={{ marginTop: 40 }}>
            Semantic roles
          </h3>
          <div className="ds-semantic">
            {system.semantic.map((g) => (
              <div className="ds-semantic-group" key={g.name}>
                <h4>{g.name}</h4>
                <ul>
                  {g.rows.map(([name, hex, token]) => (
                    <li key={name}>
                      <span className="chip" style={{ background: hex }} aria-hidden="true" />
                      <span>{name}</span>
                      <code>{hex}</code>
                      <small>{token}</small>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="cs-block" data-reveal aria-labelledby="type-title">
          <div className="sec-h">
            <h2 id="type-title">Typography</h2>
            <span className="note">Albert Sans, mapped to native text styles so sizes scale with each platform&apos;s accessibility settings.</span>
          </div>
          <div className="table-scroll">
            <table className="ds-type">
              <thead>
                <tr>
                  <th scope="col">One style</th>
                  <th scope="col">Sample</th>
                  <th scope="col">Android</th>
                  <th scope="col">iOS</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Size / line</th>
                </tr>
              </thead>
              <tbody>
                {system.type.map(([name, android, ios, weight, size, lh]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td style={{ fontSize: `${size}px`, fontWeight: weight === "Bold" ? 700 : 400, whiteSpace: "nowrap" }}>Aa Soy un texto</td>
                    <td>{android}</td>
                    <td>{ios}</td>
                    <td>{weight}</td>
                    <td>
                      {size} / {lh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="cs-block" data-reveal aria-labelledby="components-title">
          <div className="sec-h">
            <h2 id="components-title">Components</h2>
            <span className="note">From the One App Figma library.</span>
          </div>
          <div className="ds-components">
            {system.components.map((c) => (
              <figure key={c.title} className="ds-component">
                <div className={`ds-board${"narrow" in c ? " narrow" : ""}`}>
                  <Image src={c.src} alt={c.alt} width={c.width} height={c.height} sizes="(max-width: 1160px) 100vw, 1100px" />
                </div>
                <figcaption>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <NextProject current={system.slug} />
        <p className="back-link">
          <Link href="/projects">← All work</Link>
        </p>
      </article>
      <ContactSection />
    </div>
  );
}
