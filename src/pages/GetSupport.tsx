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
    <div className="container-narrow py-16">
      <span className="heraldic-rule mb-4" aria-hidden="true" />
      <h1 className="font-display text-4xl md:text-5xl mb-4">Get Support</h1>
      <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
        A short, private assessment helps us understand your situation and create a
        personalised action plan — with practical referrals where they help.
      </p>

      <section className="bg-secondary p-6 md:p-8 mb-12 border-l-4 border-accent">
        <h2 className="font-display text-2xl mb-3">How the assessment works</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Answer questions across five life areas, based on Maslow's hierarchy of needs.</li>
          <li>We check that the foundations — like food, healthcare and housing — are in place.</li>
          <li>You receive a personalised action plan with next steps and referral signposting.</li>
          <li>You can save your progress at any point and return when you're ready.</li>
        </ol>
        <p className="text-sm text-muted-foreground mt-4">
          Your information is kept private. Where safeguarding concerns arise, we follow
          our published procedures.
        </p>
      </section>

      <h2 className="font-display text-2xl mb-6">The five areas we explore</h2>
      <ol className="space-y-3 mb-12">
        {tiers.map((t, i) => (
          <li key={t.name} className="flex gap-4 bg-card border border-border p-5 rounded-md">
            <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-md flex items-center justify-center font-display">
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <t.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-display text-lg">{t.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{t.body}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Skeleton CTA — assessment flow to be implemented in next phase */}
      <div className="bg-primary text-primary-foreground p-8 md:p-10 text-center">
        <h2 className="font-display text-2xl text-primary-foreground mb-3">
          Assessment coming soon
        </h2>
        <p className="opacity-90 max-w-xl mx-auto mb-6">
          The full assessment flow with progress saving, action plan and referrals will be
          available shortly. In the meantime, you can reach us directly.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-semibold uppercase tracking-wider text-sm rounded-sm hover:bg-accent/90"
        >
          Contact us instead <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
