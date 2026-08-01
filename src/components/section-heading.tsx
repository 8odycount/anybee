import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      <Reveal>
        <span
          className={`text-subtle flex items-center gap-2.5 text-[11.5px] font-medium tracking-[0.22em] uppercase ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="bg-ember-400 h-1 w-1 rounded-full" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="text-fg mt-5 text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.02] font-medium tracking-[-0.04em] text-balance">
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.16}>
          <p className="text-muted mt-5 text-[clamp(1rem,1.3vw,1.0625rem)] leading-[1.7] font-light text-pretty">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
