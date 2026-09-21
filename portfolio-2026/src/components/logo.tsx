import { useId } from "react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const clipId = useId();
  return (
    <svg
      viewBox="0 4 41 20"
      fill="none"
      strokeWidth={2.8}
      strokeMiterlimit={8}
      aria-hidden="true"
      className={cn("jw block h-[19px] w-auto overflow-visible", className)}
    >
      <clipPath id={clipId}>
        <rect y="4" width="46" height="20" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <path className="jw-j stroke-foreground" pathLength={1} d="M13.6 0 8.4 19.6a4.2 4.2 0 0 1-4.1 3.1H2.2" />
        <path className="jw-w stroke-foreground" pathLength={1} d="M16.2 0 21.6 24l5.6-20 5 20" />
        <path className="jw-slash stroke-brand" pathLength={1} d="M31.2 28 38.6 0" />
      </g>
    </svg>
  );
}
