import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@/components/icons";
import { ServiceType } from "@/lib/types";

type SvcCardProps = {
  service: ServiceType;
  index: number;
};

export default function SvcCard({ service, index }: SvcCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between rounded-2xl overflow-hidden min-h-[22.5rem] p-6 hover:-translate-y-1 transition-transform duration-250"
    >
      <Image
        src={`https://picsum.photos/seed/${service.slug}/400/500`}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to top, var(--color-overlay-photo) 0%, transparent 60%)" }}
      />

      <div className="relative z-20 flex items-center justify-between">
        <span className="w-11 h-11 rounded-full bg-surface flex items-center justify-center text-sage-green shrink-0">
          <HeartIcon size={20} />
        </span>
        <span className="text-sm text-white/70">{String(index + 1).padStart(2, "0")}</span>
      </div>

      <div className="relative z-20 flex flex-col gap-y-1">
        <h3 className="text-h4 font-bold text-white leading-snug">{service.service}</h3>
        <p className="text-sm text-white/80 leading-relaxed line-clamp-2">{service.description}</p>
      </div>
    </Link>
  );
}
