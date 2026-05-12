import Link from "next/link";
import SectionLabel from "@/components/sectionLabel";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroPageBannerProps = {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  label?: string;
};

export default function HeroPageBanner({ title, breadcrumbs, label }: HeroPageBannerProps) {
  return (
    <section className="bg-hero-bg py-20 lg:py-28 px-5 lg:px-0">
      <div className="lg:mx-40 flex flex-col gap-y-6">
        {label && <SectionLabel label={label} inverted />}

        <h1 className="text-h1 font-bold text-white leading-tight tracking-tight">
          {title}
        </h1>

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
      </div>
    </section>
  );
}
