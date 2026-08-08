import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  CheckCircleIcon,
  ClockIcon,
  HeartIcon,
  QuoteIcon,
  SparkleIcon,
  WarningIcon,
} from "@/components/icons";
import { ServiceType } from "@/lib/types";

type SvcCardProps = {
  service: ServiceType;
  index: number;
};

const SERVICE_ICONS: Record<string, typeof HeartIcon> = {
  "trauma-and-psychological-debriefing": WarningIcon,
  "psychometric-testing": CheckCircleIcon,
  "career-counseling": ArrowUpRightIcon,
  "capacity-building": SparkleIcon,
  "sexual-and-gender-based-violence-counseling": HeartIcon,
  "loss-and-grief-counseling": QuoteIcon,
  "couples-therapy": HeartIcon,
  "sex-therapy": HeartIcon,
  "pre-marital-counseling": ClockIcon,
};

export default function SvcCard({ service, index }: SvcCardProps) {
  const Icon = SERVICE_ICONS[service.slug] ?? HeartIcon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="bg-surface rounded-xl border border-cool-grey overflow-hidden flex flex-col transition duration-250 ease-smooth hover:shadow-lg hover:-translate-y-[3px]"
    >
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between">
          <span className="text-sage-green w-8 h-8 flex items-center justify-center shrink-0">
            <Icon size={32} />
          </span>
          <span className="w-8 h-8 rounded-full border border-warm-grey flex items-center justify-center font-josefin-sans text-xs font-semibold text-dark shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="text-h4 leading-snug text-dark">{service.service}</h3>
        <p className="text-sm text-dark leading-relaxed line-clamp-2">{service.description}</p>
      </div>

      <div className="w-full h-45 relative overflow-hidden shrink-0">
        <Image
          src={`https://picsum.photos/seed/${service.slug}/400/500`}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </Link>
  );
}
