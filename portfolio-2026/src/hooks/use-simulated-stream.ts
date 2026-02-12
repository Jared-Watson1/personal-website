"use client";

import { useCallback, useRef, useState } from "react";

interface UseSimulatedStreamOptions {
  onUpdate: (text: string) => void;
  onComplete: () => void;
  intervalMs?: number;
}

export function useSimulatedStream({
  onUpdate,
  onComplete,
  intervalMs = 25,
}: UseSimulatedStreamOptions) {
  const [isStreaming, setIsStreaming] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(
    (fullText: string) => {
      setIsStreaming(true);
      let index = 0;

      intervalRef.current = setInterval(() => {
        index++;
        onUpdate(fullText.slice(0, index));

        if (index >= fullText.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsStreaming(false);
          onComplete();
        }
      }, intervalMs);
    },
    [onUpdate, onComplete, intervalMs]
  );

  return { start, isStreaming };
}
