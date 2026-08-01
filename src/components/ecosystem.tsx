"use client";

import { Compass, ServerCog, TrendingUp, type LucideIcon } from "lucide-react";

import { RevealGroup, revealChild } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { capabilities } from "@/lib/site";
import { motion } from "framer-motion";

const icons: Record<string, LucideIcon> = {
  Compass,
  TrendingUp,
  ServerCog,
};

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="border-hairline relative scroll-mt-28 border-y py-28 sm:py-36"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-60" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Ecosystem"
          title="One roof. Three disciplines. Compounding leverage."
          description="Anybee Labs is not a fund and not an agency. We own what we build — which means the platform, the growth engine and the infrastructure are engineered as a single system."
        />

        <RevealGroup className="mt-16 grid gap-12 sm:mt-20 md:grid-cols-3 md:gap-8" stagger={0.12}>
          {capabilities.map((cap, i) => {
            const Icon = icons[cap.icon];
            return (
              <motion.div
                key={cap.title}
                variants={revealChild}
                className="border-hairline group relative border-t pt-9 pr-6 transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ember-400/45"
              >
                <div className="flex items-center justify-between">
                  <span className="text-accent grid h-8 w-8 place-items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.3} />
                  </span>
                  <span className="text-subtle font-mono text-[11px] tracking-[0.18em]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-fg mt-7 text-[1.4rem] font-medium tracking-[-0.03em]">
                  {cap.title}
                </h3>
                <p className="text-muted mt-3 text-[14.5px] leading-[1.7] font-light text-pretty">
                  {cap.body}
                </p>

                
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
