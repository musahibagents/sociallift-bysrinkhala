import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Social Lift" },
      { name: "description", content: "Book a free strategy call with Social Lift. Let's discuss how we can grow your LinkedIn presence." },
      { property: "og:title", content: "Contact Us — Social Lift" },
      { property: "og:description", content: "Book a free strategy call to grow your LinkedIn." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Get in Touch</span>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
            Book a Free <span className="gradient-text">Strategy Call</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl glass-card rounded-3xl p-10">
          {submitted ? (
            <div className="py-12 text-center">
              <span className="text-5xl">🎉</span>
              <h3 className="mt-4 text-2xl font-bold text-foreground">Thank you!</h3>
              <p className="mt-2 text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">LinkedIn Profile URL</label>
                <input
                  type="url"
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">What service are you interested in?</label>
                <select
                  required
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option>Profile Optimization</option>
                  <option>LinkedIn Ghostwriting</option>
                  <option>LinkedIn Management</option>
                  <option>Organic Lead Generation</option>
                  <option>Content Design</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl gradient-cyan px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-cyan"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
