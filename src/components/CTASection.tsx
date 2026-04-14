export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="glass-card rounded-3xl p-12 glow-cyan md:p-16">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Ready to <span className="gradient-text">elevate</span> your LinkedIn?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book a free strategy call with Srinkhala today. Let&apos;s discuss how to build your personal brand and generate leads on LinkedIn.
          </p>
          <a
            href="https://calendly.com/srinkhalab1998"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl gradient-cyan px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
          >
            Book a Free Strategy Call →
          </a>
        </div>
      </div>
    </section>
  );
}
