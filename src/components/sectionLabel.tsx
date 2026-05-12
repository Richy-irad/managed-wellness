type SectionLabelProps = {
  label: string;
  inverted?: boolean;
};

export default function SectionLabel({ label, inverted = false }: SectionLabelProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border text-xs font-bold tracking-widest uppercase font-josefin-sans ${
        inverted
          ? "border-white/30 text-white/60"
          : "border-cool-grey text-warm-grey"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sage-green shrink-0" />
      {label}
    </div>
  );
}
