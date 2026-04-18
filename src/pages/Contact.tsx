import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="container-narrow py-16">
      <span className="heraldic-rule mb-4" aria-hidden="true" />
      <h1 className="font-display text-4xl md:text-5xl mb-4">Contact</h1>
      <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
        Get in touch about partnerships, referrals, workshops, or to ask about our work.
        We aim to respond within five working days.
      </p>

      <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
        <div className="bg-card border border-border rounded-md p-6">
          <Mail className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
          <h2 className="font-display text-lg mb-2">Email us</h2>
          <a
            href="mailto:hello@reviveuk.org.uk"
            className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent break-words"
          >
            hello@reviveuk.org.uk
          </a>
        </div>

        <div className="bg-card border border-border rounded-md p-6">
          <MapPin className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
          <h2 className="font-display text-lg mb-2">Registered office</h2>
          <address className="not-italic text-sm leading-relaxed">
            C/O LDCVS, The Cornerstone<br />
            Sulyard Street<br />
            Lancaster, Lancashire LA1 1PX<br />
            United Kingdom
          </address>
        </div>
      </div>
    </div>
  );
}
