import { blogMarkdown } from "@/lib/markdown";

export const dynamic = "force-static";

export async function GET() {
  return new Response(await blogMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
