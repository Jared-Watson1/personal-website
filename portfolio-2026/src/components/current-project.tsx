import Image from "next/image";
import { Band } from "@/components/sheet";
import { CURRENT_PROJECT } from "@/lib/projects";

export function CurrentProject() {
  const { name, status, tagline, summary, url, shots, facts } = CURRENT_PROJECT;

  return (
    <Band
      id="building"
      title="Currently building"
      more={{ label: "pyx.finance ↗", href: url, external: true }}
    >
      <div className="grid items-start gap-x-14 gap-y-5 min-[860px]:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-[28px] leading-[1.1] font-semibold tracking-[-0.03em]">{name}</h3>
            <span className="label inline-flex h-[22px] items-center gap-1.5 border border-border px-2 text-secondary-foreground">
              <i aria-hidden="true" className="size-[5px] rounded-full bg-brand" />
              {status}
            </span>
          </div>
          <p className="mt-2 text-[15px] text-muted-foreground">{tagline}</p>
        </div>
        <div>
          <p className="max-w-[62ch] text-[15.5px] leading-[1.7] text-pretty text-secondary-foreground">
            {summary}
          </p>
          <div className="mt-4">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-ink">
              Visit pyx.finance{" "}
              <span aria-hidden="true" className="btn-slash">
                /
              </span>
            </a>
          </div>
        </div>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pyx overview screen. Opens pyx.finance"
        className="plate plate-lift mt-8 block overflow-hidden"
      >
        <Image
          src={shots.light.src}
          width={shots.light.width}
          height={shots.light.height}
          alt={shots.light.alt}
          sizes="(min-width: 1080px) 984px, 100vw"
          className="block h-auto w-full dark:hidden"
        />
        <Image
          src={shots.dark.src}
          width={shots.dark.width}
          height={shots.dark.height}
          alt={shots.dark.alt}
          sizes="(min-width: 1080px) 984px, 100vw"
          className="hidden h-auto w-full dark:block"
        />
      </a>

      <dl className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-10 gap-y-[18px]">
        {facts.map((fact) => (
          <div key={fact.title}>
            <dt className="text-[13.5px] font-semibold">{fact.title}</dt>
            <dd className="mt-[3px] max-w-[40ch] text-[13.5px] leading-[1.55] text-muted-foreground">
              {fact.body}
            </dd>
          </div>
        ))}
      </dl>
    </Band>
  );
}
