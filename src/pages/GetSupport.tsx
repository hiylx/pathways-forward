import { Link } from "react-router-dom";
import { Utensils, Shield, Users, Award, Sparkles, ArrowRight } from "lucide-react";

const tiers = [
  { icon: Utensils, name: "Essentials", body: "Food, healthcare, GP registration, basic household stability." },
  { icon: Shield, name: "Safety & Stability", body: "Housing, finances, identification documents, driving licence." },
  { icon: Users, name: "Belonging & Support", body: "Family, community, mentoring relationships." },
  { icon: Award, name: "Esteem & Skills", body: "Confidence, qualifications, employability skills." },
  { icon: Sparkles, name: "Growth & Purpose", body: "Career goals, entrepreneurship, long-term aspirations." },
];

export default function GetSupport() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container-narrow pt-20 pb-12">
          <div className="eyebrow mb-5"><span className="h-px w-8 bg-primary" />Get support</div>
          <h1 className="font-display text-5xl md:text-6xl mb-6 max-w-3xl">
            A <span className="text-gradient-gold">private, structured</span> conversation about what comes next.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A short, Maslow-framed assessment helps us understand your situation and
            create a personalised action plan with practical referrals.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-narrow">
          <div className="card-elevated mb-12">
            <h2 className="font-display text-2xl mb-3">How the assessment works</h2>
            <ol className="grid gap-3 sm:grid-cols-2">
              {[
                "Answer questions across five life areas, based on Maslow's hierarchy of needs.",
                "We check that the foundations — food, healthcare, housing — are in place.",
                "You receive a personalised action plan with next steps and signposting.",
                "Save your progress at any point and return when you're ready.",
              ].map((step, i) => (
                <li key={step} className="flex gap-3 text-sm">
                  <span className="h-7 w-7 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-muted-foreground mt-5 pt-5 border-t border-border/60">
              Your information is kept private. Where safeguarding concerns arise, we follow our published procedures.
            </p>
          </div>

          <h2 className="font-display text-3xl mb-6">The five areas we explore</h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {tiers.map((t, i) => (
              <li key={t.name} className="card-elevated flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-accent-soft text-primary flex items-center justify-center font-display text-lg">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <t.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    <h3 className="font-display text-lg">{t.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="relative mt-14 rounded-3xl overflow-hidden bg-foreground text-background grain">
            <div aria-hidden="true" className="absolute inset-0 opacity-95" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative px-8 py-12 md:p-14 text-center">
              <h2 className="font-display text-3xl md:text-4xl text-background mb-4">Assessment coming soon</h2>
              <p className="text-background/80 max-w-xl mx-auto mb-7">
                The full assessment with progress saving, action plan and referrals is in
                development. In the meantime, please reach us directly.
              </p>
              <Link to="/contact" className="btn-gold">
                Contact us instead <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
