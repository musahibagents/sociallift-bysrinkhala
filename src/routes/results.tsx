import { createFileRoute } from "@tanstack/react-router";
import resultBefore from "@/assets/result-before.png";
import resultAfter from "@/assets/result-after.png";
import resultPost1 from "@/assets/result-post-1.png";
import resultPost2 from "@/assets/result-post-2.png";
import resultPost3 from "@/assets/result-post-3.png";
import resultPost4 from "@/assets/result-post-4.png";
import resultPost5 from "@/assets/result-post-5.png";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Social Lift by Srinkhala" },
      { name: "description", content: "Real LinkedIn growth results from working with Srinkhala — from 92 to 19,019 impressions and viral posts." },
      { property: "og:title", content: "Results — Social Lift by Srinkhala" },
      { property: "og:description", content: "Real LinkedIn growth results from working with Srinkhala." },
    ],
  }),
  component: ResultsPage,
});

const topPosts = [
  { src: resultPost1, alt: "LinkedIn post with 63,967 impressions" },
  { src: resultPost2, alt: "LinkedIn post with 31,253 impressions" },
  { src: resultPost4, alt: "LinkedIn post with 19,299 impressions" },
  { src: resultPost3, alt: "LinkedIn post with 18,867 impressions" },
  { src: resultPost5, alt: "LinkedIn post with 5,821 impressions" },
];

function ResultsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Proven Results</span>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
            Real <span className="gradient-text">Results</span>, Real Growth
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From a few dozen impressions to viral posts hitting tens of thousands — here's what working together looks like.
          </p>
        </div>

        {/* Before / After */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            Before vs. After Working With <span className="gradient-text">Srinkhala</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            A real client's LinkedIn analytics — same account, just weeks apart.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Before
                </span>
                <span className="text-xs text-muted-foreground">92 impressions • 89 followers</span>
              </div>
              <img src={resultBefore} alt="LinkedIn analytics before working with Srinkhala — 92 post impressions" className="w-full rounded-xl" />
            </div>

            <div className="glass-card rounded-2xl p-6 glow-cyan">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full gradient-cyan px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  After
                </span>
                <span className="text-xs text-muted-foreground">19,019 impressions • 516 followers</span>
              </div>
              <img src={resultAfter} alt="LinkedIn analytics after working with Srinkhala — 19,019 post impressions, 1,056% growth" className="w-full rounded-xl" />
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <span className="font-semibold gradient-text">+1,056% post impressions</span> and <span className="font-semibold gradient-text">+478% followers</span> in just a few weeks.
          </p>
        </div>

        {/* Top Posts */}
        <div className="mt-24">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
            Posts That <span className="gradient-text">Took Off</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Real engagement from real client posts — built with the right strategy.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {topPosts.map((post, i) => (
              <div key={i} className="glass-card rounded-2xl p-4 transition-all hover:glow-cyan">
                <img src={post.src} alt={post.alt} className="w-full rounded-xl" />
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
