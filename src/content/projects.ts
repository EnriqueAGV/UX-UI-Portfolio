// Case study content. Each project is a list of typed blocks rendered by
// src/app/projects/[slug]/page.tsx, so adding a section never needs new layout code.
//
// Images live in /public/projects/<folder>/ with the same file names the old site used,
// so the old site's public/ folder can be copied over as-is.

export type Shot = { src: string; alt: string; caption?: string };

export type Block =
  | { kind: "text"; eyebrow?: string; heading: string; body: string[] }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "facts"; heading: string; items: { label: string; value: string }[] }
  | { kind: "problems"; heading: string; items: { title: string; body: string; quote?: string }[] }
  | {
      kind: "insights";
      heading: string;
      items: { title: string; finding: string; decision: string }[];
    }
  | { kind: "principles"; heading: string; items: { title: string; body: string }[] }
  | { kind: "personas"; heading: string; items: { name: string; meta: string; body: string }[] }
  | {
      kind: "modules";
      heading: string;
      items: {
        title: string;
        summary: string;
        features: { title: string; body: string; shot: Shot }[];
      }[];
    }
  | { kind: "steps"; heading: string; items: { title: string; body: string }[] }
  | { kind: "gallery"; heading: string; intro?: string; shots: Shot[] }
  | { kind: "list"; heading: string; intro?: string; items: string[] };

export type Project = {
  slug: string;
  title: string;
  status: "Launched" | "Concept" | "Self-initiated";
  date: string; // Shown as-is, e.g. "May 2024"
  tags: string[];
  cardSummary: string;
  headline: string;
  summary: string;
  cover: Shot;
  // The three lines a recruiter reads before deciding to scroll.
  tldr: { problem: string; role: string; outcome: string };
  meta: { label: string; value: string }[];
  outcomes?: { value: string; label: string }[];
  blocks: Block[];
};

const one = (n: number, alt: string, caption?: string): Shot => ({
  src: `/projects/one/X - ${n}.png`,
  alt,
  caption,
});
const ruta = (file: string, alt: string, caption?: string): Shot => ({
  src: `/projects/ruta-sv/${file}`,
  alt,
  caption,
});
const derma = (file: string, alt: string, caption?: string): Shot => ({
  src: `/projects/dermacare/${file}`,
  alt,
  caption,
});

export const projects: Project[] = [
  {
    slug: "credit-card-onboarding",
    title: "Credit Card Onboarding",
    status: "Launched",
    date: "May 2024",
    tags: ["Fintech", "Mobile", "End-to-end"],
    cardSummary:
      "A digital-first credit card application that turns fear of credit into confident activation. Shipped on iOS and Android.",
    // TODO(Enrique): the old page said both "under 5 minutes" and "~15 min". Put back the
    // real time-to-complete once confirmed; until then the headline avoids the number.
    headline: "Designing a credit card onboarding that earns trust",
    summary:
      "A self-service credit card application for Banco Atlántida built on autonomy, transparency and clear outcomes, so that fear of credit turns into confident activation.",
    cover: one(11, "Approved offer screen showing the customer's credit limit and interest rate"),
    tldr: {
      problem:
        "People avoid credit because they don't trust it. The flow had to replace anxiety with control without weakening fraud prevention or compliance.",
      role: "Lead product designer, discovery to launch. Flows, IA, UX writing, UI, specs and build QA with a PM, a PO and 10 engineers.",
      outcome: "Launched on iOS and Android. NPS of 86 and 46% of applicants reaching a credit decision.",
    },
    meta: [
      // TODO(Enrique): the old page said "Principal Product Designer" but your experience
      // section says "UX/UI Analyst". Recruiters compare these with LinkedIn; pick one framing.
      { label: "Role", value: "Lead Product Designer (UX/UI)" },
      { label: "Team", value: "1 PM, 1 PO, 10 engineers" },
      { label: "Platform", value: "iOS & Android" },
      { label: "Status", value: "Launched" },
    ],
    outcomes: [
      { value: "86", label: "NPS, among the highest for a digital banking experience in El Salvador" },
      { value: "46%", label: "of applicants complete the flow and receive a decision (offer or rejection)" },
      { value: "15", label: "screens covering eligibility, KYC, offer, rewards and card personalization" },
    ],
    blocks: [
      {
        kind: "quote",
        text: "People don't avoid credit because they don't want it. They avoid it because they don't trust it.",
      },
      {
        kind: "text",
        eyebrow: "The challenge",
        heading: "Replace anxiety with control, without loosening security",
        body: [
          "A credit card application stacks the scariest moments in banking into one flow: identity checks, legal terms and an approval decision. On a phone, with nobody to ask, each of those is a point where an anxious applicant gives up.",
          "My job was to design a flow where users feel in charge at every step, while fraud prevention and regulatory requirements stay intact.",
        ],
      },
      {
        kind: "insights",
        heading: "What we learned",
        items: [
          {
            title: "Trust is the primary conversion lever",
            finding:
              "Users associate credit with hidden fees, unauthorized charges and losing control. Anxiety peaks at the identity and terms steps.",
            decision:
              "Show everything upfront (fees, limits, timelines) and make progress and next steps visible at every stage.",
          },
          {
            title: "One flow has to serve very different people",
            finding:
              "Security-first, benefits-driven and skeptical users all go through the same onboarding and all need it to feel safe and simple.",
            decision:
              "Progressive disclosure and adaptive microcopy: reassurance, benefit framing and a way to get help, each at the moment it matters.",
          },
        ],
      },
      {
        kind: "principles",
        heading: "Design principles",
        items: [
          { title: "Control by default", body: "Users feel in charge at every step." },
          { title: "Transparent outcomes", body: "Clear states remove uncertainty, including when the answer is no." },
          { title: "Fast, not rushed", body: "Speed with clarity, never confusion." },
          { title: "Safe & compliant", body: "Fraud prevention that doesn't punish legitimate users." },
        ],
      },
      {
        kind: "modules",
        heading: "The product",
        items: [
          {
            title: "01 · Foundations of trust",
            summary:
              "Set expectations before asking for anything, then verify identity with a biometric-first approach that protects users without slowing them down.",
            features: [
              {
                title: "Predictable start",
                body: "A checklist and a five-step progress indicator answer \"what's next?\" before the user begins, reducing cognitive load and early abandonment.",
                shot: one(1, "Eligibility intro screen with a checklist of what the user needs and a five-step progress indicator"),
              },
              {
                title: "Smart validation",
                body: "Biometric identity verification with real-time guidance on lighting and framing, so most people pass on the first try and the experience feels premium and secure.",
                shot: one(2, "Selfie capture screen guiding the user to frame their face for identity verification"),
              },
            ],
          },
          {
            title: "02 · The credit offer",
            summary:
              "Turn the credit decision into a moment of celebration, with transparent terms and a guided choice of rewards.",
            features: [
              {
                title: "Approved offer",
                // TODO(Enrique): the old copy said a countdown timer "drives conversion". That reads as
                // urgency pressure and contradicts "Fast, not rushed". If the timer reflects a real
                // offer expiry, keep this framing; otherwise consider dropping it.
                body: "Instant decisioning with the credit limit and rate visualized up front. The offer's validity window is shown clearly so nobody is surprised later.",
                shot: one(11, "Approved offer screen showing the credit limit and interest rate"),
              },
              {
                title: "Smart rewards",
                body: "A guided choice between Points, Cashback or Miles, with badges based on spending data to make the trade-off easy.",
                shot: one(13, "Rewards selection screen comparing Points, Cashback and Miles"),
              },
            ],
          },
          {
            title: "03 · Tactile ownership",
            summary: "Make a digital product feel tangible through personalization and clear benefit details.",
            features: [
              {
                title: "Card tailoring",
                body: "A live card preview with color swatches and name options, so the card feels like yours before the physical one arrives.",
                shot: one(15, "Card personalization screen with a live card preview, color swatches and name options"),
              },
              {
                title: "Benefit clarity",
                body: "Contextual reward details explain the why and how of each benefit, supporting long-term engagement rather than a one-time sign-up.",
                shot: one(14, "Benefit details screen explaining how the selected reward works"),
              },
            ],
          },
        ],
      },
      {
        kind: "gallery",
        heading: "The complete flow",
        intro: "All 15 screens, from eligibility to a personalized card.",
        shots: [
          one(1, "Start screen with eligibility check and initial steps", "Start: eligibility check"),
          one(2, "Selfie capture for identity verification", "Identity validation"),
          one(3, "Six-digit one-time code entry for phone verification", "Phone verification"),
          one(4, "Map view with residence address details", "Residence address"),
          one(5, "Email entry form", "Email"),
          one(6, "Personal details form including academic background", "Personal details"),
          one(7, "Employment form with workplace and contract details", "Employment"),
          one(8, "Empty state prompting the user to add references", "References: empty state"),
          one(9, "Bottom sheet for adding a family reference", "Add a family reference"),
          one(10, "List of added personal and family references", "References list"),
          one(11, "Approved offer with exclusive credit limit", "Offer approved"),
          one(12, "Waitlist state for applicants who are not eligible yet", "Offer unavailable"),
          one(13, "Permanent rewards selection", "Choose rewards"),
          one(14, "Detail view of the selected benefits", "Benefit details"),
          one(15, "Card color and name customization", "Personalization"),
        ],
      },
      {
        kind: "list",
        heading: "What I'd do next",
        // TODO(Enrique): replace with your real reflections. Hiring managers read this section
        // closely; one honest trade-off beats three generic lessons.
        items: [
          "Instrument drop-off per step to find where the 54% who don't reach a decision leave, and test fixes on the references step, the longest manual entry in the flow.",
          "Design the rejection and waitlist path as carefully as the approval, so a \"not yet\" still leaves people trusting the bank.",
          "Run an accessibility audit of the KYC steps with screen reader users, where camera-based flows often fail.",
        ],
      },
    ],
  },
  {
    slug: "ruta-sv",
    title: "Ruta SV",
    // TODO(Enrique): is Ruta SV a self-initiated concept, a school project, or in development?
    status: "Self-initiated",
    date: "January 2024",
    tags: ["Mobile", "Accessibility", "Public services"],
    cardSummary:
      "El Salvador had no transit app. Routes lived in people's heads. An accessible, rider-centered app designed for a cash-only bus system.",
    headline: "Designing transit for everyone in El Salvador",
    summary:
      "How accessibility thinking shaped a public transportation app for a country where none existed.",
    cover: ruta("home-screen.png", "Ruta SV home screen with nearby routes and a search bar"),
    tldr: {
      problem:
        "No transit app existed for El Salvador. Payment was cash only, and the only way to learn a route was to ask a stranger.",
      role: "Product designer, end to end: research, flows, design system and high-fidelity UI.",
      outcome:
        "A complete, WCAG 2.1 AA app design and design system grounded in 4 interviews, contextual observation and 28 survey responses.",
    },
    meta: [
      { label: "Role", value: "Product Designer (solo)" },
      { label: "Research", value: "4 interviews · 28 surveys" },
      { label: "Platform", value: "Mobile" },
      { label: "Standard", value: "WCAG 2.1 AA" },
    ],
    outcomes: [
      { value: "0", label: "transit apps existed for El Salvador" },
      { value: "Cash", label: "the only accepted payment on buses" },
      { value: "?", label: "routes known only by asking strangers" },
    ],
    blocks: [
      {
        kind: "text",
        eyebrow: "The challenge",
        heading: "A city's transit system that only exists in people's heads",
        body: [
          "In El Salvador there was no app, map or official source that told you which bus to take. Riders learn routes by asking, paying in cash and hoping the transfer works out.",
          "I set out to design Ruta SV: a transit app that works for a daily commuter, a first-time smartphone user and a screen reader user alike.",
        ],
      },
      {
        kind: "steps",
        heading: "Process",
        items: [
          { title: "Research", body: "4 user interviews, contextual observation at stops and on buses, and 28 survey responses." },
          { title: "Analysis", body: "Competitive analysis of transit apps in similar markets to find patterns that survive informal transit." },
          { title: "Design", body: "User flows, screen specifications and a complete design system." },
          { title: "Accessibility", body: "WCAG 2.1 AA from the first wireframe, with screen reader order and dynamic type planned in." },
        ],
      },
      {
        kind: "personas",
        heading: "Who I designed for",
        items: [
          {
            name: "María, 34",
            meta: "Daily commuter",
            body: "Takes multiple buses to work. Values speed and reliability. Frustrated by payment friction and not knowing whether a transfer will work.",
          },
          {
            name: "Roberto, 67",
            meta: "Occasional traveler",
            body: "Rides to medical appointments. Limited smartphone experience. Needs a simple, forgiving interface with large touch targets.",
          },
          {
            name: "Ana, 28",
            meta: "Accessibility advocate",
            body: "Screen reader user. Tech-savvy but shut out by poorly built apps. Needs full VoiceOver support and a logical navigation order.",
          },
        ],
      },
      {
        kind: "principles",
        heading: "Design principles",
        items: [
          { title: "Accessibility first", body: "Design for constraints, benefit everyone." },
          { title: "Local context", body: "Landmarks, local language and the mental models riders already use." },
          { title: "Progressive complexity", body: "A simple start, with depth when it's needed." },
        ],
      },
      {
        kind: "gallery",
        heading: "The complete experience",
        intro: "From finding a route to boarding with a QR ticket.",
        shots: [
          ruta("home-screen.png", "Home screen with nearby routes and search", "Home"),
          ruta("route-results.png", "Search results listing route options with times and transfers", "Search results"),
          ruta("route-detail.png", "Route detail with stops along the way", "Route detail"),
          ruta("route-map.png", "Live trip view on a map", "Live trip"),
          ruta("home-alert.png", "Home screen showing a service alert", "Alerts"),
          ruta("ticket-purchase.png", "Ticket purchase screen", "Purchase"),
          ruta("my-tickets.png", "List of purchased tickets", "My tickets"),
          ruta("ticket-qr.png", "QR code ticket ready to scan when boarding", "QR ticket"),
        ],
      },
      {
        kind: "principles",
        heading: "An accessible design system",
        items: [
          {
            title: "Salvadoran blue palette",
            body: "Colors drawn from the national flag. Every text pairing meets WCAG 2.1 AA contrast (4.5:1 minimum).",
          },
          {
            title: "Albert Sans, 17sp body",
            body: "Chosen for legibility at small sizes. Captions never go below 13sp, and layouts support dynamic type from 85% to 200%.",
          },
          {
            title: "48dp touch targets",
            body: "Every interactive element meets or exceeds the minimum, with a consistent 12dp corner radius.",
          },
        ],
      },
      {
        kind: "list",
        heading: "What I'd validate next",
        // TODO(Enrique): add what the 4 interviews and 28 surveys actually revealed (one or two
        // concrete findings), and any usability testing you ran. That's the biggest gap here.
        items: [
          "Usability test route search with riders like Roberto, measuring first-try success at finding the right bus.",
          "Test the full purchase flow with VoiceOver and TalkBack users before calling it accessible.",
          "Partner with a route operator to source real schedule data, the hardest problem in informal transit.",
        ],
      },
    ],
  },
  {
    slug: "dermacare",
    title: "DermaCare",
    status: "Concept",
    date: "February 2024",
    tags: ["E-commerce", "Mobile", "Personalization"],
    cardSummary:
      "A skin pharmacy that guides before it sells: a personalized assessment, transparent product matches and plain-language education.",
    headline: "Skincare that starts with understanding, not selling",
    summary:
      "A specialized skin pharmacy experience built on personalized assessment, transparent recommendations and accessible dermatological expertise.",
    cover: derma("07-results.png", "Skin profile results summary with the user's skin type and main concerns"),
    tldr: {
      problem:
        "Shoppers feel overwhelmed, not careless. Thousands of products with conflicting claims and generic best-seller lists lead to wasted money and bad reactions.",
      role: "Product designer, end to end: research synthesis, flows, IA, interaction and visual design, design system.",
      outcome:
        "A concept where a short assessment drives explained product matches, with browsing as a secondary path.",
    },
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Type", value: "Concept" },
      { label: "Platform", value: "iOS & Android" },
      { label: "Focus", value: "Personalized e-commerce" },
    ],
    blocks: [
      {
        kind: "problems",
        heading: "The problem",
        items: [
          {
            title: "Information overload",
            body: "Thousands of products make conflicting claims. People spend hours researching and still don't feel confident.",
            quote: "I've watched 20 videos and I'm more confused than when I started.",
          },
          {
            title: "Generic experiences",
            body: "Stores treat skin type as a single filter and push the same best-sellers to everyone, ignoring concerns, lifestyle, sensitivities and routine.",
            quote: "Every site recommends the same 'best sellers' to everyone.",
          },
          {
            title: "Trust deficit",
            body: "Without professional context, it's hard to separate marketing from efficacy, which leads to wasted money and skin reactions.",
            quote: "I've bought so many products that did nothing or made things worse.",
          },
        ],
      },
      {
        kind: "insights",
        heading: "Key insights",
        items: [
          {
            title: "Overwhelm kills conversion",
            finding: "Choice paralysis leads to abandoned carts or regretted purchases.",
            decision: "Curate first, expand later. Lead with personalized matches and keep browsing as a secondary path.",
          },
          {
            title: "Assessment is an investment, not friction",
            finding: "People will happily spend time on questions when they can see the value coming back.",
            decision: "Progressive disclosure with contextual education: every question teaches something while it collects data.",
          },
        ],
      },
      {
        kind: "steps",
        heading: "The journey",
        items: [
          { title: "Discover", body: "Welcome and category search." },
          { title: "Understand", body: "A short skin assessment: skin type, primary concerns, lifestyle." },
          { title: "Match", body: "A skin profile with recommendations that explain why each product fits." },
          { title: "Shop", body: "Browse and buy with confidence, with ingredients explained in plain language." },
        ],
      },
      {
        kind: "modules",
        heading: "The solution",
        items: [
          {
            title: "Guide before selling",
            summary: "Personalized assessment, transparent matching, confident purchase.",
            features: [
              {
                title: "Skin assessment",
                body: "Learn while you answer. Questions are short, and each one teaches something about your skin.",
                shot: derma("04-skin-type.png", "Assessment question asking the user to pick their skin type, with a short explanation of each type"),
              },
              {
                title: "Your skin profile",
                body: "Results summarize skin type and concerns in plain language before any product is shown.",
                shot: derma("07-results.png", "Skin profile results summary"),
              },
              {
                title: "Product match",
                body: "Every recommendation shows why it's right for you, and ingredients are explained without jargon.",
                shot: derma("09-product-detail.png", "Product detail page explaining why the product matches the user's skin profile"),
              },
            ],
          },
        ],
      },
      {
        kind: "gallery",
        heading: "The complete experience",
        shots: [
          derma("01-welcome.png", "Welcome screen", "Welcome"),
          derma("02-category-search.png", "Category search screen", "Category search"),
          derma("03-assessment-intro.png", "Introduction to the skin assessment", "Assessment intro"),
          derma("04-skin-type.png", "Skin type question", "Skin type"),
          derma("05-concerns.png", "Primary skin concerns question", "Primary concerns"),
          derma("06-lifestyle.png", "Lifestyle factors question", "Lifestyle factors"),
          derma("07-results.png", "Skin profile results summary", "Results summary"),
          derma("08-shop-home.png", "Shop home with personalized picks", "Shop home"),
          derma("09-product-detail.png", "Product detail with match rationale", "Product detail"),
        ],
      },
      {
        kind: "list",
        heading: "How I'd validate this concept",
        // TODO(Enrique): say where the user quotes came from (how many people, how you recruited).
        items: [
          "Test whether a 6-question assessment is completed and trusted: completion rate and how many people act on the first recommendation.",
          "Compare purchase confidence for assessment-led vs browse-led shoppers.",
          "Review recommendation copy with a dermatologist so the product never implies a medical diagnosis.",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
