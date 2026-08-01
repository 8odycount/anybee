"use client";

import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const derivation = [
  { initial: "N", rest: "et" },
  { initial: "E", rest: "conomy" },
  { initial: "B", rest: "usiness" },
];

/**
 * The easter egg, typeset as a derivation rather than a joke:
 * Net Economy Business → N-E-B → /ɛn·iː·biː/ → Anybee.
 */
export function InsiderStory() {
  const reduce = useReducedMotion();

  return (
    <section id="vision" className="relative scroll-mt-28 overflow-hidden py-28 sm:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[420px] -translate-y-1/2 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,var(--glow),transparent_70%)] opacity-70" />

      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="flex justify-center">
          <span className="text-subtle flex items-center gap-2.5 text-[11.5px] font-medium tracking-[0.22em] uppercase">
            <span className="bg-honey-400 h-1 w-1 rounded-full" />
            The Insider Story
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="text-fg mt-7 text-center text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.04] font-semibold tracking-[-0.04em] text-balance">
            The name is a thesis,
            <br className="hidden sm:block" /> spoken out loud.
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="text-muted mx-auto mt-6 max-w-2xl text-center text-[clamp(1rem,1.3vw,1.0625rem)] leading-[1.75] font-light text-pretty">
            Before it was a brand, it was a definition of the business we intended
            to build — and a piece of phonetics we could not unhear.
          </p>
        </Reveal>

        {/* ── Step 1: the definition ─────────────────────────────────────── */}
        <div className="mt-20 sm:mt-24">
          <ol className="mx-auto flex max-w-md flex-col gap-3">
            {derivation.map((word, i) => (
              <motion.li
                key={word.initial}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, delay: i * 0.14, ease: EASE }}
                className="border-hairline flex items-baseline gap-5 border-b pb-3"
              >
                <span className="honey-text text-[clamp(2.25rem,6vw,3.25rem)] leading-none font-extrabold tracking-[-0.05em]">
                  {word.initial}
                </span>
                <span className="text-fg text-[clamp(1.5rem,3.4vw,2rem)] leading-none font-light tracking-[-0.03em]">
                  {word.rest}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* ── Step 2: the initials ───────────────────────────────────────── */}
        <Reveal delay={0.1} className="mt-14 text-center">
          <span className="text-subtle font-mono text-[11px] tracking-[0.3em] uppercase">
            Initialism
          </span>
          <p className="text-fg mt-4 font-mono text-[clamp(1.75rem,5vw,2.75rem)] font-medium tracking-[0.22em]">
            N&nbsp;·&nbsp;E&nbsp;·&nbsp;B
          </p>
        </Reveal>

        {/* Connector */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="via-honey-400/60 mx-auto mt-10 h-20 w-px origin-top bg-gradient-to-b from-transparent to-transparent"
        />

        {/* ── Step 3: the phonetic turn ──────────────────────────────────── */}
        <Reveal delay={0.05} className="text-center">
          <span className="text-subtle font-mono text-[11px] tracking-[0.3em] uppercase">
            Spoken
          </span>
          <p className="text-muted mt-4 font-mono text-[clamp(1.1rem,3vw,1.6rem)] font-light tracking-[0.06em]">
            /&#603;n&nbsp;·&nbsp;i&#720;&nbsp;·&nbsp;bi&#720;/
          </p>
          <p className="text-subtle mt-3 text-[13.5px] font-light">
            <span className="text-muted">en</span> — <span className="text-muted">e</span>{" "}
            — <span className="text-muted">bee</span>
          </p>
        </Reveal>

        {/* ── Step 4: the resolution ─────────────────────────────────────── */}
        <Reveal delay={0.1} y={34} className="mt-16 text-center">
          <p className="text-display honey-text text-[clamp(3.25rem,12vw,8rem)] font-extrabold">
            Anybee
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="border-hairline bg-elevated/60 mx-auto mt-16 max-w-2xl rounded-3xl border p-8 backdrop-blur-sm sm:p-10">
            <p className="text-muted text-[15.5px] leading-[1.8] font-light text-pretty">
              Say the initials of a{" "}
              <span className="text-fg font-normal">Net Economy Business</span> and
              the alphabet does the rest: <span className="text-fg">N-E-B</span>{" "}
              resolves into{" "}
              <span className="text-fg font-normal">Anybee</span>. The coincidence
              turned out to be a description. A hive is the most efficient
              structure in nature — thousands of independent workers, one shared
              architecture, zero wasted space. That is precisely how our ventures
              are engineered: autonomous companies, a single interlocking
              infrastructure, and a colony that compounds with every cell we add.
            </p>
            <p className="text-subtle mt-6 text-[13px] tracking-[0.02em]">
              Hexagons tile a plane with the least material for the most area. We
              took the hint.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
