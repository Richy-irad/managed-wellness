import type { Metadata } from "next";
import testimonials from "@/data/testimonials.json";
import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what clients say about their experience at Managed Wellness Centre.",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-x-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-muted-yellow"
        >
          <path d="M8 1l1.854 3.754L14 5.528l-3 2.923.708 4.13L8 10.5l-3.708 2.08L5 8.452 2 5.528l4.146-.774L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main>
      <Hero
        title="Real stories from people who chose to invest in their wellbeing."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
        label="Client Stories"
      />

      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-3 max-w-xl">
            <SectionLabel label="What clients say" />
            <h2 className="text-h2 font-bold text-dark leading-tight">
              Healing is possible — here's proof.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col gap-y-4 bg-concrete rounded-2xl p-6"
              >
                <StarRating rating={t.rating} />
                <blockquote className="text-body text-warm-grey leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex flex-col gap-y-0.5 pt-2 border-t border-cool-grey">
                  <span className="font-semibold text-dark font-josefin-sans text-sm">
                    {t.clientName}
                  </span>
                  {t.clientContext && (
                    <span className="text-xs text-warm-grey">{t.clientContext}</span>
                  )}
                </div>
              </div>
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
