const testimonials = [
  {
    quote: "I really enjoyed working with Khurshid on updating my LinkedIn profile's banner, feature, and services section. He went above and beyond by providing multiple iterations to make sure everything matched perfectly. If you're looking to refresh your LinkedIn profile with someone who truly cares about getting it right, I wouldn't hesitate to recommend Khurshid.",
    name: "Lena Thompson",
    role: "Professional",
  },
  {
    quote: "Srinkhala supported with my Personal Branding posts and I have been impressed by the quality and speed of autonomous writing. She has a good understanding of structuring content and starting your posts with strong hooks. When you are looking for a copywriter to support in your personal branding strategy, I can highly recommend her.",
    name: "Marianne van Groeningen",
    role: "Executive Career Coach",
  },
  {
    quote: "I would 100% recommend Khurshid to anyone looking to refresh and optimize their LinkedIn! The process was super easy, collaborative, and fun! He really understood my brand and helped me reflect who I am, what I do, and the energy I bring to my work!",
    name: "Kristen Wilkinson",
    role: "Professional",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            What our <span className="gradient-text">clients</span> say
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-2xl p-8 hover-lift">
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
