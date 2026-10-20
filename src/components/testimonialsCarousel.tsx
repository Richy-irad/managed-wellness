"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/testimonialCard";
import testimonials from "@/data/testimonials.json";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 12000);
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
      <TestimonialCard testimonial={t} />

      <div className="flex items-center gap-x-4">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-cool-grey flex items-center justify-center text-warm-grey hover:border-deep-blue hover:text-deep-blue transition-colors"
        >
          <ChevronLeft size={12} />
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
          <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}
