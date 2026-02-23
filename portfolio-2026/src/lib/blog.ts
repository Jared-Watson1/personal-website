import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  tags: string[];
  coverImage?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
}

export interface PostWithContent extends Post {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

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
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export async function getPost(slug: string): Promise<PostWithContent> {
  const raw = await fs.readFile(path.join(BLOG_DIR, `${slug}.mdx`), "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
  };
}
