"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/icons";

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
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col divide-y divide-cool-grey">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between py-5 text-left font-josefin-sans"
              aria-expanded={isOpen}
            >
              <span className="text-h4 font-semibold text-dark">{item.title}</span>
              <span className="shrink-0 ml-4 text-sage-green">
                {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-body text-warm-grey leading-relaxed">
                {item.content}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
