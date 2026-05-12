import Link from "next/link";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  FacebookLogoIcon,
  TiktokLogoIcon,
  CopyrightIcon,
} from "@phosphor-icons/react/dist/ssr";
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
    <footer className="bg-sage-green/30 font-josefin-sans text-dark">
      <div className="px-5 lg:px-0 py-12 lg:mx-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand + Socials */}
          <div className="flex flex-col gap-y-5">
            <p className="font-bold text-lg capitalize">Managed Wellness Centre</p>
            <p className="text-sm text-warm-grey leading-relaxed">
              Evidence-based mental health services — in-person &amp; virtual. Nairobi, Kenya.
            </p>
            <div className="flex gap-x-4 items-center text-dark">
              <Link href="https://twitter.com/ManagedWellness" className="hover:text-black" aria-label="Twitter">
                <TwitterLogoIcon size={24} />
              </Link>
              <Link href="https://www.instagram.com/managed_wellness/" className="hover:text-black" aria-label="Instagram">
                <InstagramLogoIcon size={24} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100093634478554" className="hover:text-black" aria-label="Facebook">
                <FacebookLogoIcon size={24} />
              </Link>
              <Link href="https://www.tiktok.com/@managedwellness" className="hover:text-black" aria-label="TikTok">
                <TiktokLogoIcon size={24} />
              </Link>
            </div>
          </div>

          {/* Col 2 — Nav group 1 */}
          <div className="flex flex-col gap-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-warm-grey mb-1">Explore</p>
            {navCol1.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm hover:text-black transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Col 3 — Nav group 2 */}
          <div className="flex flex-col gap-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-warm-grey mb-1">More</p>
            {navCol2.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm hover:text-black transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Col 4 — Address + Hours + Newsletter */}
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-1">
              <p className="text-xs font-bold tracking-widest uppercase text-warm-grey">Address</p>
              <p className="text-sm text-warm-grey">[Address to be provided]</p>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="text-xs font-bold tracking-widest uppercase text-warm-grey">Hours</p>
              <p className="text-sm text-warm-grey">[Business hours to be provided]</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-xs font-bold tracking-widest uppercase text-warm-grey">Newsletter</p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cool-grey flex gap-1 items-center text-sm text-warm-grey">
          <CopyrightIcon size={16} />
          <span>{new Date().getFullYear()} Managed Wellness Centre. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
