import { cn } from "@/lib/utils";

interface ProductHuntBadgeProps {
  compact?: boolean;
}

function ProductHuntLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.667 20H17.333V13.333H22.667C24.507 13.333 26 14.827 26 16.667C26 18.507 24.507 20 22.667 20Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40C31.046 40 40 31.046 40 20C40 8.954 31.046 0 20 0C8.954 0 0 8.954 0 20C0 31.046 8.954 40 20 40ZM14 10H22.667C26.347 10 29.333 12.987 29.333 16.667C29.333 20.347 26.347 23.333 22.667 23.333H17.333V30H14V10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ProductHuntBadge({ compact }: ProductHuntBadgeProps) {
  return (
    <a
      href="https://www.producthunt.com/posts/cure-ai-2"
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "label inline-flex items-center gap-1.5 border border-border text-brand-ink transition-colors hover:border-brand",
        compact ? "h-5 px-1.5 text-[9.5px]" : "h-[38px] px-3 text-[10.5px]"
      )}
    >
      <ProductHuntLogo className={compact ? "size-3" : "size-3.5"} />
      Product of the Day
    </a>
  );
}
