import { createFileRoute } from "@tanstack/react-router";
import topPost1 from "@/assets/top-post-1.png";
import topPost2 from "@/assets/top-post-2.png";
import topPost3 from "@/assets/top-post-3.png";
import topPost4 from "@/assets/top-post-4.png";
import topPost5 from "@/assets/top-post-5.png";
import topPost6 from "@/assets/top-post-6.png";
import topPost7 from "@/assets/top-post-7.png";
import topPost8 from "@/assets/top-post-8.png";
import topPost9 from "@/assets/top-post-9.png";
import topPost10 from "@/assets/top-post-10.png";
import analytics1 from "@/assets/analytics-1.png";
import analytics2 from "@/assets/analytics-2.png";
import analytics3 from "@/assets/analytics-3.png";
import analytics4 from "@/assets/analytics-4.png";
import analytics5 from "@/assets/analytics-5.png";
import analytics6 from "@/assets/analytics-6.png";
import analytics7 from "@/assets/analytics-7.png";
import analytics8 from "@/assets/analytics-8.png";
import ba1Before from "@/assets/before-after-1-before.png";
import ba1After from "@/assets/before-after-1-after.png";
import ba2Before from "@/assets/before-after-2-before.png";
import ba2After from "@/assets/before-after-2-after.png";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Social Lift by Srinkhala" },
      { name: "description", content: "Real LinkedIn growth results from working with Srinkhala — viral posts, thousands of impressions, and engaged audiences." },
      { property: "og:title", content: "Results — Social Lift by Srinkhala" },
      { property: "og:description", content: "Real LinkedIn growth results from working with Srinkhala." },
    ],
  }),
  component: ResultsPage,
});

const topPosts = [
  { src: topPost1, alt: "Client LinkedIn post — 63,967 impressions, 356+ reactions, 64 comments" },
  { src: topPost2, alt: "Client LinkedIn post — 31,253 impressions, 162 comments" },
  { src: topPost3, alt: "Client LinkedIn post — 63,967 impressions, 64 comments" },
  { src: topPost4, alt: "Client LinkedIn post — 18,435 impressions, 76 comments" },
  { src: topPost5, alt: "Client LinkedIn post — 8,275 impressions, 90 comments" },
  { src: topPost6, alt: "Client LinkedIn post — 13,855 impressions, 88 comments" },
  { src: topPost7, alt: "Client LinkedIn post — 7,273 impressions, 82 comments" },
  { src: topPost8, alt: "Client LinkedIn post — 10,145 impressions, 71 comments" },
  { src: topPost9, alt: "Client LinkedIn post — 8,751 impressions, 65 comments" },
  { src: topPost10, alt: "Client LinkedIn post — 123,747 impressions, 1,116 reactions, 92 comments" },
];

const analyticsScreens = [
  { src: analytics1, alt: "LinkedIn analytics — content performance growth" },
  { src: analytics2, alt: "LinkedIn analytics overview — impressions and followers" },
  { src: analytics3, alt: "LinkedIn analytics — discovery and reach" },
  { src: analytics4, alt: "LinkedIn analytics — engagement growth" },
  { src: analytics5, alt: "LinkedIn analytics — top post performance" },
  { src: analytics6, alt: "LinkedIn analytics — post impressions" },
  { src: analytics7, alt: "LinkedIn analytics — discovery growth" },
  { src: analytics8, alt: "LinkedIn analytics — content performance trending up" },
];

const beforeAfterPairs = [
  {
    title: "12 Days of Working Together",
    before: { src: ba1Before, alt: "Before working together — baseline LinkedIn analytics" },
    after: { src: ba1After, alt: "After 12 days of working together — significant growth" },
    highlights: [
      "Massive jump in post impressions",
      "Follower count multiplied",
      "Profile views surged",
      "Search appearances doubled",
    ],
  },
  {
    title: "Content Performance Transformation",
    before: { src: ba2Before, alt: "Before — flat content performance" },
    after: { src: ba2After, alt: "After — content performance transformation" },
    highlights: [
      "22K+ impressions in 28 days",
      "YouTube podcast invite",
      "2x LinkedIn Top Voice within 2 weeks",
      "Featured on LinkedIn News India — 2 times",
    ],
  },
];

function ResultsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Proven Results</span>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
            Client's <span className="gradient-text">Top Posts</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real engagement from real client posts — built with the right strategy, voice, and consistency.
          </p>
        </div>

        {/* Top Posts Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topPosts.map((post, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 transition-all hover:glow-cyan">
              <img src={post.src} alt={post.alt} className="w-full rounded-xl bg-white" />
            </div>
          ))}
        </div>

        {/* Before & After */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Before & After</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              The <span className="gradient-text">Transformation</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              See the measurable difference — from quiet profiles to thriving personal brands.
            </p>
          </div>

          <div className="mt-12 space-y-16">
            {beforeAfterPairs.map((pair, i) => (
              <div key={i} className="glass-card rounded-3xl p-6 md:p-10">
                <h3 className="text-center text-2xl font-bold text-foreground md:text-3xl">
                  {pair.title}
                </h3>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-3 inline-flex rounded-full bg-muted px-4 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Before working with me
                    </div>
                    <div className="rounded-2xl bg-white p-2">
                      <img src={pair.before.src} alt={pair.before.alt} className="w-full rounded-xl" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 inline-flex rounded-full gradient-cyan px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                      After working with me
                    </div>
                    <div className="rounded-2xl bg-white p-2 glow-cyan">
                      <img src={pair.after.src} alt={pair.after.alt} className="w-full rounded-xl" />
                    </div>
                  </div>
                </div>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {pair.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-1 text-primary">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Growth */}
        <div className="mt-24">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Growth Analytics</span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Real Account <span className="gradient-text">Growth</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              LinkedIn analytics straight from client dashboards — impressions, followers, and engagement trending up.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {analyticsScreens.map((screen, i) => (
              <div key={i} className="glass-card rounded-2xl p-4 transition-all hover:glow-cyan">
                <img src={screen.src} alt={screen.alt} className="w-full rounded-xl bg-white" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-foreground md:text-3xl">
            Ready for <span className="gradient-text">your</span> growth story?
          </h3>
          <a
            href="https://calendly.com/srinkhalab1998"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-xl gradient-cyan px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
          >
            Book a Call →
          </a>
        </div>
      </div>
    </div>
  );
}
