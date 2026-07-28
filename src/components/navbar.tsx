"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { CloseIcon } from "@/components/icons";
import Button from "@/components/button";

import { CustomLinkProps } from "@/lib/types";

import favIcon from "../../public/favicon.ico";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const CustomLink = ({ children, href }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={
        pathname === href
          ? "font-bold border-b-3 border-sage-green mx-2 lg:mx-4"
          : "hover:border-b-3 hover:border-sage-green font-medium mx-2 lg:mx-4"
      }
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-surface font-josefin-sans border-b border-cool-grey">
      {({ open }) => (
        <>
          <div className="px-5 lg:px-0 py-6 lg:mx-40">
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
                    <span className="text-dark capitalize">
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
                    <Button href="/contact" variant="solid" size="sm">
                      book a consultation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile menu button — uses outer Disclosure */}
              <div className="flex md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center text-dark">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <span aria-hidden="true">
                      <CloseIcon size={20} />
                    </span>
                  ) : (
                    <span aria-hidden="true" className="flex flex-col gap-1.5">
                      <span className="block w-5 h-0.5 bg-current" />
                      <span className="block w-5 h-0.5 bg-current" />
                      <span className="block w-5 h-0.5 bg-current" />
                    </span>
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu panel — uses outer Disclosure */}
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-5 pb-4 pt-2 flex flex-col">
              {navigation.map((item) => (
                <CustomLink key={item.name} href={item.href}>
                  {item.name}
                </CustomLink>
              ))}
              <div className="mt-3 self-start">
                <Button href="/contact" variant="solid" size="sm">
                  book a consultation
                </Button>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
