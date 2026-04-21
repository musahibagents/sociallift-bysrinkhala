import { createFileRoute } from "@tanstack/react-router";
import resultPost1 from "@/assets/result-post-1.png";
import resultPost2 from "@/assets/result-post-2.png";
import resultPost3 from "@/assets/result-post-3.png";
import resultPost4 from "@/assets/result-post-4.png";
import resultPost5 from "@/assets/result-post-5.png";
import resultPost6 from "@/assets/result-post-6.png";
import resultPost7 from "@/assets/result-post-7.png";
import resultPost8 from "@/assets/result-post-8.png";
import resultPost9 from "@/assets/result-post-9.png";
import analytics1 from "@/assets/analytics-1.png";
import analytics2 from "@/assets/analytics-2.png";
import analytics3 from "@/assets/analytics-3.png";
import analytics4 from "@/assets/analytics-4.png";
import analytics5 from "@/assets/analytics-5.png";
import analytics6 from "@/assets/analytics-6.png";
import analytics7 from "@/assets/analytics-7.png";
import analytics8 from "@/assets/analytics-8.png";
import analytics9 from "@/assets/analytics-9.png";

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
  { src: resultPost9, alt: "Client LinkedIn post — 123,747 impressions, 1,116 reactions, 92 comments, 223 reposts" },
  { src: resultPost3, alt: "Client LinkedIn post — 63,967 impressions, 357 reactions, 64 comments, 7 reposts" },
  { src: resultPost4, alt: "Client LinkedIn post — 18,435 impressions, 308 reactions, 76 comments, 3 reposts" },
  { src: resultPost7, alt: "Client LinkedIn post — 13,855 impressions, 131 reactions, 88 comments, 27 reposts" },
  { src: resultPost8, alt: "Client LinkedIn post — 7,273 impressions, 110 reactions, 82 comments, 11 reposts" },
  { src: resultPost6, alt: "Client LinkedIn post — 3,930 impressions, 377 reactions, 133 comments, 4 reposts" },
  { src: resultPost2, alt: "Client LinkedIn post — 3,501 impressions, 289 reactions, 46 comments, 1 repost" },
  { src: resultPost1, alt: "Client LinkedIn post — 3,346 impressions, 304 reactions, 48 comments, 1 repost" },
  { src: resultPost5, alt: "Client LinkedIn post — 2,207 impressions, 244 reactions, 45 comments, 1 repost" },
];

const analyticsScreens = [
  { src: analytics1, alt: "Content performance — 35,529 impressions, +36.7% vs. prior 28 days" },
  { src: analytics3, alt: "Discovery — 35,615 impressions, 12,843 members reached, +37.1% / +73.2%" },
  { src: analytics2, alt: "Analytics overview — 8,013 post impressions, 5,211 followers, 1,772 profile viewers" },
  { src: analytics4, alt: "Content performance — 4,951 engagements, +29.4% vs. prior 90 days" },
  { src: analytics8, alt: "Content performance — 59,953 impressions, +203% vs. prior 90 days" },
  { src: analytics7, alt: "Discovery — 59,814 impressions, 13,900 members reached, +202.2% / +181.3%" },
  { src: analytics9, alt: "Content performance — 2,002 impressions in past 7 days" },
  { src: analytics5, alt: "Marianne van Groeningen — Vietnam/Portugal post with 28,719 impressions" },
  { src: analytics6, alt: "Marianne van Groeningen — 9 years married post with 10,273 impressions" },
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
