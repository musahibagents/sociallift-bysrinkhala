import { createFileRoute } from "@tanstack/react-router";
import resultBefore from "@/assets/result-before.png";
import resultAfter from "@/assets/result-after.png";
import resultContentPerf from "@/assets/result-content-perf.png";
import resultNewsletter from "@/assets/result-newsletter.png";
import post1 from "@/assets/post-1.png";
import post2 from "@/assets/post-2.png";
import post3 from "@/assets/post-3.png";
import post4 from "@/assets/post-4.png";
import post5 from "@/assets/post-5.png";
import post6 from "@/assets/post-6.png";
import client2Discovery from "@/assets/client2-discovery.png";
import client2Engagements from "@/assets/client2-engagements.png";
import client2Cumulative from "@/assets/client2-cumulative.png";
import mariannePost1 from "@/assets/marianne-post-1.png";
import mariannePost2 from "@/assets/marianne-post-2.png";
import mariannePost3 from "@/assets/marianne-post-3.png";
import client3ContentPerf from "@/assets/client3-content-perf.png";
import client3Followers from "@/assets/client3-followers.png";
import client3ContentPerf2 from "@/assets/client3-content-perf-2.png";

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
  { src: post1, impressions: "3,346", reactions: "303", comments: "48" },
  { src: post2, impressions: "3,501", reactions: "289", comments: "46" },
  { src: post3, impressions: "63,967", reactions: "356", comments: "64" },
  { src: post4, impressions: "18,435", reactions: "308", comments: "76" },
  { src: post5, impressions: "2,207", reactions: "243", comments: "45" },
  { src: post6, impressions: "3,930", reactions: "376", comments: "133" },
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

        {/* Before vs After */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">The 12 Day Transformation</span>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-4xl">
              Before vs <span className="gradient-text">After</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Same client. Same profile. 12 days of working with Srinkhala. Real LinkedIn analytics, untouched.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="glass-card rounded-3xl p-6 hover-lift">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Before
                </span>
                <span className="text-xs text-muted-foreground">Thursday, September 28</span>
              </div>
              <img
                src={resultBefore}
                alt="LinkedIn analytics before working with Srinkhala — 92 impressions, 89 followers"
                className="w-full rounded-2xl border border-border"
                loading="lazy"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Starting point — modest reach, low impressions, limited visibility.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-6 glow-cyan hover-lift">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full gradient-cyan px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  After 12 Days
                </span>
                <span className="text-xs text-muted-foreground">Monday, October 9</span>
              </div>
              <img
                src={resultAfter}
                alt="LinkedIn analytics 12 days after working with Srinkhala — 19,019 impressions, 516 followers"
                className="w-full rounded-2xl border border-border"
                loading="lazy"
              />
              <p className="mt-4 text-center text-sm font-semibold gradient-text">
                19,019 impressions • 516 followers • 1,056% growth
              </p>
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
              <div key={i} className="glass-card rounded-2xl p-4 hover-lift">
                <img
                  src={p.src}
                  alt={`Client top post with ${p.impressions} impressions`}
                  className="w-full rounded-xl border border-border"
                  loading="lazy"
                />
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-base font-extrabold gradient-text">{p.impressions}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Impressions</p>
                  </div>
                  <div>
                    <p className="text-base font-extrabold gradient-text">{p.reactions}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Reactions</p>
                  </div>
                  <div>
                    <p className="text-base font-extrabold gradient-text">{p.comments}</p>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Comments</p>
                  </div>
                </div>
              </div>
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
            <div className="glass-card rounded-3xl p-6 hover-lift">
              <img
                src={resultContentPerf}
                alt="Content performance — 35,529 impressions over 28 days, 36.7% growth"
                className="w-full rounded-2xl border border-border"
                loading="lazy"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                35,529 impressions in 28 days — <span className="font-semibold text-foreground">+36.7%</span> vs prior month.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-6 hover-lift">
              <img
                src={resultNewsletter}
                alt="Analytics with newsletter growth — 8,013 impressions, 5,211 followers, 3,150% newsletter article views"
                className="w-full rounded-2xl border border-border"
                loading="lazy"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Newsletter article views up <span className="font-semibold text-foreground">3,150%</span> in 7 days.
              </p>
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
            <div className="glass-card rounded-2xl p-5 hover-lift">
              <img src={client2Discovery} alt="Discovery — 35,615 impressions, 12,843 members reached" className="w-full rounded-xl border border-border" loading="lazy" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <span className="font-semibold gradient-text">35,615</span> impressions · <span className="font-semibold gradient-text">+73.2%</span> reach
              </p>
            </div>
            <div className="glass-card rounded-2xl p-5 hover-lift">
              <img src={client2Engagements} alt="Content performance — 4,951 engagements, 29.4% growth" className="w-full rounded-xl border border-border" loading="lazy" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <span className="font-semibold gradient-text">4,951</span> engagements · <span className="font-semibold gradient-text">+29.4%</span> in 90 days
              </p>
            </div>
            <div className="glass-card rounded-2xl p-5 hover-lift">
              <img src={client2Cumulative} alt="Cumulative content performance — 97,575 impressions over 365 days" className="w-full rounded-xl border border-border" loading="lazy" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <span className="font-semibold gradient-text">97,575</span> cumulative impressions
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { src: mariannePost1, impressions: "28,719", reactions: "99", comments: "21" },
              { src: mariannePost2, impressions: "10,273", reactions: "96", comments: "41" },
              { src: mariannePost3, impressions: "4,772", reactions: "99", comments: "27" },
            ].map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-4 hover-lift">
                <img src={p.src} alt={`Marianne post — ${p.impressions} impressions`} className="w-full rounded-xl border border-border" loading="lazy" />
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div><p className="text-base font-extrabold gradient-text">{p.impressions}</p><p className="text-[10px] uppercase tracking-wider text-muted-foreground">Impressions</p></div>
                  <div><p className="text-base font-extrabold gradient-text">{p.reactions}</p><p className="text-[10px] uppercase tracking-wider text-muted-foreground">Reactions</p></div>
                  <div><p className="text-base font-extrabold gradient-text">{p.comments}</p><p className="text-[10px] uppercase tracking-wider text-muted-foreground">Comments</p></div>
                </div>
              </div>
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
            <div className="glass-card rounded-2xl p-5 hover-lift">
              <img src={client3ContentPerf} alt="Content performance — 199,450 impressions over a year" className="w-full rounded-xl border border-border" loading="lazy" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <span className="font-semibold gradient-text">199,450</span> impressions over 12 months
              </p>
            </div>
            <div className="glass-card rounded-2xl p-5 hover-lift">
              <img src={client3Followers} alt="4,105 total followers, 20% growth in 90 days" className="w-full rounded-xl border border-border" loading="lazy" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <span className="font-semibold gradient-text">4,105</span> followers · <span className="font-semibold gradient-text">+20%</span> in 90 days
              </p>
            </div>
            <div className="glass-card rounded-2xl p-5 hover-lift">
              <img src={client3ContentPerf2} alt="Content performance — 59,953 impressions, 203% growth vs prior 90 days" className="w-full rounded-xl border border-border" loading="lazy" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                <span className="font-semibold gradient-text">59,953</span> impressions · <span className="font-semibold gradient-text">+203%</span> in 90 days
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
