"use client";

const words = [
  "Joyful ✦",
  "Balance ✦",
  "Wellness ✦",
  "Growth ✦",
  "Healing ✦",
  "Clarity ✦",
  "Presence ✦",
  "Peace ✦",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-section-sage py-4">
      <div
        className="inline-flex gap-8 animate-ticker-scroll hover:[animation-play-state:paused] font-josefin-sans text-2xl lg:text-6xl font-semibold tracking-wide uppercase text-sage-dark pt-4 lg:pt-8"
        aria-hidden="true"
      >
        {/* duplicated for seamless loop */}
        {[...words, ...words].map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
    </div>
  );
}
