import { EXPERIENCE } from "@/lib/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto grid max-w-[1240px] gap-7 border-t border-border px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-14 lg:px-16 lg:py-18"
    >
      <div>
        <h2
          id="experience-title"
          className="font-mono text-xs font-medium uppercase tracking-[.06em] text-muted-foreground"
        >
          Experience
        </h2>
        <p className="mt-3.5 text-balance text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-foreground lg:text-[28px]">
          Industry experience across two internships, a startup, and a
          full-time AI engineering role.
        </p>
      </div>

      <ol>
        {EXPERIENCE.map((entry) => (
          <li
            key={`${entry.company}-${entry.dates}`}
            className="grid gap-1 border-t border-border py-4 first:border-t-0 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-6 sm:py-5"
          >
            <div className="font-mono text-xs tracking-[.02em] text-muted-foreground sm:pt-1">
              {entry.current && (
                <span
                  aria-hidden="true"
                  className="mr-1.5 inline-block size-1.5 rounded-full bg-orange-500 align-[1px]"
                />
              )}
              <span>{entry.dates}</span>
              {entry.current && <span className="sr-only"> (current)</span>}
            </div>
            <div>
              <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-foreground">
                {entry.company}
                <span aria-hidden="true" className="mx-2 text-orange-500">
                  /
                </span>
                <span className="font-medium text-muted-foreground">
                  {entry.title}
                </span>
              </h3>
              <p className="mt-1.5 max-w-[60ch] text-[15px] leading-relaxed text-neutral-700">
                {entry.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
