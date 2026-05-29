import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Leaf,
  ShieldCheck,
  Building2,
  GraduationCap,
  Facebook,
  Instagram,
  Linkedin,
  AtSign,
} from "lucide-react";
import { programmes } from "@/data/programmes";
import { partners } from "@/data/partners";

const stats = [
  { value: 7, suffix: "", label: "Strategic programmes" },
  { value: 5, suffix: "", label: "Maslow life areas" },
  { value: 2, suffix: "", label: "UN SDGs aligned" },
  { value: 100, suffix: "%", label: "Surplus reinvested" },
];

const pillars = [
  { icon: GraduationCap, title: "Inclusive STEAM", body: "Adapted, accessible delivery for SEND, SEMH and home-educated learners." },
  { icon: Leaf, title: "Sustainable impact", body: "Long-horizon programmes designed for measurable, compounding outcomes." },
  { icon: ShieldCheck, title: "Public-sector grade", body: "Safeguarding, governance and reporting built in from day one." },
  { icon: Building2, title: "Ecosystem partnerships", body: "Co-designed with schools, councils, employers and community partners." },
];

const initiatives = [
  { tag: "Enterprise", title: "HSBC Small Business Growth", body: "Supporting small business confidence, leadership and digital readiness in Lancaster." },
  { tag: "Innovation", title: "Fetcher · Species Small Programs", body: "Micro-programmes turning research and curiosity into viable community projects." },
  { tag: "STEAM", title: "Inclusive STEAM Innovation", body: "Workshops adapted for SEND, SEMH and home-educated learners across the district." },
  { tag: "Employability", title: "Community Employability", body: "Skills-shortage pathways into apprenticeships, training and self-employment." },
  { tag: "Access", title: "Education Accessibility", body: "Bursaries, language support and assistive tooling for international and adult learners." },
];

const socials = [
  { label: "Facebook", url: "https://www.facebook.com/share/1SbLWpGokv/?mibextid=wwXIfr", Icon: Facebook },
  { label: "Instagram", url: "https://www.instagram.com/reviveukedtech", Icon: Instagram },
  { label: "X / Twitter", url: "https://x.com/reviveukedtech", Icon: AtSign },
  { label: "Threads", url: "https://www.threads.com/@reviveukedtech", Icon: AtSign },
  { label: "Pinterest", url: "https://pin.it/1TjR0KrN5", Icon: AtSign },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/reviveuk-edtech-cic/", Icon: Linkedin },
];

function useCountUp(target: number, duration = 1400) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { val, ref } = useCountUp(value);
  return (
    <div>
      <span ref={ref} className="font-display text-4xl md:text-5xl text-[hsl(var(--crimson))]">
        {val}{suffix}
      </span>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

export default function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        {/* Floating particles */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-24 h-[30rem] w-[30rem] rounded-full opacity-20 blur-3xl float-slow" style={{ background: "hsl(var(--primary))" }} />
          <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full opacity-25 blur-3xl float-slow" style={{ background: "hsl(var(--crimson))", animationDelay: "2s" }} />
          <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full opacity-20 blur-3xl float-slow" style={{ background: "hsl(var(--accent))", animationDelay: "4s" }} />
          {[...Array(14)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-[hsl(var(--accent))] opacity-40 float-slow"
              style={{
                width: 6 + (i % 4) * 2,
                height: 6 + (i % 4) * 2,
                top: `${(i * 53) % 100}%`,
                left: `${(i * 37) % 100}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>

        <div className="container-wide pt-20 pb-24 md:pt-28 md:pb-32 grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-6 reveal">
              <span className="h-px w-8 bg-[hsl(var(--crimson))]" />
              Lancaster · Est. 2026 · CIC #17146868
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight reveal reveal-delay-1">
              Guided with <span className="text-[hsl(var(--crimson))]">purpose</span>.
              <br />Built for the <span className="text-gradient-gold">future</span>.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl reveal reveal-delay-2">
              Inclusive STEAM education, employability support and innovation pathways
              empowering learners across Lancaster and beyond.
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
                <Stat key={s.label} {...s} />
              ))}
            </dl>
          </div>

          {/* Animated logo / shield */}
          <div className="lg:col-span-5 relative reveal reveal-delay-2">
            <div className="relative rounded-3xl bg-foreground text-background p-8 md:p-10 overflow-hidden grain">
              <div aria-hidden="true" className="absolute inset-0 opacity-95 -z-0" style={{ background: "var(--gradient-hero)" }} />
              <div className="relative">
                <div className="text-[11px] uppercase tracking-[0.3em] text-accent mb-5">
                  Educate · Empower · Elevate
                </div>
                <div className="font-display text-4xl text-background mb-1">
                  Revive<span className="text-[hsl(var(--crimson))]">UK</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-accent mb-8">EdTech · Est. 2026</div>

                <div className="grid grid-cols-3 gap-3">
                  {programmes.slice(0, 6).map((p) => (
                    <Link key={p.slug} to={`/programmes#${p.slug}`} className="group flex flex-col items-center text-center p-3 rounded-xl bg-background/10 hover:bg-background/20 transition">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-background/80 group-hover:text-accent">
                        {p.name}
                      </span>
                    </Link>
                  ))}
                </div>

                <Link to="/programmes" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-background">
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
              <h2 className="font-display text-4xl md:text-5xl">Strategic, sustainable, sovereign-grade.</h2>
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

      {/* PROGRAMMES — shield grid */}
      <section className="py-24 bg-secondary/40 relative overflow-hidden">
        <div className="container-wide">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="eyebrow mb-3">Featured programmes</div>
              <h2 className="font-display text-4xl md:text-5xl">Seven programmes. One coherent pathway.</h2>
              <p className="mt-4 text-muted-foreground">
                Each programme reduces a specific barrier to education, work or stability —
                heritage-inspired shields representing a modern, inclusive ecosystem.
              </p>
            </div>
            <Link to="/programmes" className="btn-ghost">
              All programmes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {programmes.map((p) => (
              <Link
                key={p.slug}
                to={`/programmes#${p.slug}`}
                className="card-elevated group flex flex-col items-center text-center relative overflow-hidden"
              >
                <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 group-hover:opacity-30 blur-3xl transition-opacity" style={{ background: "hsl(var(--accent))" }} />
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--crimson))] mb-1 mt-4">
                  {p.name}
                </div>
                <h3 className="font-display text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Educate · Empower · Elevate
          </p>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <div className="eyebrow mb-3">Featured initiatives</div>
            <h2 className="font-display text-4xl md:text-5xl">A connected ecosystem of programmes.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((i) => (
              <article key={i.title} className="card-elevated relative">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-3">{i.tag}</div>
                <h3 className="font-display text-xl mb-2">{i.title}</h3>
                <p className="text-sm text-muted-foreground">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS — typography only */}
      <section className="py-20 bg-secondary/40 border-y border-border/60">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="eyebrow mb-3">Strategic partners</div>
              <h2 className="font-display text-3xl md:text-4xl">Trusted by community &amp; institutions.</h2>
            </div>
            <Link to="/contact" className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
              Become a partner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <a
                key={p.shortName}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated group relative overflow-hidden"
              >
                <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(135deg, hsl(var(--primary) / 0.04), hsl(var(--accent) / 0.06))" }} />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="font-display text-3xl tracking-tight text-primary">{p.shortName}</div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-[hsl(var(--crimson))]" />
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[hsl(var(--crimson))]">{p.name}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Leaf className="h-3.5 w-3.5 text-[hsl(var(--crimson))]" />
            Hosted sustainably using green hosting infrastructure powered by Krystal Hosting.
          </p>
        </div>
      </section>

      {/* SOCIAL ECOSYSTEM */}
      <section className="py-24">
        <div className="container-wide">
          <div className="max-w-2xl mb-10">
            <div className="eyebrow mb-3">Social ecosystem</div>
            <h2 className="font-display text-4xl md:text-5xl">Follow the journey.</h2>
            <p className="mt-3 text-muted-foreground">@reviveukedtech across every platform.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:-translate-y-1 hover:border-[hsl(var(--crimson))] transition"
              >
                <div className="h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition">
                  <s.Icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-wide">
          <div className="relative rounded-3xl overflow-hidden bg-foreground text-background grain">
            <div aria-hidden="true" className="absolute inset-0 opacity-95" style={{ background: "var(--gradient-hero)" }} />
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
