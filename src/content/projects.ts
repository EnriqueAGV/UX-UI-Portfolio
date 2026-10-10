// Case study content. Every project gets an interactive screen viewer (screens + design
// decisions that jump to a screen) plus optional narrative blocks rendered below it.
// Images live in /public/img.

export type Screen = { src: string; n: string; t: string; d: string };
export type Decision = { t: string; d: string; screen: number };

export type Block =
  | { kind: "text"; eyebrow?: string; heading: string; body: string[] }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "problems"; heading: string; items: { title: string; body: string; quote?: string }[] }
  | { kind: "insights"; heading: string; items: { title: string; finding: string; decision: string }[] }
  | { kind: "principles"; heading: string; items: { title: string; body: string }[] }
  | { kind: "personas"; heading: string; items: { name: string; meta: string; body: string }[] }
  | { kind: "steps"; heading: string; items: { title: string; body: string }[] }
  | { kind: "list"; heading: string; items: string[] };

export type Project = {
  slug: string;
  tab: string; // Short name used in nav and cards
  accent: string;
  status: "Launched" | "Live" | "Self-initiated" | "Concept" | "Design system";
  date?: string;
  tags: string[];
  blurb: string;
  headline: string;
  summary: string;
  frame: "phone" | "browser";
  url?: string; // Shown in the browser frame
  cover?: number; // Index of the screen used on cards (default 0)
  // The three lines a recruiter reads before deciding to scroll.
  tldr: { problem: string; role: string; outcome: string };
  facts: { label: string; value: string }[];
  outcomes?: { value: string; label: string }[];
  // What I did vs. where AI helped. Honest attribution is part of the pitch.
  attribution: { design: string; ai?: string };
  screens: Screen[];
  decisions: Decision[];
  blocks?: Block[];
};

export const projects: Project[] = [
  {
    slug: "credit-card-onboarding",
    tab: "One App",
    accent: "#ff2a4a",
    status: "Launched",
    date: "May 2024",
    tags: ["Fintech", "Mobile", "End-to-end"],
    blurb: "A credit card you apply for with your face, your salary and two references. Shipped on iOS and Android.",
    // TODO(Enrique): the old site said both "under 5 minutes" and "~15 min". Add the real
    // time-to-complete to `outcomes` once confirmed.
    headline: "A credit card application, start to finish",
    summary:
      "A credit card sold entirely through an app for Banco Atlántida. Fifteen screens take someone from first tap to a card in the mail: an ID check, a regulated offer, and then either approval or a waitlist.",
    frame: "phone",
    cover: 10,
    tldr: {
      problem:
        "People avoid credit because they don't trust it. The flow had to replace anxiety with control without weakening fraud prevention or compliance.",
      role: "Product designer, end to end: funnel strategy, flows, all 15 screens, UX writing, the design system and build QA, with a PM, a PO and 10 engineers.",
      outcome: "Launched on iOS and Android with an NPS of 86. 46% of applicants reach a credit decision.",
    },
    facts: [
      // TODO(Enrique): your experience section says "UX/UI Analyst". Recruiters compare this
      // with LinkedIn, so keep the two consistent.
      { label: "Role", value: "Product designer, end to end" },
      { label: "Team", value: "1 PM, 1 PO, 10 engineers" },
      { label: "Platform", value: "iOS & Android" },
      { label: "Status", value: "Launched" },
    ],
    outcomes: [
      { value: "86", label: "NPS, among the highest for a digital banking experience in El Salvador" },
      { value: "46%", label: "of applicants complete the flow and get a decision (offer or waitlist)" },
      { value: "15", label: "screens from eligibility to a personalized card" },
    ],
    attribution: {
      design:
        "The funnel strategy, the user flows, all fifteen screens, the UX writing and the design system underneath, from discovery through implementation QA.",
      ai: "I used AI to check the flow against local digital-banking rules: what has to be disclosed, where consent has to be explicit, and which sentences the regulator actually cares about. That changed some of the copy on the offer and consent screens.",
    },
    screens: [
      { src: "/img/screen-01.jpg", n: "01 · Start", t: "Everything you need, before anything is asked", d: "A checklist of the four things the application will ask for (ID, income, your reward choice, your card color) so nobody hits a blocker halfway through." },
      { src: "/img/screen-02.jpg", n: "02 · Identity", t: "A photo the app coaches you through", d: "Live guidance on lighting, glasses and hats, plus a line saying the selfie isn't stored. The reassurance sits right next to the request." },
      { src: "/img/screen-03.jpg", n: "03 · Phone", t: "A code with its own countdown", d: "Six fields, a visible 59-second expiry and a resend link that's always reachable. You can see exactly how long the code is good for." },
      { src: "/img/screen-04.jpg", n: "04 · Address", t: "A map before a form", d: "Residence starts from a map pin, then narrows: department, municipality, colonia, street. That's the order people here actually give an address in." },
      { src: "/img/screen-05.jpg", n: "05 · Email", t: "One field, one step", d: "Email gets its own screen on purpose. It's the recovery channel for everything that follows, so it shouldn't be buried in a form." },
      { src: "/img/screen-06.jpg", n: "06 · About you", t: "The dense one, made scannable", d: "Civil status, other credit products, education, university, degree. Five inputs on one screen, grouped and ordered so it reads as one topic instead of an interrogation." },
      { src: "/img/screen-07.jpg", n: "07 · Employment", t: "Income, without the paperwork", d: "Employer, start date, contract type, occupation and a company phone. Only the fields a credit decision actually needs." },
      { src: "/img/screen-08.jpg", n: "08 · References", t: "An empty state that shows the shape", d: "Two dashed slots, one family and one personal, so the requirement is understood before anything is typed." },
      { src: "/img/screen-09.jpg", n: "09 · Add reference", t: "Added in a modal", d: "Adding a reference never leaves the step. Country code, phone and relationship, with cancel always available." },
      { src: "/img/screen-10.jpg", n: "10 · References set", t: "Editable after the fact", d: "Both references show as cards with edit and delete. Everything entered so far can be changed until the offer is accepted." },
      { src: "/img/screen-11.jpg", n: "11 · Approved", t: "The whole offer on one screen", d: "Limit, rate and a 15-day expiry together, with the benefits underneath: no hidden charges, and your choice of how to earn rewards." },
      { src: "/img/screen-12.jpg", n: "12 · Waitlist", t: "A no that keeps the door open", d: "When the answer is no, the screen says so plainly, keeps everything already entered, and promises to follow up." },
      { src: "/img/screen-13.jpg", n: "13 · Rewards", t: "Three plans, with the math done", d: "Compras, Ahorro and Viajes, each with a worked example based on realistic spending and a \"most selected\" badge. The choice is permanent, and the screen says so." },
      { src: "/img/screen-14.jpg", n: "14 · Benefit detail", t: "How earning actually works", d: "A sheet that explains how earning works, with restrictions one tap away instead of in fine print at the bottom." },
      { src: "/img/screen-15.jpg", n: "15 · Personalize", t: "The card becomes yours before it ships", d: "Six colorways and the name that gets printed, previewed live." },
    ],
    decisions: [
      { t: "The checklist comes before the form", d: "People abandon when they hit a requirement they can't meet right now. Listing all four up front means they find out on the first screen, not halfway through.", screen: 0 },
      { t: "The progress indicator never disappears", d: "Five steps, always on screen, always showing what's done. When a flow asks for your face and your salary, knowing how much is left matters.", screen: 5 },
      { t: "Reassurance sits next to the ask", d: "\"We will not keep your photo\" goes on the camera screen, where people are actually worried about it. A policy page is too far away.", screen: 1 },
      { t: "The offer is one screen", d: "Limit, rate, expiry and cost together. Splitting them across screens is how products hide the number that matters.", screen: 10 },
      { t: "Design the rejection", d: "The waitlist screen was specified, written and reviewed like any other. Someone turned down today can still become a customer later.", screen: 11 },
      { t: "End on the fun part", d: "After all that scrutiny, the last step is picking a color and the name on your card.", screen: 14 },
    ],
    blocks: [
      { kind: "quote", text: "People don't avoid credit because they don't want it. They avoid it because they don't trust it." },
      {
        kind: "insights",
        heading: "What shaped the flow",
        items: [
          {
            title: "Trust is the primary conversion lever",
            finding: "Users associate credit with hidden fees, unauthorized charges and losing control. Anxiety peaks at the identity and terms steps.",
            decision: "Show everything upfront (fees, limits, timelines) and make progress and next steps visible at every stage.",
          },
          {
            title: "One flow has to serve very different people",
            finding: "Security-first, benefits-driven and skeptical users all go through the same onboarding, and all need it to feel safe and simple.",
            decision: "Progressive disclosure and adaptive microcopy: reassurance, benefit framing and a way to get help, each at the moment it matters.",
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
        kind: "list",
        heading: "What I'd do next",
        // TODO(Enrique): replace with your own reflections. One honest trade-off beats three generic lessons.
        items: [
          "Instrument drop-off per step to find where the 54% who don't reach a decision leave, starting with the references step, the longest manual entry in the flow.",
          "Measure how many waitlisted applicants come back, to prove the rejection design pays off.",
          "Run the KYC steps with screen reader users, where camera-based flows often fail.",
        ],
      },
    ],
  },
  {
    slug: "one-web",
    tab: "One Web",
    accent: "#ff6178",
    status: "Live",
    tags: ["Fintech", "Responsive web", "Marketing site"],
    blurb: "The public site where people compare plans and decide to download. 10K visits a month, 3.5% convert to an app download.",
    headline: "A public site for comparing credit cards",
    summary:
      "A card that launches entirely inside an app still needs a public place to compare plans, read terms and see what happens after you tap download. The site had to sell the card and answer the fine-print questions in the same place.",
    frame: "browser",
    url: "one.bancoatlantida.com.sv",
    tldr: {
      problem: "An app-only card needs a public page that sells it and answers the fine print, without two competing calls to action.",
      role: "Design lead, end to end: information architecture, UX writing, UI and the responsive system.",
      outcome: "10K visits a month, with 3.5% of visitors going on to download the app.",
    },
    facts: [
      { label: "Role", value: "Design lead, end to end" },
      { label: "Platform", value: "Responsive web" },
      { label: "Traffic", value: "10K visits a month" },
      { label: "Conversion", value: "3.5% to app download" },
    ],
    outcomes: [
      { value: "10K", label: "visits a month" },
      { value: "3.5%", label: "of visits convert to an app download" },
      { value: "5", label: "sections, each answering one question a hesitant applicant already has" },
    ],
    attribution: {
      design: "Information architecture, UX writing, UI and the responsive system. Every section answers a question a hesitant applicant is already asking.",
      ai: "None in the site itself. I did use AI to help build this portfolio, working from my direction and my screens.",
    },
    screens: [
      { src: "/img/one-hero.png", n: "01 · Home", t: "The card family is the hero", d: "Six colorways fanned across a red-to-violet gradient, with one promise and one button. You see the card before any copy explains it." },
      { src: "/img/one-loyalty.png", n: "02 · Loyalty plans", t: "Three plans as equals", d: "Identical cards, so the comparison is about the reward, not the layout. Each leads with its earn rate, then what makes it different. The terms sit under the set as a full-width button." },
      { src: "/img/one-cards.png", n: "03 · Card colors", t: "Named, not numbered", d: "Insignia, Verde, Rojo, Negro, Rosado, Blanco. The same options the app offers, shown here before download." },
      { src: "/img/one-installments.png", n: "04 · Installments", t: "Explained with the interface itself", d: "A numbered stepper walks through splitting a purchase into 3 to 36 installments using real app screens, including the note that the final installment can vary." },
      { src: "/img/one-app.png", n: "05 · App page", t: "What customers say about the app", d: "Words customers actually use (rápida, fácil, segura, sin papeleos) scroll past, with three in focus at a time." },
    ],
    decisions: [
      { t: "One decision per section", d: "Never two competing calls to action on the same screenful. Each section does one job and hands you to the next.", screen: 0 },
      { t: "Show the product instead of describing it", d: "The installments explainer uses real app screens with real selection states, so people see exactly what they'll tap.", screen: 3 },
      { t: "Terms are a button, not fine print", d: "Full-width, directly under the plans they apply to. The same transparency as the onboarding flow, carried into the marketing site.", screen: 1 },
      { t: "Preview the choice before the commitment", d: "Showing the six colorways here means the personalization step in the app confirms a choice people have already made.", screen: 2 },
    ],
  },
  {
    slug: "ruta-sv",
    tab: "Ruta SV",
    accent: "#6f9cff",
    // TODO(Enrique): is Ruta SV self-initiated, a school project, or in development?
    status: "Self-initiated",
    date: "January 2024",
    tags: ["Mobile", "Accessibility", "Public services"],
    blurb: "Route planning and tickets for a bus network that had no digital information. Designed to WCAG 2.1 AA from the first screen.",
    headline: "Accessible bus routes across El Salvador",
    summary:
      "El Salvador had no digital route information, cash-only fares and a network you could only learn by asking a stranger which bus to take. Without route data you can't plan a trip, and without digital fares every ride means carrying cash.",
    frame: "phone",
    tldr: {
      problem: "No transit app existed for El Salvador. Fares were cash only, and the only way to learn a route was to ask a stranger.",
      role: "Product designer, end to end: research, personas, all eight screens, the palette and the accessibility targets.",
      outcome: "A complete WCAG 2.1 AA app and design system, grounded in interviews, surveys and riding the routes myself.",
    },
    facts: [
      { label: "Research", value: "4 interviews · 28 surveys" },
      { label: "Platform", value: "Consumer mobile" },
      { label: "Standard", value: "WCAG 2.1 AA" },
    ],
    outcomes: [
      { value: "0", label: "transit apps existed for El Salvador" },
      { value: "4.5:1", label: "minimum contrast on every text pairing" },
      { value: "48dp", label: "minimum touch target, with type scaling from 85% to 200%" },
    ],
    attribution: {
      design: "Research (four interviews, 28 survey responses and riding the routes myself), then the personas, all eight screens, a palette drawn from the national flag, and the accessibility targets the system had to meet.",
      ai: "After I set the token rules and contrast targets, I used AI to generate the repetitive component states from them.",
    },
    screens: [
      { src: "/img/home-screen.jpg", n: "01 · Home", t: "Recent trips before anything else", d: "Most journeys are repeats. Saved trips and favorites sit above the search field, so the common case takes one tap." },
      { src: "/img/route-results.jpg", n: "02 · Results", t: "Time, fare and transfers on one row", d: "When one route costs $0.35 and another $1.20, most riders pick on price. Every result shows fare, time, transfers and how far you walk." },
      { src: "/img/route-detail.jpg", n: "03 · Route detail", t: "Walk, board, ride, get off", d: "The whole journey as a timeline with named stops and real minutes, so you can follow the trip before it starts, or have it read aloud." },
      { src: "/img/home-alert.jpg", n: "04 · Service alert", t: "Disruption on top, trip still readable", d: "An alert about roadworks on route 24-A sits above the active journey without replacing it. You can dismiss it, and the trip stays on screen either way." },
      { src: "/img/ticket-purchase.jpg", n: "05 · Buy a ticket", t: "Cash still works", d: "Single fare, day pass or weekly on one screen, with paying at the terminal shown next to the card option." },
      { src: "/img/my-tickets.jpg", n: "06 · My tickets", t: "Time remaining, not just status", d: "Active, unused and past tickets, each showing what's left: 30 minutes, 2 days, 8 days. That's the number people actually need." },
      { src: "/img/ticket-qr.jpg", n: "07 · QR ticket", t: "The app asks for full brightness", d: "A ticket that won't scan in Salvadoran sunlight isn't a ticket. The screen asks for maximum brightness because the bus isn't going to wait." },
      { src: "/img/route-map.jpg", n: "08 · Live trip", t: "Where the bus is, and when it reaches you", d: "The active journey collapses to origin, destination and an arrival estimate you can read at a glance while standing on a bus." },
    ],
    decisions: [
      { t: "Accessibility was a starting constraint", d: "4.5:1 contrast, 48dp touch targets and type scaling from 85% to 200% were requirements from the first screen, not fixes after a review.", screen: 2 },
      { t: "Endpoints are places people say out loud", d: "Parque Nacional de Santa Tecla, Metrocentro. Route codes are how the system thinks, but landmarks are how people here give directions.", screen: 1 },
      { t: "Fare is a first-class result", d: "For most riders the cheapest trip wins, so price sits next to duration on every option.", screen: 1 },
      { t: "Blue from the flag, checked for contrast", d: "The palette starts from the national flag. I adjusted the blues until they passed 4.5:1 instead of dropping them.", screen: 0 },
      { t: "Design for the person who cannot see it", d: "Ana, one of three personas, uses a screen reader. The route detail had to make sense read aloud, step by step.", screen: 2 },
      { t: "Sunlight is a requirement", d: "The brightness prompt on the QR screen came from riding the routes myself. I wouldn't have caught it from a desk.", screen: 6 },
    ],
    blocks: [
      {
        kind: "personas",
        heading: "Who I designed for",
        items: [
          { name: "María, 34", meta: "Daily commuter", body: "Takes multiple buses to work. Values speed and reliability. Frustrated by payment friction and not knowing whether a transfer will work." },
          { name: "Roberto, 67", meta: "Occasional traveler", body: "Rides to medical appointments. Limited smartphone experience. Needs a simple, forgiving interface with large touch targets." },
          { name: "Ana, 28", meta: "Accessibility advocate", body: "Screen reader user. Tech-savvy but shut out by poorly built apps. Needs full VoiceOver support and a logical navigation order." },
        ],
      },
      {
        kind: "list",
        heading: "What I'd validate next",
        // TODO(Enrique): add one or two concrete things the interviews and surveys revealed.
        items: [
          "Usability test route search with riders like Roberto, measuring first-try success at finding the right bus.",
          "Test the full purchase flow with VoiceOver and TalkBack users before calling it accessible.",
          "Partner with a route operator for real schedule data, the hardest problem in informal transit.",
        ],
      },
    ],
  },
  {
    slug: "dermacare",
    tab: "DermaCare",
    accent: "#79c99a",
    status: "Concept",
    date: "February 2024",
    tags: ["E-commerce", "Mobile", "Personalization"],
    blurb: "A skincare concept that asks about your skin before it shows you products, and explains why each one matched.",
    headline: "Skincare recommendations that explain themselves",
    summary:
      "A skin pharmacy app that asks about your skin before it shows you products. A short assessment turns your skin type, concerns and habits into recommendations, and each product page says why it matched.",
    frame: "phone",
    cover: 6,
    tldr: {
      problem: "Shoppers feel overwhelmed, not careless. Conflicting claims and generic best-seller lists lead to wasted money and bad reactions.",
      role: "Product designer, end to end: interviews, flows, information architecture, interaction and visual design, and a small design system.",
      outcome: "A concept where a short assessment drives explained product matches, with the full catalog one step away.",
    },
    facts: [
      { label: "Role", value: "Product designer, end to end" },
      { label: "Research", value: "2 dermatologists · 3 skincare users" },
      { label: "Platform", value: "iOS / Android" },
      { label: "Type", value: "Concept project" },
    ],
    attribution: {
      design: "I interviewed two dermatologists and three people who are into skincare, then designed the flows, information architecture, interaction and visual design, and a small design system. It's a concept project, not a shipped product.",
    },
    screens: [
      { src: "/img/dermacare/01-welcome.png", n: "01 · Welcome", t: "Guidance first, shopping second", d: "The app opens by asking about you instead of showing a catalog." },
      { src: "/img/dermacare/02-category-search.png", n: "02 · Category search", t: "Or browse by category", d: "People who already know what they want can skip the assessment and go straight to a category." },
      { src: "/img/dermacare/03-assessment-intro.png", n: "03 · Assessment", t: "What the assessment is for", d: "A short intro explains what the questions are for and what you get at the end." },
      { src: "/img/dermacare/04-skin-type.png", n: "04 · Skin type", t: "Skin type first", d: "One question per screen, starting with the one most people can answer quickly." },
      { src: "/img/dermacare/05-concerns.png", n: "05 · Concerns", t: "Your main concerns", d: "Two people with the same skin type can need very different products, so concerns are asked separately." },
      { src: "/img/dermacare/06-lifestyle.png", n: "06 · Lifestyle", t: "Lifestyle", d: "Lifestyle questions round out the profile, since skin type alone doesn't say enough." },
      { src: "/img/dermacare/07-results.png", n: "07 · Skin profile", t: "Your skin profile", d: "Your answers summarized as a profile, with the products that match it." },
      { src: "/img/dermacare/08-shop-home.png", n: "08 · Shop", t: "Matches first", d: "Your matches come first. The full catalog is still there below them." },
      { src: "/img/dermacare/09-product-detail.png", n: "09 · Product detail", t: "Why this product matched", d: "The product page explains the match and translates the ingredient list into plain language." },
    ],
    decisions: [
      { t: "Too many choices, too little context", d: "Conflicting claims and endless options leave people unsure what to buy. The app shows a short list of matches first and keeps the full catalog one step away.", screen: 6 },
      { t: "Make the questions worth answering", d: "People will answer questions when they can see why they're being asked. Each step comes with a short line explaining what it changes in the results.", screen: 2 },
    ],
    blocks: [
      {
        kind: "problems",
        heading: "What I heard",
        items: [
          { title: "Information overload", body: "Thousands of products make conflicting claims. People spend hours researching and still don't feel confident.", quote: "I've watched 20 videos and I'm more confused than when I started." },
          { title: "Generic experiences", body: "Stores treat skin type as a single filter and push the same best-sellers to everyone, ignoring concerns, lifestyle and sensitivities.", quote: "Every site recommends the same 'best sellers' to everyone." },
          { title: "Trust deficit", body: "Without professional context, it's hard to separate marketing from efficacy, which leads to wasted money and skin reactions.", quote: "I've bought so many products that did nothing or made things worse." },
        ],
      },
      {
        kind: "list",
        heading: "How I'd validate this concept",
        items: [
          "Test whether the assessment is completed and trusted: completion rate, and how many people act on the first recommendation.",
          "Compare purchase confidence for assessment-led vs browse-led shoppers.",
          "Review recommendation copy with a dermatologist so the product never implies a medical diagnosis.",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
