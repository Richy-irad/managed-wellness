import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import {
  CapacityBuildingIcon,
  CareerLadderIcon,
  CoupleTherapyIcon,
  FlameIcon,
  LossAndGriefIcon,
  PsychometricTestingIcon,
  SgbvSupportIcon,
  TraumaDebriefingIcon,
  WeddingRingsIcon,
} from "@/components/serviceIcons";
import { ServiceType } from "@/lib/types";

type SvcCardProps = {
  service: ServiceType;
  index: number;
};

const SERVICE_ICONS: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "trauma-and-psychological-debriefing": TraumaDebriefingIcon,
  "psychometric-testing": PsychometricTestingIcon,
  "career-counseling": CareerLadderIcon,
  "capacity-building": CapacityBuildingIcon,
  "sexual-and-gender-based-violence-counseling": SgbvSupportIcon,
  "loss-and-grief-counseling": LossAndGriefIcon,
  "couples-therapy": CoupleTherapyIcon,
  "sex-therapy": FlameIcon,
  "pre-marital-counseling": WeddingRingsIcon,
};

export default function SvcCard({ service, index }: SvcCardProps) {
  const Icon = SERVICE_ICONS[service.slug] ?? Heart;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="bg-sage-100 rounded-xl overflow-hidden flex flex-col transition duration-250 ease-smooth hover:shadow-lg hover:-translate-y-[3px]"
    >
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between">
          <span className="text-sage-green flex items-center justify-center shrink-0">
            <Icon size={54} />
          </span>
          <span className="w-10 h-10 rounded-full border border-warm-grey flex items-center justify-center font-josefin-sans text-base font-semibold text-dark shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-h4 leading-snug text-dark">{service.service}</h3>
        <p className="text-sm text-dark leading-relaxed line-clamp-2">{service.description}</p>
      </div>

      <div className="p-2 shrink-0">
        <div className="relative aspect-square w-full rounded-xl overflow-hidden">
          <Image
            src={`https://picsum.photos/seed/${service.slug}/400/500`}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </Link>
  );
}
