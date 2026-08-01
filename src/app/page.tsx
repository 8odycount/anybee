import { Careers } from "@/components/careers";
import { ContactCta } from "@/components/contact-cta";
import { Ecosystem } from "@/components/ecosystem";
import { Hero } from "@/components/hero";
import { InsiderStory } from "@/components/insider-story";
import { Portfolio } from "@/components/portfolio";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <Ecosystem />
        <InsiderStory />
        <Careers />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
