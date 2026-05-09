import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight, Leaf, Facebook, Instagram, Linkedin, AtSign } from "lucide-react";
import { partners } from "@/data/partners";

const socials = [
  { label: "Facebook", url: "https://www.facebook.com/share/1SbLWpGokv/?mibextid=wwXIfr", Icon: Facebook },
  { label: "Instagram", url: "https://www.instagram.com/reviveukedtech", Icon: Instagram },
  { label: "X / Twitter", url: "https://x.com/reviveukedtech", Icon: AtSign },
  { label: "Threads", url: "https://www.threads.com/@reviveukedtech", Icon: AtSign },
  { label: "Pinterest", url: "https://pin.it/1TjR0KrN5", Icon: AtSign },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/reviveuk-edtech-cic/", Icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 bg-foreground text-background overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative container-wide py-16">
        {/* Partners */}
        <div className="mb-14">
          <div className="eyebrow !text-accent mb-3">Strategic Partners</div>
          <h2 className="font-display text-3xl md:text-4xl text-background mb-8 max-w-2xl">
            Built in collaboration with our community.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <a
                key={p.shortName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-background/10 bg-background/5 px-5 py-6 transition-all hover:border-accent/60 hover:bg-background/10 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="font-display text-2xl tracking-tight text-background">
                    {p.shortName}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-background/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-accent/80 mb-2">{p.name}</div>
                <div className="text-xs text-background/60 leading-relaxed">{p.description}</div>
              </a>
            ))}
          </div>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-background/60">
            <Leaf className="h-3.5 w-3.5 text-accent" />
            Hosted sustainably using green hosting infrastructure powered by Krystal Hosting.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 pt-12 border-t border-background/10">
          <div className="md:col-span-5">
            <div className="font-display text-2xl text-background leading-tight mb-1">
              Revive<span className="text-[hsl(var(--crimson))]">UK</span> EdTech
            </div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-accent mb-3">Est. 2026</div>
            <p className="text-sm text-background/70 max-w-md">
              A Lancaster-based Community Interest Company advancing inclusive STEAM
              education and clear pathways into skilled work.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
              <span className="px-3 py-1 rounded-full border border-background/15 text-background/80">UN SDG 4</span>
              <span className="px-3 py-1 rounded-full border border-background/15 text-background/80">UN SDG 8</span>
              <span className="px-3 py-1 rounded-full border border-background/15 text-background/80">CIC #17146868</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-background/85 hover:text-accent">About</Link></li>
              <li><Link to="/programmes" className="text-background/85 hover:text-accent">Programmes</Link></li>
              <li><Link to="/get-support" className="text-background/85 hover:text-accent">Get Support</Link></li>
              <li><Link to="/contact" className="text-background/85 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">Get in touch</h3>
            <a
              href="mailto:info@reviveuk.org.uk"
              className="flex items-center gap-2 text-sm text-background hover:text-accent mb-3"
            >
              <Mail className="h-4 w-4" /> info@reviveuk.org.uk
            </a>
            <address className="not-italic text-sm text-background/70 flex gap-2 mb-5">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                C/O LDCVS, The Cornerstone<br />
                Sulyard Street<br />
                Lancaster, Lancashire LA1 1PX
              </span>
            </address>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 rounded-full border border-background/15 flex items-center justify-center text-background/80 hover:text-accent hover:border-accent transition"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-wrap items-center justify-between gap-3 text-xs text-background/60">
          <div>© {new Date().getFullYear()} ReviveUK EdTech CIC. Registered in England and Wales.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Educate · Empower · Elevate
          </div>
        </div>
      </div>
    </footer>
  );
}
