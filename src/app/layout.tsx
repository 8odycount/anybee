import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anybeelabs.com"),
  title: {
    default: "Anybee Labs — Engineering the Digital Ecosystem",
    template: "%s · Anybee Labs",
  },
  description:
    "Anybee Labs (N-E-B) is a premier digital venture studio. We architect, scale, and host next-generation marketplaces, SaaS platforms, and digital infrastructure under one unified roof.",
  keywords: [
    "venture studio",
    "tech holding",
    "digital infrastructure",
    "marketplace",
    "SaaS",
    "Anybee Labs",
    "Net Economy Business",
  ],
  openGraph: {
    type: "website",
    title: "Anybee Labs — Engineering the Digital Ecosystem",
    description:
      "A premier digital venture studio. We architect, scale, and host next-generation marketplaces, SaaS platforms, and digital infrastructure.",
    siteName: "Anybee Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anybee Labs — Engineering the Digital Ecosystem",
    description: "A premier digital venture studio architecting the Net Economy.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
    { media: "(prefers-color-scheme: dark)", color: "#06070a" },
  ],
};

/**
 * Runs synchronously during HTML parsing so the stored theme is applied
 * before first paint — no flash, no hydration mismatch.
 */
const themeScript = `(function(){try{var s=localStorage.getItem("anybee-theme");var d=s?s==="dark":!window.matchMedia("(prefers-color-scheme: light)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bg text-fg flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
