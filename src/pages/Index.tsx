import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Compass, Users, Heart } from "lucide-react";
import { programmes } from "@/data/programmes";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-16 md:py-24 grid gap-10 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <span className="heraldic-rule mb-6" aria-hidden="true" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-5">
              Inclusive STEAM education.<br />Real pathways out of poverty.
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-8">
              ReviveUK EdTech CIC supports disadvantaged and underserved people in
              Lancaster with skills, training and clear routes into skilled employment
              or self-employment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/get-support"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-accent/90"
              >
                Start your assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 px-6 py-3 font-semibold uppercase tracking-wider text-sm rounded-md hover:border-accent"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="bg-primary-glow/40 border border-primary-foreground/15 p-8 max-w-sm rounded-md">
              <h2 className="font-display text-xl text-primary-foreground mb-3">Our mission</h2>
              <p className="opacity-90">
                To advance education and relieve poverty by delivering accessible STEAM
                education and skills development across Lancaster and the surrounding area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="container-wide py-16">
        <div className="max-w-3xl">
          <span className="heraldic-rule mb-4" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl mb-4">Who we support</h2>
          <p className="text-lg text-muted-foreground">
            We work with people who are too often left behind by mainstream provision.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: GraduationCap, title: "Disadvantaged children & young people", body: "Including those from low-income households." },
            { icon: Heart, title: "Disabled & neurodivergent learners", body: "Adapted, accessible delivery as standard." },
            { icon: Compass, title: "Home-educated learners", body: "Community-based STEAM sessions." },
            { icon: Users, title: "Unemployed & underemployed adults", body: "Reskilling for skills-shortage sectors." },
            { icon: Heart, title: "People in financial hardship", body: "Or facing sudden life changes." },
            { icon: Users, title: "International students & skilled migrants", body: "Navigating the UK labour market." },
          ].map((b) => (
            <li key={b.title} className="bg-card border border-border p-5 rounded-md">
              <b.icon className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
              <h3 className="font-display text-lg mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Programmes preview */}
      <section className="bg-secondary">
        <div className="container-wide py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <span className="heraldic-rule mb-4" aria-hidden="true" />
              <h2 className="font-display text-3xl md:text-4xl mb-3">Our seven programmes</h2>
              <p className="text-lg text-muted-foreground">
                Each service reduces a specific barrier to education, work or stability.
              </p>
            </div>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary border-b-2 border-accent pb-1"
            >
              See all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {programmes.map((p, i) => (
              <article key={p.slug} className="bg-card border border-border p-6 flex flex-col rounded-md">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
                  {p.name}
                </div>
                <h3 className="font-display text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1">{p.short}</p>
                <Link
                  to={`/programmes#${p.slug}`}
                  className="mt-4 text-sm font-semibold text-primary inline-flex items-center gap-1 hover:text-accent"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide py-16 md:py-20 text-center">
          <span className="heraldic-rule mb-6" aria-hidden="true" />
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
            Not sure where to start?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Our short, Maslow-framed assessment helps us understand your situation and
            create a personalised action plan with the right referrals and next steps.
          </p>
          <Link
            to="/get-support"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-accent/90"
          >
            Start your assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
