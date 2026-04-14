import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Case Studies — Social Lift" },
      { name: "description", content: "See how Social Lift helped clients grow their LinkedIn impressions by 1,056% and followers by 151% in just 12 days." },
      { property: "og:title", content: "Results & Case Studies — Social Lift" },
      { property: "og:description", content: "Real results: 1,056% impression growth in 12 days." },
    ],
  }),
  component: ResultsPage,
});

const beforeAfter = {
  before: { impressions: "92", followers: "89", profileViewers: "90", searchAppearances: "29" },
  after: { impressions: "19,019", followers: "516", profileViewers: "428", searchAppearances: "58" },
  growth: { impressions: "1,056.2%", followers: "151.8%", profileViewers: "375%", searchAppearances: "100%" },
};

const caseStudy = {
  name: "Marianne van Groeningen",
  role: "Executive Career Coach",
  challenges: [
    { problem: "Low Follower Growth", solution: "Created content which appeals to a broader audience" },
    { problem: "Struggling to Better Engagement", solution: "Connected with target audience through strategic content" },
    { problem: "Low Reach & Inconsistent Content", solution: "Created and posted consistently to grab attention of active creators" },
  ],
};

function StatCard({ label, before, after, growth }: { label: string; before: string; after: string; growth: string }) {
  return (
    <div className="glass-card rounded-2xl p-6 text-center hover-lift">
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="mt-3 flex items-center justify-center gap-4">
        <div>
          <p className="text-lg font-bold text-muted-foreground line-through">{before}</p>
          <p className="text-xs text-muted-foreground">Before</p>
        </div>
        <span className="text-primary text-xl">→</span>
        <div>
          <p className="text-2xl font-extrabold gradient-text">{after}</p>
          <p className="text-xs text-muted-foreground">After (12 days)</p>
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold text-primary">▲ {growth}</p>
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
            See how we helped our clients achieve massive growth on LinkedIn in just 12 days.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Post Impressions" before={beforeAfter.before.impressions} after={beforeAfter.after.impressions} growth={beforeAfter.growth.impressions} />
          <StatCard label="Followers" before={beforeAfter.before.followers} after={beforeAfter.after.followers} growth={beforeAfter.growth.followers} />
          <StatCard label="Profile Viewers" before={beforeAfter.before.profileViewers} after={beforeAfter.after.profileViewers} growth={beforeAfter.growth.profileViewers} />
          <StatCard label="Search Appearances" before={beforeAfter.before.searchAppearances} after={beforeAfter.after.searchAppearances} growth={beforeAfter.growth.searchAppearances} />
        </div>

        {/* Case Study */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">Case Study</h2>
          <div className="mx-auto mt-10 max-w-3xl glass-card rounded-3xl p-10">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-foreground">{caseStudy.name}</h3>
              <p className="text-sm text-primary">{caseStudy.role}</p>
            </div>
            <div className="space-y-6">
              {caseStudy.challenges.map((c) => (
                <div key={c.problem} className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-destructive/10 p-4">
                    <p className="text-xs font-semibold uppercase text-destructive">Challenge</p>
                    <p className="mt-1 text-sm text-foreground">{c.problem}</p>
                  </div>
                  <div className="rounded-xl bg-primary/10 p-4">
                    <p className="text-xs font-semibold uppercase text-primary">Solution</p>
                    <p className="mt-1 text-sm text-foreground">{c.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
