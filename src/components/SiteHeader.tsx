import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/reviveuk-logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/get-support", label: "Get Support" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
    } after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:bg-[hsl(var(--crimson))] after:transition-transform after:origin-left ${
      isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border/60 backdrop-saturate-150"
          : "bg-background/0 border-b border-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-4 py-4">
        <NavLink to="/" className="flex items-center gap-3 shrink-0 group" aria-label="ReviveUK EdTech home">
          <img
            src={logo}
            alt="ReviveUK EdTech"
            className="h-14 sm:h-16 w-auto object-contain"
            loading="eager"
            decoding="async"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg font-semibold tracking-tight">
              Revive<span className="text-[hsl(var(--crimson))]">UK</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground -mt-0.5">
              EdTech · Est. 2026
            </div>
          </div>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <NavLink to="/get-support" className="btn-primary !py-2.5 !px-5 text-xs">
            Start assessment
          </NavLink>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="container-wide py-3 flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-medium ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/get-support"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 mb-2 justify-center"
            >
              Start assessment
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
