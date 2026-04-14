import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Srinkhala — Social Lift" },
      { name: "description", content: "Book a free strategy call with Srinkhala. Let's discuss how we can grow your LinkedIn presence and personal brand." },
      { property: "og:title", content: "Contact Srinkhala — Social Lift" },
      { property: "og:description", content: "Book a free strategy call to grow your LinkedIn." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Get in Touch</span>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
            Let&apos;s Build Your <span className="gradient-text">Personal Brand</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Ready to transform your LinkedIn presence? Book a free strategy call or reach out directly.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Calendly Embed */}
          <div className="glass-card rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">📅 Book a Free Call</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Schedule a 30-minute strategy call to discuss your LinkedIn goals and how I can help you grow.
            </p>
            <a
              href="https://calendly.com/srinkhalab1998"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl gradient-cyan px-6 py-4 text-center text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
            >
              Schedule on Calendly →
            </a>
          </div>

          {/* Direct Contact */}
          <div className="glass-card rounded-3xl p-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground">📧 Direct Contact</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Email</p>
                <a
                  href="mailto:srinkhalab1998@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary p-4 text-sm text-foreground transition-colors hover:bg-secondary/80"
                >
                  <span className="text-xl">✉️</span>
                  srinkhalab1998@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/srinkhalabaranwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary p-4 text-sm text-foreground transition-colors hover:bg-secondary/80"
                >
                  <span className="text-xl">💼</span>
                  linkedin.com/in/srinkhalabaranwal
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Calendly</p>
                <a
                  href="https://calendly.com/srinkhalab1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-secondary p-4 text-sm text-foreground transition-colors hover:bg-secondary/80"
                >
                  <span className="text-xl">📅</span>
                  calendly.com/srinkhalab1998
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why work with me */}
        <div className="mt-16 glass-card rounded-3xl p-10 text-center glow-cyan">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Why Work With <span className="gradient-text">Srinkhala</span>?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div>
              <span className="text-3xl">🚀</span>
              <h3 className="mt-3 font-semibold text-foreground">3X Growth in 12 Weeks</h3>
              <p className="mt-2 text-sm text-muted-foreground">Most clients see 3X growth in impressions and engagement.</p>
            </div>
            <div>
              <span className="text-3xl">🎯</span>
              <h3 className="mt-3 font-semibold text-foreground">Strategy-First Approach</h3>
              <p className="mt-2 text-sm text-muted-foreground">Every piece of content is aligned with your brand goals.</p>
            </div>
            <div>
              <span className="text-3xl">🤝</span>
              <h3 className="mt-3 font-semibold text-foreground">Collaborative Process</h3>
              <p className="mt-2 text-sm text-muted-foreground">Open feedback and constant communication throughout.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
