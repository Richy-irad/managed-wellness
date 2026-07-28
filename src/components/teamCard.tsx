import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/lib/types";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from "@/components/icons";

type TeamCardProps = {
  member: TeamMember;
};

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
};

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="flex flex-col bg-concrete rounded-2xl overflow-hidden">
      <div className="relative aspect-[4/5] w-full shrink-0">
        <Image
          src={member.photoUrl}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-y-3 p-6">
        <div>
          <h3 className="text-h4 font-bold text-dark">{member.name}</h3>
          <p className="text-sm text-sage-dark font-semibold font-josefin-sans">{member.title}</p>
          <p className="text-xs text-warm-grey mt-0.5">{member.credentials}</p>
        </div>
        <p className="text-sm text-warm-grey leading-relaxed">{member.bio}</p>
        <div className="flex flex-wrap gap-2">
          {member.specialisations.map((spec) => (
            <span
              key={spec}
              className="px-3 py-1 rounded-full bg-sage-light text-sage-dark text-xs font-semibold font-josefin-sans"
            >
              {spec}
            </span>
          ))}
        </div>
        {member.socials && member.socials.length > 0 && (
          <div className="flex gap-x-2 mt-1">
            {member.socials.map((s) => {
              const Icon = socialIcons[s.platform];
              return (
                <Link
                  key={s.platform}
                  href={s.href}
                  className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-dark hover:bg-primary hover:text-surface transition-colors"
                  aria-label={s.platform}
                >
                  <Icon size={14} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
