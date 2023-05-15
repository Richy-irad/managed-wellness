import React, { FC } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Service from "@/components/service";

import { getAllServices } from "@/lib/services";
import { ServicesProps } from "@/lib/types";

export const getStaticProps = async () => {
  const services = getAllServices();

  return {
    props: {
      services,
    },
  };
};

const Services: FC<ServicesProps> = ({ services }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Services | Managed Wellness</title>
      </Head>
      <Navbar />
      <main className="font-josefin-sans">
        {/* services section */}
        <div className="bg-white">
          <div className="lg:container lg:mx-auto">
            <div className="flex gap-x-32 justify-between items-start lg:px-20 py-20">
              <div className="basis-4/12">
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
              <div className="basis-7/12">
                <div className="basis-1/2 flex flex-col gap-y-12">
                  {services.map((service) => (
                    <Service
                      key={service.service}
                      service={service}
                      background="white"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Services;
