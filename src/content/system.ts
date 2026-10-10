// Limitless Design System: the system behind One App. Values copied from the Figma library.

export const system = {
  slug: "limitless-design-system",
  tab: "Limitless DS",
  accent: "#a08cff",
  headline: "Limitless Design System",
  summary:
    "The design system behind One App: primitive and semantic color, an Albert Sans type scale mapped to iOS and Android, and the component library the team builds with. The documentation is in Spanish, the team's working language.",
  facts: [
    { label: "Product", value: "One App · Banco Atlántida" },
    { label: "Version", value: "V1.0" },
    { label: "Platforms", value: "iOS, Android & web" },
    { label: "Scope", value: "Color, type, components" },
  ],
  palettes: [
    { name: "One red", group: "Corporate", shades: ["#ffeced", "#ffc3c6", "#ff868f", "#ff2a4a", "#c5002d", "#85001b", "#4b000b"], base: [3] },
    { name: "Dark blue", group: "Corporate", shades: ["#eff0f6", "#c7cbde", "#9ca4c5", "#727eab", "#515b80", "#333a54", "#181c2b"], base: [6] },
    { name: "Gray", group: "Corporate", shades: ["#ebecef", "#c1c5ce", "#989fad", "#737a87", "#525760", "#31353d", "#16181c"], base: [0, 1, 2] },
    { name: "Blue gray", group: "Complementary", shades: ["#e9effb", "#afc8f0", "#6ca3e6", "#497db9", "#325a86", "#1d3856", "#0b192a"], base: [1] },
    { name: "Violet", group: "Complementary", shades: ["#e7cdff", "#d297ff", "#c156ff", "#a300e1", "#6f009b", "#3f005b", "#210032"], base: [3] },
    { name: "Magenta", group: "Complementary", shades: ["#fddff7", "#fba3eb", "#f856e1", "#cd23b8", "#931683", "#5c0a52", "#2b0225"], base: [2] },
    { name: "Ultra violet", group: "Complementary", shades: ["#f2efff", "#d7cbff", "#b69bff", "#9966ff", "#800aff", "#5600b0", "#2e0065"], base: [3] },
    { name: "Green", group: "Complementary", shades: ["#6dfdc7", "#37d4a0", "#2aa97f", "#1d8060", "#125a42", "#073626", "#01140d"], base: [1] },
    { name: "Sage", group: "Complementary", shades: ["#e2f5f2", "#b9dcd7", "#97b3af", "#758d89", "#566865", "#384543", "#1d2524"], base: [1] },
    { name: "Eraser pink", group: "Complementary", shades: ["#ffebf7", "#ffb4e2", "#ff6ed0", "#eb00b5", "#ac0084", "#710056", "#3c002c"], base: [1] },
    { name: "Yellow", group: "Complementary", shades: ["#ffe65e", "#d6be00", "#ab9800", "#827300", "#5b5000", "#373000", "#161200"], base: [0] },
    { name: "Orange", group: "Complementary", shades: ["#ffede9", "#ffbaa7", "#ff7f40", "#cf5c00", "#974100", "#632800", "#331100"], base: [2] },
  ],
  semantic: [
    {
      name: "Background",
      rows: [
        ["Canvas", "#ffffff", "Neutral / White"],
        ["Surface", "#ebecef", "Gray / 50"],
        ["Error", "#ff7f40", "Orange / 200"],
        ["Success", "#37d4a0", "Green / 100"],
        ["Disabled", "#c1c5ce", "Gray / 100"],
        ["Brand primary", "#ff2a4a", "One red / 400"],
        ["Brand secondary", "#181c2b", "Dark blue / 700"],
      ],
    },
    {
      name: "Primary action",
      rows: [
        ["Default", "#ff2a4a", "One red / 400"],
        ["Accent", "#c5002d", "One red / 500"],
        ["Disabled", "#ffc3c6", "One red / 200"],
      ],
    },
    {
      name: "Borders & dividers",
      rows: [
        ["Default", "#ebecef", "Gray / 50"],
        ["Strong", "#c1c5ce", "Gray / 200"],
        ["Selected", "#515b80", "Dark blue / 500"],
        ["Focus", "#181c2b", "Dark blue / 700"],
        ["Error", "#ff7f40", "Orange / 200"],
      ],
    },
  ],
  // [One name, Android, iOS, weight, size, line height]
  type: [
    ["Display", "Headline large", "Large title", "Regular", "34", "41"],
    ["Heading 1", "Headline medium", "Title 1", "Regular", "28", "34"],
    ["Heading 2", "Headline small", "Title 2", "Regular", "22", "28"],
    ["Heading 3", "Title large", "Title 3", "Regular", "20", "25"],
    ["Destacado", "Title medium", "Headline", "Bold", "17", "22"],
    ["Base", "Body large", "Body", "Regular", "17", "22"],
    ["Pequeño", "Label large", "Subhead", "Regular", "15", "20"],
    ["Informativo", "Label medium", "Footnote", "Regular", "13", "18"],
    ["Extrapequeño", "Label small", "Caption 1", "Regular", "12", "16"],
  ],
  components: [
    {
      title: "Buttons",
      body: "Primary, secondary, tertiary and action variants, each in default, pressed and disabled states, in two sizes.",
      src: "/img/figma/button-gallery.png",
      width: 2080,
      height: 984,
      alt: "Primary, secondary and tertiary button variants in different sizes and states",
    },
    {
      title: "Inputs",
      body: "Text, list, phone and verification-code inputs, covering default, focused, filled, error, disabled, loading and expired states.",
      src: "/img/figma/input-gallery.png",
      width: 2998,
      height: 1368,
      alt: "Text and select fields in default, focused, error and disabled states",
    },
    {
      title: "Pop-ups",
      body: "For decisions that block the flow, never as an announcement. One, two and three-button layouts plus a custom consent dialog.",
      src: "/img/figma/popup-component-gallery.png",
      width: 2642,
      height: 2832,
      narrow: true,
      alt: "Matrix of warning, error and confirmation dialog states",
    },
  ],
};
