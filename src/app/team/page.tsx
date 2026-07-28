import type { Metadata } from "next";
import Image from "next/image";
import team from "@/data/team.json";
import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";

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
        label="Our Team"
      />

      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-3 max-w-xl">
            <SectionLabel label="Meet the team" />
            <h2 className="text-h2 font-bold text-dark leading-tight">
              Experienced professionals, personalised care.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.map((member) => (
              <div
                key={member.slug}
                className="flex flex-col sm:flex-row gap-6 bg-concrete rounded-2xl p-6"
              >
                <div className="relative w-full sm:w-40 h-48 sm:h-auto shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 160px"
                  />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div>
                    <h3 className="text-h4 font-bold text-dark">{member.name}</h3>
                    <p className="text-sm text-sage-dark font-semibold font-josefin-sans">
                      {member.title}
                    </p>
                    <p className="text-xs text-warm-grey mt-0.5">{member.credentials}</p>
                  </div>
                  <p className="text-sm text-warm-grey leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {member.specialisations.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1 rounded-full bg-sage-light text-sage-dark text-xs font-semibold font-josefin-sans"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
