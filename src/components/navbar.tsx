"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import Button from "@/components/button";

import { CustomLinkProps } from "@/lib/types";

import favIcon from "../../public/favicon.ico";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const CustomLink = ({ children, href }: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={
        isActive
          ? "rounded-full px-4 py-2 text-sm font-semibold bg-white text-dark"
          : "rounded-full px-4 py-2 text-sm font-medium bg-white/10 text-white/80 hover:bg-white hover:text-dark transition-colors"
      }
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav className="relative font-josefin-sans border-b border-dashed border-white/25">
      <div className="container py-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="shrink-0">
              <Link
                href="/"
                className="font-bold text-xl flex gap-x-2 items-center lg:text-2xl"
              >
                <Image
                  src={favIcon}
                  width={40}
                  height={40}
                  alt=""
                  className="rounded-sm-full"
                />
                <span className="text-white capitalize">
                  Managed Wellness Centre
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-x-2">
              {navigation.map((item) => (
                <CustomLink key={item.name} href={item.href}>
                  {item.name}
                </CustomLink>
              ))}
              <div className="ml-4">
                <Button href="/contact" variant="solid" size="sm" onDark>
                  book a consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu trigger — opens the drawer below */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex items-center justify-center text-white"
            >
              <span className="sr-only">Open main menu</span>
              <span aria-hidden="true" className="flex flex-col gap-1.5">
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-5 h-0.5 bg-current" />
                <span className="block w-5 h-0.5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <Dialog
        open={mobileOpen}
        onClose={setMobileOpen}
        className="relative z-50 md:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition-opacity duration-300 data-closed:opacity-0"
        />
        <div className="fixed inset-0 flex justify-end pointer-events-none">
          <DialogPanel
            transition
            className="pointer-events-auto w-[85%] h-full bg-primary rounded-tl-3xl flex flex-col gap-y-1 p-6 overflow-y-auto transition duration-300 ease-out data-closed:translate-x-full"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-white"
              >
                <span className="sr-only">Close menu</span>
                <X size={22} />
              </button>
            </div>
            {navigation.map((item) => (
              <CustomLink key={item.name} href={item.href}>
                {item.name}
              </CustomLink>
            ))}
            <div className="mt-3 self-start">
              <Button href="/contact" variant="solid" size="sm" onDark>
                book a consultation
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </nav>
  );
}
