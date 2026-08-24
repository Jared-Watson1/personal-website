# Site copy: landing page and projects page

Final copy for the 2026 redesign. Paste as written; the implementing agent should not paraphrase it. Bracketed text is a placeholder to be filled from Jared's résumé.

Voice notes: professional and direct. First person is used where the subject is Jared himself (About, Experience); project descriptions are written in the third person. Avoid conversational phrasing and rhetorical questions. Do not use em dashes; use commas, semicolons, or separate sentences instead. Numbers are written in full (26 million, 890,000, 1.88 million).

---

## Global

**Site title (metadata):** Jared Watson
**Meta description:** Software engineer specializing in AI applications. Computer science graduate of Emory University, AI Engineer at SMART, and founder of Cure AI.

**Header pill:** Jared Watson / software engineer
**Nav links (in order):** Projects · Blog · GitHub · LinkedIn · Contact
**Footer:** © 2026 Jared Watson · Projects · Blog · GitHub · LinkedIn · jaredswatson55@gmail.com

**Intro screen:** Jared Watson (unchanged letter-rise animation)

---

## Landing page

### Hero

**Eyebrow (mono, uppercase, orange dots as separators):**
AI Engineer at SMART · Emory CS ’25 · Tampa, FL

**Headline (unchanged):**
Full stack software engineer specializing in **AI applications**.
*(“AI applications” in orange, as today.)*

**Lede, line 1 (18px, dark):**
I design and build AI products end to end, from retrieval and model infrastructure to the user-facing interface.

**Lede, line 2 (15px, muted):**
Currently an AI Engineer at SMART. Previously the founder of Cure AI, with a patent in AI query processing.

**Quick links (unchanged labels):** Projects · Blog · GitHub · LinkedIn · Contact

### Stack panel (right column)

**Panel title:** STACK
**Panel hint (right-aligned, muted):** select a technology to view related projects
**Footer default state:** Hover over a technology
**Footer hover state:** **{Skill name}** · {n} project{s}
**Footer right (mono):** 16 technologies · 6 projects

**Tiles, in order (4×4):**
Python, Rust, React, Tailwind CSS,
FastAPI, Flask, Node.js, PostgreSQL,
SQLite, Pinecone, OpenAI API, scikit-learn,
pandas, NumPy, Stripe, Vercel

Each tile's `aria-label` is the full skill name. Tiles link to `/projects?skill={slug}`.

### About

**Section label:** ABOUT
**Section headline:** Software engineer focused on applied AI, with a computer science degree from Emory University.

**Facts list (mono label · value):**
- Education · Computer Science, Emory University · 2025
- Hometown · Tampa, Florida
- First startup · Cure AI, junior year
- Patent · US 11,971,914 · AI query processing *(links to https://patents.justia.com/patent/11971914)*
- Now · AI Engineer, SMART

**Body (three paragraphs):**

I grew up in Tampa, Florida, where I began programming in high school. Python was my first language, and it led me to pursue a formal computer science education at Emory University in Atlanta, where I graduated in 2025.

Throughout my time at Emory, I continued to work on personal projects outside the classroom. During my junior year, that work became my first startup, Cure AI, a research tool that answers scientific questions using 26 million peer-reviewed articles with full citations. The retrieval method behind it was later granted a patent.

I am currently an AI Engineer at SMART, where I work on the company’s AI chat service and graph-based features. My focus is on building AI systems that are reliable in production and clear to the people who use them.

### Experience

**Section label:** EXPERIENCE
**Section headline:** Industry experience across two internships, a startup, and a full-time AI engineering role.

Entries, newest first. Format is `{Company} / {Title}` with a mono date column. The current role carries an orange dot before the date. Date ranges use an en dash (–), not an em dash.

1. **Jun 2025 – Present · SMART / AI Engineer**
   Develop SMART’s AI chat service and graph-based features, including the retrieval and model layer behind conversations and its integration with the company’s data graph.

2. **[Dates] · [Company] / [Internship title]**
   [One or two sentences from the résumé: responsibilities, technologies, and one measurable result.]
   `TODO: fill from résumé`

3. **2023 – 2024 · Cure AI / Founder**
   Founded during junior year at Emory. Designed and built the retrieval system and product, launched on Product Hunt as Product of the Day, and secured a patent for the query-processing method.

4. **[Dates] · [Company] / [Internship title]**
   [One or two sentences from the résumé.]
   `TODO: fill from résumé`

*Ordering note: once the internship dates are known, sort all four entries strictly by start date, newest first. Cure AI's position may move.*

---

## Projects page

**Page title:** Projects / selected work
**Filter row:** All, then one chip per skill used in two or more projects, with the count. A skill used once appears while it is the active filter.
**Status line, no filter:** 6 projects, newest first
**Status line, filtered:** Showing {n} project{s} using **{Skill}** · Clear
**Row actions:** Website ↗ · GitHub
**Product Hunt badge (Cure AI only):** Product of the Day

### Project descriptions

These replace the current `description` fields in `src/lib/projects.ts`. The existing `overview` text used inside the modal may stay as is or be trimmed later; the description is what appears on the row.

**Pyx** · Desktop App / Fintech · 2026 · pyx.finance
A local-first portfolio dashboard for self-directed investors. All account, holding, and transaction data is stored in an encrypted database on the user’s machine. Built in Rust with a GPU-rendered interface that remains responsive across years of daily price history.
*Skills:* Rust, Floem, wgpu, tokio, SQLite, Plaid API, Tantivy, React, Tailwind CSS

**Cure AI** · AI / Research · 2024 · askcureai.com · Product of the Day
An AI research assistant that answers scientific questions using 26 million peer-reviewed articles, with every answer linked to its sources. Founded during my junior year at Emory. The retrieval method was granted a patent, and the product was named Product of the Day on Product Hunt.
*Skills:* Python, FastAPI, React, Tailwind CSS, Pinecone, OpenAI API, Stripe, Neon, Vercel

**U.S. Wildfire Analysis** · Data Science · 2024 · GitHub
An analysis of 1.88 million U.S. wildfire records from 1992 to 2015, examining where large fires cluster, when they occur, and how long they take to contain. Gradient-boosted trees produced the most accurate containment-time predictions.
*Skills:* Python, pandas, NumPy, scikit-learn, Matplotlib

**Loan Default Prediction** · Machine Learning · 2024 · GitHub
A study of fairness in automated loan approval, training three models on 890,000 Lending Club applications. Removing bias-related features had minimal effect on accuracy, suggesting fairer lending decisions are achievable without a meaningful tradeoff in performance.
*Skills:* Python, scikit-learn, pandas

**DooleyAFavor** · Full Stack · 2023 · GitHub
A task marketplace for Emory University students to post jobs and hire peers. Developed with a small team using sprint planning, with a Flask REST API, a PostgreSQL database, and deployment on Heroku.
*Skills:* Node.js, Python, Flask, PostgreSQL, Heroku

**Dodge** · Game Dev · 2022 · GitHub
A 2D game in which enemies calculate intercept trajectories rather than following the player directly, so difficulty scales with skill. Built independently in Python with Pygame, including custom collision detection and a particle system.
*Skills:* Python, Pygame

### Modal overview text (optional trims)

The modal `overview` paragraphs are accurate and already fairly formal. If time allows, apply the same rules: no em dashes, lead with what the product does, keep technical detail in the second half. Pyx's overview can lose the sentence about the marketing site.

---

## Things deliberately not said

- No current city is claimed anywhere. Only Tampa (hometown) and Atlanta (Emory) are named.
- No figures for SMART's product (users, scale); nothing verified.
- The patent is described as "AI query processing", which matches the granted title. Do not call it a "patented AI" or similar.
