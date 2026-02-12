"use client";

import { useRef } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DraggableIcon } from "@/components/draggable-icon";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
  showIcon: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled,
  showIcon,
}: ChatInputProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim() && !disabled) onSubmit();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {showIcon && <DraggableIcon containerRef={containerRef} />}
      <div className="flex items-end gap-2 rounded-2xl border border-border bg-white p-2 shadow-sm">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          disabled={disabled}
          rows={1}
          className={cn(
            "min-h-[40px] max-h-[160px] resize-none border-0 bg-transparent shadow-none focus-visible:ring-0",
            "text-sm placeholder:text-muted-foreground"
          )}
        />
        <Button
          size="icon"
          onClick={onSubmit}
          disabled={disabled || !value.trim()}
          className="size-8 shrink-0 rounded-lg bg-orange-500 hover:bg-orange-600 text-white"
        >
          <ArrowUp className="size-4" />
        </Button>
      </div>
    </div>
  );
}
