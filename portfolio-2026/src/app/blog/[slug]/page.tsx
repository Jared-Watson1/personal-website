import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/ui/badge";
import { DottedBackground } from "@/components/dotted-background";
import { Header } from "@/components/header";
import { getAllPosts, getPost } from "@/lib/blog";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  const { frontmatter, content } = post;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <DottedBackground />
      <Header />
      <main className="mx-auto max-w-2xl px-4 pt-24 pb-16">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Blog
        </Link>

        <header className="mb-8 space-y-3">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {frontmatter.title}
          </h1>
          <div className="text-sm text-muted-foreground">{formattedDate}</div>
          {frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          {frontmatter.coverImage && (
            <div className="relative mt-4 aspect-video overflow-hidden rounded-xl">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </header>

        <article className="prose prose-neutral max-w-none">
          <MDXRemote source={content} />
        </article>
      </main>
    </>
  );
}
