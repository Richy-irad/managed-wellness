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
        <meta
          name="description"
          content="At Managed Wellness, we are dedicated to providing holistic mental health support that empowers you on your wellness journey. With our expert team and a comprehensive range of services, we are here to guide you towards a healthier, happier, and more fulfilling life. Take the first step today and embark on a path of self-discovery and growth with Managed Wellness."
        />
        <meta
          name="keywords"
          content="Mental health, Counseling, Therapy, Trauma counseling, Trauma counseling, Sex and gender-based violence counseling, Loss and grief counseling, Couples therapy, Sex therapy, Pre-marital counseling, Coping skills, Communication skills, Emotional intimacy, Sexual health, Intimacy issues, Trauma recovery, Post-traumatic stress disorder (PTSD), Grief support, Relationship satisfaction, Mental health awareness, Healthy relationships"
        />
        <title>Services | Managed Wellness</title>
        <meta property="og:title" content="Services | Managed Wellness" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main className="font-josefin-sans">
        {/* services section */}
        <div className="bg-white">
          <div className="flex gap-y-12 lg:gap-x-32 items-start px-5 lg:mx-40 py-20 flex-wrap lg:flex-nowrap">
            <div className="basis-full lg:basis-5/12">
              <div className="flex flex-col gap-y-3 lg:gap-y-8 w-8/12 lg:w-96 items-center lg:items-start mx-auto text-center lg:text-start">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black">
                  Our Services
                </h1>
                <p className="text-dark font-lg">
                  Empowering Individuals with Autism: Discover Our Comprehensive
                  Lifestyle Services and Packages!
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-7/12 flex flex-col gap-y-12 items-center lg:start">
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
      </main>
      <Footer />
    </>
  );
};

export default Services;
