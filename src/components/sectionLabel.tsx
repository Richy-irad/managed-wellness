import { ReactNode } from "react";
import { SparkleIcon } from "@/components/icons";

type SectionLabelProps = {
  label: string;
  inverted?: boolean;
  icon?: ReactNode;
};

export default function SectionLabel({ label, inverted = false, icon }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span
        className={`inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0 ${
          inverted ? "bg-white/15 text-white" : "bg-sage-green text-primary"
        }`}
      >
        {icon ?? <SparkleIcon size={18} />}
      </span>
      <span
        className={`font-josefin-sans font-semibold text-sm ${inverted ? "text-white" : "text-dark"}`}
      >
        {label}
      </span>
    </div>
  );
}
