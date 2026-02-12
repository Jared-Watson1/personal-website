"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown, { type Components } from "react-markdown";

interface MessageBubbleProps {
  role: "user" | "assistant";
  content: string;
  isLast: boolean;
}

const markdownComponents: Components = {
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="chat-link"
    >
      {children}
    </a>
  ),
};

export function MessageBubble({ role, content, isLast }: MessageBubbleProps) {
  if (role === "user") {
    return (
      <div className="flex flex-col items-end gap-4">
        <div className="max-w-[80%] rounded-2xl bg-orange-50 border border-orange-100 px-4 py-2.5 text-sm whitespace-pre-wrap">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="mt-1 h-auto w-0.5 shrink-0 rounded-full bg-orange-300" />
        <div
          className={cn(
            "prose prose-neutral prose-sm max-w-none",
            "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
          )}
        >
          <ReactMarkdown components={markdownComponents}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
      {!isLast && <Separator className="bg-border/60" />}
    </div>
  );
}
