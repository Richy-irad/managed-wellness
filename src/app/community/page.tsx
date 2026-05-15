import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroPageBanner from "@/components/heroPageBanner";
import SectionLabel from "@/components/sectionLabel";
import DarkCTA from "@/components/darkCTA";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Managed Wellness community — a safe, supportive space for mental health conversations.",
};

export default function CommunityPage() {
  return (
    <main>
      <HeroPageBanner
        title="A safe space to connect, share, and grow together."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Community" }]}
        label="Community"
      />

      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Coming soon" />
            <h2 className="text-h2 font-bold text-dark leading-tight">
              The Managed Wellness community is on its way.
            </h2>
            <p className="text-body-lg text-warm-grey leading-relaxed">
              We&apos;re building a moderated online space where clients, alumni, and mental health
              advocates can share experiences, access resources, and support one another — all within
              a safe, clinically guided environment.
            </p>
            <p className="text-body text-warm-grey leading-relaxed">
              Interested in being part of our founding community? Sign up to our newsletter to be
              the first to know when we launch.
            </p>
            <Link
              href="/contact"
              className="self-start inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-muted-yellow text-primary font-bold text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors"
            >
              Get notified →
            </Link>
          </div>

          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://picsum.photos/seed/community/800/500"
              alt="Community members connecting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <DarkCTA
        heading="Mental health is a shared journey."
        subtext="Therapy is the foundation — community is the support structure."
      />
    </main>
  );
}
