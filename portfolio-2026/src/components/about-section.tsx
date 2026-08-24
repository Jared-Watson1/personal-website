const FACTS = [
  { label: "Education", value: "Computer Science, Emory University · 2025" },
  { label: "Hometown", value: "Tampa, Florida" },
  { label: "First startup", value: "Cure AI, junior year" },
  {
    label: "Patent",
    value: (
      <>
        <a
          href="https://patents.justia.com/patent/11971914"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-black/20 underline-offset-[3px] transition-colors hover:decoration-black/60"
        >
          US 11,971,914
        </a>{" "}
        · AI query processing
      </>
    ),
  },
  { label: "Now", value: "AI Engineer, SMART" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto grid max-w-[1240px] gap-7 border-t border-border px-6 py-12 sm:px-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:items-center lg:gap-14 lg:px-16 lg:py-18"
    >
      <div>
        <h2
          id="about-title"
          className="font-mono text-xs font-medium uppercase tracking-[.06em] text-muted-foreground"
        >
          About
        </h2>
        <p className="mt-3.5 text-balance text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-foreground lg:text-[28px]">
          Software engineer focused on applied AI, with a computer science
          degree from Emory University.
        </p>
        <dl className="mt-7 grid gap-2.5 text-[13.5px] text-neutral-700">
          {FACTS.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[96px_1fr] items-baseline gap-3">
              <dt className="font-mono text-[11px] tracking-[.02em] text-neutral-400">
                {label}
              </dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="max-w-[62ch] space-y-[18px] text-[17px] leading-relaxed text-neutral-700">
        <p>
          I grew up in Tampa, Florida, where I began programming in high
          school. Python was my first language, and it led me to pursue a
          formal computer science education at Emory University in Atlanta,
          where I graduated in 2025.
        </p>
        <p>
          Throughout my time at Emory, I continued to work on personal projects
          outside the classroom. During my junior year, that work became my
          first startup, Cure AI, a research tool that answers scientific
          questions using 26 million peer-reviewed articles with full
          citations. The retrieval method behind it was later granted a patent.
        </p>
        <p>
          I am currently an AI Engineer at SMART, where I work on the
          company’s AI chat service and graph-based features. My focus is on
          building AI systems that are reliable in production and clear to the
          people who use them.
        </p>
      </div>
    </section>
  );
}
