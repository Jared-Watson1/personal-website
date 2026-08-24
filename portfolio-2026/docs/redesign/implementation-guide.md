# Implementation guide: portfolio 2026 redesign

For the agent implementing this. Read `copy.md` for every string, and open `redesign-mockup.html` (or the published artifact) with **UI guidance** switched on for the numbered pins referenced below. The mockup is the visual source of truth; this file explains how it maps onto the existing codebase. All user-facing text must match `copy.md`, which uses a professional register and no em dashes.

Stack is unchanged: Next.js 16 App Router, React 19, Tailwind v4, shadcn/ui (neutral), Lucide, Geist. Keep following `CLAUDE.md`.

---

## 1. What changes, in one paragraph

The AI chatbot on the home page goes away. The home page becomes a static landing page: same intro transition, same floating header pill, same headline, same five link cards, same galaxy icon, recomposed into a left/right hero with a new "Stack" logo panel on the right, followed by About and Experience sections. The projects page keeps its title and modal but replaces stacked cards with media-left rows, adds skill chips to every row, and gets a skill filter that the landing-page logos link into.

## 2. Delete

| Remove | Why |
| --- | --- |
| `src/components/chat-home.tsx` | Chat UI |
| `src/components/chat-input.tsx` | Chat UI |
| `src/components/message-bubble.tsx`, `message-list.tsx` | Chat UI |
| `src/hooks/use-simulated-stream.ts` | Chat streaming |
| `API_BASE_URL` in `src/lib/constants.ts` | No backend calls remain |
| `.chat-link` rules in `globals.css` | Chat-only styling |
| `onInteraction` prop on `SuggestionButtons` | Only existed to dismiss the hero |

Keep `HeroSection`'s animation idea but the component itself is replaced (see §4). Keep `LoadingScreen`, `DraggableIcon`, `useParticleEffect`, `GalaxyIcon`, `SuggestionButtons`, `Header`, `DottedBackground`, `ProjectModal`, `ProductHuntBadge`; all reused.

## 3. Data model changes (`src/lib/projects.ts`)

Add a canonical skills registry so the landing wall, the filter chips and the row chips all read from one place.

```ts
// src/lib/skills.ts
export interface Skill {
  id: string;          // slug used in ?skill=
  name: string;        // display name
  icon?: string;       // simple-icons slug, e.g. "python"; omit if none
  brand?: string;      // hex for hover color; defaults to icon's brand hex
  wall?: boolean;      // true = appears in the landing Stack panel
}

export const SKILLS: Skill[] = [
  { id: "python",   name: "Python",       icon: "python",      wall: true },
  { id: "rust",     name: "Rust",         icon: "rust",        wall: true },
  { id: "react",    name: "React",        icon: "react",       wall: true },
  { id: "tailwind", name: "Tailwind CSS", icon: "tailwindcss", wall: true },
  { id: "fastapi",  name: "FastAPI",      icon: "fastapi",     wall: true },
  { id: "flask",    name: "Flask",        icon: "flask",       wall: true },
  { id: "node",     name: "Node.js",      icon: "nodedotjs",   wall: true },
  { id: "postgres", name: "PostgreSQL",   icon: "postgresql",  wall: true },
  { id: "sqlite",   name: "SQLite",       icon: "sqlite",      wall: true },
  { id: "pinecone", name: "Pinecone",     brand: "#1C17FF",    wall: true },   // no simple-icon; see §9
  { id: "openai",   name: "OpenAI API",   brand: "#000000",    wall: true },   // no simple-icon; see §9
  { id: "sklearn",  name: "scikit-learn", icon: "scikitlearn", wall: true },
  { id: "pandas",   name: "pandas",       icon: "pandas",      wall: true },
  { id: "numpy",    name: "NumPy",        icon: "numpy",       wall: true },
  { id: "stripe",   name: "Stripe",       icon: "stripe",      wall: true },
  { id: "vercel",   name: "Vercel",       icon: "vercel",      wall: true },
  // chip-only
  { id: "floem", name: "Floem" }, { id: "wgpu", name: "wgpu", icon: "webgpu" },
  { id: "tokio", name: "tokio", icon: "tokio" }, { id: "plaid", name: "Plaid API" },
  { id: "tantivy", name: "Tantivy" }, { id: "neon", name: "Neon", icon: "neon" },
  { id: "heroku", name: "Heroku" }, { id: "pygame", name: "Pygame" }, { id: "matplotlib", name: "Matplotlib" },
];
```

In `Project`, change `tech: string[]` to `skills: string[]` holding skill ids, and replace each `description` with the text in `copy.md`. Everything else in the project objects stays (assets, URLs, `productHuntUrl`).

Wall order must match the 4×4 grid in the mockup (row-major). The wall must contain only skills that appear in at least one project, so a click never lands on an empty filter.

## 4. Landing page (`src/app/page.tsx`)

Page stays a Server Component that renders `<DottedBackground/>`, `<Header/>`, and a new `<Landing/>`.

`Landing` is a client component only because of the intro gate (`sessionStorage`) and the rise-in stagger. Structure:

```
<Landing>
  {phase === "loading" && <LoadingScreen onComplete=… />}        // unchanged
  <main data-ready={phase === "idle"}>
    <Hero/>          // pins 3,4,5,6,7
    <About/>         // pin 8. Pure server-renderable markup, no state
    <Experience/>    // pin 9
    <SiteFooter/>
  </main>
```

**Intro gate.** Copy the logic from `chat-home.tsx` lines 31–42 verbatim (sessionStorage key `jw-loaded`, phase `loading` → `idle`). Drop `dismissing`/`engaged`.

**Rise-in.** Give hero children a `.rise` class: `opacity:0; translateY(14px); transition: opacity 600ms, transform 600ms` with the strong ease-out `cubic-bezier(.23,1,.32,1)`, and `[data-ready] .rise { opacity:1; transform:none }` with per-child delays 40/100/160/220ms and 260ms for the stack panel. This replaces `HeroSection`'s mounted/visible dance. Under `prefers-reduced-motion` the `.rise` transition is removed.

### Hero (pins 3–7)

Grid `lg:grid-cols-[7fr_5fr] gap-14 items-center`, `min-h-[820px]` on desktop, padding `pt-30 px-16 pb-18` (see mockup). Below `lg` it stacks: text, links, then the stack panel.

- **Eyebrow**: `text-xs uppercase tracking-[.06em] text-muted-foreground`, separators are `·` in `text-orange-500`.
- **Headline** (pin 3): keep the exact string and orange `<span>`. `font-bold tracking-[-0.035em] leading-[1.02] text-[clamp(34px,4.6vw,58px)]` and `[text-wrap:balance]`. Left-aligned.
- **Ledes**: first at `text-lg text-foreground/80 max-w-[38ch]`, second at `text-[15px] text-muted-foreground mt-1.5`.
- **Link row** (pin 5): reuse `SuggestionButtons` unchanged except: remove `onInteraction`, wrap in a `relative` container with `ref={linksRef}`, `mt-[76px]` (this gap is what gives the galaxy room), add `active:scale-[.97] transition-transform duration-150`. On `<sm` the grid is 2 columns with Contact spanning both.
- **Galaxy** (pin 4): `<DraggableIcon containerRef={linksRef} />` inside that same container. No changes to `draggable-icon.tsx` or `use-particle-effect.ts`. It already positions itself at `-top-14 left-2` and lerps toward the cursor along the container's width.

### Stack panel (pins 6, 7): new `src/components/stack-panel.tsx` (client)

- Card: `rounded-2xl border bg-white/80 backdrop-blur-sm shadow-sm p-5`.
- Header row: `STACK` (`text-xs uppercase tracking-[.06em] text-muted-foreground font-medium`) and the hint on the right (`text-xs text-neutral-400`).
- Grid: `grid-cols-4 gap-2`. Each tile is a `<Link href={`/projects?skill=${id}`}>` with `aspect-square rounded-xl border border-transparent bg-white flex items-center justify-center`, `hover:border-border hover:shadow-sm`, `active:scale-[.96]`, visible `focus-visible` ring, `aria-label={name}`.
- Logo: 30×30, `text-neutral-600` by default; on hover `color: var(--brand)` and `-translate-y-px`. Set `--brand` inline per tile.
- Footer row: `border-t mt-3.5 pt-3`, left is the live caption (`Hover over a technology` → `**Rust** · 1 project`, computed from `PROJECTS`), right is `16 technologies · 6 projects` in mono.
- No text under tiles. Tooltip-free by design; the footer caption is the label.
- Touch devices never hover, so on `(hover: none)` show a 10px mono label under each logo instead of the footer caption trick.

### About (pin 8): `src/components/about-section.tsx` (server)

`border-t` section, `grid lg:grid-cols-[4fr_8fr] gap-14 py-18 px-16`. Left column: label, one-line headline (`text-[28px] font-semibold tracking-[-0.025em] leading-[1.15]`), then the facts list as a `grid-cols-[96px_1fr]` per row with mono labels in `text-neutral-400 text-[11px]`. Right column: three paragraphs, `text-[17px] leading-relaxed text-neutral-700 max-w-[62ch]`. Links get `underline-offset-[3px] decoration-black/20`.

### Experience (pin 9): `src/components/experience-section.tsx` (server)

Same section shell. Right column is an `<ol>` where each row is `grid-cols-[150px_1fr] gap-6 py-5 border-t` (first row no border/padding-top). Date column mono `text-xs text-muted-foreground`; the current role has a 6px `bg-orange-500` dot before the date. Title is `Company` bold + `/ Title` in muted, with the slash in orange, matching the header pill. One paragraph, `max-w-[60ch]`.

Data lives in a small `EXPERIENCE` array in `src/lib/experience.ts` so it can be edited without touching markup. The two internship entries are placeholders in `copy.md`; do **not** ship the dashed `TODO` chip, which is mockup-only.

### Footer: `src/components/site-footer.tsx` (server)

`border-t`, `flex justify-between`, 13px muted text, links from `LINKS`. Stacks on mobile.

## 5. Header (`src/components/header.tsx`, pins 1–2)

- Keep the brand pill. Remove the `ChevronDown`, the hover `open` state and the desktop dropdown. The pill is just `<Link href="/">`.
- Add a second pill on the right for desktop (`hidden sm:flex`): same `bg-white/80 backdrop-blur-sm border shadow-sm rounded-xl`, `p-1.5`, containing the five links as `px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-neutral-100`. The active route (`usePathname()`) gets `bg-foreground text-background`. External links get a trailing `↗` at `text-[11px] text-muted-foreground`.
- Make the outer wrapper `fixed inset-x-0 top-0 flex justify-between p-3 sm:p-5 pointer-events-none` with `pointer-events-auto` on the children, so the header never blocks clicks on the page between the two pills.
- Mobile (`<sm`) keeps the existing menu button and dropdown exactly as they are.

## 6. Projects page (`src/app/projects/page.tsx`, pins 1–3)

- Page stays a Server Component. Read `searchParams.skill` (Next 16: `await searchParams`) and pass it as `initialSkill` to `ProjectsList`.
- `ProjectsList` (client) owns `filter` state, initialised from `initialSkill`, and pushes `?skill=` with `router.replace` (`scroll: false`) when it changes so the URL is shareable.
- **Filter row** (pin 2): `All` + one chip per skill used in ≥2 projects, sorted by usage desc then name; if the active filter is a single-use skill, show it too. Chips: `h-[30px] px-3 rounded-full border bg-white text-[12.5px] font-medium`, optional 13px logo, count in mono `text-neutral-400`. Selected: `bg-foreground text-background border-foreground`. Clicking the selected chip clears.
- **Status line**: `6 projects, newest first` or `Showing 2 projects using **Python** · Clear`.
- **Rows** (pin 3). Replace `ProjectCard` internals: `grid md:grid-cols-[5fr_7fr] rounded-[14px] border bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden`. Media column `min-h-[236px] border-r bg-neutral-100` with the hero asset `object-cover object-left-top` (video for Cure AI/Dodge as today, muted/loop/autoplay); below `md` the media goes on top at `aspect-video`. Body: meta line (category / year, orange slash, Product Hunt badge), `h3` at 19px/600, description 14.5px, skill chips, then actions.
- **Skill chips on rows**: `h-6 px-2 rounded-md border bg-white text-[11.5px] font-medium` with an 11px logo when one exists. Each chip is a button that toggles the filter (`stopPropagation` so it doesn't open the modal). When a filter is active, matching chips get `border-orange-500 bg-orange-50 text-orange-900`, and non-matching **rows** get `opacity-35` with a 220ms transition. They are not removed, so the reader keeps context.
- Row click / Enter still opens `ProjectModal`. Only change in the modal: render the Skills badges through the same chip component so they carry logos.

## 7. Motion rules (from the apple-design and emil-design-eng skills in `.agents/skills`)

- Everything interactive gets press feedback: `active:scale-[.97]` with a 100–160ms transform transition. Feedback on pointer-down, not on release.
- Only animate `transform` and `opacity`. No `transition: all`.
- Easing: entering elements use the strong ease-out `cubic-bezier(.23,1,.32,1)`; hover colour changes use plain `ease`; nothing uses `ease-in`.
- UI transitions stay ≤ 300ms. The intro and the hero rise-in are the only "long" moments, and they run once per session.
- Stagger 60ms between hero children, never more than ~250ms total.
- `prefers-reduced-motion`: disable the rise-in and the galaxy spin, keep opacity/colour changes.
- Hover-only effects (tile brand colour, image scale) go behind `@media (hover: hover) and (pointer: fine)`.
- Galaxy: leave the lerp at 0.06; it is the same feel as today.

## 8. Typography

Geist Sans for everything, Geist Mono (already loaded via `--font-geist-mono`) for eyebrows, dates, counts and facts labels; these read as "data", which is the only reason to switch faces. Display: 700 weight, `-0.035em`; section headlines: 600, `-0.025em`; body: 400, tracking 0; uppercase labels: 500, `+0.06em`.

## 9. Logos

Install `simple-icons` (CC0) and render each `icon` slug as an inline `<svg viewBox="0 0 24 24"><path fill="currentColor" d={path}/></svg>`. Do not add `@icons-pack/react-simple-icons`; the raw package is smaller and the site only needs ~20 paths; build a small `SkillLogo` component that imports just those.

Not in Simple Icons (brand-policy removals): **OpenAI**, **Pinecone**, **Plaid**, **Heroku**. Options in order of preference:
1. Download the official SVG from each company's brand/press page into `public/logos/` and reference it from `Skill.icon` as a path.
2. Render a mono wordmark tile (what the mockup does): `font-mono text-[11px] font-medium`.

Logos render `text-neutral-600` at rest and take `--brand` on hover. Never show brand colour at rest; it turns the wall into a sticker sheet.

## 10. Checklist before calling it done

- [ ] `npm run build` and `npm run lint` pass; no references to `API_BASE_URL` or the chat components remain.
- [ ] Intro plays once per session, hero staggers in, galaxy follows the cursor along the link row and spins with particles on hover.
- [ ] Every Stack tile lands on `/projects?skill=…` with at least one highlighted row and the chip selected.
- [ ] Filter chips, row chips, status line and URL stay in sync; Clear resets all three.
- [ ] Header inline nav shows the active route; on `<sm` the menu button still works.
- [ ] All copy matches `copy.md` exactly; internship placeholders replaced or the rows removed.
- [ ] Keyboard: tiles, chips, rows and nav are focusable with a visible ring; rows open the modal on Enter.
- [ ] Reduced-motion check in DevTools: no translate animations, page still readable.
- [ ] Mobile at 390px: nothing overflows horizontally; galaxy does not overlap the lede.
