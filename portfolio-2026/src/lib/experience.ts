export interface ExperienceEntry {
  company: string;
  title: string;
  /** Date range using an en dash */
  dates: string;
  current?: boolean;
  summary: string;
}

/** Newest first, sorted by start date. */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "SMART",
    title: "AI Engineer",
    dates: "Jun 2025 – Present",
    current: true,
    summary:
      "Develop SMART’s AI chat service and graph-based features, including the retrieval and model layer behind conversations and its integration with the company’s data graph.",
  },
  {
    company: "Cure AI",
    title: "Founder",
    dates: "2023 – 2024",
    summary:
      "Founded during junior year at Emory. Designed and built the retrieval system and product, launched on Product Hunt as Product of the Day, and secured a patent for the query-processing method.",
  },
  {
    company: "AMNI",
    title: "Software Engineer Intern",
    dates: "Jun 2023 – Aug 2023",
    summary:
      "Built a full stack AI chatbot platform on the OpenAI API and a vector database that lets users ask questions about large sets of regulatory documents and receive answers grounded in the source text.",
  },
  {
    company: "Synapse Florida",
    title: "Technology Intern",
    dates: "May 2022 – Aug 2022",
    summary:
      "Built a statewide WordPress calendar that automatically gathers and publishes technology events across Florida, integrated Typeform and HubSpot CRM, and handled data parsing with pandas.",
  },
];
