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
  /** Skill ids from `src/lib/skills.ts` */
  skills: string[];
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
      "A local-first portfolio dashboard for self-directed investors. All account, holding, and transaction data is stored in an encrypted database on the user’s machine. Built in Rust with a GPU-rendered interface that remains responsive across years of daily price history.",
    overview:
      "Pyx is a local-first desktop app that gives self-directed investors a fast, private dashboard for their entire portfolio. It aggregates holdings and transactions across brokerage and retirement accounts, pulls live market data, and visualizes allocation, performance, and ad-hoc ticker comparisons without sending any user data off the machine. The app is built in Rust on a hexagonal architecture: a pure, I/O-free domain core for all portfolio and returns math, an adapter layer integrating Plaid, Yahoo Finance, and OFX/CSV imports, and a GPU-accelerated interface on Floem and wgpu that holds 60fps while scrolling years of daily price history. Every portfolio lives in an encrypted SQLite database with credentials held in the OS keychain, and a strict network allowlist keeps all outbound traffic auditable. Custom chart rendering, full-text symbol search via Tantivy, and a layered TOML configuration system bring power-user tooling to the desktop with no cloud dependency. It ships from a single codebase to macOS, Windows, and Linux.",
    websiteUrl: "https://pyx.finance",
    skills: [
      "rust",
      "floem",
      "wgpu",
      "tokio",
      "sqlite",
      "plaid",
      "tantivy",
      "react",
      "tailwind",
    ],
    heroAsset: {
      src: "/projects/pyx-overview.svg",
      alt: "Pyx overview dashboard with portfolio totals and a one-year performance chart",
      type: "image",
      caption:
        "Overview: total value, cash, cost basis, day change, and a year of performance with every trade marked on the timebar.",
    },
    assets: [
      {
        src: "/projects/pyx-holdings.svg",
        alt: "Pyx holdings table with valuation columns and an open company drawer",
        type: "image",
        caption:
          "Holdings: positions grouped by account with opt-in valuation columns, and a drawer that places the selected company against its own five-year range.",
      },
      {
        src: "/projects/pyx-research.svg",
        alt: "Pyx research page showing financial statements, growth, margins, and EPS against estimates",
        type: "image",
        caption:
          "Research: a security page assembled from SEC EDGAR and Yahoo data, with statements, growth, margins, and EPS against estimates.",
      },
      {
        src: "/projects/pyx-allocation.svg",
        alt: "Pyx allocation view with a sector treemap and a drift table",
        type: "image",
        caption:
          "Allocation: the portfolio grouped by sector as a treemap, with index funds decomposed by lookthrough and drift against target weights.",
      },
      {
        src: "/projects/pyx-performance.svg",
        alt: "Pyx performance view with time-weighted return against SPY and trade markers",
        type: "image",
        caption:
          "Performance: time-weighted return against SPY with trade and dividend markers, plus widgets for movers, money flow, trades, and dividends.",
      },
      {
        src: "/projects/pyx-charts.svg",
        alt: "Pyx chart workspace with candlesticks and indicators beside rebased holdings",
        type: "image",
        caption:
          "Charts: a two-pane workspace with candlesticks and indicators on the left and three holdings rebased to a common start on the right.",
      },
    ],
  },
  {
    slug: "cure-ai",
    title: "Cure AI",
    category: "AI / Research",
    year: "2024",
    description:
      "An AI research assistant that answers scientific questions using 26 million peer-reviewed articles, with every answer linked to its sources. Founded during my junior year at Emory. The retrieval method was granted a patent, and the product was named Product of the Day on Product Hunt.",
    overview:
      "Cure AI lets researchers ask scientific questions in plain language and get answers backed by over 26 million peer-reviewed articles. The retrieval system finds and ranks relevant papers so that answers are grounded in real literature rather than general knowledge; the query-processing method behind it was later granted a patent. Users can filter by journal, date range, and other parameters to narrow results. Every answer includes inline citations that link directly to the source paper, and users can quickly jump between related studies or export citations. The frontend is React, the backend is FastAPI, vector search runs on Pinecone, and language processing uses the OpenAI API. Cure AI was awarded Product of the Day on Product Hunt.",
    websiteUrl: "https://www.askcureai.com",
    skills: [
      "python",
      "fastapi",
      "react",
      "tailwind",
      "pinecone",
      "openai",
      "stripe",
      "neon",
      "vercel",
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
      "An analysis of 1.88 million U.S. wildfire records from 1992 to 2015, examining where large fires cluster, when they occur, and how long they take to contain. Gradient-boosted trees produced the most accurate containment-time predictions.",
    overview:
      "This project looked at 1.88 million U.S. wildfire records from 1992 to 2015 using the FPA-FOD dataset. The spatial analysis showed that large wildfires tend to cluster heavily in the western states and Alaska. Looking at timing, most fires peak during summer months, and most are contained within the first few days. Several regression models were trained to predict how long a fire would take to contain, with Gradient Boosted Trees performing best (R² = 0.4516). The data pipeline handled cleaning, normalization, and feature encoding with pandas and NumPy, and all models were compared using RMSE, MAE, and R².",
    githubUrl: "https://github.com/Jared-Watson1/CS470",
    skills: ["python", "pandas", "numpy", "sklearn", "matplotlib"],
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
      "A study of fairness in automated loan approval, training three models on 890,000 Lending Club applications. Removing bias-related features had minimal effect on accuracy, suggesting fairer lending decisions are achievable without a meaningful tradeoff in performance.",
    overview:
      "This project looked at whether automated loan approval systems can be made fairer without losing accuracy. Three models (KNN, Decision Tree, and Logistic Regression) were trained on the Lending Club dataset, which has over 890,000 applications and 200+ attributes. Each model was tested for both prediction accuracy and whether outcomes were equitable across demographic groups. The main finding was that removing bias-related features from the training data barely changed overall accuracy, which suggests fairer lending decisions are possible without a meaningful tradeoff in performance.",
    githubUrl: "https://github.com/Jared-Watson1/loan-default-prediction",
    skills: ["python", "sklearn", "pandas"],
    assets: [],
  },
  {
    slug: "dooleyafavor",
    title: "DooleyAFavor",
    category: "Full Stack",
    year: "2023",
    description:
      "A task marketplace for Emory University students to post jobs and hire peers. Developed with a small team using sprint planning, with a Flask REST API, a PostgreSQL database, and deployment on Heroku.",
    overview:
      "DooleyAFavor is a web app built for Emory University students where anyone can post a task they need help with and other students can pick it up for pay. The project was built as a team with sprint planning and weekly check-ins. The backend runs on Python and Flask with REST APIs for managing tasks and users. Data is stored in PostgreSQL via ElephantSQL, and the app is deployed on Heroku with a Node.js frontend.",
    githubUrl: "https://github.com/Jared-Watson1/DooleyAFavor",
    skills: ["node", "python", "flask", "postgres", "heroku"],
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
      "A 2D game in which enemies calculate intercept trajectories rather than following the player directly, so difficulty scales with skill. Built independently in Python with Pygame, including custom collision detection and a particle system.",
    overview:
      "Dodge is a 2D game built solo with Python and Pygame. Enemies use a custom AI system that calculates velocities to intercept the player, so the difficulty adapts as the game goes on. The codebase is organized around modular classes for enemies, players, power ups, and UI elements. A simple physics engine handles collision detection between objects and projectiles, and a particle system creates visual effects on impact.",
    githubUrl: "https://github.com/Jared-Watson1/Dodge",
    skills: ["python", "pygame"],
    heroAsset: {
      src: "/projects/dodge-demo.mp4",
      alt: "Dodge gameplay demo",
      type: "video",
    },
    assets: [],
  },
];
