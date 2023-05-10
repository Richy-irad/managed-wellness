import Link from "next/link";
import { InstagramLogo, FacebookLogo, Copyright } from "@phosphor-icons/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-sage-green/30 font-josefin-sans text-dark">
      <div className="lg:container lg:mx-auto">
        <div className="px-5 lg:px-0 py-6 lg:mx-20">
          <div className="flex gap-x-6 justify-start lg:justify-between mb-10">
            {/* sitemap */}
            <div className="basis-full md:basis-1/2 lg:basis-1/4 flex gap-x-12">
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
              <Link href="#" className="hover:text-black">
                <FacebookLogo size={32} />
              </Link>
              <Link href="#" className="hover:text-black">
                <InstagramLogo size={32} />
              </Link>
            </div>
          </div>

          <hr className="my-8" />

          {/* copyright */}
          <div className="flex gap-0.5 items-center">
            <Copyright size={20} /> Managed Wellness. All rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
