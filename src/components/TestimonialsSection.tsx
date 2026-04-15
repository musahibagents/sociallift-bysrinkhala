import { useState, useRef } from "react";

const videoTestimonials = [
  {
    name: "Kiirti Kalyan",
    role: "Client",
    video: "/videos/kiirti-testimonial.mp4",
  },
  {
    name: "Kellie",
    role: "Client",
    video: "/videos/kellie-testimonial.mp4",
  },
  {
    name: "Marco Grüter",
    role: "Client",
    video: "/videos/marco-testimonial.mp4",
  },
];

const writtenTestimonials = [
  {
    quote: "Srinkhala is a very kind and professional brand strategist who supported me for a month with building a brand strategy and designing posts aligned with the strategy. Srinkhala handles the branding very professionally, is open for feedback and attunes to the needs of her client. With her help I could increase comments to my posts and strategic alignment with what I want to build. I can absolutely recommend working with her as she works with great care.",
    name: "Kim Jennifer Bauer",
    role: "Founder, CEO and Feminine Leadership Coach",
  },
  {
    quote: "Sri is a lovely young woman growing her business. She helped acquire more followers on this platform over a 6 week period. Her knowledge was useful.",
    name: "Marcy Moriconi",
    role: "Leadership Coach | Former Marketing Exec | Author",
  },
  {
    quote: "Srinkhala supported with my Personal Branding posts and I have been impressed by the quality and speed of autonomous writing that Srinkhala delivered. She has a good understanding of structuring content and starting your posts with strong hooks, preferably written from the \"I\" perspective of the author. I also appreciate her ability to share feedback.",
    name: "Marianne van Groeningen",
    role: "Founder & CEO, Executive Career Coaching",
  },
  {
    quote: "Srinkhala asked if she could review my profile here on LinkedIn. She had some great recommendations, including introducing me to the importance of keywords and how to use them. I can recommend this driven, energetic woman to help you design a profile that will stand out from the crowd.",
    name: "Karen Ratcliffe",
    role: "Emotional Resilience Strategist | Founder of Reclaim & Rise",
  },
  {
    quote: "Srinkhala took the time to thoroughly review my LinkedIn profile. It was a top-to-bottom review and she was precise in both the areas that needed work AND what needed to change. What I appreciated about her approach was her positive and supportive way she delivered her feedback. She was spot on with all her recommendations! I found her collaborative to work with.",
    name: "Matthew Devine, CPCC, ACC",
    role: "Talent Acquisition Professional | Career & Leadership Coach",
  },
  {
    quote: "Srinkhala is a game-changer! She took over my LinkedIn, streamlined everything, and freed me up to focus on what I love. Always on time, super communicative, and flexible when I needed it. If you want to level up your social presence, Srinkhala's the pro you need!",
    name: "Dr. Nitin Sharma",
    role: "Physiotherapist | Health Coach | PT, MPT (Sports Medicine)",
  },
];

function VideoCard({ testimonial }: { testimonial: typeof videoTestimonials[0] }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover-lift">
      <div className="relative aspect-[9/16] max-h-[400px] cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={testimonial.video}
          className="h-full w-full object-cover"
          playsInline
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-cyan glow-cyan">
              <svg className="ml-1 h-6 w-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 text-center">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">
            What our <span className="gradient-text">clients</span> say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real feedback from real clients who transformed their LinkedIn presence with Srinkhala.
          </p>
        </div>

        {/* Video Testimonials */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-bold text-foreground">🎥 Video Testimonials</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoTestimonials.map((t) => (
              <VideoCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Motivating Hook */}
        <div className="mt-20 glass-card rounded-3xl p-12 text-center glow-cyan">
          <h3 className="text-3xl font-extrabold text-foreground md:text-4xl">
            Your competitors are already{" "}
            <span className="gradient-text">building their brand</span> on LinkedIn.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Every day you wait is a day your ideal clients find someone else. The best time to start was yesterday. The second best time is right now.
          </p>
          <a
            href="https://calendly.com/srinkhalab1998"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl gradient-cyan px-10 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
          >
            Stop Waiting. Start Growing →
          </a>
        </div>

        {/* Written Testimonials */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-xl font-bold text-foreground">💬 Client Reviews</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {writtenTestimonials.map((t) => (
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

        {/* Bottom Hook */}
        <div className="mt-16 text-center">
          <p className="text-xl font-bold text-foreground">
            These clients took the leap.{" "}
            <span className="gradient-text">Now it's your turn.</span>
          </p>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Join 50+ founders and coaches who trusted Srinkhala to transform their LinkedIn into a lead generating machine.
          </p>
        </div>
      </div>
    </section>
  );
}
