import Image from "next/image";
import Link from "next/link";
import { HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { ServiceType } from "@/lib/types";

type SvcCardProps = {
  service: ServiceType;
  index: number;
};

export default function SvcCard({ service, index }: SvcCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col bg-surface rounded-xl border border-cool-grey overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-250"
    >
      <div className="flex flex-col gap-y-3 p-6 flex-1">
        <div className="flex items-start justify-between">
          <span className="text-sage-green">
            <HeartIcon size={32} />
          </span>
          <span className="w-8 h-8 rounded-full border border-cool-grey flex items-center justify-center text-xs font-semibold text-dark shrink-0">
            {index + 1}
          </span>
        </div>
        <h3 className="text-h4 font-bold text-dark leading-snug">{service.service}</h3>
        <p className="text-sm text-warm-grey leading-relaxed line-clamp-3">{service.description}</p>
      </div>
      <div className="relative h-44 w-full shrink-0">
        <Image
          src={`https://picsum.photos/seed/${service.slug}/400/180`}
          alt={service.service}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </Link>
  );
}
