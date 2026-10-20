import { Phone } from "lucide-react";
import SectionLabel from "@/components/sectionLabel";
import StepPhotoCard from "@/components/stepPhotoCard";
import Button from "@/components/button";

const steps = [
  {
    step: "Step One",
    title: "Explore Services",
    description: "Browse our services to see what fits your needs and goals.",
    imageUrl: "https://picsum.photos/seed/step-explore/400/500",
  },
  {
    step: "Step Two",
    title: "Schedule Your Appointment",
    description: "Fill out our contact form or call us to book your session.",
    imageUrl: "https://picsum.photos/seed/step-schedule/400/500",
  },
  {
    step: "Step Three",
    title: "Begin Your Journey",
    description:
      "Start confidential, compassionate care on your path to healing.",
    imageUrl: "https://picsum.photos/seed/step-begin/400/500",
  },
];

export default function HowToGetStarted() {
  return (
    <section className="bg-section-wash py-20">
      <div className="container flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-4 items-center text-center">
          <SectionLabel label="How to get started" />
          <h2 className="text-4xl lg:text-6xl font-bold text-dark leading-tight lg:max-w-2/3">
            Take the first step towards supporting your mental health
          </h2>
          <p className="text-xl text-forest-900 max-w-xl">
            Follow these three steps to connect with the therapist who fits your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <StepPhotoCard key={s.step} {...s} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="solid"
            href="tel:+254722720072"
            icon={<Phone size={14} />}
            onDark
          >
            Call us +254 722 720072
          </Button>
        </div>
      </div>
    </section>
  );
}
