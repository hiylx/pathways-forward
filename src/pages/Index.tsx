import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  GraduationCap,
  Heart,
  Sparkles,
  Users,
  Leaf,
  Building2,
  ShieldCheck,
} from "lucide-react";
import { programmes } from "@/data/programmes";
import { partners } from "@/data/partners";

const stats = [
  { value: "7", label: "Strategic programmes" },
  { value: "5", label: "Maslow-framed life areas" },
  { value: "2", label: "UN SDGs aligned" },
  { value: "100%", label: "Surplus reinvested" },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "Inclusive STEAM",
    body: "Adapted, accessible delivery for SEND, SEMH and home-educated learners.",
  },
  {
    icon: Leaf,
    title: "Sustainable impact",
    body: "Long-horizon programmes designed for measurable, compounding outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Public-sector grade",
    body: "Safeguarding, governance and reporting built in from day one.",
  },
  {
    icon: Building2,
    title: "Ecosystem partnerships",
    body: "Co-designed with schools, councils, employers and community partners.",
  },
];

const beneficiaries = [
  { icon: GraduationCap, title: "Disadvantaged children & young people", body: "Including those from low-income households." },
  { icon: Heart, title: "Disabled & neurodivergent learners", body: "Adapted, accessible delivery as standard." },
  { icon: Compass, title: "Home-educated learners", body: "Community-based STEAM sessions." },
  { icon: Users, title: "Unemployed & underemployed adults", body: "Reskilling for skills-shortage sectors." },
  { icon: Heart, title: "People in financial hardship", body: "Or facing sudden life changes." },
  { icon: Users, title: "International students & skilled migrants", body: "Navigating the UK labour market." },
];

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl float-slow"
          style={{ background: "hsl(var(--primary))" }}
        />
        <div
          aria-hidden="true"
          className="absolute top-1/3 -left-24 h-72 w-72 rounded-full opacity-25 blur-3xl float-slow"
          style={{ background: "hsl(var(--accent))", animationDelay: "2s" }}
        />

        <div className="container-wide pt-20 pb-24 md:pt-28 md:pb-32 grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6 reveal">
              <span className="h-px w-8 bg-primary" />
              Lancaster · Est. 2024 · CIC #17146868
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight reveal reveal-delay-1">
              Shaping the future through{" "}
              <span className="text-gradient-gold">strategic innovation</span>,
              sustainability &amp; public-sector transformation.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl reveal reveal-delay-2">
              ReviveUK EdTech CIC delivers inclusive STEAM education, employability
              pathways and ecosystem partnerships — built for governments, communities
              and future-focused organisations.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 reveal reveal-delay-3">
              <Link to="/programmes" className="btn-primary">
                Explore programmes <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Partner with us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl reveal reveal-delay-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl md:text-4xl text-primary">{s.value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative reveal reveal-delay-2">
            <div className="relative rounded-3xl bg-foreground text-background p-8 md:p-10 overflow-hidden grain">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-90 -z-0"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent mb-5">
                  Educate · Empower · Elevate
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-background leading-tight mb-5">
                  Guided with purpose. Built for the future.
                </h2>
                <p className="text-background/80 text-sm md:text-base mb-8">
                  A Maslow-framed assessment guides every individual onto the right
                  pathway — from foundational stability to long-term aspiration.
                </p>

                <ul className="space-y-3">
                  {["Waymark — Assessment", "Sanctum — Wellbeing & Support", "Lyceum — Academic coaching", "Guildhall — Employment"].map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-background/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/programmes"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-background"
                >
                  See all 7 programmes <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden md:block glass rounded-2xl px-5 py-4 shadow-[var(--shadow-card)]">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Rooted in</div>
              <div className="font-display text-base">Lancaster Heritage</div>
              <div className="text-xs text-muted-foreground">Driven by innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3">Our approach</div>
              <h2 className="font-display text-4xl md:text-5xl">
                Strategic, sustainable, sovereign-grade.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              We combine the rigour of a strategy consultancy with the heart of a
              community organisation — designing programmes that endure.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.title} className={`card-elevated reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="h-11 w-11 rounded-xl bg-accent-soft text-primary flex items-center justify-center mb-5">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="py-24 bg-secondary/40 relative overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3">Featured programmes</div>
              <h2 className="font-display text-4xl md:text-5xl">
                Seven programmes. One coherent pathway.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Each programme reduces a specific barrier to education, work or stability —
                designed to work standalone or in sequence.
              </p>
            </div>
            <Link to="/programmes" className="btn-ghost">
              All programmes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p, i) => (
              <Link
                key={p.slug}
                to={`/programmes#${p.slug}`}
                className="card-elevated group flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    0{i + 1} · {p.name}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.short}</p>
                <div className="mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground">
                  {p.eligibility.split(".")[0]}.
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="py-24">
        <div className="container-wide grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">Who we support</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">
              People too often left behind by mainstream provision.
            </h2>
            <p className="text-muted-foreground">
              From children to adults, learners to leaders — our programmes adapt to
              meet people where they are.
            </p>
          </div>
          <ul className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {beneficiaries.map((b) => (
              <li key={b.title} className="card-elevated">
                <b.icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-display text-lg mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="eyebrow mb-3">Strategic partners</div>
              <h2 className="font-display text-3xl md:text-4xl">
                Trusted by community &amp; institutions.
              </h2>
            </div>
            <Link to="/contact" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
              Become a partner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <a
                key={p.shortName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated flex items-center gap-5 group"
              >
                <div className="h-16 w-16 shrink-0 rounded-xl bg-secondary flex items-center justify-center overflow-hidden border border-border/60">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition"
                    />
                  ) : (
                    <span className="font-display text-primary text-base font-bold">
                      {p.shortName.slice(0, 5)}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-lg truncate">{p.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{p.description}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden bg-foreground text-background grain">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-95"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative px-8 py-16 md:p-20 grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-8">
                <Sparkles className="h-6 w-6 text-accent mb-5" />
                <h2 className="font-display text-3xl md:text-5xl text-background mb-5 leading-tight">
                  Not sure where to start? Begin with a Waymark assessment.
                </h2>
                <p className="text-background/80 max-w-xl">
                  A short, Maslow-framed conversation that produces a personalised action
                  plan with the right referrals and next steps.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <Link to="/get-support" className="btn-gold">
                  Start your assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
