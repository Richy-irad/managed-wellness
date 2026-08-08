import type { Metadata } from "next";
import Link from "next/link";
import pricing from "@/data/pricing.json";
import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for all mental health services at Managed Wellness Centre, Nairobi.",
};

function formatKES(amount: number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PricingPage() {
  return (
    <main>
      <Hero
        title="Transparent pricing — no surprises, just support."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        label="Pricing"
      />

      <section className="py-20 bg-white">
        <div className="container flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-3 max-w-xl">
            <SectionLabel label="Session fees" />
            <h2 className="text-h2 font-bold text-dark leading-tight">
              Invest in your mental health.
            </h2>
            <p className="text-body text-warm-grey leading-relaxed">
              All fees are per session unless a package is noted. Contact us to discuss payment
              plans or subsidised rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((entry) => (
              <div
                key={entry.id}
                className="flex flex-col gap-y-4 bg-concrete rounded-2xl p-6 border border-border"
              >
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-h4 font-bold text-dark">{entry.serviceLabel}</h3>
                  <p className="text-xs text-warm-grey font-josefin-sans uppercase tracking-wide">
                    {entry.sessionDurationMinutes} min session
                  </p>
                </div>

                <div className="flex items-end gap-x-1">
                  <span className="text-h2 font-bold text-deep-blue">
                    {formatKES(entry.priceKES)}
                  </span>
                  <span className="text-sm text-warm-grey mb-1.5">/ session</span>
                </div>

                {entry.packageSessions && entry.packagePriceKES && (
                  <div className="px-4 py-2.5 rounded-xl bg-sage-light text-sage-dark text-sm font-semibold font-josefin-sans">
                    Package: {entry.packageSessions}× sessions —{" "}
                    {formatKES(entry.packagePriceKES)}
                  </div>
                )}

                {entry.description && (
                  <p className="text-sm text-warm-grey leading-relaxed">{entry.description}</p>
                )}

                {entry.serviceSlug && (
                  <Link
                    href={`/services/${entry.serviceSlug}`}
                    className="text-sm font-semibold text-deep-blue hover:text-deep-blue-dark transition-colors mt-auto"
                  >
                    learn about this service
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p className="text-sm text-warm-grey border-t border-border pt-6">
            <strong>Disclaimer:</strong> Prices are subject to change. Subsidised rates may be
            available for qualifying clients —{" "}
            <Link
              href="/contact"
              className="text-deep-blue underline hover:text-deep-blue-dark"
            >
              contact us
            </Link>{" "}
            to discuss. Managed Wellness Centre accepts M-Pesa, bank transfer, and cash.
          </p>
        </div>
      </section>

      <DarkCTA
        heading="Ready to take the first step?"
        subtext="Book a free 15-minute consultation to discuss which service is right for you."
      />
    </main>
  );
}
