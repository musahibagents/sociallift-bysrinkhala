import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
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
              Personal branding strategist helping founders and coaches build authority on LinkedIn.
            </p>
            <p className="mt-2 text-sm text-primary font-medium">By Srinkhala Baranwal</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Plans & Packages</Link>
              <Link to="/results" className="text-sm text-muted-foreground hover:text-primary transition-colors">Results</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Profile Optimization</span>
              <span>LinkedIn Ghostwriting</span>
              <span>LinkedIn Management</span>
              <span>Lead Generation</span>
              <span>Personal Brand Coaching</span>
              <span>Content Design</span>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Connect</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:srinkhalab1998@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                srinkhalab1998@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/srinkhalabaranwal/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn Profile
              </a>
              <a href="https://calendly.com/srinkhalab1998" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Book a Call
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Social Lift by Srinkhala Baranwal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
