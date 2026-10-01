import type { Metadata } from "next";
import team from "@/data/team.json";
import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";
import TeamCard from "@/components/teamCard";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the qualified therapists and psychologists at Managed Wellness Centre.",
};

export default function TeamPage() {
  return (
    <main>
      <Hero
        title="A team of dedicated, compassionate mental health professionals."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
        label="Our team"
      />

      <section className="py-20 bg-white">
        <div className="container flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-3 max-w-xl">
            <SectionLabel label="Meet the team" />
            <h2 className="text-h2 font-bold text-dark leading-tight">
              Experienced professionals, personalised care.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        heading="Ready to find your therapist?"
        subtext="Book a free 15-minute consultation to be matched with the right professional for your needs."
      />
    </main>
  );
}
