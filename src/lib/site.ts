/**
 * Single source of truth for copy, navigation and portfolio data.
 * Editing this file is enough to re-brand the whole page.
 */

export const site = {
  name: "Anybee Labs",
  tagline: "Architecting the Net Economy",
  email: "hello@anybeelabs.com",
  founded: 2026,
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Vision", href: "#vision" },
  { label: "Careers", href: "#careers" },
];

export type Venture = {
  /** Stable id, also used to resolve the placeholder mark in /public/brands */
  id: string;
  index: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  /** Placeholder brand mark — swap for the real asset when available */
  logo: string;
  stage: string;
  metrics: { label: string; value: string }[];
  tags: string[];
};

export const ventures: Venture[] = [
  {
    id: "amp-marketplace",
    index: "01",
    name: "Audio & Music Marketplace",
    category: "Creator Commerce",
    headline: "High-End Amp Modeling & Masterclass Platform.",
    description:
      "Revolutionizing digital assets for creators — a curated marketplace where world-class tone captures, impulse responses and masterclasses are licensed, distributed and monetized on infrastructure built for lossless delivery at scale.",
    logo: "/brands/amp-marketplace.svg",
    stage: "Scaling",
    metrics: [
      { label: "Creator payout share", value: "85%" },
      { label: "Global edge nodes", value: "310+" },
      { label: "Median delivery", value: "42ms" },
    ],
    tags: ["Marketplace", "Digital Assets", "Licensing", "Edge Delivery"],
  },
  {
    id: "web-suite",
    index: "02",
    name: "Anybee Web-Suite",
    category: "Growth Infrastructure",
    headline: "No-Code & Affiliate Architecture.",
    description:
      "Building lightning-fast conversion engines — a composable stack of landing systems, attribution and payout rails that turns traffic into compounding revenue.",
    logo: "/brands/web-suite.svg",
    stage: "Live",
    metrics: [
      { label: "Lighthouse", value: "100" },
      { label: "Avg. lift", value: "+38%" },
    ],
    tags: ["No-Code", "Affiliate", "Attribution"],
  },
  {
    id: "micro-saas",
    index: "03",
    name: "Micro-SaaS & AI Tools",
    category: "Applied Intelligence",
    headline: "Automating the modern web workflow.",
    description:
      "A portfolio of focused, profitable tools where agentic automation removes the operational drag from publishing, ops and analytics.",
    logo: "/brands/micro-saas.svg",
    stage: "Incubating",
    metrics: [
      { label: "Products shipped", value: "12" },
      { label: "Tasks automated", value: "4.1M" },
    ],
    tags: ["AI", "Automation", "SaaS"],
  },
];

export const capabilities = [
  {
    icon: "Compass",
    title: "Architect",
    body: "Product, systems and go-to-market designed in one motion — from the first schema to the first million users.",
  },
  {
    icon: "TrendingUp",
    title: "Scale",
    body: "Shared growth, data and monetization rails so every venture inherits the compounding advantage of the group.",
  },
  {
    icon: "ServerCog",
    title: "Host",
    body: "Owned infrastructure, edge delivery and 24/7 reliability engineering under one unified operational roof.",
  },
];

export const stats = [
  { value: "3", label: "Operating ventures" },
  { value: "12+", label: "Products shipped" },
  { value: "99.99%", label: "Platform uptime" },
  { value: "24/7", label: "Reliability coverage" },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: "Audio Marketplace", href: "#portfolio" },
      { label: "Anybee Web-Suite", href: "#portfolio" },
      { label: "Micro-SaaS & AI", href: "#portfolio" },
      { label: "Infrastructure", href: "#ecosystem" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Vision", href: "#vision" },
      { label: "Ecosystem", href: "#ecosystem" },
      { label: "Careers", href: "#careers" },
      { label: "Press Kit", href: "#" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Imprint", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Settings", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Sales", href: "#contact" },
      { label: "Partnerships", href: "#contact" },
      { label: "LinkedIn", href: "#" },
      { label: "X / Twitter", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
];
