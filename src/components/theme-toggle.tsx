"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "anybee-theme";

/** Subscribe to `class` changes on <html> — the single source of theme truth. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
// Light is the default theme, so SSR markup matches most visitors.
const getServerSnapshot = () => false;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      /* storage unavailable — the toggle still works for this session */
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      className={`border-hairline hover:border-hairline-strong hover:bg-surface relative grid h-9 w-9 place-items-center rounded-full border transition-colors duration-300 ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "dark" : "light"}
          initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="text-muted grid place-items-center"
        >
          {isDark ? (
            <Moon className="h-[15px] w-[15px]" strokeWidth={1.35} />
          ) : (
            <Sun className="h-[15px] w-[15px]" strokeWidth={1.35} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
