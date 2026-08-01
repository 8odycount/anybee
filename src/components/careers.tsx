"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { RevealGroup, revealChild } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const roles = [
  { title: "Senior Product Engineer", team: "Platform", location: "Remote — EU" },
  { title: "Design Engineer", team: "Brand & Interface", location: "Remote — Global" },
  { title: "Growth Architect", team: "Web-Suite", location: "Remote — EU" },
  { title: "Infrastructure Engineer", team: "Reliability", location: "Hybrid — Berlin" },
];

export function Careers() {
  return (
    <section
      id="careers"
      className="border-hairline scroll-mt-28 border-t py-28 sm:py-36"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <SectionHeading
          eyebrow="Careers"
          title="Small colony. Outsized surface area."
          description="We hire a very small number of exceptional builders and give them ownership that would be unthinkable elsewhere. Every role touches products used by real markets from week one."
        />

        <RevealGroup className="flex flex-col" stagger={0.08}>
          {roles.map((role) => (
            <motion.a
              key={role.title}
              variants={revealChild}
              href="#contact"
              className="border-hairline group hover:border-honey-400/40 flex items-center justify-between gap-6 border-b py-6 transition-colors duration-500 first:border-t"
            >
              <div className="min-w-0">
                <p className="text-fg group-hover:text-honey-500 dark:group-hover:text-honey-300 text-[clamp(1.05rem,2vw,1.3rem)] font-medium tracking-[-0.02em] transition-colors duration-500">
                  {role.title}
                </p>
                <p className="text-subtle mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] font-light">
                  <span>{role.team}</span>
                  <span className="bg-hairline-strong h-3 w-px" />
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3 w-3" strokeWidth={1.6} />
                    {role.location}
                  </span>
                </p>
              </div>
              <span className="border-hairline text-muted group-hover:border-honey-400/40 group-hover:text-honey-500 dark:group-hover:text-honey-300 grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
              </span>
            </motion.a>
          ))}

          <motion.p
            variants={revealChild}
            className="text-subtle mt-8 text-[13.5px] font-light"
          >
            Nothing that fits? Send us what you have built — we read everything.
          </motion.p>
        </RevealGroup>
      </div>
    </section>
  );
}
