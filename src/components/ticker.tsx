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
    <div className="ticker-wrap">
      <div
        className="ticker-inner font-josefin-sans text-sm font-semibold tracking-wide uppercase text-sage-dark"
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
