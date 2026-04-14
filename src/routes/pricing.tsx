import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Plans & Packages — Social Lift" },
      { name: "description", content: "LinkedIn ghostwriting, management, profile optimization, and lead generation packages starting from $249/month." },
      { property: "og:title", content: "Plans & Packages — Social Lift" },
      { property: "og:description", content: "LinkedIn growth packages starting from $249/month." },
    ],
  }),
  component: PricingPage,
});

const ghostwritingPlans = [
  { name: "Starter", posts: "3 Posts/week", price: "$249", features: ["Onboarding", "Content Strategy", "3 Posts/week", "Priority WhatsApp support"] },
  { name: "Growth", posts: "4 Posts/week", price: "$299", popular: true, features: ["Onboarding", "Content Strategy", "4 Posts/week", "Priority WhatsApp support"] },
  { name: "Scale", posts: "5 Posts/week", price: "$349", features: ["Onboarding", "Content Strategy", "5 Posts/week", "Priority WhatsApp support"] },
];

const managementPlans = [
  { name: "Starter", price: "$699", features: ["Onboarding", "Content Strategy", "4 Posts/week", "5 Designs (Carousels & Infographics)", "Priority WhatsApp support", "Engagement (30/day on Post Day)", "Monthly Analytics"] },
  { name: "Growth", price: "$749", popular: true, features: ["Onboarding", "Content Strategy", "5 Posts/week", "6 Designs (Carousels & Infographics)", "Priority WhatsApp support", "Engagement (30/day on Post Day)", "Monthly Analytics"] },
  { name: "Scale", price: "$899", features: ["Onboarding", "Content Strategy", "6 Posts/week", "8 Designs (Carousels & Infographics)", "Priority WhatsApp support", "Engagement (30/day on Post Day)", "Monthly Analytics"] },
];

const addOns = [
  { name: "Profile Optimization", price: "$299", period: "One time", features: ["2 LinkedIn Banners", "2 Featured cards", "About Section writing", "Services section writing", "3 Services Graphics", "Profile Photo with background", "LinkedIn Headline"] },
  { name: "Organic Lead Generation", price: "$399", period: "/Month", features: ["5 days (5+5) warm and cold outreach", "Focus on your Target Audience", "Building a Network with your Target Audience for Inbound Leads", "Understanding the problem of your target audience in depth before pitching"] },
  { name: "Content Design", price: "$599", period: "/Month", features: ["12 Custom designs (Carousel + Cheatsheet)", "Custom Designs", "Unlimited Revisions"] },
];

function PricingCard({ plan, period = "/Month" }: { plan: typeof ghostwritingPlans[0] & { popular?: boolean }; period?: string }) {
  return (
    <div className={`glass-card rounded-2xl p-8 hover-lift relative ${plan.popular ? "ring-2 ring-primary glow-cyan" : ""}`}>
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-cyan px-4 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
      <div className="mt-4">
        <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
        <span className="text-muted-foreground">{period}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-0.5 text-primary">✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all ${
          plan.popular
            ? "gradient-cyan text-primary-foreground glow-cyan hover:opacity-90"
            : "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
}

function PricingPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</span>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
            Plans & <span className="gradient-text">Packages</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose the perfect plan to grow your LinkedIn presence. All plans include a dedicated account manager.
          </p>
        </div>

        {/* Ghostwriting */}
        <div className="mt-20">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">LinkedIn Ghostwriting</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ghostwritingPlans.map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
        </div>

        {/* Management */}
        <div className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">LinkedIn Management</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {managementPlans.map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">Add-On Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {addOns.map((a) => (
              <div key={a.name} className="glass-card rounded-2xl p-8 hover-lift">
                <h3 className="text-xl font-bold text-foreground">{a.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold gradient-text">{a.price}</span>
                  <span className="text-muted-foreground"> {a.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {a.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-0.5 text-primary">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 block rounded-xl border border-border bg-secondary px-6 py-3 text-center text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/80"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
