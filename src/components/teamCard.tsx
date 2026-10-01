"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { TeamMember } from "@/lib/types";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from "@/components/icons";

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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="h-full [perspective:1500px]">
      <div
        className={`relative grid h-full transition-transform duration-[1200ms] ease-smooth transform-3d ${
          isFlipped ? "-rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="relative col-start-1 row-start-1 h-full backface-hidden bg-concrete rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center py-12 px-6 gap-y-4">
          <button
            type="button"
            onClick={() => setIsFlipped(true)}
            aria-label={`View details for ${member.name}`}
            className="absolute top-3 right-3 w-12 h-12 rounded-full bg-surface flex items-center justify-center text-dark hover:bg-primary hover:text-surface transition-colors"
          >
            <Plus size={20} />
          </button>
          <div className="relative w-64 h-64 rounded-full overflow-hidden shrink-0">
            <Image
              src={member.photoUrl}
              alt={member.name}
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-8">
            <h3 className="text-4xl font-bold text-dark">{member.name}</h3>
            <p className="text-sm text-sage-dark font-semibold font-josefin-sans">
              {member.title}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="relative col-start-1 row-start-1 h-full rotate-y-180 backface-hidden bg-cta-bg rounded-2xl overflow-hidden flex flex-col gap-y-3 p-6 text-center">
          <button
            type="button"
            onClick={() => setIsFlipped(false)}
            aria-label={`Close details for ${member.name}`}
            className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-colors"
          >
            <Minus size={20} />
          </button>
          <div className="flex flex-col items-center gap-y-8">
            <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
              <Image
                src={member.photoUrl}
                alt={member.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              <p className="text-sm text-sage-green font-semibold font-josefin-sans">
                {member.title}
              </p>
              <p className="text-xs text-white/60 mt-0.5">
                {member.credentials}
              </p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">{member.bio}</p>
          <div className="flex flex-wrap gap-2">
            {member.specialisations.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 rounded-full bg-white/10 text-sage-green text-xs font-semibold font-josefin-sans"
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
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
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
    </div>
  );
}
