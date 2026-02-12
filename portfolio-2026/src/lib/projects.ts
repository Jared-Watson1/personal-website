export interface ProjectAsset {
  src: string;
  alt: string;
  type: "image" | "video";
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  websiteUrl?: string;
  githubUrl?: string;
  tech: string[];
  heroAsset?: ProjectAsset;
  assets: ProjectAsset[];
  placeholderIcon?: string;
  productHuntUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "cure-ai",
    title: "Cure AI",
    category: "AI / Research",
    year: "2024",
    description:
      "AI-driven platform streamlining scientific research with evidence-based insights from 26M+ peer-reviewed articles.",
    overview:
      "Cure AI transforms complex scientific searches into simple questions, accessing over 26 million pieces of peer-reviewed literature. The platform uses patented technology to ensure reliable, accurate AI responses for critical research use cases. Features include natural language queries, verified responses backed by rigorous literature verification, seamless literature navigation, quick citation functionality, and advanced search parameters for precise results.",
    websiteUrl: "https://www.askcureai.com",
    githubUrl: undefined,
    tech: [
      "React",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Stripe",
      "Pinecone",
      "OpenAI API",
      "Vercel",
      "Neon",
    ],
    heroAsset: {
      src: "/projects/cure-ss.png",
      alt: "Cure AI dashboard screenshot",
      type: "image",
    },
    assets: [
      {
        src: "/projects/cure-demo-vid.mp4",
        alt: "Cure AI demo video",
        type: "video",
      },
      {
        src: "/projects/cure_ss_6-9-24.png",
        alt: "Cure AI interface screenshot",
        type: "image",
      },
      {
        src: "/projects/cure-ss-popup-8.15.jpeg",
        alt: "Cure AI source popup",
        type: "image",
      },
      {
        src: "/projects/cure_ss_sourcepopup-7-9-24.png",
        alt: "Cure AI source verification popup",
        type: "image",
      },
    ],
    productHuntUrl: "https://www.producthunt.com/posts/cure-ai-2",
  },
  {
    slug: "us-wildfire-analysis",
    title: "U.S. Wildfire Analysis",
    category: "Data Science",
    year: "2024",
    description:
      "Analyzed 1.88M+ U.S. wildfire records to identify spatial clusters, seasonal peaks, and predict containment times.",
    overview:
      "This project analyzed 1.88 million U.S. wildfire records from 1992 to 2015 using the FPA-FOD dataset. The analysis identified spatial clusters in western states and Alaska, seasonal peaks during summer months, and built predictive models for containment times. Data was cleaned, normalized, and processed using pandas and NumPy, with Gradient Boosted Trees achieving the best predictive performance (R² = 0.4516). Evaluation metrics included RMSE, MAE, and R².",
    githubUrl: "https://github.com/Jared-Watson1/CS470",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
    heroAsset: {
      src: "/projects/largest-fires.png",
      alt: "Map of 10,000 largest U.S. wildfires from 1992 to 2015",
      type: "image",
    },
    assets: [
      {
        src: "/projects/counties.png",
        alt: "Wildfire occurrences by U.S. county",
        type: "image",
      },
      {
        src: "/projects/temporal-density.png",
        alt: "Temporal density of wildfire discovery and containment",
        type: "image",
      },
    ],
  },
  {
    slug: "loan-default-prediction",
    title: "Loan Default Prediction",
    category: "Machine Learning",
    year: "2024",
    description:
      "Assessing fairness in loan approvals using ML models trained on the Lending Club dataset with 890K+ applications.",
    overview:
      "This project assessed fairness in loan approvals by training KNN, Decision Tree, and Logistic Regression models on the Lending Club dataset containing over 890,000 applications and 200+ attributes. The analysis tested for bias in loan approvals and found that removing bias features had minimal impact on model accuracy. The project explored the tradeoffs between predictive performance and equitable outcomes across demographic groups.",
    githubUrl: "https://github.com/Jared-Watson1/loan-default-prediction",
    tech: ["Python", "scikit-learn", "pandas"],
    placeholderIcon: "BarChart3",
    assets: [],
  },
  {
    slug: "dooleyafavor",
    title: "DooleyAFavor",
    category: "Full Stack",
    year: "2023",
    description:
      "Peer-to-peer platform connecting Emory students to complete tasks and earn money.",
    overview:
      "DooleyAFavor is a peer-to-peer platform connecting Emory University students to complete tasks and earn money. As project lead, responsibilities included system design, sprint planning, team communication, and weekly progress updates. The backend was built with Python and Flask, featuring task and user management APIs, with PostgreSQL handling secure data storage on ElephantSQL and deployment on Heroku.",
    githubUrl: "https://github.com/Jared-Watson1/DooleyAFavor",
    tech: ["Node.js", "Python", "Flask", "PostgreSQL", "Heroku"],
    heroAsset: {
      src: "/projects/dooley-ss1.png",
      alt: "DooleyAFavor platform screenshot",
      type: "image",
    },
    assets: [
      {
        src: "/projects/dooley-ss2.png",
        alt: "DooleyAFavor task listing view",
        type: "image",
      },
    ],
  },
  {
    slug: "dodge",
    title: "Dodge",
    category: "Game Dev",
    year: "2022",
    description:
      "2D game featuring custom AI enemy behavior, physics-based collision detection, and particle systems.",
    overview:
      "Dodge is a solo-developed 2D game showcasing advanced object-oriented programming and AI techniques. The game features modular classes for enemies, players, power-ups, and GUI elements. Custom AI calculates velocities for enemy collision with the player, while physics-based collision detection handles interactions between 2D squares and bullets. A particle system triggers visual effects after collisions.",
    githubUrl: "https://github.com/Jared-Watson1/Dodge",
    tech: ["Python", "Pygame"],
    heroAsset: {
      src: "/projects/dodge-demo.mp4",
      alt: "Dodge gameplay demo",
      type: "video",
    },
    assets: [],
  },
];
