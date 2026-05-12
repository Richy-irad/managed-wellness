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
    <div className="bg-section-sage py-4 overflow-hidden">
      <div
        className="flex gap-x-8 whitespace-nowrap font-josefin-sans text-sm font-semibold tracking-wide uppercase text-sage-dark"
        style={{ animation: "ticker 20s linear infinite", display: "inline-flex" }}
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
