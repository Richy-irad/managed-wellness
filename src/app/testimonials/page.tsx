import type { Metadata } from "next";
import testimonials from "@/data/testimonials.json";
import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";
import TestimonialCard from "@/components/testimonialCard";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what clients say about their experience at Managed Wellness Centre.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Hero
        title="Real stories from people who chose to invest in their wellbeing."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        label="Client stories"
      />

      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-3 max-w-xl">
            <SectionLabel label="What clients say" />
            <h2 className="text-h2 font-bold text-dark leading-tight">
              Healing is possible — here&apos;s proof.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        heading="Your story could be next."
        subtext="Take the first step toward lasting change. Book a free consultation today."
      />
    </main>
  );
}
