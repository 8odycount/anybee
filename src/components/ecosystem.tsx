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

        <RevealGroup className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-3" stagger={0.12}>
          {capabilities.map((cap, i) => {
            const Icon = icons[cap.icon];
            return (
              <motion.div
                key={cap.title}
                variants={revealChild}
                className="border-hairline bg-elevated/60 hover:border-honey-400/30 hover:bg-elevated group relative rounded-3xl border p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="border-hairline bg-surface text-honey-500 dark:text-honey-300 grid h-11 w-11 place-items-center rounded-xl border transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                  </span>
                  <span className="text-subtle font-mono text-[11px] tracking-[0.18em]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-fg mt-8 text-[1.5rem] font-semibold tracking-[-0.03em]">
                  {cap.title}
                </h3>
                <p className="text-muted mt-3 text-[14.5px] leading-[1.7] font-light text-pretty">
                  {cap.body}
                </p>

                <span className="bg-honey-400 absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:opacity-60" />
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
