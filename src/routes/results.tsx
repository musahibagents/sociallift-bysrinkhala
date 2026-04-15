import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Social Lift by Srinkhala" },
      { name: "description", content: "See how Srinkhala helped clients grow their LinkedIn impressions by 1,056% and followers by 151% in just 12 days." },
      { property: "og:title", content: "Results — Social Lift by Srinkhala" },
      { property: "og:description", content: "Real results: 1,056% impression growth in 12 days." },
    ],
  }),
  component: ResultsPage,
});

const highlights = [
  { icon: "📈", value: "1,056%", label: "Impression Growth" },
  { icon: "👥", value: "151%", label: "Follower Growth" },
  { icon: "👁️", value: "375%", label: "Profile Viewer Growth" },
  { icon: "🔍", value: "100%", label: "Search Appearance Growth" },
  { icon: "🕐", value: "12 Days", label: "Time to Results" },
  { icon: "⭐", value: "3X", label: "Avg Growth in 12 Weeks" },
];

function ResultsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Proven Results</span>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
            Real <span className="gradient-text">Results</span>, Real Growth
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            See the actual growth numbers Srinkhala has delivered for clients. No fluff, just data.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="mt-16 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {highlights.map((h) => (
            <div key={h.label} className="glass-card rounded-2xl p-6 text-center hover-lift">
              <span className="text-2xl">{h.icon}</span>
              <p className="mt-2 text-2xl font-extrabold gradient-text">{h.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>

        {/* Real Screenshots */}
        <div className="mt-20">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
            📊 Real Analytics <span className="gradient-text">Screenshots</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-6 glow-cyan overflow-hidden">
              <img
                src="/images/result-screenshot-1.png"
                alt="LinkedIn analytics showing impression and follower growth"
                className="w-full rounded-2xl"
                loading="lazy"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Real client analytics showing massive growth in impressions and engagement
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6 glow-cyan overflow-hidden">
              <img
                src="/images/result-screenshot-2.png"
                alt="LinkedIn analytics showing profile views and search appearances growth"
                className="w-full rounded-2xl"
                loading="lazy"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Profile views and search appearances skyrocketed in just 12 days
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            How Srinkhala <span className="gradient-text">Delivers Results</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Deep Discovery", desc: "Understanding your target audience, goals, and unique voice." },
              { step: "02", title: "Strategy Design", desc: "Creating a custom content and branding strategy for your niche." },
              { step: "03", title: "Content Execution", desc: "Writing, designing, and publishing high impact LinkedIn content." },
              { step: "04", title: "Growth & Optimize", desc: "Monitoring analytics, optimizing strategy, and scaling your reach." },
            ].map((s) => (
              <div key={s.step} className="glass-card rounded-2xl p-6 hover-lift">
                <span className="text-3xl font-extrabold gradient-text">{s.step}</span>
                <h3 className="mt-3 font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://calendly.com/srinkhalab1998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl gradient-cyan px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
          >
            Get Similar Results — Book a Call →
          </a>
        </div>
      </div>
    </div>
  );
}
