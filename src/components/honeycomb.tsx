"use client";

import { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

const VIEW_W = 1240;
const VIEW_H = 520;
const R = 34; // circumradius of a flat-top hex

type Cell = {
  key: string;
  points: string;
  cx: number;
  cy: number;
  /** 0..1 — distance-from-centre falloff, drives base opacity */
  weight: number;
  /** deterministic 0..1 noise */
  noise: number;
};

/** Deterministic hash so server and client render identical markup. */
function hash(col: number, row: number) {
  const n = Math.sin(col * 127.1 + row * 311.7) * 43758.5453;
  return n - Math.floor(n);
}

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i);
    return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");
}

function buildGrid(): Cell[] {
  const cells: Cell[] = [];
  const stepX = R * 1.5;
  const stepY = R * Math.sqrt(3);
  const cols = Math.ceil(VIEW_W / stepX) + 2;
  const rows = Math.ceil(VIEW_H / stepY) + 2;

  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const cx = col * stepX - R;
      const cy = row * stepY + (col % 2 ? stepY / 2 : 0) - R;

      // Elliptical falloff from the centre of the field
      const dx = (cx - VIEW_W / 2) / (VIEW_W / 2);
      const dy = (cy - VIEW_H / 2) / (VIEW_H / 2);
      const dist = Math.sqrt(dx * dx + dy * dy * 0.85);
      const weight = Math.max(0, 1 - dist);

      cells.push({
        key: `${col}-${row}`,
        points: hexPoints(cx, cy, R - 2),
        cx,
        cy,
        weight,
        noise: hash(col, row),
      });
    }
  }
  return cells;
}

/**
 * Abstract digital honeycomb: a hairline hex lattice with a handful of live
 * amber cells, a slow light sweep, and subtle pointer parallax.
 */
export function Honeycomb() {
  const cells = useMemo(() => buildGrid(), []);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const translateX = useTransform(sx, [-1, 1], [18, -18]);
  const translateY = useTransform(sy, [-1, 1], [12, -12]);

  // The brightest cells — hand-picked by weight/noise for a balanced constellation
  const liveCells = useMemo(
    () =>
      cells
        .filter((c) => c.weight > 0.34 && c.noise > 0.86)
        .slice(0, 14)
        .map((c, i) => ({ ...c, delay: (i % 7) * 0.55 })),
    [cells],
  );

  return (
    <div
      ref={ref}
      onPointerMove={(e) => {
        if (reduce) return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
        my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative w-full select-none"
      aria-hidden="true"
    >
      {/* Ambient bloom behind the lattice */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[340px] w-[min(960px,92%)] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(255,138,61,0.28),rgba(255,143,134,0.12)_45%,transparent_68%)] blur-2xl" />
      </div>

      <motion.svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-[clamp(260px,38vw,520px)] w-full"
        style={{ x: translateX, y: translateY }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hc-live" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFC42B" />
            <stop offset="55%" stopColor="#FF8A3D" />
            <stop offset="100%" stopColor="#FF8F86" />
          </linearGradient>

          <radialGradient id="hc-fade" cx="50%" cy="46%" r="62%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="58%" stopColor="#fff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hc-mask">
            <rect width={VIEW_W} height={VIEW_H} fill="url(#hc-fade)" />
          </mask>

          <linearGradient id="hc-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF8A3D" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF8A3D" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF8A3D" stopOpacity="0" />
          </linearGradient>

          <filter id="hc-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* The lattice itself, as a mask — light can then travel *along*
              the honeycomb lines instead of washing over them. */}
          <mask id="hc-lines" maskUnits="userSpaceOnUse">
            <rect width={VIEW_W} height={VIEW_H} fill="black" />
            <g fill="none" stroke="white" strokeWidth={1}>
              {cells.map((cell) => (
                <polygon
                  key={`m-${cell.key}`}
                  points={cell.points}
                  opacity={0.25 + cell.weight * 0.75}
                />
              ))}
            </g>
          </mask>
        </defs>

        <g mask="url(#hc-mask)">
          {/* Hairline lattice */}
          <g className="text-fg">
            {cells.map((cell) => (
              <polygon
                key={cell.key}
                points={cell.points}
                fill="none"
                stroke="currentColor"
                strokeWidth={0.7}
                opacity={0.05 + cell.weight * 0.22}
              />
            ))}
          </g>

          {/* Live cells: slow breathing amber */}
          {liveCells.map((cell) => (
            <motion.polygon
              key={`live-${cell.key}`}
              points={cell.points}
              fill="url(#hc-live)"
              fillOpacity={0.14}
              stroke="#FF9A2E"
              strokeWidth={0.9}
              initial={{ opacity: 0.06 }}
              animate={
                reduce
                  ? { opacity: 0.35 }
                  : { opacity: [0.06, 0.55 * cell.weight + 0.22, 0.06] }
              }
              transition={{
                duration: 4.6,
                repeat: Infinity,
                delay: cell.delay,
                ease: "easeInOut",
              }}
              filter="url(#hc-glow)"
            />
          ))}

          {/* Light travelling along the lattice lines */}
          {!reduce && (
            <g mask="url(#hc-lines)">
              <motion.rect
                y={0}
                width={VIEW_W * 0.45}
                height={VIEW_H}
                fill="url(#hc-sweep)"
                initial={{ x: -VIEW_W * 0.5 }}
                animate={{ x: VIEW_W }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1.4,
                }}
              />
            </g>
          )}
        </g>
      </motion.svg>

      {/* Fade the lattice into the page floor */}
      <div className="from-bg pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />
    </div>
  );
}
