import { programmes } from "@/data/programmes";

export default function Programmes() {
  return (
    <div className="container-narrow py-16">
      <span className="heraldic-rule mb-4" aria-hidden="true" />
      <h1 className="font-display text-4xl md:text-5xl mb-4">Services</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Six delivery strands that work together to remove barriers and open pathways into
        skilled employment, training and self-employment.
      </p>

      <div className="space-y-12">
        {programmes.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="border-t-2 border-accent pt-8 scroll-mt-24"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-2">
              Programme {String(i + 1).padStart(2, "0")}
            </div>
            <h2 className="font-display text-3xl mb-3">{p.title}</h2>
            <p className="text-lg mb-6">{p.description}</p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-secondary p-5 border-l-4 border-primary">
                <h3 className="font-display text-base mb-2">Who it's for</h3>
                <p className="text-sm">{p.eligibility}</p>
              </div>
              <div className="bg-secondary p-5 border-l-4 border-primary">
                <h3 className="font-display text-base mb-2">How to access</h3>
                <p className="text-sm">{p.access}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
