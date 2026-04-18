import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container-wide py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-xl mb-2 text-primary-foreground">ReviveUK EdTech CIC</div>
          <p className="text-sm opacity-85 max-w-xs">
            Inclusive STEAM education and employability support for disadvantaged and
            underserved people in Lancaster and surrounding areas.
          </p>
          <p className="text-xs opacity-60 mt-4">
            A Community Interest Company. Surpluses reinvested for public benefit.
          </p>
        </div>
        <div>
          <h3 className="font-display text-base mb-3 text-primary-foreground">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/programmes" className="hover:underline">Programmes</Link></li>
            <li><Link to="/get-support" className="hover:underline">Get Support</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact & Partners</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base mb-3 text-primary-foreground">Aligned with</h3>
          <ul className="space-y-2 text-sm opacity-90">
            <li>UN SDG 4 — Quality Education</li>
            <li>UN SDG 8 — Decent Work & Economic Growth</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-wide py-4 text-xs opacity-70">
          © {new Date().getFullYear()} ReviveUK EdTech CIC. Lancaster, United Kingdom.
        </div>
      </div>
    </footer>
  );
}
