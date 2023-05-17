import React, { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import heroImage from "../../public/assets/hero-image.jpg";

import { getMinServices } from "@/lib/services";
import { IndexProps } from "@/lib/types";

import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
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
      <Head>
        <meta
          name="description"
          content="Welcome to Managed Wellness, your trusted destination for comprehensive mental health services. We are committed to supporting your well-being and providing the tools and guidance you need to navigate life's challenges."
        />
        <meta
          name="keywords"
          content="Mental health, Counseling, Therapy, Trauma counseling, Trauma counseling, Sex and gender-based violence counseling, Loss and grief counseling, Couples therapy, Sex therapy, Pre-marital counseling, Psychological support"
        />
        <title>Home | Managed Wellness</title>
        <meta property="og:title" content="Home | Managed Wellness" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <main className="font-josefin-sans">
        {/* hero section */}
        <div className="bg-hero-pattern bg-cover bg-black/40 bg-blend-overlay lg:bg-none lg:bg-sage-green/30">
          <div className="flex gap-x-16 items-center pt-16 h-[400px]  lg:mx-40 lg:h-[698px] pb-16 lg:pb-32">
            <div className="basis-full lg:basis-1/2 flex flex-col gap-y-11 items-center lg:items-start px-5">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-light-blue lg:text-black text-center lg:text-start">
                Experience the difference of authentic, empathetic care.
              </h1>

              <Link
                href="/services"
                className="bg-light-blue text-deep-blue font-semibold px-4 py-5 rounded-md"
              >
                Browse our Services
              </Link>
            </div>
            <div className="hidden lg:block basis-1/2 h-full">
              <Image
                src={heroImage}
                priority
                alt=""
                className="w-full h-full object-cover object-top rounded-tl-[259px] rounded-tr-[98px] rounded-bl-[259px] rounded-br-[250px]"
              />
            </div>
          </div>
        </div>

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
            <div className="basis-full lg:basis-7/12 flex flex-col gap-y-12 items-center lg:items-start">
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

        {/* contact */}
        <div className="bg-white">
          <div className="px-5 lg:mx-40 py-20 flex flex-col gap-y-8">
            <h1 className="text-center lg:text-end text-3xl md:text-4xl lg:text-6xl font-bold">
              Get in Touch
            </h1>
            <div className="flex justify-between flex-wrap gap-y-4">
              <div className="basis-full lg:basis-7/12">
                <ContactForm />
              </div>
              <div className="basis-full gap-x-10 gap-y-10 px-7 py-8 items-center justify-center flex flex-col md:flex-row lg:flex-col md:items-start md:justify-start lg:basis-4/12">
                <div className="flex flex-col gap-y-3 items-start lg:items-end text-start lg:text-end w-full">
                  <p className="font-semibold text-3xl">Phone</p>
                  <p className="font-regular text-2xl">+254737965972</p>
                </div>
                <div className="flex flex-col gap-y-3 items-start lg:items-end text-start lg:text-end w-full">
                  <p className="font-semibold text-3xl">E-mail</p>
                  <Link
                    href="mailto:info@managedwellness.com"
                    className="font-regular text-2xl hover:text-sage-green"
                  >
                    info@managedwellness.com
                  </Link>
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

export default Home;
