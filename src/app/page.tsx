import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getMinServices } from "@/lib/services";
import team from "@/data/team.json";
import blog from "@/data/blog.json";

import Hero from "@/components/hero";
import SectionLabel from "@/components/sectionLabel";
import StatsBanner from "@/components/statsBanner";
import SvcCard from "@/components/svcCard";
import BlogCard from "@/components/blogCard";
import HowToGetStarted from "@/components/howToGetStarted";
import DarkCTA from "@/components/darkCTA";
import Ticker from "@/components/ticker";
import JourneyAccordion from "@/components/journeyAccordion";
import TestimonialsCarousel from "@/components/testimonialsCarousel";

import heroImage from "../../public/assets/hero-image.jpg";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Compassionate, evidence-based mental health services including counselling, therapy, and psychometric testing. In-person and virtual sessions available in Nairobi, Kenya.",
};

const differentiators = [
  {
    title: "Evidence-Based",
    body: "All our therapists use proven clinical modalities — CBT, EFT, trauma-informed care, and more.",
  },
  {
    title: "In-Person & Virtual",
    body: "Attend sessions from our Nairobi office or connect securely from anywhere you feel comfortable.",
  },
  {
    title: "Culturally Sensitive",
    body: "We honour your background, identity, and lived experience in every aspect of your care.",
  },
  {
    title: "Fully Confidential",
    body: "Your privacy is non-negotiable. Everything shared in sessions stays between you and your therapist.",
  },
];

export default function Home() {
  const services = getMinServices();
  const teamPreview = team.slice(0, 3);
  const blogPreview = blog.slice(0, 3);

  return (
    <main>
      <Hero
        label="Mental Health Centre — Nairobi"
        title="Experience the difference of authentic, empathetic care."
        subtext="Evidence-based counselling and therapy — in person and virtually. We meet you where you are."
        image={heroImage}
        ctas={[
          { label: "Book a Consultation →", href: "/contact", variant: "primary" },
          { label: "Browse Services", href: "/services", variant: "outline" },
        ]}
      />

      {/* Journey intro */}
      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Your Therapeutic Journey" />
            <h2 className="font-bold text-dark leading-tight">
              What to expect when you work with us
            </h2>
            <p className="text-body text-warm-grey leading-relaxed">
              We believe therapy works best when you understand the process.
              Here&apos;s how we walk alongside you — from your very first
              session to lasting change.
            </p>
          </div>
          <JourneyAccordion />
        </div>
      </section>

      {/* Stats */}
      <StatsBanner />

      {/* Services grid */}
      <section className="py-20 px-5 lg:px-0 bg-section-wash">
        <div className="lg:mx-40 flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4">
            <SectionLabel label="Our Services" />
            <h2 className="font-bold text-dark leading-tight max-w-lg">
              Comprehensive support for every stage of your journey
            </h2>
            <p className="text-body text-warm-grey max-w-xl">
              We offer a full range of evidence-based mental health services
              delivered by qualified therapists.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <SvcCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-deep-blue uppercase tracking-widest hover:text-deep-blue/70 transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* Team preview */}
      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4">
            <SectionLabel label="Our Team" />
            <h2 className="font-bold text-dark leading-tight max-w-lg">
              Therapists who genuinely care about your growth
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
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.specialisations.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-section-sage text-xs font-semibold text-sage-dark"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm font-bold text-deep-blue uppercase tracking-widest hover:text-deep-blue/70 transition-colors"
          >
            Meet the Full Team →
          </Link>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Differentiators */}
      <section className="py-20 px-5 lg:px-0 bg-section-sage">
        <div className="lg:mx-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="Why Choose Us" />
            <h2 className="font-bold text-dark leading-tight">
              Evidence-based care, delivered with compassion
            </h2>
            <p className="text-body text-warm-grey leading-relaxed">
              We combine clinical expertise with genuine human warmth. Every
              session is confidential, culturally sensitive, and tailored to
              your unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-xl p-6 flex flex-col gap-y-2 border border-cool-grey"
              >
                <p className="font-bold text-dark">{d.title}</p>
                <p className="text-sm text-warm-grey leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-5 lg:px-0 bg-white">
        <div className="lg:mx-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="What Clients Say" />
            <h2 className="font-bold text-dark leading-tight max-w-lg">
              Real stories from people who&apos;ve found healing here
            </h2>
            <p className="text-body text-warm-grey leading-relaxed max-w-md">
              Our clients&apos; words reflect the heart of what we do — building
              trust, creating safety, and facilitating lasting change.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 px-5 lg:px-0 bg-section-wash">
        <div className="lg:mx-40 flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4">
            <SectionLabel label="From the Blog" />
            <h2 className="font-bold text-dark leading-tight max-w-lg">
              Resources to support your mental wellness
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreview.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-deep-blue uppercase tracking-widest hover:text-deep-blue/70 transition-colors"
          >
            Read All Articles →
          </Link>
        </div>
      </section>

      {/* How to get started */}
      <HowToGetStarted />

      {/* Dark CTA */}
      <DarkCTA />
    </main>
  );
}
