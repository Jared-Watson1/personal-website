import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { CurrentProject } from "@/components/current-project";
import { SelectedWork } from "@/components/selected-work";
import { Writing } from "@/components/writing";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { MarkdownView } from "@/components/markdown-view";
import { Sheet } from "@/components/sheet";
import { getAllPosts } from "@/lib/blog";
import { homeMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  alternates: { types: { "text/markdown": "/index.md" } },
};

export default async function Home() {
  const [posts, markdown] = await Promise.all([getAllPosts(), homeMarkdown()]);

  return (
    <Sheet>
      <div className="md-hide">
        <Landing>
          <CurrentProject />
          <SelectedWork />
          <Writing posts={posts} />
          <AboutSection />
          <ExperienceSection />
        </Landing>
      </div>
      <MarkdownView source={markdown} rail="index.md" />
    </Sheet>
  );
}
