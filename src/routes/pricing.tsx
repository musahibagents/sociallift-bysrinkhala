import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Plans & Packages — Social Lift by Srinkhala" },
      { name: "description", content: "LinkedIn personal branding packages: ghostwriting, management, profile optimization, lead generation, and more." },
      { property: "og:title", content: "Plans & Packages — Social Lift by Srinkhala" },
      { property: "og:description", content: "LinkedIn personal branding packages by Srinkhala." },
    ],
  }),
  component: PricingPage,
});

const ghostwritingPlans = [
  {
    name: "Starter",
    features: [
      "Onboarding & Brand Voice Discovery",
      "Content Strategy",
      "3 Posts/week",
      "Hashtag Research",
      "Priority WhatsApp Support",
    ],
  },
  {
    name: "Growth",
    popular: true,
    features: [
      "Onboarding & Brand Voice Discovery",
      "Content Strategy",
      "4 Posts/week",
      "Hashtag & Keyword Research",
      "1 Carousel/week",
      "Priority WhatsApp Support",
      "Weekly Performance Report",
    ],
  },
  {
    name: "Scale",
    features: [
      "Onboarding & Brand Voice Discovery",
      "Content Strategy",
      "5 Posts/week",
      "Hashtag & Keyword Research",
      "2 Carousels/week",
      "Priority WhatsApp Support",
      "Weekly Performance Report",
      "Content Calendar Access",
    ],
  },
];

const managementPlans = [
  {
    name: "Essential",
    price: "$699",
    features: [
      "Onboarding & Brand Strategy",
      "Content Strategy",
      "4 Posts/week",
      "4 Custom Designs (Carousels & Infographics)",
      "Engagement (20/day on Post Days)",
      "Monthly Analytics Report",
      "Priority WhatsApp Support",
    ],
  },
  {
    name: "Professional",
    price: "$819",
    popular: true,
    features: [
      "Onboarding & Brand Strategy",
      "Content Strategy",
      "5 Posts/week",
      "6 Custom Designs (Carousels & Infographics)",
      "Engagement (30/day on Post Days)",
      "Community Building & Networking",
      "Bi-Weekly Analytics Report",
      "Priority WhatsApp Support",
    ],
  },
  {
    name: "Premium",
    price: "$1,099",
    features: [
      "Onboarding & Brand Strategy",
      "Content Strategy",
      "6 Posts/week",
      "8 Custom Designs",
      "Engagement (40/day on Post Days)",
      "Community Building & Networking",
      "Weekly Analytics Report",
      "1 on 1 Monthly Strategy Call",
      "Priority WhatsApp Support",
    ],
  },
];

const addOns = [
  {
    name: "Profile Optimization",
    price: "$249",
    period: "One-time",
    features: [
      "2 LinkedIn Banners",
      "2 Featured Section Cards",
      "About Section Writing",
      "Services Section Writing",
      "3 Services Graphics",
      "Profile Photo with Background",
      "LinkedIn Headline Optimization",
      "Keyword Optimization",
    ],
  },
  {
    name: "Organic Lead Generation",
    price: "$449",
    period: "/Month + 15% commission on closing",
    features: [
      "5 Days (5+5) Warm & Cold Outreach",
      "Focus on Your Target Audience",
      "Network Building for Inbound Leads",
      "Audience Pain Point Research",
      "Custom Connection Request Messages",
      "Follow up Sequence",
      "15% Commission on Every Deal Closed",
    ],
  },
  {
    name: "Content Design Package",
    price: "$599",
    period: "/Month",
    features: [
      "12 Custom Designs",
      "Carousels + Cheatsheets + Infographics",
      "Brand Aligned Design System",
      "Unlimited Revisions",
      "Source Files Included",
    ],
  },
  {
    name: "LinkedIn Audit & Strategy",
    price: "$149",
    period: "One-time",
    features: [
      "Complete Profile Audit",
      "Competitor Analysis",
      "Content Gap Analysis",
      "90 Day Growth Roadmap",
      "Target Audience Blueprint",
      "30 min Strategy Call",
    ],
  },
  {
    name: "Personal Brand Coaching",
    price: "$399",
    period: "/Month",
    features: [
      "4 x 1 on 1 Coaching Calls",
      "Brand Positioning Framework",
      "Content Pillars Development",
      "Thought Leadership Strategy",
      "Engagement Playbook",
      "Ongoing WhatsApp Support",
    ],
  },
  {
    name: "Newsletter Ghostwriting",
    price: "$299",
    period: "/Month",
    features: [
      "4 LinkedIn Newsletters/Month",
      "Topic Research & Planning",
      "SEO Optimized Writing",
      "Custom Header Graphics",
      "Performance Tracking",
    ],
  },
  {
    name: "LinkedIn Engagement",
    price: "$250",
    period: "/Month",
    features: [
      "30 Thoughtful Comments/Month",
      "Finding the Right Audience for Engagement",
      "Targeted Engagement on Ideal Client Posts",
      "Strategic Commenting to Boost Visibility",
      "Engagement with Industry Leaders & Prospects",
      "Monthly Engagement Analytics Report",
      "24 Hour WhatsApp Support",
    ],
  },
];

function PricingCard({ plan, period = "/Month" }: { plan: { name: string; price: string; features: string[]; popular?: boolean }; period?: string }) {
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
      <a
        href="https://calendly.com/srinkhalab1998"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all ${
          plan.popular
            ? "gradient-cyan text-primary-foreground glow-cyan hover:opacity-90"
            : "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        Get Started
      </a>
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
            Transparent pricing with no hidden fees. Every plan includes a dedicated personal branding strategist, Srinkhala herself.
          </p>
        </div>

        {/* Ghostwriting */}
        <div className="mt-20">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">✍️ LinkedIn Ghostwriting</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ghostwritingPlans.map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
        </div>

        {/* Management */}
        <div className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">📊 LinkedIn Management</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {managementPlans.map((p) => <PricingCard key={p.name} plan={p} />)}
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-24">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">🔧 Add On Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                <a
                  href="https://calendly.com/srinkhalab1998"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block rounded-xl border border-border bg-secondary px-6 py-3 text-center text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/80"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Note */}
        <div className="mt-20 glass-card rounded-3xl p-10 text-center">
          <h3 className="text-xl font-bold text-foreground">💡 Why Choose Social Lift?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground leading-relaxed">
            Most LinkedIn agencies charge $1,500 to $3,000/month for similar services. Freelance ghostwriters typically charge $500 to $1,000/month for just 3 posts/week.
            With Social Lift, you get agency quality work at freelancer friendly prices, plus a personal branding strategist who genuinely cares about your growth.
          </p>
        </div>
      </div>
    </div>
  );
}
