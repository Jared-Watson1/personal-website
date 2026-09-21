import { ABOUT, EXPERIENCE_LEAD } from "@/lib/about";
import { getAllPosts, postHref, type Post } from "@/lib/blog";
import { EMAIL, LINKS } from "@/lib/constants";
import { BLOG_PAGE, HERO, PROJECTS_PAGE } from "@/lib/copy";
import { EXPERIENCE } from "@/lib/experience";
import { CURRENT_PROJECT, FEATURED_PROJECTS, PROJECTS } from "@/lib/projects";
import { getSkill } from "@/lib/skills";

const MORE = [
  "---",
  `More: [Home](/index.md) · [Projects](/projects.md) · [Blog](/blog.md) · [GitHub](${LINKS.github}) · [LinkedIn](${LINKS.linkedin})`,
];

function dates(range: string) {
  return range.replace(" – ", " to ").replace("Present", "present");
}

function postLine(post: Post) {
  const { date, title, description } = post.frontmatter;
  return `- ${date} [${title}](${postHref(post)}). ${description}`;
}

function aboutFact(fact: (typeof ABOUT.facts)[number]) {
  if ("href" in fact && fact.href && fact.linkText) {
    return fact.value.replace(fact.linkText, `[${fact.linkText}](${fact.href})`);
  }
  return fact.value;
}

export async function homeMarkdown(): Promise<string> {
  const posts = (await getAllPosts()).slice(0, 3);
  return [
    "<!-- /index.md: the same page, as plain markdown -->",
    "",
    "# Jared Watson",
    "",
    `${HERO.headline} ${HERO.headlineAccent}.`,
    "",
    `Currently an AI engineer at SMART. Before that I founded [Cure AI](/projects.md#cure-ai), a research assistant with a patented retrieval method. On the side I’m building [Pyx](${CURRENT_PROJECT.url}), a local-first portfolio tracker.`,
    "",
    "- [View projects](/projects.md)",
    `- [Get in touch](mailto:${EMAIL})`,
    "",
    "## Currently building",
    "",
    `### ${CURRENT_PROJECT.name} (${CURRENT_PROJECT.status.toLowerCase()})`,
    CURRENT_PROJECT.tagline,
    CURRENT_PROJECT.summary,
    ...CURRENT_PROJECT.facts.map((fact) => `- ${fact.title}. ${fact.body}`),
    `- [pyx.finance](${CURRENT_PROJECT.url})`,
    "",
    "## Selected work",
    "",
    ...FEATURED_PROJECTS.map(
      (p) => `- [${p.title}](/projects.md#${p.slug}) ${p.year}. ${p.blurb}`,
    ),
    `- [All ${PROJECTS.length} projects](/projects.md)`,
    "",
    "## Writing",
    "",
    ...(posts.length ? posts.map(postLine) : [BLOG_PAGE.empty]),
    "",
    "## About",
    "",
    ABOUT.lead,
    "",
    ...ABOUT.facts.map((fact) => `- ${fact.label}: ${aboutFact(fact)}`),
    "",
    ...ABOUT.body.flatMap((paragraph) => [paragraph, ""]),
    "## Experience",
    "",
    EXPERIENCE_LEAD,
    "",
    ...EXPERIENCE.map(
      (e) => `- ${dates(e.dates)}. ${e.company}, ${e.title}. ${e.summary}`,
    ),
    "",
    ...MORE,
  ].join("\n");
}

export function projectsMarkdown(): string {
  const sections = PROJECTS.flatMap((p) => {
    const links = [
      p.websiteUrl && `- [Website](${p.websiteUrl})`,
      p.githubUrl && `- [GitHub](${p.githubUrl})`,
    ].filter(Boolean) as string[];
    return [
      `## ${p.title}`,
      "",
      `${p.year}. ${p.kind}.`,
      p.description,
      `Stack: ${p.skills.map((id) => getSkill(id).name).join(", ")}`,
      ...links,
      "",
    ];
  });
  return [
    "<!-- /projects.md: the projects page, as plain markdown -->",
    "",
    `# ${PROJECTS_PAGE.title}`,
    "",
    PROJECTS_PAGE.sentence.replace(" Pick a technology to filter.", ""),
    "",
    ...sections,
    ...MORE,
  ].join("\n");
}

export async function blogMarkdown(): Promise<string> {
  const posts = await getAllPosts();
  return [
    "<!-- /blog.md: the blog, as plain markdown -->",
    "",
    `# ${BLOG_PAGE.title}`,
    "",
    BLOG_PAGE.sentence,
    "",
    ...(posts.length ? posts.map(postLine) : [BLOG_PAGE.empty]),
    "",
    ...MORE,
  ].join("\n");
}

export function postMarkdown(post: { slug: string; title: string; date: string; content: string }): string {
  return [
    `<!-- /blog/${post.slug}: this post, as plain markdown -->`,
    "",
    `# ${post.title}`,
    "",
    post.date,
    "",
    post.content.trim(),
    "",
    ...MORE,
  ].join("\n");
}
