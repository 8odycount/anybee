import { Logo } from "@/components/logo";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/social-icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { footerColumns, site } from "@/lib/site";

const socials = [
  { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
  { label: "X", Icon: XIcon, href: "#" },
  { label: "GitHub", Icon: GitHubIcon, href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-hairline relative overflow-hidden border-t">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10 sm:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-20">
          {/* Brand column */}
          <div>
            <Logo markClassName="h-9 w-9" />
            <p className="text-muted mt-6 max-w-xs text-[14px] leading-[1.7] font-light text-pretty">
              A digital venture studio and technology holding. We architect,
              scale and host the companies of the net economy.
            </p>

            <div className="mt-8 flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="border-hairline text-muted hover:border-ember-400/45 hover:text-accent grid h-9 w-9 place-items-center rounded-full border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
                >
                  <social.Icon className="h-[14px] w-[14px]" />
                </a>
              ))}
              <ThemeToggle className="ml-1" />
            </div>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4"
          >
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-subtle text-[11px] font-medium tracking-[0.2em] uppercase">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted hover:text-fg group inline-flex items-center gap-1.5 text-[13.5px] font-light transition-colors duration-300"
                      >
                        <span className="bg-ember-400 h-px w-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-2.5" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Legal bar */}
        <div className="border-hairline mt-20 flex flex-col-reverse items-start justify-between gap-6 border-t pt-8 sm:flex-row sm:items-center">
          <p className="text-subtle text-[12.5px] font-light">
            © {site.founded} {site.name}. All rights reserved.{" "}
            <span className="text-muted">{site.tagline}.</span>
          </p>
          <ul className="text-subtle flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] font-light">
            <li>
              <a href="#" className="hover:text-fg transition-colors duration-300">
                Imprint
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fg transition-colors duration-300">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-fg transition-colors duration-300">
                Terms
              </a>
            </li>
            <li className="text-accent inline-flex items-center gap-1.5">
              <span className="bg-ember-400 h-1.5 w-1.5 rounded-full" />
              All systems operational
            </li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark — clipped at the baseline for that flagship finish */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative mt-10 h-[13vw] max-h-52 min-h-16 w-full overflow-hidden select-none"
      >
        <p className="text-display absolute inset-x-0 top-0 translate-y-[-6%] text-center text-[13.4vw] leading-none font-medium whitespace-nowrap text-transparent [-webkit-text-stroke:1px_var(--hairline-strong)]">
          Anybee Labs
        </p>
        <div className="from-bg absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t to-transparent" />
      </div>
    </footer>
  );
}
