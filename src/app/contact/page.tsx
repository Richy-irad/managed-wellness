import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Mail, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import ContactForm from "@/components/contactForm";
import DarkCTA from "@/components/darkCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Managed Wellness Centre. Book a consultation, ask a question, or find out which service is right for you.",
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    lines: ["+254 722 720 072", "+254 780 838 333"],
    href: "tel:+254722720072",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@managedwellness.fit"],
    href: "mailto:info@managedwellness.fit",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    lines: ["+254 722 720 072"],
    href: "https://wa.me/254722720072",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Get in touch — we're here to help."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        label="Contact us"
      />

      {/* Contact info row */}
      <section className="py-20 bg-section-wash border-b border-cool-grey">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map(({ icon: Icon, label, lines, href }) => (
            <Link
              key={label}
              href={href}
              className="flex flex-col gap-y-2 p-6 bg-white rounded-xl border border-cool-grey hover:border-deep-blue transition-colors group"
            >
              <div className="flex items-center gap-x-3 text-warm-grey group-hover:text-deep-blue transition-colors">
                <Icon size={22} />
                <span className="text-xs font-bold tracking-widest uppercase">{label}</span>
              </div>
              <div className="flex flex-col gap-y-0.5">
                {lines.map((line) => (
                  <span key={line} className="font-semibold text-dark">
                    {line}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Hours + map placeholder */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Opening hours" />
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-2 text-warm-grey">
                <Clock size={18} />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Hours to be confirmed
                </span>
              </div>
              <p className="text-sm text-warm-grey leading-relaxed">
                Business hours will be listed here once confirmed. For urgent
                queries, please call or WhatsApp us directly.
              </p>
            </div>
          </div>
          <div className="h-56 lg:h-full min-h-48 rounded-2xl bg-section-wash border border-cool-grey flex items-center justify-center">
            <p className="text-sm text-warm-grey">Map coming soon</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-section-wash">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Send a message" />
            <h2 className="font-bold text-dark leading-tight">
              We&apos;ll get back to you within 24 hours
            </h2>
            <p className="text-body text-dark leading-relaxed">
              Fill in the form and one of our team will be in touch shortly.
              All enquiries are strictly confidential.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <DarkCTA
        heading="Not sure where to start? Book a free 15-minute call."
        subtext="We'll help you figure out which service fits your needs — no commitment required."
      />
    </main>
  );
}
