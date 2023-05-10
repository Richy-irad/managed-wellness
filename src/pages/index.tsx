import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import heroImage from "../../public/assets/hero-image.jpg";

import { getMinServices } from "@/lib/services";
import { IndexProps } from "@/lib/types";

import Service from "@/components/service";

export const getStaticProps = async () => {
  const services = getMinServices();

  return {
    props: {
      services,
    },
  };
};

const Home: FC<IndexProps> = ({ services }) => {
  return (
    <>
      <Navbar />
      <main className="font-josefin-sans">
        {/* hero section */}
        <div className="bg-sage-green/30">
          <div className="lg:container lg:mx-auto">
            <div className="flex gap-x-16 items-center lg:px-20 h-[698px] pt-16 pb-32">
              <div className="basis-1/2 flex flex-col gap-y-11 items-start">
                <h1 className="text-6xl font-bold text-black">
                  Experience the difference of authentic, empathetic care.
                </h1>

                <Link
                  href="/services"
                  className="bg-light-blue text-deep-blue font-semibold px-4 py-5 rounded-md"
                >
                  Browse our Services
                </Link>
              </div>
              <div className="basis-1/2 h-full">
                <Image
                  src={heroImage}
                  priority
                  alt=""
                  className="w-full h-full object-cover object-top rounded-tl-[259px] rounded-tr-[98px] rounded-bl-[259px] rounded-br-[250px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* services section */}
        <div className="bg-white">
          <div className="lg:container lg:mx-auto">
            <div className="flex gap-x-32 items-start lg:px-20 py-20">
              <div className="basis-1/2">
                <div className="flex flex-col gap-y-8 w-96">
                  <h1 className="text-6xl font-bold text-black">
                    Our Services
                  </h1>
                  <p className="text-dark font-lg">
                    Empowering Individuals with Autism: Discover Our
                    Comprehensive Lifestyle Services and Packages!
                  </p>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col gap-y-12 items-start">
                {services.map((service) => (
                  <Service
                    key={service.service}
                    service={service}
                    background="white"
                  />
                ))}
                <Link
                  href="/services"
                  className="bg-light-blue text-deep-blue font-semibold px-4 py-5 rounded-md"
                >
                  View all Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
