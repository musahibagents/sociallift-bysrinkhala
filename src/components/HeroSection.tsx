import { Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="fade-in-up">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            Trusted by 50+ Founders & Coaches
          </span>
        </div>
        <h1 className="fade-in-up animate-delay-100 mt-8 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
          Build your LinkedIn{" "}
          <span className="gradient-text">Presence</span> with us
        </h1>
        <p className="fade-in-up animate-delay-200 mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We help founders and coaches build their strong personal brand on LinkedIn.
          Content strategy, ghostwriting, and full management — so you can focus on your business.
        </p>
        <div className="fade-in-up animate-delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-xl gradient-cyan px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
          >
            Book a Free Strategy Call
          </Link>
          <Link
            to="/results"
            className="rounded-xl border border-border bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all hover:bg-secondary/80"
          >
            See Our Results
          </Link>
        </div>
      </div>
    </section>
  );
}
