import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/get-support", label: "Get Support" },
  { to: "/contact", label: "Contact & Partners" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-semibold uppercase tracking-wider border-b-2 ${
      isActive
        ? "border-accent text-primary"
        : "border-transparent text-foreground hover:text-primary hover:border-accent/50"
    }`;

  return (
    <header className="bg-background border-b border-border">
      <div className="container-wide flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="ReviveUK EdTech CIC logo"
            className="h-12 w-12 object-contain bg-primary rounded-sm p-1"
          />
          <div className="leading-tight">
            <div className="font-display text-lg text-primary">ReviveUK EdTech</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Community Interest Company
            </div>
          </div>
        </NavLink>

        <nav className="hidden lg:flex items-center" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden p-2 border border-border rounded-sm"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background" aria-label="Mobile">
          <div className="container-wide py-2 flex flex-col">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-base font-semibold border-b border-border ${
                    isActive ? "text-accent" : "text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
