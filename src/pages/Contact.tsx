import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type EnquiryType = "school" | "employer" | "university" | "referral" | "individual" | "other";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) {
      next.name = "Please tell us your name so we can reply to you.";
    }
    const email = String(data.get("email") || "").trim();
    if (!email) {
      next.email = "Please add an email address — this is how we'll contact you back.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "That email looks unusual — please check there are no typos.";
    }
    if (!String(data.get("message") || "").trim()) {
      next.message = "Please add a short message so we know how to help.";
    }
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: wire to Django API endpoint /api/enquiries/
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="container-narrow py-20 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent mx-auto mb-4" aria-hidden="true" />
        <h1 className="font-display text-3xl mb-3">Thank you — your message has been received.</h1>
        <p className="text-lg text-muted-foreground">
          We aim to respond within five working days. If your enquiry is urgent, please
          mark it as such in any follow-up.
        </p>
      </div>
    );
  }

  const enquiryTypes: { value: EnquiryType; label: string }[] = [
    { value: "school", label: "School" },
    { value: "employer", label: "Employer" },
    { value: "university", label: "University / college" },
    { value: "referral", label: "Referral partner / charity" },
    { value: "individual", label: "Individual seeking support" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="container-narrow py-16">
      <span className="heraldic-rule mb-4" aria-hidden="true" />
      <h1 className="font-display text-4xl md:text-5xl mb-4">Contact</h1>
      <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
        Get in touch about partnerships, referrals, workshops, or to ask about our work.
        We aim to respond within five working days.
      </p>
      <p className="mb-10 text-base">
        Prefer email? Write to us at{" "}
        <a
          href="mailto:hello@reviveuk.org.uk"
          className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
        >
          hello@reviveuk.org.uk
        </a>
        .
      </p>

      <form onSubmit={onSubmit} noValidate className="grid gap-6 max-w-2xl">
        <div className="grid gap-2">
          <label htmlFor="name" className="font-semibold">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="px-4 py-3 border-2 border-border bg-background focus:border-accent rounded-md"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="font-semibold">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="px-4 py-3 border-2 border-border bg-background focus:border-accent rounded-md"
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>

        <div className="grid gap-2">
          <label htmlFor="organisation" className="font-semibold">
            Organisation <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            className="px-4 py-3 border-2 border-border bg-background focus:border-accent rounded-md"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="enquiryType" className="font-semibold">I'm contacting as a…</label>
          <select
            id="enquiryType"
            name="enquiryType"
            defaultValue="school"
            className="px-4 py-3 border-2 border-border bg-background focus:border-accent rounded-md"
          >
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="font-semibold">Your message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="px-4 py-3 border-2 border-border bg-background focus:border-accent rounded-md"
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-destructive">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="justify-self-start bg-accent text-accent-foreground px-6 py-3 font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-accent/90"
        >
          Send enquiry
        </button>
      </form>
    </div>
  );
}
