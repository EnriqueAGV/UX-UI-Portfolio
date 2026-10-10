import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product design case studies by Enrique García: a launched credit card onboarding, an accessible transit app for El Salvador, and a personalized skincare pharmacy.",
  alternates: { canonical: "/projects" },
};

export default function WorkPage() {
  return (
    <>
      <section className="cs-hero">
        <div className="container">
          <p className="eyebrow">Selected work</p>
          <h1>Projects where design made the difference.</h1>
          <p className="lede">
            I've worked across finance, healthcare and public services. These three show how I go from a messy,
            high-stakes problem to a shipped or ship-ready product.
          </p>
        </div>
      </section>
      <section className="container" aria-label="Case studies">
        <ul className="project-list">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i === 0} />
          ))}
        </ul>
      </section>
      <ContactSection />
    </>
  );
}
