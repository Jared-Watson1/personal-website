import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import type { Post } from "@/lib/blog";

interface BlogPostCardProps {
  post: Post;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const { slug, frontmatter } = post;
  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
    >
      {frontmatter.coverImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="space-y-1.5 px-5 py-4">
        <div className="text-xs text-muted-foreground">
          {formattedDate}
          {frontmatter.tags.length > 0 && (
            <span className="mx-1.5 text-orange-500">/</span>
          )}
          {frontmatter.tags.join(", ")}
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {frontmatter.title}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {frontmatter.description}
        </p>
        {frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
