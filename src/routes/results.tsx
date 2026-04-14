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

const results = [
  {
    client: "Client A",
    period: "12 Days",
    metrics: [
      { label: "Post Impressions", before: "92", after: "19,019", growth: "1,056%" },
      { label: "Followers", before: "89", after: "516", growth: "151%" },
      { label: "Profile Viewers", before: "90", after: "428", growth: "375%" },
      { label: "Search Appearances", before: "29", after: "58", growth: "100%" },
    ],
  },
];

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
            See the actual growth numbers Srinkhala has delivered for clients — no fluff, just data.
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

        {/* Detailed Results */}
        {results.map((result) => (
          <div key={result.client} className="mt-16">
            <div className="glass-card rounded-3xl p-10 glow-cyan">
              <div className="mb-8 text-center">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                  Results in {result.period}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {result.metrics.map((m) => (
                  <div key={m.label} className="rounded-2xl bg-background/50 p-6 text-center">
                    <p className="text-sm text-muted-foreground">{m.label}</p>
                    <div className="mt-3 flex items-center justify-center gap-3">
                      <div>
                        <p className="text-lg font-bold text-muted-foreground line-through">{m.before}</p>
                        <p className="text-xs text-muted-foreground">Before</p>
                      </div>
                      <span className="text-primary text-xl">→</span>
                      <div>
                        <p className="text-2xl font-extrabold gradient-text">{m.after}</p>
                        <p className="text-xs text-muted-foreground">After</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-primary">▲ {m.growth}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Process */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            How Srinkhala <span className="gradient-text">Delivers Results</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { step: "01", title: "Deep Discovery", desc: "Understanding your target audience, goals, and unique voice." },
              { step: "02", title: "Strategy Design", desc: "Creating a custom content and branding strategy for your niche." },
              { step: "03", title: "Content Execution", desc: "Writing, designing, and publishing high-impact LinkedIn content." },
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
