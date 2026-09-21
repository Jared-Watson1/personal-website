export interface AboutFact {
  label: string;
  value: string;
  /** When set, `linkText` inside `value` becomes a link */
  href?: string;
  linkText?: string;
}

export const ABOUT = {
  lead: "I build AI systems that hold up in production and make sense to the people using them.",
  facts: [
    { label: "Education", value: "Computer Science, Emory University, 2025" },
    { label: "Hometown", value: "Tampa, Florida" },
    { label: "Startup", value: "Cure AI, junior year" },
    {
      label: "Patent",
      value: "US 11,971,914, AI query processing",
      href: "https://patents.justia.com/patent/11971914",
      linkText: "US 11,971,914",
    },
    { label: "Now", value: "AI Engineer, SMART" },
  ] satisfies AboutFact[],
  body: [
    "I grew up in Tampa, Florida, and started programming in high school. Python was my first language, and it led me to study computer science at Emory University in Atlanta, where I graduated in 2025.",
    "At Emory I kept building things outside of class. In my junior year that work became my first startup, Cure AI, a research tool that answers scientific questions from 26 million peer-reviewed articles with full citations. The retrieval method behind it was later granted a patent.",
    "Today I’m an AI Engineer at SMART, where I work on the company’s AI chat service and graph-based features. In my free time I’m building Pyx.",
  ],
};

export const EXPERIENCE_LEAD =
  "Two internships, a startup, and a full-time AI engineering role.";
