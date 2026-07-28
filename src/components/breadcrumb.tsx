import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  onDark?: boolean;
};

export default function Breadcrumb({ items, onDark = false }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={`flex items-center gap-x-2 text-sm font-josefin-sans ${
          onDark ? "text-white/60" : "text-warm-grey"
        }`}
      >
        {items.map((crumb, i) => (
          <li key={i} className="flex items-center gap-x-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className={onDark ? "hover:text-white transition-colors" : "hover:text-dark transition-colors"}
              >
                {crumb.label}
              </Link>
            ) : (
              <span className={onDark ? "text-white/90" : "text-dark font-medium"}>{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
