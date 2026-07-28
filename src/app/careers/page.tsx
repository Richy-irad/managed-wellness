import type { Metadata } from "next";
import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Managed Wellness team. See open positions for therapists and mental health professionals.",
};

const perks = [
  {
    label: "Values-first culture",
    body: "We hire for empathy and ethics first. Clinical excellence is built through mentorship and supervision.",
  },
  {
    label: "Flexible scheduling",
    body: "We support both full-time and part-time arrangements, including hybrid in-person and virtual practice.",
  },
  {
    label: "Continuous development",
    body: "Regular clinical supervision, CPD workshops, and a peer community to help you grow.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <Hero
        title="Build your career where it matters most."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
        label="Careers"
      />

      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-3 max-w-xl">
            <SectionLabel label="Open positions" />
            <h2 className="text-h2 font-bold text-dark leading-tight">
              Join our team of compassionate professionals.
            </h2>
            <p className="text-body text-warm-grey leading-relaxed">
              We&apos;re always looking for talented, values-aligned mental health practitioners to
              join us. While we have no open positions at this time, we welcome speculative
              applications.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-y-4 py-20 border border-dashed border-cool-grey rounded-2xl text-center">
            <h3 className="text-h4 font-bold text-dark">No open positions right now.</h3>
            <p className="text-body text-warm-grey max-w-md leading-relaxed">
              We aren&apos;t actively hiring at the moment, but we&apos;d love to hear from
              passionate mental health professionals. Send your CV and a short introduction to:
            </p>
            <a
              href="mailto:careers@managedwellness.co.ke"
              className="text-deep-blue font-semibold underline hover:text-deep-blue-dark transition-colors"
            >
              careers@managedwellness.co.ke
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((item) => (
              <div key={item.label} className="flex flex-col gap-y-2 p-6 bg-section-sage rounded-2xl">
                <h4 className="text-body-lg font-bold text-dark">{item.label}</h4>
                <p className="text-sm text-warm-grey leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        heading="Grow with us."
        subtext="We believe in supporting our team's wellbeing as much as our clients'."
      />
    </main>
  );
}
