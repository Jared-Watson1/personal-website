"use client";

import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  if (role === "user") {
    return (
      <div className="self-end max-w-[80%] rounded-2xl bg-muted px-4 py-2.5 text-base whitespace-pre-wrap">
        {content}
      </div>
    );
  }

  return (
    <div className="self-center w-full">
      <div
        className={cn(
          "prose prose-neutral max-w-none",
          "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
        )}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
