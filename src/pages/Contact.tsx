import { Mail, MapPin, Clock, Facebook, Instagram, Linkedin, AtSign } from "lucide-react";

const socials = [
  { label: "Facebook", url: "https://www.facebook.com/share/1SbLWpGokv/?mibextid=wwXIfr", Icon: Facebook },
  { label: "Instagram", url: "https://www.instagram.com/reviveukedtech", Icon: Instagram },
  { label: "X / Twitter", url: "https://x.com/reviveukedtech", Icon: AtSign },
  { label: "Threads", url: "https://www.threads.com/@reviveukedtech", Icon: AtSign },
  { label: "Pinterest", url: "https://pin.it/1TjR0KrN5", Icon: AtSign },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/reviveuk-edtech-cic/", Icon: Linkedin },
];

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
          <a href="mailto:info@reviveuk.org.uk" className="card-elevated group block">
            <Mail className="h-6 w-6 text-primary mb-4" aria-hidden="true" />
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground mb-2">
              Email us
            </div>
            <div className="font-display text-2xl text-primary group-hover:text-[hsl(var(--crimson))] transition-colors break-words">
              info@reviveuk.org.uk
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

          {/* Quick form */}
          <form
            className="card-elevated md:col-span-2 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Enquiry from ${data.get("name") || "website"}`);
              const body = encodeURIComponent(`${data.get("message") || ""}\n\n— ${data.get("name") || ""} (${data.get("email") || ""})`);
              window.location.href = `mailto:info@reviveuk.org.uk?subject=${subject}&body=${body}`;
            }}
          >
            <div className="sm:col-span-2">
              <div className="eyebrow mb-2">Send a message</div>
              <h2 className="font-display text-2xl">Start a conversation</h2>
            </div>
            <label className="text-sm">
              <span className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your name</span>
              <input name="name" required className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary" />
            </label>
            <label className="text-sm">
              <span className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</span>
              <input name="email" type="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary" />
            </label>
            <label className="text-sm sm:col-span-2">
              <span className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</span>
              <textarea name="message" rows={4} required className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:border-primary" />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary">Send message</button>
            </div>
          </form>

          <div className="md:col-span-2">
            <div className="eyebrow mb-3">Follow our work</div>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-full px-4 py-2 text-sm flex items-center gap-2 hover:border-primary transition"
                >
                  <s.Icon className="h-4 w-4 text-primary" /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
