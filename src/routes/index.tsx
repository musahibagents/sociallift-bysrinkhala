import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Social Lift — Build Your LinkedIn Presence" },
      { name: "description", content: "We help founders and coaches build their strong personal brand on LinkedIn. Content strategy, ghostwriting, and full management." },
      { property: "og:title", content: "Social Lift — Build Your LinkedIn Presence" },
      { property: "og:description", content: "We help founders and coaches build their strong personal brand on LinkedIn." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
