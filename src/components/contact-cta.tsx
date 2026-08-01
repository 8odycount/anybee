"use client";

import { ArrowRight, Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ContactCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden py-28 sm:py-40"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_55%_60%_at_50%_100%,var(--glow),transparent_72%)]" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20 opacity-70" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="border-hairline bg-surface text-muted inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-medium backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-honey-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-honey-400 relative inline-flex h-1.5 w-1.5 rounded-full" />
            </span>
            Accepting two new partnerships this quarter
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-display gradient-text mt-8 text-[clamp(2.5rem,7vw,5rem)] font-extrabold text-balance">
            Let&apos;s architect what&apos;s next.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-muted mx-auto mt-7 max-w-xl text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.7] font-light text-pretty">
            Whether you are bringing a market, a technology or capital — we build,
            operate and scale it with you. Tell us what you are trying to make
            inevitable.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={`mailto:${site.email}`} size="lg" className="w-full sm:w-auto">
              <Mail className="h-4 w-4" strokeWidth={1.75} />
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
            </Button>
            <Button
              href="#portfolio"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Review the portfolio
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="text-subtle mt-8 font-mono text-[12.5px] tracking-[0.08em]">
            {site.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
