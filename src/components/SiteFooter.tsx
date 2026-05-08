import { Link } from "react-router-dom";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { partners } from "@/data/partners";

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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <a
                key={p.shortName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-background/10 bg-background/5 px-5 py-5 transition-all hover:border-accent/60 hover:bg-background/10"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-background flex items-center justify-center overflow-hidden">
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        className="h-8 w-8 object-contain grayscale group-hover:grayscale-0 transition"
                      />
                    ) : (
                      <span className="font-display text-primary text-sm font-bold">
                        {p.shortName.slice(0, 4).toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-background text-base truncate">
                      {p.name}
                    </div>
                    <div className="text-xs text-background/60 truncate">{p.description}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-background/50 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12 pt-12 border-t border-background/10">
          <div className="md:col-span-5">
            <div className="font-display text-2xl text-background leading-tight mb-3">
              Revive<span className="text-accent">UK</span> EdTech
            </div>
            <p className="text-sm text-background/70 max-w-md">
              A Lancaster-based Community Interest Company advancing inclusive STEAM
              education and clear pathways into skilled work.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
              <span className="px-3 py-1 rounded-full border border-background/15 text-background/80">
                UN SDG 4
              </span>
              <span className="px-3 py-1 rounded-full border border-background/15 text-background/80">
                UN SDG 8
              </span>
              <span className="px-3 py-1 rounded-full border border-background/15 text-background/80">
                CIC #17146868
              </span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-background/85 hover:text-accent">About</Link></li>
              <li><Link to="/programmes" className="text-background/85 hover:text-accent">Programmes</Link></li>
              <li><Link to="/get-support" className="text-background/85 hover:text-accent">Get Support</Link></li>
              <li><Link to="/contact" className="text-background/85 hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-background/60 mb-4">
              Get in touch
            </h3>
            <a
              href="mailto:hello@reviveuk.org.uk"
              className="flex items-center gap-2 text-sm text-background hover:text-accent mb-3"
            >
              <Mail className="h-4 w-4" /> hello@reviveuk.org.uk
            </a>
            <address className="not-italic text-sm text-background/70 flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                C/O LDCVS, The Cornerstone<br />
                Sulyard Street<br />
                Lancaster, Lancashire LA1 1PX
              </span>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-wrap items-center justify-between gap-3 text-xs text-background/60">
          <div>© {new Date().getFullYear()} ReviveUK EdTech CIC. Registered in England and Wales.</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            From foundation to future.
          </div>
        </div>
      </div>
    </footer>
  );
}
