import { DottedBackground } from "@/components/dotted-background";
import { Header } from "@/components/header";
import { BlogPostCard } from "@/components/blog-post-card";
import { getAllPosts } from "@/lib/blog";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <DottedBackground />
      <Header />
      <main className="mx-auto max-w-2xl px-4 pt-24 pb-16">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Blog
            <span className="mx-2 text-orange-500">/</span>
            <span className="text-lg font-medium text-muted-foreground">
              thoughts &amp; notes
            </span>
          </h1>
        </div>
        <div className="space-y-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}
