import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Globe, BarChart3 } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container-narrow pt-20 pb-16">
          <div className="eyebrow mb-5 reveal"><span className="h-px w-8 bg-primary" />About us</div>
          <h1 className="font-display text-5xl md:text-6xl mb-6 max-w-3xl reveal reveal-delay-1">
            A community interest company built for <span className="text-gradient-gold">long-term impact</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl reveal reveal-delay-2">
            Advancing education and relieving poverty in Lancaster through inclusive
            STEAM learning, employability pathways and ecosystem partnerships.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-narrow grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: "Our purpose", body: "Deliver accessible STEAM education and skills development to disadvantaged individuals — improving access, progression, employability and income stability." },
            { icon: Users, title: "Community benefit", body: "Beneficiaries complete a structured, proportionate assessment. Where additional needs exist we signpost trusted partners. Surplus is reinvested in community-focused activity." },
            { icon: Globe, title: "Lancaster & beyond", body: "We support international students and skilled migrants to access the right training, navigate the UK labour market and contribute to local economic and cultural life." },
            { icon: BarChart3, title: "Measured impact", body: "Participation, skills progression, qualifications, progression into training or work, and income improvement — reported transparently." },
          ].map((c) => (
            <div key={c.title} className="card-elevated">
              <div className="h-11 w-11 rounded-xl bg-accent-soft text-primary flex items-center justify-center mb-4">
                <c.icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl mb-2">{c.title}</h2>
              <p className="text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary/40 border-y border-border/60">
        <div className="container-narrow">
          <div className="eyebrow mb-3">Aligned with</div>
          <h2 className="font-display text-3xl md:text-4xl mb-8">UN Sustainable Development Goals</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="card-elevated">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-2">SDG 4</div>
              <h3 className="font-display text-xl mb-2">Quality Education</h3>
              <p className="text-sm text-muted-foreground">Inclusive and equitable quality education and lifelong learning opportunities for all.</p>
            </div>
            <div className="card-elevated">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary mb-2">SDG 8</div>
              <h3 className="font-display text-xl mb-2">Decent Work & Economic Growth</h3>
              <p className="text-sm text-muted-foreground">Sustained, inclusive economic growth, full and productive employment, and decent work for all.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-5">Ready to work together?</h2>
          <Link to="/contact" className="btn-primary">Partner with us <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
