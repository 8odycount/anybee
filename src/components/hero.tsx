"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

import { Honeycomb } from "@/components/honeycomb";
import { Button } from "@/components/ui/button";
import { stats } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

type HeadlineWord = { text: string; accent?: boolean };

const headline: HeadlineWord[][] = [
  [{ text: "We Breed the" }],
  [{ text: "Net Economy.", accent: true }],
];

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 26, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-36 sm:pt-44 lg:pt-52">
      {/* Warm aurora, blueprint grid, grain */}
      <div className="aurora -z-30" />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="bg-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <motion.div {...rise(0.15)} className="flex justify-center">
          <span className="glass text-muted inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-medium tracking-[0.02em]">
            <Sparkles className="text-ember-500 h-3.5 w-3.5" strokeWidth={1.35} />
            Venture Studio &amp; Digital Holding
            <span className="bg-hairline-strong mx-0.5 h-3 w-px" />
            <span className="text-subtle">Est. 2026</span>
          </span>
        </motion.div>

        {/* Mega headline */}
        <h1 className="text-display mt-9 text-center text-[clamp(2.6rem,8vw,6.5rem)] font-medium">
          {headline.map((line, li) => (
            <span key={li} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.15, delay: 0.25 + li * 0.12, ease: EASE }}
              >
                {line.map((word, wi) => (
                  <span
                    key={wi}
                    className={word.accent ? "honey-text" : "gradient-text"}
                  >
                    {word.text}
                  </span>
                ))}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          {...rise(0.6)}
          className="text-muted mx-auto mt-8 max-w-2xl text-center text-[clamp(1rem,1.6vw,1.175rem)] leading-[1.65] font-light text-pretty"
        >
          <span className="text-fg font-normal">Anybee Labs</span>{" "}
          <span className="text-subtle font-mono text-[0.85em] tracking-[0.14em]">
            (N-E-B)
          </span>{" "}
          is a premier digital venture studio. We architect, scale, and host
          next-generation marketplaces, SaaS platforms, and digital
          infrastructure under one unified roof.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...rise(0.75)}
          className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="#portfolio" size="lg" className="w-full sm:w-auto">
            Explore Ecosystem
            <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
          </Button>
          <Button
            href="#contact"
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Partner With Us
          </Button>
        </motion.div>
      </div>

      {/* Abstract honeycomb field */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.9, ease: EASE }}
        className="relative mt-16 sm:mt-20"
      >
        <Honeycomb />
      </motion.div>

      {/* Numbers strip */}
      <motion.div {...rise(1.15)} className="mx-auto -mt-8 max-w-6xl px-6 sm:-mt-4">
        <dl className="border-glass-border bg-hairline grid grid-cols-2 gap-px overflow-hidden rounded-[28px] border shadow-card md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-elevated hover:bg-honey-50 dark:hover:bg-surface-strong px-6 py-7 text-center transition-colors duration-500 sm:py-8"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="text-fg block text-[clamp(1.6rem,3vw,2.25rem)] font-medium tracking-[-0.04em]">
                  {stat.value}
                </span>
                <span className="text-subtle mt-1.5 block text-[11.5px] font-medium tracking-[0.14em] uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
