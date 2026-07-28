import type { Metadata } from "next";
import Image from "next/image";

import team from "@/data/team.json";

import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import StatsBanner from "@/components/statsBanner";
import JourneyAccordion from "@/components/journeyAccordion";
import DarkCTA from "@/components/darkCTA";
import Button from "@/components/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover Managed Wellness Centre — our vision, mission, core values, and the compassionate team behind our evidence-based mental health services.",
};

const pillars = [
  {
    label: "Vision",
    heading: "Our Vision",
    body: "Together we spark solutions that create a better, healthier world as every person makes use of their unique experiences and backgrounds.",
    sub: "Empowering individuals to create a healthier world, together.",
  },
  {
    label: "Mission",
    heading: "Our Mission",
    body: "Because not all wounds are visible, we are dedicated to healing the unseen by helping our clients overcome mental health challenges through committing to be confidential, empathetic, and approachable in our services and interventions.",
    sub: "Empowering unseen healing through compassionate care.",
  },
  {
    label: "Purpose",
    heading: "To rekindle our clients' lost hope.",
    body: "Our purpose is to provide compassionate support and evidence-based interventions that help rekindle hope in our clients and empower them to create meaningful change in their lives.",
    sub: "Purpose",
  },
  {
    label: "Motto",
    heading: "It's okay not to be okay",
    body: "This motto reflects our fundamental belief that mental health struggles are a normal and common part of the human experience. It encourages clients to recognise that it's okay to seek help and support when facing emotional or mental challenges.",
    sub: "Motto",
  },
];

const coreValues = [
  {
    title: "Professional Etiquette",
    subtitle: "Respectful, ethical, and compassionate care for every client.",
    body: "At Managed Wellness Centre, we believe that professional etiquette is the foundation of effective mental health care. Our commitment to acting respectfully, ethically, and compassionately towards every client ensures that everyone who comes through our doors feels heard, supported, and empowered.",
  },
  {
    title: "Authenticity",
    subtitle: "Real people, real care.",
    body: "Authenticity is key. We believe that being clear about who we are and what we do is essential to building trusting, meaningful relationships with our clients. By being our authentic selves and providing real, personalised care, we empower our clients to do the same.",
  },
  {
    title: "Compassion",
    subtitle: "Enhancing lives, one person at a time.",
    body: "Compassion is at the heart of everything we do. We genuinely care for each client and strive to enhance the quality of their lives through customised care and a supportive, empathetic approach.",
  },
  {
    title: "Integrity",
    subtitle: "Keeping our promises, building trust.",
    body: "Integrity is a cornerstone of our practice. We believe that keeping our word and following through on our commitments is essential to building trust with our clients. By upholding our values of honesty, transparency, and accountability, we build lasting relationships.",
  },
  {
    title: "Respect",
    subtitle: "Valuing diversity, honouring worth.",
    body: "We believe in the inherent worth of every individual. Our commitment to respect means valuing and honouring the diversity of our clients, employees, and community. By creating a safe, inclusive environment where everyone feels seen and heard, we empower our clients to reach their full potential.",
  },
];

export default function AboutPage() {
  const teamPreview = team.slice(0, 3);

  return (
    <main>
      <Hero
        title="Empowering lives through compassionate, authentic care that honours diversity and builds trust."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        label="About us"
      />

      {/* Vision / Mission / Purpose / Motto */}
      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 flex flex-col gap-y-16">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:basis-5/12 flex flex-col gap-y-3">
                <span className="text-xs font-bold tracking-widest uppercase text-warm-grey">
                  {p.sub}
                </span>
                <h2 className="font-bold text-dark leading-tight">{p.heading}</h2>
              </div>
              <div className="lg:basis-7/12 px-8 py-8 bg-sage-green/20 rounded-2xl">
                <p className="text-body-lg text-dark leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-5 lg:px-0 bg-section-wash">
        <div className="lg:mx-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-y-6 lg:sticky lg:top-24">
            <SectionLabel label="Core values" />
            <h2 className="font-bold text-dark leading-tight">
              The principles that guide every session
            </h2>
            <p className="text-body text-warm-grey leading-relaxed">
              Our values aren&apos;t statements on a wall — they shape every interaction, every session, and every decision we make as a practice.
            </p>
          </div>
          <div className="flex flex-col divide-y divide-cool-grey">
            {coreValues.map((v) => (
              <div key={v.title} className="flex flex-col gap-y-3 py-8">
                <h3 className="font-bold text-dark">{v.title}</h3>
                <p className="text-sm font-semibold text-warm-grey">{v.subtitle}</p>
                <p className="text-body text-warm-grey leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBanner />

      {/* Therapeutic Journey */}
      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Our approach" />
            <h2 className="font-bold text-dark leading-tight">
              A structured, collaborative therapeutic process
            </h2>
            <p className="text-body text-warm-grey leading-relaxed">
              We believe lasting change comes from a clear, trusting process. Here&apos;s what your journey with us looks like.
            </p>
          </div>
          <JourneyAccordion />
        </div>
      </section>

      {/* Team preview */}
      <section className="py-20 px-5 lg:px-0 bg-section-sage">
        <div className="lg:mx-40 flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4">
            <SectionLabel label="The team" />
            <h2 className="font-bold text-dark leading-tight max-w-lg">
              Qualified therapists committed to your well-being
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPreview.map((member) => (
              <div key={member.slug} className="flex flex-col gap-y-4">
                <div className="relative h-72 rounded-xl overflow-hidden">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <p className="font-bold text-dark">{member.name}</p>
                  <p className="text-sm text-warm-grey">{member.title}</p>
                  <p className="text-xs text-warm-grey/80">{member.credentials}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.specialisations.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-white text-xs font-semibold text-sage-dark border border-cool-grey"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Button href="/team">meet the full team</Button>
        </div>
      </section>

      <DarkCTA />
    </main>
  );
}
