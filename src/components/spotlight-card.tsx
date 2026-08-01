"use client";

import type { ReactNode } from "react";
import { useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { revealChild } from "@/components/reveal";

/**
 * Card shell with a pointer-tracked amber spotlight (see `.spotlight` in
 * globals.css), a hairline border that warms on hover, and a subtle lift.
 */
export function SpotlightCard({
  children,
  className = "",
  as = "article",
}: {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
}) {
  const reduce = useReducedMotion();
  const Component = as === "div" ? motion.div : motion.article;

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <Component
      variants={revealChild}
      onPointerMove={onPointerMove}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={`spotlight glass group relative isolate overflow-hidden rounded-[28px] border shadow-card transition-[border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ember-400/40 hover:shadow-lift ${className}`}
    >
      {/* Inner top highlight — the "glass edge" */}
      <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100 dark:via-white/25" />
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">{children}</div>
    </Component>
  );
}
