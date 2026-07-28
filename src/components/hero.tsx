import Image, { StaticImageData } from "next/image";
import SectionLabel from "@/components/sectionLabel";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/button";

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
  image?: StaticImageData;
  ctas?: CTAButton[];
  breadcrumbs?: BreadcrumbItem[];
};

export default function Hero({ title, label, subtext, image, ctas, breadcrumbs }: HeroProps) {
  const ctaButtons = ctas && ctas.length > 0 && (
    <div className="flex flex-wrap gap-4">
      {ctas.map((cta) => (
        <Button key={cta.href} href={cta.href} variant={cta.variant === "primary" ? "solid" : "ghost"} onDark>
          {cta.label}
        </Button>
      ))}
    </div>
  );

  // No-image variant — inset dark panel (Spirito PageTitle shape) for interior pages.
  if (!image) {
    return (
      <section className="px-5 lg:px-0 py-10 lg:py-16">
        <div className="lg:mx-40">
          <div className="bg-cta-bg rounded-3xl px-6 py-14 lg:px-16 lg:py-20 flex flex-col items-center text-center gap-y-4">
            {label && <SectionLabel label={label} inverted />}
            <h1 className="font-bold text-white leading-tight tracking-tight max-w-2xl">{title}</h1>
            {subtext && <p className="text-body-lg text-white/70 max-w-md">{subtext}</p>}
            {ctaButtons && <div className="mt-2">{ctaButtons}</div>}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <div className="mt-2">
                <Breadcrumb items={breadcrumbs} onDark />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Image variant — full-bleed hero (home page).
  return (
    <section className="bg-hero-bg py-20 lg:py-32 px-5 lg:px-0 overflow-hidden">
      <div className="lg:mx-40 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex flex-col gap-y-6 lg:basis-1/2">
          {label && <SectionLabel label={label} inverted />}

          <h1 className="font-bold text-white leading-tight tracking-tight">{title}</h1>

          {subtext && <p className="text-body-lg text-white/70 max-w-md">{subtext}</p>}

          {ctaButtons}

          {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} onDark />}
        </div>

        <div className="hidden lg:block lg:basis-1/2 h-[520px] relative rounded-3xl overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
