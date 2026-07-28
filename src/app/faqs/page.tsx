import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/hero";
import FAQAccordion from "@/components/faqAccordion";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about therapy, booking, confidentiality, and more at Managed Wellness Centre.",
};

export default function FAQsPage() {
  return (
    <main>
      <Hero
        title="Answers to your most common questions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
        label="FAQs"
      />

      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="flex flex-col gap-y-3">
            <SectionLabel label="Common questions" />
            <h2 className="text-h3 font-bold text-dark leading-tight">
              Everything you need to know before your first session.
            </h2>
            <p className="text-body text-warm-grey leading-relaxed mt-2">
              Still have questions?{" "}
              <Link
                href="/contact"
                className="text-deep-blue underline hover:text-deep-blue-dark transition-colors"
              >
                Contact us
              </Link>{" "}
              and we'll get back to you within 24 hours.
            </p>
          </div>
          <div className="lg:col-span-2">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <DarkCTA
        heading="Still unsure? Let's talk."
        subtext="A free 15-minute consultation is the easiest way to find out if we're the right fit for you."
      />
    </main>
  );
}
