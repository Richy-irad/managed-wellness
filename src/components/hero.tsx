import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import SectionLabel from "@/components/sectionLabel";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";
import Navbar from "@/components/navbar";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type CTAButton = {
  label: string;
  href: string;
  variant: "primary" | "outline";
};

type HeroProps = {
  title: string;
  label?: string;
  subtext?: string;
  image?: StaticImageData | string;
  ctas?: CTAButton[];
  breadcrumbs?: BreadcrumbItem[];
  trustBadge?: ReactNode;
  byline?: ReactNode;
  variant?: "home" | "page";
};

// No hero photo supplied — deterministic placeholder seeded from the page
// title, same convention as svcCard.tsx and team.json.
function placeholderFor(title: string) {
  const seed = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `https://picsum.photos/seed/${seed}/1600/900`;
}

export default function Hero({
  title,
  label,
  subtext,
  image,
  ctas,
  breadcrumbs,
  trustBadge,
  byline,
  variant = "page",
}: HeroProps) {
  const bgImage = image ?? placeholderFor(title);

  const ctaButtons = ctas && ctas.length > 0 && (
    <div className="flex flex-wrap gap-4">
      {ctas.map((cta) => (
        <Button
          key={cta.href}
          href={cta.href}
          variant={cta.variant === "primary" ? "solid" : "ghost"}
          onDark
        >
          {cta.label}
        </Button>
      ))}
    </div>
  );

  return (
    <section className="mx-2 lg:mx-4">
      <div className="relative rounded-3xl overflow-hidden">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-overlay-photo)" }}
        />

        {variant === "home" ? (
          <div className="relative z-10 flex flex-col min-h-[560px] lg:min-h-[720px]">
            <Navbar />
            {trustBadge && (
              <div className="px-6 lg:px-16 pt-8">{trustBadge}</div>
            )}
            <div className="flex-1 flex flex-col justify-end gap-y-6 px-6 lg:px-16 pb-10 lg:pb-16 w-full lg:max-w-1/2">
              <h1 className="font-bold text-white leading-tight tracking-tight">
                {title}
              </h1>
              {subtext && (
                <p className="text-body-lg text-white/80 max-w-md">{subtext}</p>
              )}
              {ctaButtons}
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col min-h-[420px] lg:min-h-[520px]">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-y-4 px-6">
              {label && <SectionLabel label={label} variant="inverted" />}
              <h1 className="font-bold text-white leading-tight tracking-tight max-w-2xl">
                {title}
              </h1>
              {subtext && (
                <p className="text-body-lg text-white/70 max-w-md">{subtext}</p>
              )}
              {byline}
            </div>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="flex justify-center pb-8">
                <div className="inline-flex bg-black/30 rounded-full px-4 py-2">
                  <Breadcrumb items={breadcrumbs} onDark />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
