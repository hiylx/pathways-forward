import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Services" },
  { to: "/get-support", label: "Get Support" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `shrink-0 px-3 py-2 text-sm font-semibold uppercase tracking-wider border-b-2 ${
      isActive
        ? "border-accent text-primary"
        : "border-transparent text-foreground hover:text-primary hover:border-accent/50"
    }`;

  return (
    <header className="bg-background border-b border-border">
      <div className="container-wide flex items-center justify-between gap-3 py-3">
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="ReviveUK EdTech CIC logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain bg-primary rounded-md p-1"
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg text-primary">ReviveUK EdTech</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Community Interest Company
            </div>
          </div>
        </NavLink>

        <nav
          className="flex-1 flex items-center overflow-x-auto whitespace-nowrap -mx-2 px-2 scrollbar-thin"
          aria-label="Primary"
        >
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
