const stats = [
  { value: "50+", label: "Clients Served" },
  { value: "1,056%", label: "Avg. Impression Growth" },
  { value: "3X", label: "Growth in 12 Weeks" },
  { value: "4.9★", label: "Client Rating" },
];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass-card rounded-3xl p-10 glow-cyan">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold gradient-text md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
