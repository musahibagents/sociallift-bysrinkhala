const services = [
  {
    icon: "👤",
    title: "Profile Optimization",
    description: "Complete LinkedIn profile makeover — banner, featured cards, about section, headline, and professional photo setup.",
    price: "$299 one-time",
  },
  {
    icon: "✍️",
    title: "LinkedIn Ghostwriting",
    description: "Expertly crafted posts that capture your voice and resonate with your target audience. 3-5 posts per week.",
    price: "From $249/mo",
  },
  {
    icon: "📊",
    title: "LinkedIn Management",
    description: "Full-service management including content strategy, posting, carousel designs, engagement, and monthly analytics.",
    price: "From $699/mo",
  },
  {
    icon: "🎯",
    title: "Organic Lead Generation",
    description: "Targeted warm and cold outreach to your ideal audience. Build a network that drives inbound leads.",
    price: "$399/mo",
  },
  {
    icon: "🎨",
    title: "Content Design",
    description: "Custom carousels, cheatsheets, and infographics designed to maximize engagement and shares.",
    price: "$599/mo",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">dominate LinkedIn</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From profile optimization to full-service management, we handle every aspect of your LinkedIn presence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-8 hover-lift"
            >
              <span className="text-3xl">{service.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <p className="mt-4 text-sm font-semibold text-primary">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
