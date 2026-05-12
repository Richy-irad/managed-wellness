import Link from "next/link";
import SectionLabel from "@/components/sectionLabel";

type DarkCTAProps = {
  heading?: string;
  subtext?: string;
};

export default function DarkCTA({
  heading = "Book a free 15-minute consultation today",
  subtext = "Psychotherapy is a profound experience that helps individuals make lasting life changes.",
}: DarkCTAProps) {
  return (
    <section className="bg-cta-bg py-20 px-5 lg:px-0">
      <div className="lg:mx-40 flex flex-col items-center text-center gap-y-6">
        <SectionLabel label="Share. Understand. Heal." inverted />

        <h2 className="text-h2 font-bold text-white leading-tight max-w-2xl">
          {heading}
        </h2>

        <p className="text-body-lg text-white/60 max-w-xl">{subtext}</p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-muted-yellow text-primary font-bold text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors shadow-accent"
        >
          Book Now →
        </Link>
      </div>
    </section>
  );
}
