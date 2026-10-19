import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CircleCheck } from "lucide-react";

import { getService, getServiceParams, getAllServices } from "@/lib/services";

import Hero from "@/components/hero";
import SvcCard from "@/components/svcCard";
import DarkCTA from "@/components/darkCTA";
import Button from "@/components/button";

export async function generateStaticParams() {
  return await getServiceParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service.service) return {};
  return {
    title: service.service,
    description: service.metaDescription ?? service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service.service) notFound();

  const allServices = await getAllServices();
  const related = allServices.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main>
      <Hero
        title={service.service}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.service },
        ]}
        label="Our services"
      />

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left — description + benefits */}
          <div className="lg:col-span-3 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
              <p className="text-body text-warm-grey leading-relaxed">
                {service.description}
              </p>
            </div>

            {service.benefits && service.benefits.length > 0 && (
              <div className="flex flex-col gap-y-6">
                <h2 className="font-bold text-dark">Benefits</h2>
                <div className="flex flex-col gap-y-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-x-3 items-start">
                      <CircleCheck
                        size={20}
                        className="text-sage-green shrink-0 mt-0.5"
                      />
                      <div>
                        <span className="font-bold text-dark">{benefit.title}: </span>
                        <span className="text-warm-grey">{benefit.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — beneficiaries + CTA */}
          <div className="lg:col-span-2 flex flex-col gap-y-8">
            {service.beneficiaries && service.beneficiaries.length > 0 && (
              <div className="bg-section-wash rounded-2xl p-8 flex flex-col gap-y-4">
                <h3 className="font-bold text-dark">Who does this benefit?</h3>
                <ul className="flex flex-col gap-y-2">
                  {service.beneficiaries.map((b, i) => (
                    <li key={i} className="flex gap-x-2 items-start text-sm text-warm-grey">
                      <span className="text-sage-green font-bold shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-hero-bg rounded-2xl p-8 flex flex-col gap-y-4">
              <p className="font-bold text-white leading-snug">
                Ready to take the first step?
              </p>
              <p className="text-sm text-white/70">
                Book a free 15-minute consultation to see if this service is right for you.
              </p>
              <Button href="/contact" variant="solid" onDark>
                book now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-20 bg-section-wash">
          <div className="container flex flex-col gap-y-10">
            <h2 className="font-bold text-dark leading-tight">
              You might also be interested in
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((s, i) => (
                <SvcCard key={s.slug} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <DarkCTA />
    </main>
  );
}
