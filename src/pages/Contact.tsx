import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="container-narrow pt-20 pb-12">
          <div className="eyebrow mb-5"><span className="h-px w-8 bg-primary" />Contact</div>
          <h1 className="font-display text-5xl md:text-6xl mb-6 max-w-3xl">
            Let's <span className="text-gradient-gold">build something</span> together.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            For partnerships, referrals, workshops or to ask about our work. We aim to
            respond within five working days.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-narrow grid gap-6 md:grid-cols-2">
          <a
            href="mailto:hello@reviveuk.org.uk"
            className="card-elevated group block"
          >
            <Mail className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Email us
            </div>
            <div className="font-display text-2xl text-primary group-hover:text-accent transition-colors break-words">
              hello@reviveuk.org.uk
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Best for partnerships, media and general enquiries.
            </p>
          </a>

          <div className="card-elevated">
            <MapPin className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Registered office
            </div>
            <address className="not-italic font-display text-lg leading-snug">
              C/O LDCVS, The Cornerstone<br />
              Sulyard Street<br />
              Lancaster, Lancashire LA1 1PX
            </address>
          </div>

          <div className="card-elevated md:col-span-2 flex items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-accent-soft text-primary flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-lg">Response time</div>
              <p className="text-sm text-muted-foreground">
                We reply within five working days. Urgent safeguarding matters are
                handled in line with our published procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
