import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="font-josefin-sans min-h-screen flex flex-col items-center justify-center bg-concrete px-5 text-center gap-y-8">
      <div className="flex flex-col items-center gap-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-warm-grey">
          404 — Page Not Found
        </span>
        <h1 className="text-4xl font-bold text-dark">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-lg text-warm-grey max-w-md">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-deep-blue text-white font-semibold rounded-sm hover:bg-deep-blue/90 transition-colors"
        >
          Back to Home
        </Link>
        <Link
          href="/services"
          className="px-6 py-3 border border-deep-blue text-deep-blue font-semibold rounded-sm hover:bg-deep-blue/5 transition-colors"
        >
          Browse Services
        </Link>
      </div>
    </main>
  );
}
