import SectionLabel from "@/components/sectionLabel";
import Button from "@/components/button";

type DarkCTAProps = {
  heading?: string;
  subtext?: string;
};

export default function DarkCTA({
  heading = "Book a free 15-minute consultation today",
  subtext = "Psychotherapy is a profound experience that helps individuals make lasting life changes.",
}: DarkCTAProps) {
  return (
    <section className="bg-cta-bg py-20">
      <div className="container flex flex-col items-center text-center gap-y-6">
        <SectionLabel label="Share. Understand. Heal." variant="inverted" />

        <h2 className="text-h2 font-bold text-white leading-tight max-w-2xl">
          {heading}
        </h2>

        <p className="text-body-lg text-white/60 max-w-xl">{subtext}</p>

        <div className="flex justify-center">
          <Button href="/contact" variant="solid" onDark>
            book now
          </Button>
        </div>
      </div>
    </section>
  );
}
