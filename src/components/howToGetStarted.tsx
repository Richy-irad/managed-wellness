import SectionLabel from "@/components/sectionLabel";
import StepPhotoCard from "@/components/stepPhotoCard";

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
    description: "Start confidential, compassionate care on your path to healing.",
    imageUrl: "https://picsum.photos/seed/step-begin/400/500",
  },
];

export default function HowToGetStarted() {
  return (
    <section className="bg-section-wash py-20">
      <div className="container flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-4">
          <SectionLabel label="How to get started" />
          <h2 className="text-h2 font-bold text-dark leading-tight max-w-lg">
            Take the first step towards supporting your mental health
          </h2>
          <p className="text-body-lg text-warm-grey max-w-xl">
            Follow these three steps to connect with the therapist who fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <StepPhotoCard key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
