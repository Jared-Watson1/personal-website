"use client";

import { useRef } from "react";
import { ArrowUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { DraggableIcon } from "@/components/draggable-icon";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  showIcon: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  isLoading,
  showIcon,
}: ChatInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !isLoading) onSubmit();
    }
  };

  const hasText = value.trim().length > 0;

  return (
    <div ref={containerRef} className="relative w-full">
      {showIcon && <DraggableIcon containerRef={containerRef} />}
      <Card className="gap-0 p-2 rounded-2xl">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={isLoading}
          rows={1}
          className={cn(
            "min-h-[40px] max-h-[160px] resize-none border-0 bg-transparent shadow-none focus-visible:ring-0",
            "text-sm placeholder:text-muted-foreground px-3 py-2"
          )}
        />
        <div className="flex items-center justify-end px-1 pt-1">
          <Button
            size="icon-sm"
            onClick={onSubmit}
            disabled={isLoading || !hasText}
            className={cn(
              "rounded-lg text-white transition-colors disabled:pointer-events-none disabled:opacity-100",
              isLoading
                ? "bg-orange-500"
                : hasText
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "bg-orange-300"
            )}
          >
            {isLoading ? (
              <Loader2 className="size-4 animate-spin text-white" />
            ) : (
              <ArrowUp className="size-4" />
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}
