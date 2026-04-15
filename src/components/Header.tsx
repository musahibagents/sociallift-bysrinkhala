import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import logoImg from "@/assets/social-lift-logo.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/pricing", label: "Plans & Packages" },
    { to: "/results", label: "Results" },
    { to: "/contact", label: "Contact Us" },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="Social Lift" className="h-9 w-9 rounded-lg object-contain" width={36} height={36} />
          <span className="text-xl font-bold text-foreground">
            Social <span className="gradient-text">Lift</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-lg gradient-cyan px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan md:inline-flex"
        >
          Book a Call
        </Link>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-foreground transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-4 border-t border-border px-6 py-6 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-medium transition-colors ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 rounded-lg gradient-cyan px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Book a Call
          </Link>
        </nav>
      )}
    </header>
  );
}
