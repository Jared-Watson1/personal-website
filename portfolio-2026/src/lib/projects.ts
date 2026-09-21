export interface ProjectAsset {
  src: string;
  alt: string;
  type: "image" | "video";
  caption?: string;
}

export interface ProjectThumb {
  src: string;
  /** Swapped in when the dark theme is active */
  srcDark?: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  /** Short category shown on plates */
  kind: string;
  year: string;
  /** One line summary used in .md mode */
  blurb: string;
  description: string;
  overview: string;
  websiteUrl?: string;
  githubUrl?: string;
  /** Skill ids from `src/lib/skills.ts` */
  skills: string[];
  heroAsset?: ProjectAsset;
  assets: ProjectAsset[];
  productHuntUrl?: string;
  /** Shown in the home Selected work band */
  featured?: boolean;
  /** Still image for plates and rows, preferred over the hero asset */
  thumb?: ProjectThumb;
}

export const CURRENT_PROJECT = {
  slug: "pyx",
  name: "Pyx",
  status: "In beta",
  tagline: "A local-first portfolio tracker.",
  summary:
    "Pyx is a desktop app for people who manage their own investments. It pulls every account into one encrypted file on your own machine, then gives you the tools to use it: charts, research, notes, tags, and honest returns. There is no Pyx cloud and no login.",
  url: "https://pyx.finance",
  shots: {
    light: {
      src: "/projects/pyx-overview-light.webp",
      width: 1680,
      height: 859,
      alt: "Pyx overview in light mode: total value, a six month performance chart, allocation, market snapshot, holdings, tags, and upcoming earnings",
    },
    dark: {
      src: "/projects/pyx-overview-dark.webp",
      width: 1680,
      height: 860,
      alt: "Pyx overview in dark mode: total value, a six month performance chart, allocation, market snapshot, holdings, tags, and upcoming earnings",
    },
  },
  facts: [
    {
      title: "Local first",
      body: "Holdings, transactions, and history live in one encrypted SQLite file. The key stays in your system keychain.",
    },
    {
      title: "Native and fast",
      body: "Written in Rust with a GPU-rendered interface. Cold start is held under 750 ms in CI.",
    },
    {
      title: "Bring your own AI",
      body: "Pyx ships an MCP server instead of a chatbot, so Claude, Codex, or a local model can read the same data.",
    },
  ],
} as const;

export const PROJECTS: Project[] = [
  {
    slug: "pyx",
    title: "Pyx",
    category: "Desktop App / Fintech",
    kind: "Desktop app",
    year: "2026",
    blurb:
      "A local-first portfolio tracker and research terminal.",
    description:
      "A local-first portfolio tracker and research terminal. Every account lands in one encrypted file on disk, with charts, notes, tags, and an MCP server for the AI of your choice.",
    overview:
      "Pyx is a local-first desktop app for self-directed investors. Every other portfolio tool asks you to surrender the portfolio in order to see it; Pyx inverts that. Connect a brokerage through SnapTrade and holdings, transactions, history, and settings land in one SQLite file on disk, encrypted at rest by default, with the key in the OS keychain. There is no Pyx cloud, no account, and no login. Eight hosts are allowlisted in source and any other outbound request is blocked and logged. The app opens to the whole picture and keeps every other view one keystroke away: Overview, Holdings, Allocation, Performance, Notes, saved charts, and tags, with a full research page behind every ticker. Type a ticker and the security page assembles a decade of fundamentals from SEC EDGAR and Yahoo, with statements, growth, margins, multiples against their own history, peers, estimates, ownership, and the filing index, where every number carries its source. A multi-pane chart workspace offers eight chart types, twelve indicators, and drawings anchored to bars and prices, with layouts saved as TOML files. Allocation regroups the portfolio by sector, asset class, region, or account type, and lookthrough decomposes every fund into what it holds. Returns are time-weighted with proper external cash flow handling, so a deposit moves the balance and never inflates the return. Markdown notes link to securities, accounts, or tags and pin to the chart on the day they were written. Pyx also ships an MCP server rather than a chatbot: bring Claude Code, Claude Desktop, Codex, or a local model, and it works from the same database and research store over a local Unix socket, opened read-only at the SQLite layer, writing notes and tags only when allowed. Under the hood it is native Rust on a GPU-rendered interface built with Floem and wgpu. The window opens before the data loads, cold start is CI-gated at 750ms, a command palette backed by a local Tantivy index reaches every view, action, and symbol, and a three-layer TOML configuration hot reloads with fifteen built-in themes and default and Vim keymaps. Pyx is currently in beta.",
    websiteUrl: "https://pyx.finance",
    skills: [
      "rust",
      "floem",
      "wgpu",
      "tokio",
      "sqlite",
      "snaptrade",
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
    thumb: {
      src: "/projects/pyx-charts-light.webp",
      srcDark: "/projects/pyx-charts-dark.webp",
      width: 1680,
      height: 864,
      alt: "Pyx chart workspace comparing semiconductor stocks against the market",
    },
  },
  {
    slug: "cure-ai",
    title: "Cure AI",
    category: "AI / Research",
    kind: "AI research assistant",
    year: "2024",
    blurb:
      "Answers science questions from 26 million papers, with every source cited.",
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
    featured: true,
    thumb: {
      src: "/projects/cure-ai.webp",
      width: 960,
      height: 506,
      alt: "Cure AI answering a research question with cited sources",
    },
  },
  {
    slug: "us-wildfire-analysis",
    title: "U.S. Wildfire Analysis",
    category: "Data Science",
    kind: "Data science",
    year: "2024",
    blurb:
      "1.88 million wildfire records: where large fires cluster and how long they burn.",
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
    featured: true,
    thumb: {
      src: "/projects/wildfire.webp",
      width: 960,
      height: 540,
      alt: "Map of the largest U.S. wildfires from 1992 to 2015",
    },
  },
  {
    slug: "loan-default-prediction",
    title: "Loan Default Prediction",
    category: "Machine Learning",
    kind: "Machine learning",
    year: "2024",
    blurb:
      "Three models, 890,000 loan applications, and a test of whether fairer lending costs accuracy.",
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
    kind: "Full stack",
    year: "2023",
    blurb:
      "A task marketplace where Emory students post jobs and hire each other.",
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
    featured: true,
    thumb: {
      src: "/projects/dooley.webp",
      width: 960,
      height: 539,
      alt: "DooleyAFavor task board",
    },
  },
  {
    slug: "dodge",
    title: "Dodge",
    category: "Game Dev",
    kind: "Game",
    year: "2022",
    blurb:
      "A 2D game where enemies predict where you are going instead of chasing you.",
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

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);
