"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      // While over the hero motif the nav has to read on a dark photograph
      setOverHero(window.scrollY < window.innerHeight * 0.62);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onImage = overHero && !open;

  return (
    <motion.header
      initial={reduce ? false : { y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-5"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-3 py-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-4 ${
          scrolled || open
            ? "border-hairline bg-bg/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-md backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="#top"
          className="rounded-full px-1 py-1 transition-opacity duration-300 hover:opacity-75"
          aria-label="Anybee Labs — home"
        >
          <Logo onImage={onImage} />
        </a>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-300 ${
                onImage ? "text-white/70 hover:text-white" : "text-muted hover:text-fg"
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="bg-ember-400 absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Wrapper, not `hidden` on the controls themselves — a display
              utility on the element would lose to the component's own. */}
          <div className="hidden items-center gap-2 sm:flex">
            <ThemeToggle onImage={onImage} />
            <Button
              href="#contact"
              size="sm"
              variant={onImage ? "onImage" : "primary"}
            >
              Contact Us
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`grid h-9 w-9 place-items-center rounded-full border transition-colors duration-300 md:hidden ${
              onImage
                ? "border-white/30 text-white hover:bg-white/10"
                : "border-hairline hover:bg-surface"
            }`}
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={1.35} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.35} />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="border-hairline bg-bg/95 absolute inset-x-4 top-[76px] rounded-3xl border p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: EASE }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-hairline text-fg flex items-center justify-between border-b py-3.5 text-lg font-medium tracking-[-0.02em]"
                  >
                    {link.label}
                    <ArrowUpRight className="text-subtle h-4 w-4" strokeWidth={1.25} />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Button
                href="#contact"
                size="md"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <ThemeToggle onImage={onImage} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
