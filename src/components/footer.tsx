import Link from "next/link";
import { InstagramLogo, TwitterLogo, FacebookLogo, Copyright } from "@phosphor-icons/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-sage-green/30 font-josefin-sans text-dark">
      <div className="px-5 lg:px-0 py-6 lg:mx-40">
        <div className="flex gap-x-6 gap-y-6 justify-start md:justify-between mb-10 flex-wrap">
          {/* sitemap */}
          <div className="flex gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark hover:text-black font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* socials */}
          <div className="flex gap-x-6 items-center text-dark">
            <Link
              href="https://twitter.com/ManagedWellness"
              className="hover:text-black"
            >
              <TwitterLogo size={32} />
            </Link>
            <Link
              href="https://www.instagram.com/managed_wellness/"
              className="hover:text-black"
            >
              <InstagramLogo size={32} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100093634478554"
              className="hover:text-black"
            >
              <FacebookLogo size={32} />
            </Link>
          </div>
        </div>

        {/* copyright */}
        <div className="flex gap-0.5 items-start lg:items-center">
          <Copyright size={20} /> Managed Wellness Centre. All rights Reserved
        </div>
      </div>
    </footer>
  );
}
