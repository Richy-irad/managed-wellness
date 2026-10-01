import { ReactNode } from "react";
import { Sparkle } from "lucide-react";

type SectionLabelProps = {
  label: string;
  variant?: "default" | "inverted" | "surface";
  icon?: ReactNode;
};

const textColor: Record<NonNullable<SectionLabelProps["variant"]>, string> = {
  default: "text-dark",
  inverted: "text-white",
  surface: "text-surface",
};

export default function SectionLabel({ label, variant = "default", icon }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2.5">
      <span
        className={`inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0 animate-spin ${
          variant === "default" ? "bg-sage-green text-primary" : "bg-white/15 text-white"
        }`}
        style={{ animationDuration: "3s" }}
      >
        {icon ?? <Sparkle size={18} />}
      </span>
      <span className={`font-josefin-sans font-semibold text-base ${textColor[variant]}`}>
        {label}
      </span>
    </div>
  );
}
