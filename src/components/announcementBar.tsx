"use client";

import { useState } from "react";
import { XIcon } from "@phosphor-icons/react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-deep-blue text-white text-sm font-josefin-sans">
      <div className="flex items-center justify-between gap-x-4 px-5 py-2.5 lg:px-10">
        <p className="flex-1 text-center tracking-wide">
          Immediate availability for in-person and virtual sessions.{" "}
          <a
            href="tel:+254722720072"
            className="underline underline-offset-2 hover:text-muted-yellow transition-colors duration-150"
          >
            Call +254 722 720 072
          </a>
        </p>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="shrink-0 text-white/70 hover:text-white transition-colors duration-150"
        >
          <XIcon size={16} />
        </button>
      </div>
    </div>
  );
}
