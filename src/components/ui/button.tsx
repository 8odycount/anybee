import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] whitespace-nowrap transition-[transform,background-position,background-color,border-color,box-shadow,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Solar gradient pill. The gradient is oversized and slides on hover, so the
  // fill feels lit rather than painted.
  primary:
    "text-[#2a1400] bg-[linear-gradient(100deg,#FFC42B_0%,#FFB800_38%,#FF8A3D_100%)] bg-[length:200%_100%] bg-[position:0%_50%] shadow-[0_8px_28px_-12px_rgba(244,100,27,0.55)] hover:bg-[position:100%_50%] hover:shadow-[0_14px_44px_-12px_rgba(244,100,27,0.7)] hover:-translate-y-[1px]",
  // Frosted glass — the futuristic counterpart to the solid pill
  secondary:
    "glass border text-fg hover:border-ember-400/45 hover:-translate-y-[1px] hover:shadow-[0_14px_40px_-20px_rgba(244,100,27,0.45)]",
  ghost: "text-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-8.5 px-4 text-[12.5px]",
  md: "h-10 px-5 text-[13.5px]",
  lg: "h-12 px-7 text-[14px]",
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
