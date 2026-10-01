import Image from "next/image";

type StepPhotoCardProps = {
  step: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default function StepPhotoCard({
  step,
  title,
  description,
  imageUrl,
}: StepPhotoCardProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[3/4] flex flex-col justify-between p-5">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* gradient overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, oklch(0.72 0.22 140) 0%, oklch(0.72 0.22 140 / 0.85) 5%, transparent 40%)",
        }}
      />
      {/* step badge */}
      <span className="relative z-20 self-center px-5 py-1.5 rounded-full bg-white text-primary text-sm font-bold shadow-sm">
        {step}
      </span>
      {/* content */}
      <div className="relative z-20 text-center flex flex-col gap-y-1">
        <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>
        <p className="text-sm text-white/85 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
