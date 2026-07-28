"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";
import testimonials from "@/data/testimonials.json";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-x-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-muted-yellow"
        >
          <path d="M8 1l1.854 3.754L14 5.528l-3 2.923.708 4.13L8 10.5l-3.708 2.08L5 8.452 2 5.528l4.146-.774L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [autoPlay]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <div className="flex flex-col gap-y-8">
      <div className="bg-deep-blue-mid rounded-2xl p-8 lg:p-12 flex flex-col gap-y-6 min-h-56">
        <StarRating rating={t.rating} />
        <blockquote className="text-body-lg text-white/90 leading-relaxed italic">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="flex flex-col gap-y-0.5">
          <span className="font-semibold text-white font-josefin-sans">{t.clientName}</span>
          {t.clientContext && (
            <span className="text-sm text-white/50">{t.clientContext}</span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-cool-grey flex items-center justify-center text-warm-grey hover:border-deep-blue hover:text-deep-blue transition-colors"
        >
          <ChevronLeftIcon size={12} />
        </button>
        <div className="flex gap-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setAutoPlay(false); setCurrent(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? "bg-deep-blue" : "bg-cool-grey"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-cool-grey flex items-center justify-center text-warm-grey hover:border-deep-blue hover:text-deep-blue transition-colors"
        >
          <ChevronRightIcon size={12} />
        </button>
      </div>
    </div>
  );
}
