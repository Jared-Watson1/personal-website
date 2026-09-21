import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { MarkdownView } from "@/components/markdown-view";
import { PageBody, PageHead, Sheet } from "@/components/sheet";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";
import { postMarkdown } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts
    .filter((post) => !post.frontmatter.externalUrl)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.frontmatter.title} | Jared Watson`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();
  const { frontmatter, content } = post;
  if (frontmatter.externalUrl) redirect(frontmatter.externalUrl);

  return (
    <Sheet>
      <div className="md-hide">
        <PageHead title={frontmatter.title}>
          <p className="label mt-3">
            <Link href="/blog" className="transition-colors duration-150 hover:text-brand-ink">
              ← Blog
            </Link>
            <span aria-hidden="true" className="mx-2 text-brand">
              /
            </span>
            <time dateTime={frontmatter.date}>{formatPostDate(frontmatter.date)}</time>
          </p>
        </PageHead>
        <PageBody rail={slug}>
          {frontmatter.coverImage && (
            <div className="plate relative mb-8 aspect-video overflow-hidden">
              <Image src={frontmatter.coverImage} alt={frontmatter.title} fill className="object-cover" />
            </div>
          )}
          <article className="prose prose-neutral max-w-[68ch] dark:prose-invert">
            <MDXRemote source={content} />
          </article>
        </PageBody>
      </div>
      <MarkdownView
        source={postMarkdown({ slug, title: frontmatter.title, date: frontmatter.date, content })}
        rail={`${slug}.md`}
      />
    </Sheet>
  );
}
