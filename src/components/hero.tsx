"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroImage, stats } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const headline = [{ text: "We Breed the" }, { text: "Net Economy.", accent: true }];

/**
 * Image-led hero. The motif carries the atmosphere, so this section is dark in
 * both themes — the page lightens as you scroll past it.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 22, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative isolate">
      <div className="relative flex min-h-[max(680px,94svh)] flex-col justify-end overflow-hidden">
        {/* Motif — see docs/hero-image.md for provenance and swap instructions */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            unoptimized={heroImage.src.endsWith(".svg")}
            className="object-cover object-center"
          />
        </motion.div>

        {/* Scrims. The motif is an even, fairly bright texture, so the type
            needs its own darkened corner: one pass from the top for the nav,
            one from the bottom and one from the left for the headline. */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,12,10,0.66)_0%,rgba(9,12,10,0.22)_20%,rgba(9,12,10,0)_38%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(9,12,10,0.88)_0%,rgba(9,12,10,0.60)_22%,rgba(9,12,10,0.24)_44%,rgba(9,12,10,0)_66%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,12,10,0.62)_0%,rgba(9,12,10,0.26)_32%,rgba(9,12,10,0)_60%)]" />
        <div className="from-bg pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t to-transparent" />
        <div className="bg-noise pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay" />

        <div className="mx-auto w-full max-w-6xl px-6 pt-40 pb-16 sm:pb-20">
          <motion.p
            {...rise(0.35)}
            className="flex items-center gap-3 text-[11.5px] font-medium tracking-[0.24em] text-white/75 uppercase"
          >
            <span className="bg-honey-400 h-1 w-1 rounded-full" />
            Venture Studio &amp; Digital Holding
            <span className="hidden text-white/45 sm:inline">— Ostfriesland</span>
          </motion.p>

          <h1 className="text-display mt-7 max-w-4xl text-[clamp(2.6rem,7.4vw,6rem)] font-medium text-white">
            {headline.map((line, li) => (
              <span key={li} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.45 + li * 0.12, ease: EASE }}
                >
                  <span className={line.accent ? "honey-text" : undefined}>
                    {line.text}
                  </span>
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            {...rise(0.8)}
            className="mt-8 max-w-xl text-[clamp(0.975rem,1.4vw,1.075rem)] leading-[1.7] font-light text-white/80 text-pretty"
          >
            <span className="font-normal text-white">Anybee Labs</span>{" "}
            <span className="font-mono text-[0.85em] tracking-[0.14em] text-white/45">
              (N-E-B)
            </span>{" "}
            is a premier digital venture studio. We architect, scale, and host
            next-generation marketplaces, SaaS platforms, and digital
            infrastructure under one unified roof.
          </motion.p>

          <motion.div
            {...rise(0.95)}
            className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#portfolio" size="lg" className="w-full sm:w-auto">
              Explore Ecosystem
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
            </Button>
            <Button
              href="#contact"
              size="lg"
              variant="onImage"
              className="w-full sm:w-auto"
            >
              Partner With Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Numbers, set as a quiet line of type rather than a dashboard strip */}
      <motion.div
        {...rise(1.15)}
        className="mx-auto max-w-6xl px-6 pt-14 pb-4 sm:pt-16"
      >
        <dl className="border-hairline flex flex-wrap gap-x-14 gap-y-8 border-t pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-[120px]">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="text-fg block text-[clamp(1.5rem,2.6vw,2rem)] font-medium tracking-[-0.04em]">
                  {stat.value}
                </span>
                <span className="text-subtle mt-1.5 block text-[11px] font-medium tracking-[0.16em] uppercase">
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
