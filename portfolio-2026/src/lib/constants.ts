export const LINKS = {
  github: "https://github.com/Jared-Watson1",
  linkedin: "https://www.linkedin.com/in/jared-watson-b7b5b6220/",
  projects: "/projects",
  blog: "/blog",
} as const;

export const EMAIL = "jaredswatson55@gmail.com";

export const NAV_LINKS = [
  { label: "Projects", href: LINKS.projects, external: false },
  { label: "Blog", href: LINKS.blog, external: false },
  { label: "GitHub", href: LINKS.github, external: true },
  { label: "LinkedIn", href: LINKS.linkedin, external: true },
  { label: "Contact", href: `mailto:${EMAIL}`, external: true },
] as const;
