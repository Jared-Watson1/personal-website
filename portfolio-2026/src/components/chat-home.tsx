"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChatInput } from "@/components/chat-input";
import { SuggestionButtons } from "@/components/suggestion-buttons";
import { MessageList } from "@/components/message-list";
import { LoadingScreen } from "@/components/loading-screen";
import { HeroSection } from "@/components/hero-section";
import { useSimulatedStream } from "@/hooks/use-simulated-stream";
import { API_BASE_URL } from "@/lib/constants";

type SitePhase = "loading" | "idle" | "dismissing" | "engaged";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SESSION_KEY = "jw-loaded";

export function ChatHome() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [phase, setPhase] = useState<SitePhase | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0;

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setPhase("idle");
    } else {
      setPhase("loading");
    }
  }, []);

  const handleLoadingComplete = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("idle");
  }, []);

  const dismissHero = useCallback(() => {
    setPhase((current) => {
      if (current === "idle") {
        setTimeout(() => setPhase("engaged"), 500);
        return "dismissing";
      }
      return current;
    });
  }, []);

  const updateLastAssistantMessage = useCallback((text: string) => {
    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = { role: "assistant", content: text };
      return updated;
    });
  }, []);

  const onStreamComplete = useCallback(() => {
    setIsWaiting(false);
  }, []);

  const { start, isStreaming } = useSimulatedStream({
    onUpdate: updateLastAssistantMessage,
    onComplete: onStreamComplete,
  });

  const handleSubmit = async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isWaiting) return;

    dismissHero();
    setIsWaiting(true);

    const userMessage: Message = { role: "user", content: trimmed };
    const assistantMessage: Message = { role: "assistant", content: "" };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInputValue("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: trimmed }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      setSessionId(data.session_id);
      start(data.response);
    } catch {
      start(
        "Something went wrong reaching the server. Feel free to reach out to Jared directly at jaredswatson55@gmail.com."
      );
    }
  };

  if (phase === null) return null;

  return (
    <>
      {phase === "loading" && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      <div className="relative z-10 flex h-dvh flex-col">
        {!hasMessages ? (
          <div className="flex-1 flex flex-col items-center justify-center px-4 pb-24 sm:pb-28">
            {(phase === "idle" || phase === "dismissing") && (
              <HeroSection
                visible={phase === "idle"}
                dismissing={phase === "dismissing"}
              />
            )}

            <div className="w-full max-w-2xl mt-20">
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSubmit={handleSubmit}
                isLoading={isWaiting}
                showIcon
              />
              <SuggestionButtons onInteraction={dismissHero} />
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1" />

            <div className="w-full max-w-2xl mx-auto flex flex-col min-h-0 px-4">
              <div
                ref={scrollAreaRef}
                className="overflow-y-auto min-h-0 mb-3 rounded-2xl bg-white/90 backdrop-blur-sm border border-border shadow-sm px-5 py-1"
              >
                <MessageList messages={messages} />
              </div>

              <div className="shrink-0 pb-4">
                <ChatInput
                  value={inputValue}
                  onChange={setInputValue}
                  onSubmit={handleSubmit}
                  isLoading={isWaiting}
                  showIcon={false}
                />
              </div>
            </div>

            <div className="flex-1" />
          </>
        )}
      </div>
    </>
  );
}
