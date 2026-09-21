import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
  /** When set, the row links out and no local page is built */
  externalUrl?: string;
  /** Shown on the row, e.g. "pyx.finance" */
  source?: string;
  /** Hidden when NODE_ENV === "production" */
  draft?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
}

export interface PostWithContent extends Post {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function isHidden(frontmatter: PostFrontmatter) {
  return frontmatter.draft === true && process.env.NODE_ENV === "production";
}

export function postHref(post: Post): string {
  return post.frontmatter.externalUrl ?? `/blog/${post.slug}`;
}

/** Dates are stored as calendar days, so format them in UTC to avoid an off by one. */
export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(BLOG_DIR, file), "utf-8");
        const { data } = matter(raw);
        return {
          slug: file.replace(/\.mdx$/, ""),
          frontmatter: data as PostFrontmatter,
        };
      })
  );
  return posts
    .filter((post) => !isHidden(post.frontmatter))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

/** Returns null for missing files and for drafts in production. */
export async function getPost(slug: string): Promise<PostWithContent | null> {
  let raw: string;
  try {
    raw = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), "utf-8");
  } catch {
    return null;
  }
  const { data, content } = matter(raw);
  const frontmatter = data as PostFrontmatter;
  if (isHidden(frontmatter)) return null;
  return { slug, frontmatter, content };
}
