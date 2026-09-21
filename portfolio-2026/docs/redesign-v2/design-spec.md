# Design spec: portfolio redesign v2

For the agent implementing this. Three files work together:

- `mockup.html` is the visual source of truth. Open it in a browser, use the light / dark / .md switch in the header, press **Play intro**, and turn on **Spec pins** for the numbered markers referenced below as (pin N).
- `copy.md` holds every string. Paste it as written.
- `logo/` holds the finished logo files. `assets/` holds the Pyx screenshots already sized for the web.

Stack is unchanged: Next.js 16 App Router, React 19, Tailwind v4, shadcn/ui, Lucide, Geist, Source Code Pro. Keep following `CLAUDE.md`. No new dependencies are required.

---

## 1. The idea in one paragraph

Quiet and light. The whole page is **one tone**: a warm off-white (near black in dark mode) with a very faint dot grid. Content sits in a 1080px column marked only by two hairlines. The hero and page titles are fully solid; the bands below carry a translucent veil, so the dots are barely visible under text and never compete with it. Structure comes from hairlines and small mono labels, not from cards, fills, or shadows. Type is medium weight, not bold. Corners are square. The only color is the orange accent, used sparingly: the headline phrase, the slash, the logo's last stroke, the scroll marker.

**Kept from the current site:** orange accent, the orange slash motif, the headline with its orange phrase, dot grid, mono uppercase labels, draggable galaxy icon with particles, the Stack wall and its `?skill=` links, Source Code Pro for small data, the intro screen and its letter rise, all About and Experience content.

**Removed:** floating pill header, the five colored quick link cards (`suggestion-buttons.tsx`), `bg-white/80 backdrop-blur` cards on dots, `rounded-xl` and `shadow-sm` as the default treatment, bold 700 headings.

---

## 2. Tokens

Replace the neutral values in `src/app/globals.css`. The shadcn variable names stay so existing components keep working; new variables are added. Set `--radius: 0`.

| Variable | Light | Dark | Role |
| --- | --- | --- | --- |
| `--background`, `--card` | `#f7f6f3` | `#0f0e0d` | The single page tone: ground, header, hero, footer |
| `--popover`, `--raised` (new) | `#fcfbf9` | `#171614` | Plates only: screenshot, project plates, hover rows, menus, dialog |
| `--foreground` | `#1c1917` | `#efede8` | Ink |
| `--secondary-foreground` | `#44403c` | `#d0ccc5` | Body copy in paragraphs |
| `--muted-foreground` | `#716b64` | `#99938b` | Secondary text, labels |
| `--border`, `--input` | `rgb(28 25 23 / 0.12)` | `rgb(239 237 232 / 0.11)` | Hairlines |
| `--line-strong` (new) | `rgb(28 25 23 / 0.40)` | `rgb(239 237 232 / 0.40)` | Link underlines, secondary button border, ruler ticks |
| `--dot` (new) | `rgb(28 25 23 / 0.13)` | `rgb(239 237 232 / 0.10)` | Dot grid |
| `--veil` (new) | `rgb(247 246 243 / 0.74)` | `rgb(15 14 13 / 0.74)` | Band background: the page tone at 74%, which mutes the dots under text |
| `--brand` (new) | `#f97316` | `#f97316` | Slash, logo stroke, ruler marker, status dot, focus ring |
| `--brand-ink` (new) | `#d9520b` | `#fb8f3f` | Orange **text**: headline phrase, link hover, active mode icon |
| `--brand-soft` (new) | `rgb(249 115 22 / 0.11)` | `rgb(249 115 22 / 0.14)` | Active segment in the mode switch |
| `--primary` / `--primary-foreground` | ink / page tone | ink / page tone | Filled button |
| `--ring` | `#f97316` | `#f97316` | Focus |

Register the new ones in `@theme inline` so `bg-raised`, `bg-veil`, `border-line-strong`, `text-brand-ink`, `bg-brand-soft` work.

Shadows exist only on plates (the Pyx screenshot, project plates, project row images):

```css
--shadow-plate: 0 1px 2px rgb(28 25 23 / 0.05), 0 8px 24px -14px rgb(28 25 23 / 0.2);
--shadow-plate-lift: 0 2px 4px rgb(28 25 23 / 0.06), 0 18px 40px -14px rgb(28 25 23 / 0.3);
/* dark */
--shadow-plate: 0 1px 2px rgb(0 0 0 / 0.4), 0 10px 28px -14px rgb(0 0 0 / 0.65);
--shadow-plate-lift: 0 2px 4px rgb(0 0 0 / 0.45), 0 22px 48px -14px rgb(0 0 0 / 0.8);
```

`.dotted-grid` becomes `radial-gradient(circle, var(--dot) 1px, transparent 1.3px)` at `24px 24px`. This is roughly a third weaker than today's dots.

**Hard-coded colors must go.** These files use `bg-white`, `neutral-*`, `orange-*`, or `black/*` and will break in dark mode: `app/blog/page.tsx`, `app/projects/page.tsx`, `about-section`, `blog-post-card`, `draggable-icon`, `experience-section`, `header`, `hero-section`, `product-hunt-badge`, `project-card`, `projects-list`, `skill-chip`, `stack-panel`, `ui/dialog`. Map them: `bg-white` to `bg-background` or `bg-raised`, `text-neutral-700` to `text-secondary-foreground`, `text-neutral-400/500` to `text-muted-foreground`, `text-orange-500` to `text-brand` (marks) or `text-brand-ink` (readable text), `outline-orange-500` to `outline-brand`, `decoration-black/20` to `decoration-line-strong`. Drop `rounded-*`, `shadow-sm`, and `backdrop-blur` from these components.

---

## 3. Type

Geist at weights 400, 500, 600 only. Source Code Pro for labels and .md mode. Base size is 15px.

**The label** is the one recurring device: Source Code Pro, 11px, weight 500, uppercase, tracking 0.09em, muted. It is used for the hero greeting, band headings, dates, years, categories, the status pill, fact keys, the footer, and the ruler. Add it as a utility class `.label` in `globals.css`.

| Role | Size / line | Weight | Tracking |
| --- | --- | --- | --- |
| Hero headline | `clamp(34px, 4.7vw, 54px)` / 1.07 | 600 | -0.032em, `text-wrap: balance`, max 13em |
| Project name (Pyx) | 28px / 1.1 | 600 | -0.03em |
| Page title (Projects, Blog) | 26px, second half 17px medium muted | 600 | -0.025em |
| Section lead (About, Experience left column) | 20px / 1.3 | 500 | -0.018em |
| Hero lede | 17px / 1.6, max 54ch, muted with ink links | 400 | |
| Pyx summary, prose | 15.5px / 1.7, max 62ch | 400 | |
| Post title, role title | 15px | 600 | |
| Small copy: facts, post excerpt, role summary | 13.5px to 14px / 1.55 | 400 | |
| Plate title | 13.5px | 500 | |
| Nav, buttons | 13.5px | 500 | |

---

## 4. Shell

### Sheet

```
ground + faint dots | 1080px column between two hairlines | ground + faint dots
```

`<div class="mx-auto max-w-[1080px] border-x border-border">` wraps `<main>` on every page. It has **no background of its own**. Inside it:

- the hero and page title blocks are `bg-background` (solid, no dots),
- every other band is `bg-veil` (dots show at about a quarter strength).

Horizontal padding is `px-12`, `px-5` under 720px. Side borders drop below 1081px. Put this in `src/components/sheet.tsx` and use it on all four pages. `DottedBackground` stays fixed behind everything.

A **band** is `border-t border-border px-12 py-14` (`py-11` on mobile). Band heading row, 28px below it: a `.label` holding an orange `/` and the title in ink, a 1px rule that fills the row, then an optional muted label link (`All 6 projects →`, `All posts →`, `pyx.finance ↗`) that turns `--brand-ink` on hover. Sections are not numbered.

### Header (pins 1, 2)

One bar replaces the two floating pills: `sticky top-0 z-40 h-[60px] border-b border-border bg-background/88 backdrop-blur-sm`, inner row `max-w-[1080px] px-12`.

- Left: the logo mark alone, 19px tall, linking home. No name beside it; the greeting and the intro carry the name.
- Right: nav from `NAV_LINKS` at 13.5px medium, muted, turning ink on hover with a 1px underline that draws in from the left over 350ms. The active page keeps the underline and sets `aria-current`. External links keep the small `↗`. Then the mode switch.
- Under 820px the nav collapses to a bordered `MENU` label button that opens a full width list under the bar. The mode switch stays visible.

### Mode switch (pin 2): new `src/components/mode-switch.tsx` (client)

Three 34×30 segments in one hairline box, separated by hairlines, square corners: sun icon, moon icon, and the text `.md` in mono 11px. `aria-pressed` on each, `role="group" aria-label="Display mode"`. The pressed segment gets `bg-brand-soft text-brand-ink`; nothing inverts.

- State is `"light" | "dark" | "md"`, saved in `localStorage` as `jw-mode`. With nothing saved, follow `prefers-color-scheme`.
- Light and dark toggle the `dark` class on `<html>`. `.md` sets `dark` plus `data-mode="md"`.
- Prevent a flash: a small inline script in `layout.tsx` `<head>` reads `jw-mode` and sets the class and attribute before paint. Put `suppressHydrationWarning` on `<html>`.

### Scroll ruler (pin 3): new `src/components/scroll-rail.tsx` (client)

Fixed to the left edge, `pointer-events-none`, hidden under 640px, rendered once in `layout.tsx`.

- Ticks: two stacked `repeating-linear-gradient`s in `--line-strong` at 50% opacity. A 4px tick every 12px and a 9px tick every 72px.
- Marker: 14×2px bar in `--brand`. `translateY(progress × (viewportHeight − 2))`, progress being `scrollY / (scrollHeight − innerHeight)`. Set it directly in a passive scroll handler with no easing, so it never lags the scrollbar.
- Label: a 10px `.label` to the right of the marker naming the section in view (`intro`, `building`, `work`, `writing`, `about`, `experience`; on other pages the page name). Sections opt in with `data-rail="name"`. It fades in while scrolling and out 900ms after scrolling stops. It has a `bg-background` fill so dots never show through it. Hidden under 1240px.
- Cursor tick: an 11×1px line in `--line-strong` that follows the pointer's Y position, invisible until the mouse moves.
- The rail is `aria-hidden`. Reduced motion needs no change; all movement is a direct response to scrolling.

### Footer

One row, 52px tall, outside the sheet: `border-t`, inner `max-w-[1080px] px-12`, everything in `.label`. Left `© 2026 Jared Watson`. Right `GitHub ↗`, `LinkedIn ↗`, `Email ↗`. Projects and Blog are dropped from the footer because the sticky header already carries them. On mobile it wraps to two lines with 14px vertical padding.

---

## 5. Logo (pin 1)

A slanted JW monogram at a medium weight. Every stroke shares one angle: the J leans with the same slope as the W, and the W's last stroke is the site's orange slash, which also reads as an uptick. It is meant to sit small and quiet, like a glyph, not like a wordmark. Files in `logo/`:

| File | Use |
| --- | --- |
| `jw-mark-light.svg`, `jw-mark-dark.svg` | Static mark for READMEs, social, anywhere outside the app |
| `favicon.svg` | Copy to `src/app/icon.svg` and delete `src/app/icon.jpg` |
| `apple-icon.png` (180px) | Copy to `src/app/apple-icon.png` |
| `icon-512.png` | Open Graph or manifest use |

In the app, use an inline component so strokes take theme colors and can animate:

```tsx
// src/components/logo.tsx
import { useId } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const clipId = useId();
  return (
    <svg
      viewBox="0 4 41 20"
      fill="none"
      strokeWidth={2.8}
      strokeMiterlimit={8}
      aria-hidden="true"
      className={cn("jw h-[19px] w-auto overflow-visible", className)}
    >
      <clipPath id={clipId}>
        <rect y="4" width="46" height="20" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <path className="jw-j stroke-foreground" pathLength={1} d="M13.6 0 8.4 19.6a4.2 4.2 0 0 1-4.1 3.1H2.2" />
        <path className="jw-w stroke-foreground" pathLength={1} d="M16.2 0 21.6 24l5.6-20 5 20" />
        <path className="jw-slash stroke-brand" pathLength={1} d="M31.2 28 38.6 0" />
      </g>
    </svg>
  );
}
```

The strokes overshoot the letter height and the clip rectangle cuts them flat, which gives the horizontal terminals. The viewBox is cropped to the letter height, so the CSS height equals the cap height. `pathLength={1}` normalizes every stroke so one dash rule animates all three.

**Hover** (header link, also on `:focus-visible`): only the orange slash moves. It shoots out of the top and re-enters from the bottom, 640ms, strong ease-out.

```css
.jw path { stroke-dasharray: 1; stroke-dashoffset: 0; }
.group:hover .jw-slash,
.group:focus-visible .jw-slash { animation: slash-shoot 640ms var(--ease-out-strong); }
@keyframes slash-shoot {
  0% { stroke-dashoffset: 0; }
  38% { stroke-dashoffset: -1; }
  38.01% { stroke-dashoffset: 1; }
  100% { stroke-dashoffset: 0; }
}
```

Clear space: at least the width of the slash on every side. Minimum height 14px. Never recolor the slash; never set the mark on a photo.

---

## 6. Intro screen (pin 11): `loading-screen.tsx`

Same gate as today (`sessionStorage` key `jw-loaded`, once per session, logic in `landing.tsx` untouched). The content becomes a lockup on `bg-background`: the mark at 34px tall, then the name at 26px weight 600 (28px and 21px under 520px).

| Time | What happens |
| --- | --- |
| 0 to 420ms | J draws (`stroke-dashoffset` 1 to 0) |
| 180 to 800ms | W draws |
| 760 to 1060ms | Orange slash shoots up into place |
| 520ms onward | Name letters rise, existing `letter-rise` keyframes, 38ms stagger |
| 1800ms | Overlay fades, 420ms ease-in |
| 2240ms | `onComplete()` |

Under reduced motion show the finished lockup for 600ms and fade.

---

## 7. Home page

`page.tsx` order: `Hero`, `CurrentProject`, `SelectedWork`, `Writing`, `AboutSection`, `ExperienceSection`. All server components except the hero's interactive parts. The `.rise` stagger stays on the hero only; bands below do not animate in.

### Hero (pins 4, 5, 6)

Solid `bg-background`, `px-12 pt-18 pb-16`, grid `lg:grid-cols-[1fr_296px] gap-14 items-end`, stacked below 1000px. No `min-h-dvh`.

**Text (pin 4):** greeting as a `.label`, headline 18px below it with the phrase `AI applications` in `text-brand-ink`, then the lede with three inline links. Inline links are ink at weight 500 with a 1px `--line-strong` underline; on hover text and underline turn `--brand-ink`.

Button row at `mt-16`, which leaves room for the galaxy: filled ink `View projects /` and outlined `Get in touch`. Both 38px tall, square, 13.5px medium. The slash in the filled button is orange and nudges 3px right on hover. `active:scale-[.97]`.

**Galaxy (pin 5):** `DraggableIcon` and `useParticleEffect` are unchanged in behavior. It now uses the button row as its `containerRef`, renders at 36px, and takes `text-brand`.

**Stack (pin 6):** `StackPanel` loses its card. It becomes a label row (`Stack` left, `16 tools` right), then a 4×4 grid drawn with hairlines only: `grid grid-cols-4 gap-px bg-border border border-border`, each tile `bg-background aspect-square`, logos 22px in muted. Hover sets the tile to `bg-raised` and the logo to its brand color, falling back to `var(--foreground)` when the brand hex is too dark or too light to read (Vercel, OpenAI, Flask). Under it, one `.label` line in sentence case that reads `Pick one to see its projects` and swaps to `{Skill}, {n} projects` on hover or focus. Links and the `?skill=` behavior are unchanged. Between 640px and 999px the grid is 8 columns.

### Currently building (pin 7): new `src/components/current-project.tsx` (server)

Data, added to `src/lib/projects.ts`:

```ts
export const CURRENT_PROJECT = {
  slug: "pyx",
  status: "In beta",
  tagline: "...",      // copy.md
  summary: "...",      // copy.md
  url: "https://pyx.finance",
  shots: {
    light: "/projects/pyx-overview-light.webp",
    dark: "/projects/pyx-overview-dark.webp",
  },
  facts: [{ title: "Local first", body: "..." }, ...],   // three, copy.md
} as const;
```

Copy `assets/pyx-overview-light.webp` and `assets/pyx-overview-dark.webp` into `public/projects/`. Both are 1680px wide at the same aspect ratio. Source PNGs live in the Obsidian vault at `Finance-Model/Pyx/Assets/screenshots/9-9-2026/`.

Pyx copy is **not platform specific**: no mention of Mac or macOS anywhere on the site.

Layout: band heading with `pyx.finance ↗` on the right. Then `lg:grid-cols-[4fr_7fr] gap-14 items-start`: left is `Pyx` at 28px with the status pill beside it (a bordered 22px `.label` with a 5px orange dot) and the muted tagline under it; right is the summary and, 16px below, a single filled button `Visit pyx.finance /`. There is no second link. Below, 32px down, the screenshot as a plate linking to pyx.finance: `border bg-raised shadow-plate`, square corners, lifting 3px with `shadow-plate-lift` over 450ms on hover. Render both images with `next/image` and show one per theme (`dark:hidden`, `hidden dark:block`). Then the three facts as a `dl` in an auto-fit grid: title 13.5px semibold, body 13.5px muted.

### Selected work (pin 8): new `src/components/selected-work.tsx` (server)

Three plates in an auto-fit grid (`minmax(240px, 1fr)`, 24px gap): Cure AI, U.S. Wildfire Analysis, DooleyAFavor. Add `featured?: boolean`, `kind: string` (short category for the plate, from `copy.md`) and optional `thumb` to `Project`. Each plate links to `/projects?project={slug}`: a 4:3 image (`object-cover object-top-left`, `h-auto`) with a hairline under it, then a caption bar `px-3.5 py-2.5` holding the title (13.5px medium) over a 10px `.label` kind on the left and the year `.label` on the right. Same plate treatment and hover lift as the screenshot. Cure AI's hero asset is a video, so give it `thumb: "/projects/cure-ss.png"`. `projects-list.tsx` must read `?project=` on mount and open that project's modal.

### Writing (pin 9): new `src/components/writing.tsx` (server)

Shows the three newest posts using the same row component as the Blog page.

### About and Experience (pin 10)

Same content and structure, restyled. Grid `lg:grid-cols-[4fr_7fr] gap-14`. Left column lead at 20px medium. About facts use 10px `.label` keys in a 96px column. Experience rows are `grid-cols-[150px_1fr] items-baseline py-[18px] border-t`; dates are 10.5px `.label`s, and a 5px orange dot marks the current role.

---

## 8. Blog: external posts and the post row

Extend `PostFrontmatter` in `src/lib/blog.ts`:

```ts
externalUrl?: string;   // when set, the row links out and no local page is built
source?: string;        // shown on the row, e.g. "pyx.finance"
draft?: boolean;        // hidden when NODE_ENV === "production"
```

Add `content/blog/nine-hosts.mdx` with frontmatter only:

```mdx
---
title: "Nine hosts: everything Pyx connects to, and how to check for yourself"
date: "2026-09-17"
description: "Every internet address the Pyx desktop app can reach, what each request carries, what it never carries, and how to check it yourself."
tags: ["pyx", "privacy"]
externalUrl: "https://www.pyx.finance/blog/nine-hosts"
source: "pyx.finance"
---
```

Mark `hello-world.mdx` with `draft: true`; it is a test post and should not ship.

`BlogPostCard` becomes a row, not a card. The list has a top hairline and sits at `-mx-4`; each row is `grid md:grid-cols-[96px_1fr_auto] gap-x-7 items-baseline px-4 py-[18px] border-b`, and hover fills it with `bg-raised`. Columns: date `.label`, then title (15px semibold) over the description (13.5px muted, max 70ch), then for external posts a `.label` reading `pyx.finance ↗` that turns `--brand-ink` on hover. External rows open in a new tab with `rel="noopener noreferrer"`. Local posts leave the third column empty. Tag badges and cover images are dropped from the list.

`blog/[slug]/page.tsx`: exclude external posts from `generateStaticParams`, and `redirect(externalUrl)` if one is requested directly.

---

## 9. Projects and Blog pages

Both move inside the shared sheet and header. The title block is solid `bg-background` with a bottom hairline: `Projects / selected work` and `Blog / thoughts and notes` with the orange slash, plus one muted sentence (see `copy.md`). The body below is `bg-veil`. Projects keeps its filter chips, media-left rows, skill chips, and modal; restyle with tokens, square corners, and the plate shadow on row images only. The active filter chip is ink filled. The blog post page keeps `prose` and needs `dark:prose-invert`.

---

## 10. .md mode

Two parts: real markdown routes for agents, and the in-page view for people.

**Routes.** Add `src/lib/markdown.ts` with `homeMarkdown()`, `projectsMarkdown()`, `blogMarkdown()` that build strings from `PROJECTS`, `CURRENT_PROJECT`, `EXPERIENCE`, and `getAllPosts()`, so the markdown can never drift from the page. Serve them from route handlers at `src/app/index.md/route.ts`, `projects.md/route.ts`, and `blog.md/route.ts` with `Content-Type: text/markdown; charset=utf-8`. Add `alternates: { types: { "text/markdown": "/index.md" } }` to each page's metadata. The shape of the home document is shown in the mockup's .md mode.

**View.** Each page server-renders both trees: the normal one in a wrapper with class `md-hide`, and `<MarkdownView source={...} />` with class `md-only`. CSS keyed on `html[data-mode="md"]` shows one and hides the other, so there is no fetch and no flash. `MarkdownView` renders the string line by line on solid `bg-background`: heading hashes in `text-brand`, heading text in ink at 500, `[label](url)` pairs as real anchors that show the full markdown syntax and are underlined, everything else in `--secondary-foreground`. Mono 13px, line height 1.8, `white-space: pre-wrap`. In this mode the nav also switches to mono.

---

## 11. Motion summary

| Motion | Trigger | Spec |
| --- | --- | --- |
| Intro lockup | First load per session | Section 6 |
| Hero rise | After intro | Existing `.rise`, hero children only |
| Logo slash | Hover or focus on the logo | 640ms, section 5 |
| Nav underline | Hover | Width 0 to 100%, 350ms |
| Plate lift | Hover on screenshot and project plates | `translateY(-3px)` + lift shadow, 450ms |
| Button press | Active | `scale(.97)`, 150ms |
| Ruler | Scroll, mouse move | Direct, no easing |
| Galaxy | Mouse move, drag | Unchanged |

All easing uses the existing `--ease-out-strong`. Under `prefers-reduced-motion` remove every animation and transition above except the ruler.

---

## 12. Accessibility

- Visible focus everywhere: `outline-2 outline-offset-2 outline-brand`.
- Muted text is 4.9:1 on the light ground. Orange text always uses `--brand-ink`, never `--brand`.
- Labels are small; never use them for sentences longer than a few words.
- The mode switch buttons carry `aria-pressed` and text labels; the ruler is `aria-hidden`; the logo link is labeled `Jared Watson, home`.
- Screenshot alt text describes what the screen shows (see `copy.md`).

---

## 13. Done when

1. The page reads as one tone. Dots are faint in the margins, fainter inside bands, and absent behind the hero and page titles, in both themes.
2. Nothing on the page has rounded corners except the status dot and the favicon tile. Shadows appear only on the screenshot, project plates, and project row images.
3. Light, dark, and .md all work from the header, survive reload, and do not flash on load.
4. The ruler marker tracks scroll exactly, and the label names the right section on the home page.
5. The logo is in the header, the favicon, and the intro; the slash animates on hover and on keyboard focus.
6. The home page shows Currently building with the theme matched Pyx screenshot, one button to pyx.finance, and no platform wording.
7. The Blog page and the home Writing band both show the Nine hosts row, opening pyx.finance in a new tab. The test post is hidden in production.
8. `/index.md`, `/projects.md`, and `/blog.md` return markdown generated from the same data as the pages.
9. The footer is a single 52px row on desktop.
10. `grep -rE "bg-white|neutral-[0-9]|orange-[0-9]" src` returns nothing outside `components/ui`.
11. Layout holds at 400px: header fits on one row, nothing scrolls sideways.
12. `npm run lint` and `npm run build` pass.
