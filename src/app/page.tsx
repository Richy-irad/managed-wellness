import type { Metadata } from "next";
import Image from "next/image";

import { getMinServices } from "@/lib/services";
import team from "@/data/team.json";
import blog from "@/data/blog.json";

import { Sparkle } from "lucide-react";
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
import TeamCard from "@/components/teamCard";
import Button from "@/components/button";

import heroImage from "../../public/assets/hero-image.jpg";
import journeyImage from "../../public/assets/hero-image-sm.jpg";

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

export default async function Home() {
  const services = await getMinServices();
  const teamPreview = team.slice(0, 3);
  const blogPreview = blog.slice(0, 3);

  const trustBadge = (
    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full pl-2 pr-4 py-2 w-fit">
      <div className="flex -space-x-3">
        {teamPreview.map((member) => (
          <div
            key={member.slug}
            className="relative w-8 h-8 rounded-full ring-2 ring-white overflow-hidden"
          >
            <Image
              src={member.photoUrl}
              alt=""
              fill
              className="object-cover"
              sizes="32px"
            />
          </div>
        ))}
        <span className="w-8 h-8 rounded-full ring-2 ring-white bg-sage-green text-primary flex items-center justify-center shrink-0">
          <Sparkle size={14} />
        </span>
      </div>
      <span className="text-sm font-semibold text-white">
        1000+ Trusted Patients
      </span>
    </div>
  );

  return (
    <main>
      <Hero
        variant="home"
        label="Mental health centre — Nairobi"
        title="Experience the difference of authentic, empathetic care."
        subtext="Evidence-based counselling and therapy — in person and virtually. We meet you where you are."
        image={heroImage}
        trustBadge={trustBadge}
        ctas={[
          {
            label: "book a consultation",
            href: "/contact",
            variant: "primary",
          },
        ]}
      />

      {/* Journey intro */}
      <section className="py-20 bg-white flex flex-col gap-y-12">
        <div className="container flex flex-row">
          <div className="flex basis-full lg:basis-3/4 flex-col gap-y-8">
            <SectionLabel label="Unlock Your Health" />
            <h2 className="font-bold text-4xl lg:text-6xl text-dark leading-tight">
              We support you on your journey to great mental wellbeing
            </h2>
          </div>
        </div>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden">
            <Image
              src={journeyImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-y-8">
            <p className="text-lg text-forest-900 leading-relaxed">
              We believe therapy works best when you understand the process.
              Here&apos;s how we walk alongside you — from your very first
              session to lasting change.
            </p>
            <JourneyAccordion />
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="container flex flex-col gap-y-10">
          <div className="flex flex-row">
            <div className="flex basis-full lg:basis-2/3 flex-col gap-y-8">
              <SectionLabel label="Our Areas of Focus" />
              <h2 className="font-bold text-4xl lg:text-6xl text-dark leading-tight">
                Comprehensive support for every stage of your journey
              </h2>
              <p className="text-lg text-forest-900 leading-relaxed">
                We specialize in recognizing and addressing these less visible
                challenges, because they can make all the difference in your
                healing journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <SvcCard key={service.slug} service={service} index={i} />
            ))}
          </div>
          <Button variant="solid" href="/services">
            view all services
          </Button>
        </div>
      </section>

      {/* How to get started */}
      <HowToGetStarted />

      {/* Stats */}
      <StatsBanner />

      {/* Team preview */}
      <section className="py-20 bg-section-wash">
        <div className="container flex flex-col gap-y-10 items-center">
          <SectionLabel label="Our team" />
          <h2 className="font-bold text-4xl lg:text-6xl text-dark leading-tight lg:max-w-2/3">
            Therapists who genuinely care about your growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPreview.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button variant="solid" href="/team">
              meet the full team
            </Button>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Differentiators */}
      <section className="py-20 bg-section-sage">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="What Makes us Different" />
            <h2 className="font-bold text-4xl lg:text-6xl text-dark leading-tight">
              Evidence-based care, delivered with compassion
            </h2>
            <p className="text-lg text-forest-900 leading-relaxed">
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
                <p className="text-sm text-warm-grey leading-relaxed">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-y-6">
            <SectionLabel label="What clients say" />
            <h2 className="font-bold text-4xl lg:text-6xl text-dark leading-tight lg:max-w-lg">
              Real stories from people who&apos;ve found healing here
            </h2>
            <p className="text-lg text-forest-900 leading-relaxed max-w-md">
              Our clients&apos; words reflect the heart of what we do — building
              trust, creating safety, and facilitating lasting change.
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 bg-section-wash">
        <div className="container flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-4">
            <SectionLabel label="From the blog" />
            <h2 className="font-bold text-dark leading-tight lg:max-w-lg">
              Resources to support your mental wellness
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPreview.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Button href="/blog" variant="solid" onDark>
            read all articles
          </Button>
        </div>
      </section>

      {/* Dark CTA */}
      <DarkCTA />
    </main>
  );
}
