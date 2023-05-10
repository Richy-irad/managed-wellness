import React, { FC } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { getAllServicesSlugs, getService } from "@/lib/services";
import { ServiceProps } from "@/lib/types";
import { ParsedUrlQuery } from "querystring";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

// getStaticPaths
export const getStaticPaths = async () => {
  const paths = getAllServicesSlugs();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const service = getService(slug);

  return {
    props: {
      service,
    },
  };
};

const Service: FC<ServiceProps> = ({ service }): JSX.Element => {
  return (
    <>
      <Navbar />

      <main className="font-josefin-sans">
        {/* services section */}
        <div className="lg:container lg:mx-auto">
          <div className="flex gap-x-32 items-start lg:px-20 py-20">
            <div className="basis-full lg:basis-6/12 mx-auto">
              <div className="flex flex-col gap-y-8">
                <h1 className="text-5xl font-bold">{service.service}</h1>
                <p className="text-dark text-justify font-lg">
                  {service.description}
                </p>
                <div className="flex flex-col gap-y-6">
                  <h4 className="text-2xl text-dark font-regular">Benefits</h4>
                  <div className="flex flex-col gap-3 flex-wrap">
                    {service.benefits.map((benefit) => (
                      <p key={benefit.title} className="text-dark text-lg">
                        <span className="font-bold text-deep-blue">
                          {benefit.title}:{" "}
                        </span>
                        {benefit.description}
                      </p>
                    ))}
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

export default Service;
