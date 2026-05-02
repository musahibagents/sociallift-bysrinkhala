import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Srinkhala — Social Lift" },
      { name: "description", content: "Meet Srinkhala — LinkedIn personal branding strategist helping founders, coaches, and creators build authority and inbound opportunities." },
      { property: "og:title", content: "About Srinkhala — Social Lift" },
      { property: "og:description", content: "Meet Srinkhala — LinkedIn personal branding strategist." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About</span>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
            Hi, I'm <span className="gradient-text">Srinkhala</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            LinkedIn personal branding strategist, ghostwriter, and founder of Social Lift.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-foreground">My Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I started my LinkedIn journey as a creator — writing posts, building an audience, and learning what truly moves the needle on the platform.
              Along the way, I got featured on LinkedIn News India multiple times, became a Top Voice, and was invited to YouTube podcasts and live shows.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              That's when founders, coaches, and operators started reaching out — asking me to help them build the same authority for themselves.
              Social Lift was born out of those conversations.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-foreground">What I Do</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              I help busy founders and experts turn LinkedIn into a steady source of authority, inbound leads, and opportunities — without them having to write a single post.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary">✓</span> Personal brand strategy & positioning</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Ghostwriting in your authentic voice</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Profile optimization & content design</li>
              <li className="flex gap-2"><span className="text-primary">✓</span> Organic lead generation & outreach</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 glass-card rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-foreground">Why I Do It</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Most experts have incredible insight but no time, system, or voice on LinkedIn. I believe a strong personal brand is the most undervalued
            asset of this decade — it opens doors that ads and cold outreach simply cannot. My mission is to make that brand-building process
            simple, authentic, and ROI-driven for the people I work with.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-extrabold gradient-text">2x</div>
            <p className="mt-2 text-sm text-muted-foreground">Featured on LinkedIn News India</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-extrabold gradient-text">Top Voice</div>
            <p className="mt-2 text-sm text-muted-foreground">LinkedIn community recognition</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-3xl font-extrabold gradient-text">50+</div>
            <p className="mt-2 text-sm text-muted-foreground">Founders & creators served</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://calendly.com/srinkhalab1998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl gradient-cyan px-8 py-3 text-sm font-semibold text-primary-foreground glow-cyan transition-all hover:opacity-90"
          >
            Book a Call with Me
          </a>
        </div>
      </div>
    </div>
  );
}
