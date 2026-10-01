import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Managed Wellness Centre privacy policy — data collection, usage, confidentiality, and cookies.",
};

export default function PolicyPage() {
  return (
    <main>
      <Hero
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        label="Legal"
      />

      <section className="py-20 bg-white">
        <div className="container-narrow flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-h3 font-bold text-dark">1. Data Collection</h2>
            <p className="text-body text-warm-grey leading-relaxed">
              Managed Wellness Centre collects only the personal information necessary to provide
              our services. This includes your name, contact details, and any information you share
              in our intake forms or contact submissions. We do not sell or share your personal data
              with third parties for marketing purposes.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-h3 font-bold text-dark">2. How We Use Your Data</h2>
            <p className="text-body text-warm-grey leading-relaxed">
              The information we collect is used solely to:
            </p>
            <ul className="list-disc list-inside text-body text-warm-grey leading-relaxed space-y-2 pl-4">
              <li>Respond to your enquiries and schedule appointments</li>
              <li>Provide and improve our mental health services</li>
              <li>Send service-related communications (appointment reminders, policy updates)</li>
              <li>Comply with professional and legal obligations</li>
            </ul>
            <p className="text-body text-warm-grey leading-relaxed">
              We will never use your data for unsolicited marketing without your explicit consent.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-h3 font-bold text-dark">3. Confidentiality</h2>
            <p className="text-body text-warm-grey leading-relaxed">
              All clinical information shared in therapy sessions is subject to strict professional
              confidentiality in line with the guidelines of the Kenya Psychological Association
              (KPA) and applicable law. Client records are stored securely and accessed only by the
              treating therapist and, where clinically necessary, their clinical supervisor.
            </p>
            <p className="text-body text-warm-grey leading-relaxed">
              Confidentiality may be limited in the following circumstances, as required by law and
              professional ethics:
            </p>
            <ul className="list-disc list-inside text-body text-warm-grey leading-relaxed space-y-2 pl-4">
              <li>Where there is credible risk of harm to you or another person</li>
              <li>Where disclosure is ordered by a court</li>
              <li>Where mandatory reporting obligations apply (e.g., child protection)</li>
            </ul>
            <p className="text-body text-warm-grey leading-relaxed">
              Your therapist will discuss the limits of confidentiality with you during your first
              session.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-h3 font-bold text-dark">4. Cookies</h2>
            <p className="text-body text-warm-grey leading-relaxed">
              Our website uses minimal, essential cookies to ensure the site functions correctly. We
              do not use third-party tracking or advertising cookies. By continuing to use this
              site, you consent to the use of these essential cookies.
            </p>
            <p className="text-body text-warm-grey leading-relaxed">
              You may disable cookies in your browser settings at any time, though this may affect
              certain site functionality.
            </p>
          </div>

          <div className="flex flex-col gap-y-4">
            <h2 className="text-h3 font-bold text-dark">5. Contact</h2>
            <p className="text-body text-warm-grey leading-relaxed">
              For any questions or concerns regarding your personal data, please contact us at{" "}
              <a
                href="mailto:info@managedwellness.co.ke"
                className="text-deep-blue underline hover:text-deep-blue-dark transition-colors"
              >
                info@managedwellness.co.ke
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+254722720072"
                className="text-deep-blue underline hover:text-deep-blue-dark transition-colors"
              >
                +254 722 720 072
              </a>
              .
            </p>
          </div>

          <p className="text-sm text-warm-grey border-t border-border pt-6">
            Last updated: May 2026. Managed Wellness Centre reserves the right to update this
            policy. Material changes will be communicated via our website. Visit our{" "}
            <Link
              href="/contact"
              className="text-deep-blue underline hover:text-deep-blue-dark transition-colors"
            >
              contact page
            </Link>{" "}
            with any concerns.
          </p>
        </div>
      </section>
    </main>
  );
}
