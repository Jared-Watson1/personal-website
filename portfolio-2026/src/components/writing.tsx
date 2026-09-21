import { Band } from "@/components/sheet";
import { PostList, PostRow } from "@/components/post-row";
import type { Post } from "@/lib/blog";

export function Writing({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;
  return (
    <Band id="writing" title="Writing" more={{ label: "All posts →", href: "/blog" }}>
      <PostList>
        {posts.slice(0, 3).map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </PostList>
    </Band>
  );
}
