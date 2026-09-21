# Site copy: redesign v2

Final strings for the v2 redesign. Paste as written; do not paraphrase.

Voice: plain and short, first person. Write everything in sentence case; the small mono labels are uppercased by CSS, not in the source. Say what a thing is before saying why it matters. No em dashes, no rhetorical questions. Pyx is never described as a Mac or macOS app on this site. Numbers are written the way the projects write them (26 million, 1.88 million, 750 ms).

---

## Global

**Site title:** Jared Watson
**Meta description:** Software engineer building AI applications. AI Engineer at SMART, founder of Cure AI, and builder of Pyx.

**Header:** logo mark only
**Logo link label (aria):** Jared Watson, home
**Nav, in order:** Projects, Blog, GitHub ↗, LinkedIn ↗, Contact
**Mode switch labels (aria):** Light, Dark, Markdown. The third button shows the text `.md`.
**Mobile menu button:** Menu / Close
**Footer:** © 2026 Jared Watson, then GitHub ↗, LinkedIn ↗, Email ↗ (Email opens `mailto:jaredswatson55@gmail.com`)

**Intro screen:** logo mark, then `Jared Watson`

**Scroll ruler labels:** intro, building, work, writing, about, experience. On other pages: projects, blog, and the post slug.

---

## Home

### Hero

**Greeting (label):** Hi, I’m Jared Watson

**Headline:** Software engineer building **AI applications**.
*(“AI applications” in orange.)*

**Lede:** Currently an AI engineer at [SMART](#experience). Before that I founded [Cure AI](/projects?project=cure-ai), a research assistant with a patented retrieval method. On the side I’m building [Pyx](https://pyx.finance), a local-first portfolio tracker.

**Buttons:** View projects / · Get in touch
*(The slash is the orange glyph inside the filled button, not punctuation. Get in touch opens `mailto:jaredswatson55@gmail.com`.)*

### Stack panel

**Title (label):** Stack
**Right of title (label):** {n} tools
**Line under the grid, idle:** Pick one to see its projects
**Line under the grid, active:** **{Skill name}**, {n} project{s}

### Currently building

**Heading:** / Currently building
**Heading link:** pyx.finance ↗

**Name:** Pyx
**Status pill:** In beta
**Tagline:** A local-first portfolio tracker.

**Summary:** Pyx is a desktop app for people who manage their own investments. It pulls every account into one encrypted file on your own machine, then gives you the tools to use it: charts, research, notes, tags, and honest returns. There is no Pyx cloud and no login.

**Button:** Visit pyx.finance /
*(One button only. There is no case study link.)*

**Facts:**
- **Local first.** Holdings, transactions, and history live in one encrypted SQLite file. The key stays in your system keychain.
- **Native and fast.** Written in Rust with a GPU-rendered interface. Cold start is held under 750 ms in CI.
- **Bring your own AI.** Pyx ships an MCP server instead of a chatbot, so Claude, Codex, or a local model can read the same data.

**Screenshot alt (light):** Pyx overview in light mode: total value, a six month performance chart, allocation, market snapshot, holdings, tags, and upcoming earnings
**Screenshot alt (dark):** the same sentence with “dark mode”
**Screenshot link label (aria):** Pyx overview screen. Opens pyx.finance

### Selected work

**Heading:** / Selected work
**Heading link:** All {n} projects →

**Plate captions.** `kind` is the short label under the title. The sentence after it is the one line blurb used in .md mode and the Projects page intro:
- **Cure AI**, 2024. Kind: AI research assistant. Answers science questions from 26 million papers, with every source cited.
- **U.S. Wildfire Analysis**, 2024. Kind: Data science. 1.88 million wildfire records: where large fires cluster and how long they burn.
- **DooleyAFavor**, 2023. Kind: Full stack. A task marketplace where Emory students post jobs and hire each other.
- **Pyx**, 2026. Kind: Desktop app. A local-first portfolio tracker and research terminal.
- **Loan Default Prediction**, 2024. Kind: Machine learning. Three models, 890,000 loan applications, and a test of whether fairer lending costs accuracy.
- **Dodge**, 2022. Kind: Game. A 2D game where enemies predict where you are going instead of chasing you.

### Writing

**Heading:** / Writing
**Heading link:** All posts →

**Card:**
- Date: Sep 17, 2026
- Title: Nine hosts: everything Pyx connects to, and how to check for yourself
- Description: Every internet address the Pyx desktop app can reach, what each request carries, what it never carries, and how to check it yourself.
- Source label: pyx.finance ↗
- Link: https://www.pyx.finance/blog/nine-hosts (new tab)

### About

**Heading:** / About
**Lead:** I build AI systems that hold up in production and make sense to the people using them.

**Facts (mono label, value):**
- Education: Computer Science, Emory University, 2025
- Hometown: Tampa, Florida
- Startup: Cure AI, junior year
- Patent: [US 11,971,914](https://patents.justia.com/patent/11971914), AI query processing
- Now: AI Engineer, SMART

**Body:**

I grew up in Tampa, Florida, and started programming in high school. Python was my first language, and it led me to study computer science at Emory University in Atlanta, where I graduated in 2025.

At Emory I kept building things outside of class. In my junior year that work became my first startup, Cure AI, a research tool that answers scientific questions from 26 million peer-reviewed articles with full citations. The retrieval method behind it was later granted a patent.

Today I’m an AI Engineer at SMART, where I work on the company’s AI chat service and graph-based features. In my free time I’m building Pyx.

### Experience

**Heading:** / Experience
**Lead:** Two internships, a startup, and a full-time AI engineering role.

Entries are unchanged from `src/lib/experience.ts`, with one edit in the AMNI summary: “receive answers” becomes “get answers”.

---

## Projects page

**Title:** Projects / selected work
**Sentence:** Six things I’ve built, newest first. Pick a technology to filter.
*(Generate “Six” from the project count.)*

Row descriptions and modal overviews are unchanged.

## Blog page

**Title:** Blog / thoughts and notes
**Sentence:** Notes on what I’m building. Some posts live on other sites and open in a new tab.
**Empty state:** Nothing here yet. The first post is on its way.

---

## .md mode

First line of every markdown document is a comment naming its route, for example `<!-- /index.md: the same page, as plain markdown -->`. Section names match the page: Currently building, Selected work, Writing, Experience. The closing line is `More:` followed by links to the other markdown routes and the external profiles. See the mockup's .md mode for the full home document.
