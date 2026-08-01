"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { RevealGroup } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { ventures, type Venture } from "@/lib/site";

function BrandMark({ venture }: { venture: Venture }) {
  return (
    <span className="border-hairline bg-surface grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-colors duration-500 group-hover:border-honey-400/40">
      {/* Placeholder asset — replace the SVG in /public/brands with the real logo */}
      <Image
        src={venture.logo}
        alt=""
        width={22}
        height={22}
        unoptimized
        className="h-[22px] w-[22px] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
      />
    </span>
  );
}

function CardChrome({ venture }: { venture: Venture }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3.5">
        <BrandMark venture={venture} />
        <div className="min-w-0">
          <p className="text-fg truncate text-[14.5px] font-medium tracking-[-0.01em]">
            {venture.name}
          </p>
          <p className="text-subtle mt-0.5 text-[11.5px] tracking-[0.12em] uppercase">
            {venture.category}
          </p>
        </div>
      </div>
      <span className="text-subtle font-mono text-[11px] tracking-[0.18em]">
        {venture.index}
      </span>
    </div>
  );
}

function StagePill({ stage }: { stage: string }) {
  return (
    <span className="border-honey-400/25 bg-honey-400/10 text-honey-500 dark:text-honey-300 inline-flex w-fit shrink-0 items-center gap-1.5 self-start rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase">
      <span className="bg-honey-400 h-1.5 w-1.5 rounded-full" />
      {stage}
    </span>
  );
}

const BAR_COUNT = 64;

/**
 * Deterministic pseudo-waveform — evokes the audio marketplace without
 * pretending to be real data. Heights are stable across SSR/CSR.
 */
function Waveform({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: BAR_COUNT }, (_, i) => {
    const envelope = Math.sin((i / (BAR_COUNT - 1)) * Math.PI) ** 0.6;
    const detail =
      0.55 +
      0.45 * Math.abs(Math.sin(i * 0.9) * 0.6 + Math.sin(i * 0.31) * 0.4);
    return Math.max(0.08, envelope * detail);
  });

  return (
    <div
      aria-hidden="true"
      className={`flex h-32 items-end gap-[3px] opacity-60 transition-opacity duration-700 group-hover:opacity-90 dark:opacity-40 dark:group-hover:opacity-75 ${className}`}
    >
      {bars.map((height, i) => (
        <span
          key={i}
          style={{ height: `${height * 100}%` }}
          className="from-honey-400/70 via-honey-400/25 flex-1 rounded-full bg-gradient-to-t to-transparent transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        />
      ))}
    </div>
  );
}

function ViewLink() {
  return (
    <span className="text-muted group-hover:text-fg mt-auto inline-flex items-center gap-1.5 pt-8 text-[13.5px] font-medium transition-colors duration-500">
      View venture
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
}

export function Portfolio() {
  const [feature, ...rest] = ventures;

  return (
    <section id="portfolio" className="relative scroll-mt-28 py-28 sm:py-36 lg:py-44">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title={
              <>
                Ventures built, owned <br className="hidden sm:block" />
                and operated in-house.
              </>
            }
            description="Every company in the group shares the same spine — infrastructure, design language and growth rails — so each new venture starts at the altitude the last one reached."
          />
          <a
            href="#contact"
            className="text-muted hover:text-fg group hidden shrink-0 items-center gap-2 text-[13.5px] font-medium transition-colors duration-300 lg:inline-flex"
          >
            Full portfolio deck
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <RevealGroup
          className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2"
          stagger={0.11}
        >
          {/* ── Card 01 — the flagship, two columns and two rows ───────────── */}
          <SpotlightCard className="flex flex-col p-7 sm:p-9 lg:col-span-2 lg:row-span-2">
            <CardChrome venture={feature} />

            <div className="mt-10 flex flex-1 flex-col sm:mt-14">
              <StagePill stage={feature.stage} />
              <h3 className="text-fg mt-5 text-[clamp(1.65rem,3.1vw,2.6rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-balance">
                {feature.headline}
              </h3>
              <p className="text-muted mt-5 max-w-xl text-[15px] leading-[1.7] font-light text-pretty">
                {feature.description}
              </p>

              <dl className="border-hairline mt-9 grid grid-cols-3 gap-4 border-t pt-7">
                {feature.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dd className="text-fg text-[clamp(1.15rem,2vw,1.6rem)] font-semibold tracking-[-0.035em]">
                      {metric.value}
                    </dd>
                    <dt className="text-subtle mt-1 text-[11px] leading-tight tracking-[0.1em] uppercase">
                      {metric.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <div className="mt-7 flex flex-wrap gap-2">
                {feature.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-hairline text-subtle rounded-full border px-2.5 py-1 text-[11.5px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Signal graphic — fills the flagship card's lower field */}
              <div className="mt-auto pt-12">
                <Waveform />
                <ViewLink />
              </div>
            </div>
          </SpotlightCard>

          {/* ── Cards 02 & 03 — stacked companions ─────────────────────────── */}
          {rest.map((venture) => (
            <SpotlightCard key={venture.id} className="flex flex-col p-7">
              <CardChrome venture={venture} />

              <div className="mt-9 flex flex-1 flex-col">
                <StagePill stage={venture.stage} />
                <h3 className="text-fg mt-4 text-[1.375rem] leading-[1.15] font-semibold tracking-[-0.03em] text-balance">
                  {venture.headline}
                </h3>
                <p className="text-muted mt-3.5 text-[14.5px] leading-[1.65] font-light text-pretty">
                  {venture.description}
                </p>

                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  {venture.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="text-fg text-[1.125rem] font-semibold tracking-[-0.03em]">
                        {metric.value}
                      </dd>
                      <dt className="text-subtle mt-0.5 text-[11px] tracking-[0.1em] uppercase">
                        {metric.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                <ViewLink />
              </div>
            </SpotlightCard>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
