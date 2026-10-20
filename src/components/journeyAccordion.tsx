"use client";

import { useState } from "react";

const items = [
  {
    id: "foundation",
    title: "Foundation & Trust-Building",
    content:
      "Your first sessions focus on building a safe, trusting relationship with your therapist. We take time to understand your unique story, history, and what brought you here — without judgment. This foundation is what makes meaningful change possible.",
  },
  {
    id: "assessment",
    title: "Assessment & Understanding",
    content:
      "Together, we explore the patterns, beliefs, and experiences that shape your current challenges. Using evidence-based assessment tools and open conversation, your therapist develops a clear picture of where you are and where you want to go.",
  },
  {
    id: "goals",
    title: "Collaborative Goal-Setting",
    content:
      "With a clear understanding of your needs, you and your therapist co-create a personalised treatment plan with concrete, meaningful goals. Progress is reviewed regularly so the plan always reflects where you are in your journey.",
  },
];

export default function JourneyAccordion() {
  const [openId, setOpenId] = useState<string | null>(items[0].id);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="border-b-2 border-dashed border-cool-grey last:border-b-0">
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="group w-full flex items-center gap-x-6 py-5 text-left font-josefin-sans"
              aria-expanded={isOpen}
            >
              <span className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-sm font-semibold text-dark shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`text-h4 font-medium transition-colors duration-250 group-hover:text-dark ${
                  isOpen ? "text-dark" : "text-warm-grey"
                }`}
              >
                {item.title}
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 pl-14 text-body text-warm-grey leading-relaxed">{item.content}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
