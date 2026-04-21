import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Social Lift by Srinkhala" },
      { name: "description", content: "See real LinkedIn analytics — before vs after working with Srinkhala. 1,056% impression growth in just 12 days, plus client top posts." },
      { property: "og:title", content: "Results — Social Lift by Srinkhala" },
      { property: "og:description", content: "Real before/after LinkedIn analytics and top performing client posts." },
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

const topPosts = [
  { impressions: "3,346", reactions: "303", comments: "48" },
  { impressions: "3,501", reactions: "289", comments: "46" },
  { impressions: "63,967", reactions: "356", comments: "64" },
  { impressions: "18,435", reactions: "308", comments: "76" },
  { impressions: "2,207", reactions: "243", comments: "45" },
  { impressions: "3,930", reactions: "376", comments: "133" },
];

const mariannePosts = [
  { impressions: "28,719", reactions: "99", comments: "21" },
  { impressions: "10,273", reactions: "96", comments: "41" },
  { impressions: "4,772", reactions: "99", comments: "27" },
];

function StatCard({ impressions, reactions, comments }: { impressions: string; reactions: string; comments: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 hover-lift">
      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-xl font-extrabold gradient-text">{impressions}</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Impressions</p>
        </div>
        <div>
          <p className="text-xl font-extrabold gradient-text">{reactions}</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Reactions</p>
        </div>
        <div>
          <p className="text-xl font-extrabold gradient-text">{comments}</p>
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Comments</p>
        </div>
      </div>
    </div>
  );
}

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

        {/* Before vs After */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The 12 Day Transformation</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-4xl">
              Before vs <span className="gradient-text">After</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Same client. Same profile. 12 days of working with Srinkhala.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-8 hover-lift text-center">
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Before
              </span>
              <p className="mt-6 text-5xl font-extrabold text-foreground">92</p>
              <p className="mt-1 text-sm text-muted-foreground">Impressions</p>
              <p className="mt-6 text-5xl font-extrabold text-foreground">89</p>
              <p className="mt-1 text-sm text-muted-foreground">Followers</p>
              <p className="mt-6 text-xs text-muted-foreground">Thursday, September 28</p>
            </div>

            <div className="glass-card rounded-3xl p-8 glow-cyan hover-lift text-center">
              <span className="rounded-full gradient-cyan px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                After 12 Days
              </span>
              <p className="mt-6 text-5xl font-extrabold gradient-text">19,019</p>
              <p className="mt-1 text-sm text-muted-foreground">Impressions</p>
              <p className="mt-6 text-5xl font-extrabold gradient-text">516</p>
              <p className="mt-1 text-sm text-muted-foreground">Followers</p>
              <p className="mt-6 text-xs font-semibold gradient-text">+1,056% growth · Monday, October 9</p>
            </div>
          </div>
        </div>

        {/* Top Client Posts */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Viral Worthy Content</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-4xl">
              Client's <span className="gradient-text">Top Posts</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Posts crafted by Srinkhala that drove thousands of impressions, hundreds of reactions, and real conversations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topPosts.map((p, i) => (
              <StatCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* Sustained Growth */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sustained Growth</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-4xl">
              Beyond the First <span className="gradient-text">Spike</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Consistent content. Consistent results. Long term performance and newsletter momentum.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-8 hover-lift text-center">
              <p className="text-5xl font-extrabold gradient-text">35,529</p>
              <p className="mt-2 text-sm text-muted-foreground">Impressions in 28 days</p>
              <p className="mt-4 text-sm font-semibold text-foreground">+36.7% vs prior month</p>
            </div>
            <div className="glass-card rounded-3xl p-8 hover-lift text-center">
              <p className="text-5xl font-extrabold gradient-text">3,150%</p>
              <p className="mt-2 text-sm text-muted-foreground">Newsletter article views growth</p>
              <p className="mt-4 text-sm font-semibold text-foreground">In just 7 days</p>
            </div>
          </div>
        </div>

        {/* Client 2 — Marianne */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Client Spotlight</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-4xl">
              Storytelling That <span className="gradient-text">Scales</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Marianne van Groeningen — personal narrative posts driving tens of thousands of impressions per piece.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-2xl p-6 text-center hover-lift">
              <p className="text-3xl font-extrabold gradient-text">35,615</p>
              <p className="mt-2 text-xs text-muted-foreground">Impressions · +73.2% reach</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover-lift">
              <p className="text-3xl font-extrabold gradient-text">4,951</p>
              <p className="mt-2 text-xs text-muted-foreground">Engagements · +29.4% in 90 days</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover-lift">
              <p className="text-3xl font-extrabold gradient-text">97,575</p>
              <p className="mt-2 text-xs text-muted-foreground">Cumulative impressions</p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {mariannePosts.map((p, i) => (
              <StatCard key={i} {...p} />
            ))}
          </div>
        </div>

        {/* Client 3 — Long term */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Long Term Compounding</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-4xl">
              The Power of <span className="gradient-text">Consistency</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              199,450 impressions over a year. 4,105 followers. Real audience built post by post.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-2xl p-6 text-center hover-lift">
              <p className="text-3xl font-extrabold gradient-text">199,450</p>
              <p className="mt-2 text-xs text-muted-foreground">Impressions over 12 months</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover-lift">
              <p className="text-3xl font-extrabold gradient-text">4,105</p>
              <p className="mt-2 text-xs text-muted-foreground">Followers · +20% in 90 days</p>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center hover-lift">
              <p className="text-3xl font-extrabold gradient-text">59,953</p>
              <p className="mt-2 text-xs text-muted-foreground">Impressions · +203% in 90 days</p>
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
