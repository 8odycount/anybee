import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Amber pill with a soft ambient bloom that intensifies on hover
  primary:
    "bg-honey-400 text-[#100c00] shadow-[0_0_0_0_rgba(255,184,0,0)] hover:bg-honey-300 hover:shadow-[0_10px_40px_-12px_rgba(255,184,0,0.75)] hover:-translate-y-[1px]",
  // Hairline glass — reads as "expensive" on both themes
  secondary:
    "border border-hairline-strong bg-surface text-fg backdrop-blur-sm hover:bg-surface-strong hover:border-honey-400/50 hover:-translate-y-[1px]",
  ghost: "text-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-[54px] px-8 text-[15px]",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

/** Anchor-based CTA. Every variant ships a deliberate hover state. */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
