import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Social Lift by Srinkhala" },
      { name: "description", content: "Real LinkedIn growth results from working with Srinkhala." },
      { property: "og:title", content: "Results — Social Lift by Srinkhala" },
      { property: "og:description", content: "Real LinkedIn growth results from working with Srinkhala." },
    ],
  }),
  component: ResultsPage,
});

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
            New results coming soon.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://calendly.com/srinkhalab1998"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl gradient-cyan px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
          >
            Book a Call →
          </a>
        </div>
      </div>
    </div>
  );
}
