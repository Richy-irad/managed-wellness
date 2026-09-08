"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import faqs from "@/data/faqs.json";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className="border-b-2 border-dashed border-cool-grey last:border-b-0">
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between gap-x-4 py-5 text-left font-josefin-sans"
              aria-expanded={isOpen}
            >
              <span className="text-body-lg font-semibold text-dark pr-4">{faq.question}</span>
              <span
                className={`shrink-0 text-sage-green transition-transform duration-250 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Plus size={20} />
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-body text-warm-grey leading-relaxed">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
