import Link from "next/link";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  TikTokIcon,
} from "@/components/icons";
import NewsletterForm from "@/components/newsletterForm";

const navCol1 = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const navCol2 = [
  { name: "Testimonials", href: "/testimonials" },
  { name: "Community", href: "/community" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQs", href: "/faqs" },
  { name: "Policy", href: "/policy" },
];

export default function Footer() {
  return (
    <footer className="pb-8 lg:pb-12 mt-2 lg:mt-4">
      <div className="container bg-cta-bg rounded-3xl px-6 py-12 lg:px-16 lg:py-16 font-josefin-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand + Socials */}
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-lg text-white capitalize">Managed Wellness Centre</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Evidence-based mental health services — in-person &amp; virtual. Nairobi, Kenya.
            </p>
            <div className="flex gap-x-4 items-center text-white/80">
              <Link href="https://twitter.com/ManagedWellness" className="hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </Link>
              <Link href="https://www.instagram.com/managed_wellness/" className="hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100093634478554" className="hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@managedwellness" className="hover:text-white transition-colors" aria-label="TikTok">
                <TikTokIcon size={20} />
              </Link>
            </div>
          </div>

          {/* Col 2 — Nav group 1 */}
          <div className="flex flex-col gap-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-sage-300 mb-1">Explore</p>
            {navCol1.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Col 3 — Nav group 2 */}
          <div className="flex flex-col gap-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-sage-300 mb-1">More</p>
            {navCol2.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Col 4 — Address + Hours + Newsletter */}
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <p className="text-xs font-bold tracking-widest uppercase text-sage-300">Address</p>
              <p className="text-sm text-white/70">[Address to be provided]</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-xs font-bold tracking-widest uppercase text-sage-300">Hours</p>
              <p className="text-sm text-white/70">[Business hours to be provided]</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-xs font-bold tracking-widest uppercase text-sage-300">Stay in touch</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex gap-1 items-center text-sm text-white/60">
          <span>&copy; {new Date().getFullYear()} Managed Wellness Centre. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
