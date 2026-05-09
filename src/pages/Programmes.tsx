import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { programmes } from "@/data/programmes";
import { ProgrammeShield } from "@/components/ProgrammeShield";

export default function Programmes() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container-wide pt-20 pb-12">
          <div className="eyebrow mb-5"><span className="h-px w-8 bg-primary" />Our programmes</div>
          <h1 className="font-display text-5xl md:text-6xl max-w-4xl mb-6">
            Seven programmes that <span className="text-gradient-gold">remove barriers</span> and open pathways.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Each can stand alone or work together — guided by Waymark, our Maslow-framed
            assessment, to meet people where they are.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-wide">
          <nav aria-label="Programme jump links" className="flex flex-wrap gap-2 mb-12">
            {programmes.map((p) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="text-xs font-semibold uppercase tracking-[0.18em] px-3 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition"
              >
                {p.name}
              </a>
            ))}
          </nav>

          <div className="space-y-6">
            {programmes.map((p, i) => (
              <article
                key={p.slug}
                id={p.slug}
                className="card-elevated scroll-mt-24 grid gap-8 md:grid-cols-12 items-start"
              >
                <div className="md:col-span-4 flex flex-col items-start gap-4">
                  <ProgrammeShield slug={p.slug} size={120} />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(var(--crimson))] mb-2">
                      0{i + 1} · {p.name}
                    </div>
                    <h2 className="font-display text-3xl">{p.title}</h2>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg mb-6">{p.description}</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-secondary p-4">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-1">Who it's for</h3>
                      <p className="text-sm">{p.eligibility}</p>
                    </div>
                    <div className="rounded-xl bg-accent-soft p-4">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-1">How to access</h3>
                      <p className="text-sm">{p.access}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-5">Find the right pathway for you.</h2>
          <Link to="/get-support" className="btn-primary">Start your assessment <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
