import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ListIcon, XIcon } from "@phosphor-icons/react";

import { CustomLinkProps } from "@/lib/types";

import favIcon from "../../public/favicon.ico";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const CustomLink = ({ children, href }: CustomLinkProps) => {
  const router = useRouter();

  const handleClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    router.push(href);
  };

  return (
    <>
      <Link
        href={href}
        onClick={handleClick}
        className={classNames(
          router.asPath === href
            ? "font-bold border-b-3 border-sage-green"
            : "hover:border-b-3 hover:border-sage-green font-medium",
          "mx-2 lg:mx-4"
        )}
        legacyBehavior>
        {children}
      </Link>
    </>
  );
};

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-muted-yellow font-josefin-sans">
      {({ open }) => (
        <>
          <div className="px-5 lg:px-0 py-6 lg:mx-40">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center justify-between w-full">
                <div className="shrink-0">
                  <Link
                    href="/"
                    className="font-bold text-xl flex gap-x-2 items-center lg:text-2xl"
                    legacyBehavior>
                    <Image
                      src={favIcon}
                      width={40}
                      height={40}
                      alt=""
                      className="rounded-sm-full"
                    />
                    <span className="text-black capitalize">
                      Managed Wellness Centre
                    </span>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center gap-x-4">
                    {navigation.map((item) => (
                      <CustomLink key={item.name} href={item.href}>
                        {item.name}
                      </CustomLink>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure>
                  <DisclosureButton className="inline-flex items-center justify-center text-black">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <ListIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </Disclosure>
              </div>
            </div>
          </div>

          <Disclosure>
            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 flex flex-col">
                {navigation.map((item) => (
                  <CustomLink key={item.name} href={item.href}>
                    {item.name}
                  </CustomLink>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        </>
      )}
    </Disclosure>
  );
}
