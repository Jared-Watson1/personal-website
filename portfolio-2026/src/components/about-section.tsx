import { Band } from "@/components/sheet";
import { ABOUT, type AboutFact } from "@/lib/about";

function FactValue({ fact }: { fact: AboutFact }) {
  if (!fact.href || !fact.linkText) return fact.value;
  const [before, after] = fact.value.split(fact.linkText);
  return (
    <>
      {before}
      <a href={fact.href} target="_blank" rel="noopener noreferrer" className="link">
        {fact.linkText}
      </a>
      {after}
    </>
  );
}

export function AboutSection() {
  return (
    <Band id="about" title="About">
      <div className="grid gap-x-14 gap-y-7 min-[860px]:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <div>
          <p className="text-[20px] leading-[1.3] font-medium tracking-[-0.018em] text-balance">
            {ABOUT.lead}
          </p>
          <dl className="mt-6 grid gap-2 text-[13.5px] text-secondary-foreground">
            {ABOUT.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-3">
                <dt className="label text-[10px]">{fact.label}</dt>
                <dd>
                  <FactValue fact={fact} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid max-w-[62ch] gap-4 text-[15.5px] leading-[1.7] text-secondary-foreground">
          {ABOUT.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Band>
  );
}
