import React, { FC } from "react";
import Head from "next/head";
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
      <Head>
        <title>Managed Wellness| Home</title>
      </Head>
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
              <div className="basis-full lg:basis-5/12">
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
              <div className="basis-full lg:basis-7/12 flex flex-col gap-y-12 items-start">
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

        {/* contact */}
        <div className="bg-white">
          <div className="lg:container lg:mx-auto">
            <div className="lg:px-20 py-20 flex flex-col gap-y-8">
              <h1 className="text-start lg:text-end text-5xl">Get in Touch</h1>
              <div className="flex justify-between">
                <div className="basis-7/12">
                  <form className="flex flex-col gap-y-8 items-start">
                    <div className="flex flex-col gap-y-6 w-full">
                      {/* first and last names */}
                      <div className="flex gap-x-6">
                        <div className="basis-1/2 space-y-3">
                          <label htmlFor="firstName" className="block">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                            name="firstName"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="basis-1/2 space-y-3">
                          <label htmlFor="lastName" className="block">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                            name="lastName"
                            placeholder="First Name"
                          />
                        </div>
                      </div>

                      {/* email */}
                      <div className="space-y-3">
                        <label htmlFor="email ">Email</label>
                        <input
                          type="email"
                          className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                          name="email"
                          placeholder="e.g. john.doe@example.com"
                        />
                      </div>

                      {/* subject */}
                      <div className="space-y-3">
                        <label htmlFor="subject ">Subject</label>
                        <input
                          type="text"
                          className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>

                      {/* message */}
                      <div className="space-y-3">
                        <label htmlFor="message ">Message</label>
                        <textarea
                          className="border-0.5 border-light rounded-md block w-full px-2.5 py-3.5"
                          name="message"
                          rows={4}
                          placeholder="Write your message here"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="bg-light-blue text-deep-blue font-semibold px-4 py-5 rounded-md"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                <div className="basis-4/12 flex flex-col gap-y-10 px-7 py-8">
                  <div className="flex flex-col gap-y-3 items-start">
                    <p className="font-bold text-3xl">Phone</p>
                    <p className="font-bold text-2xl">+254737965972</p>
                  </div>
                  <div className="flex flex-col gap-y-3 items-start">
                    <p className="font-bold text-3xl">E-mail</p>
                    <Link
                      href="mailto:info@managedwellness.com"
                      className="font-bold text-2xl hover:text-sage-green"
                    >
                      info@managedwellness.com
                    </Link>
                  </div>
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
