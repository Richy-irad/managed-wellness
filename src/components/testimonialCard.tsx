import { Quote } from "lucide-react";

type TestimonialCardProps = {
  testimonial: {
    quote: string;
    clientName: string;
    clientContext?: string;
  };
};

function initials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-y-5 bg-surface border border-cool-grey rounded-2xl p-8 h-full">
      <span className="text-sage-green">
        <Quote size={32} />
      </span>
      <blockquote className="text-body-lg text-dark leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-x-3">
        <span className="w-11 h-11 rounded-full bg-sage-light flex items-center justify-center text-sm font-semibold text-sage-dark shrink-0">
          {initials(testimonial.clientName)}
        </span>
        <div className="flex flex-col">
          <span className="font-semibold text-dark font-josefin-sans text-sm">
            {testimonial.clientName}
          </span>
          {testimonial.clientContext && (
            <span className="text-xs text-warm-grey">{testimonial.clientContext}</span>
          )}
        </div>
      </div>
    </div>
  );
}
