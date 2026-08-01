import { site } from "@/lib/site";

/**
 * Brand mark — a hexagonal cell (the honeycomb) enclosing a stylised "N-E-B"
 * stack. Pure SVG so it stays crisp and inherits currentColor.
 * Swap this file for the final logo asset when it lands.
 */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="anybee-mark" x1="4" y1="2" x2="28" y2="30">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="55%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#C47F00" />
        </linearGradient>
      </defs>
      <path
        d="M16 1.6 28.4 8.8v14.4L16 30.4 3.6 23.2V8.8L16 1.6Z"
        stroke="url(#anybee-mark)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 7.4 23.4 11.7v8.6L16 24.6 8.6 20.3v-8.6L16 7.4Z"
        fill="url(#anybee-mark)"
        opacity="0.14"
      />
      <path
        d="M12.4 20V12l7.2 8V12"
        stroke="url(#anybee-mark)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-8 w-8",
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span className="text-fg text-[15px] font-semibold tracking-[-0.02em]">
        {site.name}
      </span>
    </span>
  );
}
