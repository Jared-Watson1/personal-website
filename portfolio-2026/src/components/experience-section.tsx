import { Band } from "@/components/sheet";
import { EXPERIENCE_LEAD } from "@/lib/about";
import { EXPERIENCE } from "@/lib/experience";

export function ExperienceSection() {
  return (
    <Band id="experience" title="Experience">
      <div className="grid gap-x-14 gap-y-7 min-[860px]:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <p className="text-[20px] leading-[1.3] font-medium tracking-[-0.018em] text-balance">
          {EXPERIENCE_LEAD}
        </p>

        <ol>
          {EXPERIENCE.map((entry) => (
            <li
              key={`${entry.company}-${entry.dates}`}
              className="grid items-baseline gap-x-6 gap-y-1 border-t border-border py-[18px] first:border-t-0 first:pt-0 sm:grid-cols-[150px_minmax(0,1fr)]"
            >
              <span className="label flex items-center gap-[7px] text-[10.5px]">
                {entry.current && (
                  <i aria-hidden="true" className="size-[5px] rounded-full bg-brand" />
                )}
                {entry.dates}
                {entry.current && <span className="sr-only"> (current)</span>}
              </span>
              <div>
                <h3 className="text-[15px] font-semibold">
                  {entry.company}{" "}
                  <span className="font-normal text-muted-foreground">
                    <span aria-hidden="true" className="text-brand">
                      /
                    </span>{" "}
                    {entry.title}
                  </span>
                </h3>
                <p className="mt-[3px] max-w-[60ch] text-sm leading-[1.6] text-secondary-foreground">
                  {entry.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Band>
  );
}
