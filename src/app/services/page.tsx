import type { Metadata } from "next";

import { getAllServices } from "@/lib/services";

import Hero from "@/components/hero";
import SvcCard from "@/components/svcCard";
import HowToGetStarted from "@/components/howToGetStarted";
import DarkCTA from "@/components/darkCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the full range of evidence-based mental health services at Managed Wellness Centre — including trauma counselling, couples therapy, psychometric testing, and more.",
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main>
      <Hero
        title="Holistic mental health support for every stage of your journey."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        label="Our services"
      />

      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <SvcCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      <HowToGetStarted />

      <DarkCTA />
    </main>
  );
}
