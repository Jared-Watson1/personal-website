"use client";

import { useCallback, useRef, useState } from "react";
import { ChatInput } from "@/components/chat-input";
import { SuggestionButtons } from "@/components/suggestion-buttons";
import { MessageList } from "@/components/message-list";
import { useSimulatedStream } from "@/hooks/use-simulated-stream";
import { PLACEHOLDER_RESPONSE } from "@/lib/constants";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatHome() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0;

  const updateLastAssistantMessage = useCallback((text: string) => {
    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = { role: "assistant", content: text };
      return updated;
    });
  }, []);

  const onStreamComplete = useCallback(() => {}, []);

  const { start, isStreaming } = useSimulatedStream({
    onUpdate: updateLastAssistantMessage,
    onComplete: onStreamComplete,
  });

  const handleSubmit = () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isStreaming) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const assistantMessage: Message = { role: "assistant", content: "" };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInputValue("");

    start(PLACEHOLDER_RESPONSE);
  };

  return (
    <div className="relative z-10 flex h-dvh flex-col">
      <div className="flex-1" />

      <div className="w-full max-w-2xl mx-auto flex flex-col min-h-0 px-4">
        {hasMessages && (
          <div
            ref={scrollAreaRef}
            className="overflow-y-auto min-h-0 mb-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-border shadow-sm px-5 py-1"
          >
            <MessageList messages={messages} />
          </div>
        )}

        <div className="shrink-0 pb-4">
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSubmit={handleSubmit}
            disabled={isStreaming}
            showIcon={!hasMessages}
          />
          {!hasMessages && <SuggestionButtons />}
        </div>
      </div>

      <div className="flex-1" />
    </div>
  );
}
