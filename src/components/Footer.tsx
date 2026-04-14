import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-cyan">
                <span className="text-base font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Social <span className="gradient-text">Lift</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              We help founders and coaches build their strong personal brand on LinkedIn.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Plans & Packages</Link>
              <Link to="/results" className="text-sm text-muted-foreground hover:text-primary transition-colors">Results</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Profile Optimization</span>
              <span>LinkedIn Ghostwriting</span>
              <span>LinkedIn Management</span>
              <span>Organic Lead Generation</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Social Lift. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
