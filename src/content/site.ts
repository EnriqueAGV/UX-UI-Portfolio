// Everything a recruiter reads outside the case studies lives here.
// Edit copy in this file; the pages pick it up automatically.

export const site = {
  name: "Enrique García",
  role: "Product Designer",
  url: "https://enriqueagv.com",
  email: "contact@enriqueagv.com",
  resume: "/Resume_Enrique_Garcia.pdf",
  location: "El Salvador",
  // Shown in the hero. Set to null to hide the badge.
  availability: "Open to product design roles",
  description:
    "Enrique García is a product designer for fintech and public services in El Salvador. Case studies on a launched credit card app, its public site and design system, accessible transit and personalized e-commerce.",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/enrique-agv/" },
    { label: "GitHub", href: "https://github.com/EnriqueAGV" },
    { label: "X", href: "https://x.com/enrique_garciav" },
  ],
};

export const hero = {
  eyebrow: "Product Designer · Fintech & public services",
  headline: "I design products people trust with their money and their day.",
  intro:
    "I lead end-to-end UX/UI for retail banking at Banco Atlántida, where I designed the bank's digital credit card onboarding: launched on iOS and Android with an NPS of 86. I work best on complex, regulated products where clarity is the feature.",
  proof: [
    { value: "86", label: "NPS on the credit card onboarding I led" },
    { value: "3.5%", label: "of 10K monthly visits convert to app downloads on One Web" },
    { value: "6+", label: "years designing digital products" },
  ],
};

export const about = {
  heading: "Designer, builder, and stubborn about clarity.",
  paragraphs: [
    "Good design isn't about pixel-perfect screens. It's about making hard things feel effortless: a loan decision, a bus transfer, a skincare routine. I start from what people are afraid of or confused by, and design the product so that fear has nowhere to live.",
    "I'm comfortable across the whole lifecycle, from interviews and flows to design systems, UX writing and build QA with engineers. I use AI to move faster on exploration and prototyping, never as a replacement for talking to users or making the call.",
  ],
  skills: [
    "User research",
    "Product strategy",
    "Interaction design",
    "Design systems",
    "UX writing",
    "Accessibility (WCAG 2.1 AA)",
    "Prototyping",
    "Developer handoff & QA",
  ],
  // TODO(Enrique): confirm this list matches what you actually use.
  tools: ["Figma", "FigJam", "Next.js / React"],
};

export const experience = [
  {
    period: "2023 – Present",
    role: "UX/UI Analyst",
    company: "Banco Atlántida",
    summary:
      "Lead end-to-end UX/UI for core retail banking products. Built cross-brand design systems and led mobile app design from concept to launch, including the digital credit card onboarding.",
  },
  {
    period: "2020 – 2023",
    role: "UX/UI Designer",
    company: "BlueStar",
    summary:
      "Owned the full product design lifecycle for client products, from user research and prototyping to developer handoff.",
  },
  {
    period: "2022",
    role: "Web Designer (Internship)",
    company: "Ministry of Economy, El Salvador",
    summary: "Designed internal pages for a major government website.",
  },
];

export const contact = {
  heading: "Hiring for a product where design really matters?",
  body: "I'm looking for my next product design role. Email is the fastest way to reach me.",
};
