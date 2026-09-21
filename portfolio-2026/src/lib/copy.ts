import { numberWord } from "@/lib/utils";
import { PROJECTS } from "@/lib/projects";

export const SITE_DESCRIPTION =
  "Software engineer building AI applications. AI Engineer at SMART, founder of Cure AI, and builder of Pyx.";

export const HERO = {
  greeting: "Hi, I’m Jared Watson",
  headline: "Software engineer building",
  headlineAccent: "AI applications",
};

export const PROJECTS_PAGE = {
  title: "Projects",
  subtitle: "selected work",
  sentence: `${numberWord(PROJECTS.length)} things I’ve built, newest first. Pick a technology to filter.`,
};

export const BLOG_PAGE = {
  title: "Blog",
  subtitle: "thoughts and notes",
  sentence:
    "Notes on what I’m building. Some posts live on other sites and open in a new tab.",
  empty: "Nothing here yet. The first post is on its way.",
};
