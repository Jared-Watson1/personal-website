export interface ProjectAsset {
  src: string;
  alt: string;
  type: "image" | "video";
  caption?: string;
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
  productHuntUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "pyx",
    title: "Pyx",
    category: "Desktop App / Fintech",
    year: "2026",
    description:
      "A local-first desktop app, built in Rust, that turns a self-directed investor's brokerage accounts into a fast, private, GPU-accelerated portfolio dashboard with nothing leaving the machine.",
    overview:
      "Pyx is a local-first desktop app that gives self-directed investors a fast, private dashboard for their entire portfolio. It aggregates holdings and transactions across brokerage and retirement accounts, pulls live market data, and visualizes allocation, performance, and ad-hoc ticker comparisons without sending any user data off the machine. The app is built in Rust on a hexagonal architecture: a pure, I/O-free domain core for all portfolio and returns math, an adapter layer integrating Plaid, Yahoo Finance, and OFX/CSV imports, and a GPU-accelerated interface on Floem and wgpu that holds 60fps while scrolling years of daily price history. Every portfolio lives in an encrypted SQLite database with credentials held in the OS keychain, and a strict network allowlist keeps all outbound traffic auditable. Custom chart rendering, full-text symbol search via Tantivy, and a layered TOML configuration system bring power-user tooling to the desktop with no cloud dependency. It ships from a single codebase to macOS, Windows, and Linux, with a companion marketing site built separately in React and Tailwind.",
    websiteUrl: "https://pyx.finance",
    githubUrl: undefined,
    tech: [
      "Rust",
      "Floem",
      "wgpu",
      "tokio",
      "SQLite",
      "sqlx",
      "Plaid API",
      "Tantivy",
      "React",
      "Tailwind CSS",
    ],
    heroAsset: {
      src: "/projects/pyx-mockup.svg",
      alt: "Pyx desktop app overview dashboard mockup",
      type: "image",
    },
    assets: [],
  },
  {
    slug: "cure-ai",
    title: "Cure AI",
    category: "AI / Research",
    year: "2024",
    description:
      "An AI research tool that answers scientific questions using 26M+ peer-reviewed articles with full citations.",
    overview:
      "Cure AI lets researchers ask scientific questions in plain language and get answers backed by over 26 million peer-reviewed articles. The retrieval system is built on patented technology that finds and ranks relevant papers, so the answers are grounded in real literature rather than general knowledge. Users can filter by journal, date range, and other parameters to narrow results. Every answer includes inline citations that link directly to the source paper, and users can quickly jump between related studies or export citations. The frontend is React, the backend is FastAPI, vector search runs on Pinecone, and language processing uses the OpenAI API. Cure AI was awarded Product of the Day on Product Hunt.",
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
      src: "/projects/cure-demo-vid.mp4",
      alt: "Cure AI demo video",
      type: "video",
    },
    assets: [],
    productHuntUrl: "https://www.producthunt.com/posts/cure-ai-2",
  },
  {
    slug: "us-wildfire-analysis",
    title: "U.S. Wildfire Analysis",
    category: "Data Science",
    year: "2024",
    description:
      "A data science project exploring 1.88M+ U.S. wildfire records to find geographic patterns and predict containment times.",
    overview:
      "This project looked at 1.88 million U.S. wildfire records from 1992 to 2015 using the FPA-FOD dataset. The spatial analysis showed that large wildfires tend to cluster heavily in the western states and Alaska. Looking at timing, most fires peak during summer months, and most are contained within the first few days. Several regression models were trained to predict how long a fire would take to contain, with Gradient Boosted Trees performing best (R\u00B2 = 0.4516). The data pipeline handled cleaning, normalization, and feature encoding with pandas and NumPy, and all models were compared using RMSE, MAE, and R\u00B2.",
    githubUrl: "https://github.com/Jared-Watson1/CS470",
    tech: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
    heroAsset: {
      src: "/projects/largest-fires.png",
      alt: "Map of 10,000 largest U.S. wildfires from 1992 to 2015",
      type: "image",
      caption:
        "Bubble map of the 10,000 largest U.S. fires from 1992 to 2015, color-coded by acreage. The western states and Alaska show the highest concentration of large-scale wildfires.",
    },
    assets: [
      {
        src: "/projects/counties.png",
        alt: "Wildfire occurrences by U.S. county",
        type: "image",
        caption:
          "Choropleth map of wildfire occurrences by county. Western states, the Southeast, and parts of the Northeast show the highest frequencies, while the central Midwest reports the fewest incidents.",
      },
      {
        src: "/projects/temporal-density.png",
        alt: "Temporal density of wildfire discovery and containment",
        type: "image",
        caption:
          "Scatter plot of discovery day versus days to containment with marginal histograms. Most wildfires are discovered during summer months (days 150 to 275) and contained within the first few days.",
      },
    ],
  },
  {
    slug: "loan-default-prediction",
    title: "Loan Default Prediction",
    category: "Machine Learning",
    year: "2024",
    description:
      "A machine learning study on fairness in loan approvals, trained on 890K+ Lending Club applications.",
    overview:
      "This project looked at whether automated loan approval systems can be made fairer without losing accuracy. Three models (KNN, Decision Tree, and Logistic Regression) were trained on the Lending Club dataset, which has over 890,000 applications and 200+ attributes. Each model was tested for both prediction accuracy and whether outcomes were equitable across demographic groups. The main finding was that removing bias-related features from the training data barely changed overall accuracy, which suggests fairer lending decisions are possible without a meaningful tradeoff in performance.",
    githubUrl: "https://github.com/Jared-Watson1/loan-default-prediction",
    tech: ["Python", "scikit-learn", "pandas"],
    assets: [],
  },
  {
    slug: "dooleyafavor",
    title: "DooleyAFavor",
    category: "Full Stack",
    year: "2023",
    description:
      "A task marketplace for Emory University students to post odd jobs and earn money from peers.",
    overview:
      "DooleyAFavor is a web app built for Emory University students where anyone can post a task they need help with and other students can pick it up for pay. The project was built as a team with sprint planning and weekly check-ins. The backend runs on Python and Flask with REST APIs for managing tasks and users. Data is stored in PostgreSQL via ElephantSQL, and the app is deployed on Heroku with a Node.js frontend.",
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
      "A 2D game with AI enemies that track the player, collision physics, and visual particle effects.",
    overview:
      "Dodge is a 2D game built solo with Python and Pygame. Enemies use a custom AI system that calculates velocities to intercept the player, so the difficulty adapts as the game goes on. The codebase is organized around modular classes for enemies, players, power ups, and UI elements. A simple physics engine handles collision detection between objects and projectiles, and a particle system creates visual effects on impact.",
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
