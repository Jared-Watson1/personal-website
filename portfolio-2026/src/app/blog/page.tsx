import type { Metadata } from "next";
import { MarkdownView } from "@/components/markdown-view";
import { PostList, PostRow } from "@/components/post-row";
import { PageBody, PageHead, Sheet } from "@/components/sheet";
import { getAllPosts } from "@/lib/blog";
import { BLOG_PAGE } from "@/lib/copy";
import { blogMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Blog | Jared Watson",
  alternates: { types: { "text/markdown": "/blog.md" } },
};

export default async function BlogPage() {
  const [posts, markdown] = await Promise.all([getAllPosts(), blogMarkdown()]);

  return (
    <Sheet>
      <div className="md-hide">
        <PageHead title={BLOG_PAGE.title} subtitle={BLOG_PAGE.subtitle}>
          <p className="mt-2 max-w-[56ch] text-muted-foreground">{BLOG_PAGE.sentence}</p>
        </PageHead>
        <PageBody rail="blog">
          {posts.length > 0 ? (
            <PostList>
              {posts.map((post) => (
                <PostRow key={post.slug} post={post} />
              ))}
            </PostList>
          ) : (
            <p className="text-muted-foreground">{BLOG_PAGE.empty}</p>
          )}
        </PageBody>
      </div>
      <MarkdownView source={markdown} rail="blog.md" />
    </Sheet>
  );
}
