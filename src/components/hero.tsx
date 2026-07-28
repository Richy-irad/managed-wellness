import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/sectionLabel";

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
  return (
    <section
      className={`bg-hero-bg ${image ? "py-20 lg:py-32" : "py-20 lg:py-28"} px-5 lg:px-0 overflow-hidden`}
    >
      <div
        className={`lg:mx-40 flex ${image ? "flex-col lg:flex-row items-center gap-12 lg:gap-20" : "flex-col gap-y-6"}`}
      >
        <div className={`flex flex-col gap-y-6 ${image ? "lg:basis-1/2" : "max-w-3xl"}`}>
          {label && <SectionLabel label={label} inverted />}

          <h1 className="font-bold text-white leading-tight tracking-tight">{title}</h1>

          {subtext && <p className="text-body-lg text-white/70 max-w-md">{subtext}</p>}

          {ctas && ctas.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {ctas.map((cta) => (
                <Link
                  key={cta.href}
                  href={cta.href}
                  className={
                    cta.variant === "primary"
                      ? "px-8 py-3.5 rounded-full bg-muted-yellow text-primary font-bold text-sm tracking-widest uppercase hover:bg-accent-dark transition-colors shadow-accent"
                      : "px-8 py-3.5 rounded-full border border-white/30 text-white font-bold text-sm tracking-widest uppercase hover:border-white/60 transition-colors"
                  }
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          )}

          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-x-2 text-sm text-white/60 font-josefin-sans">
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-x-2">
                    {i > 0 && <span aria-hidden="true">›</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-white transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white/90">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>

        {image && (
          <div className="hidden lg:block lg:basis-1/2 h-[520px] relative rounded-3xl overflow-hidden">
            <Image src={image} alt="" fill priority className="object-cover object-top" />
          </div>
        )}
      </div>
    </section>
  );
}
