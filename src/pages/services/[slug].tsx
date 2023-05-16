import React, { FC } from "react";
import Head from "next/head";
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
      <Head>
        <meta name="description" content={service.metaDescription} />
        <meta
          name="keywords"
          content="Mental health, Counseling, Therapy, Trauma counseling, Trauma counseling, Sex and gender-based violence counseling, Loss and grief counseling, Couples therapy, Sex therapy, Pre-marital counseling, Coping skills, Communication skills, Emotional intimacy, Sexual health, Intimacy issues, Trauma recovery, Post-traumatic stress disorder (PTSD), Grief support, Relationship satisfaction, Mental health awareness, Healthy relationships"
        />
        <title>{`${service.service} | Managed Wellness`}</title>
        <meta
          property="og:title"
          content={`${service.service} | Managed Wellness`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar />

      <main className="font-josefin-sans">
        {/* services section */}
        <div className="flex gap-x-32 items-start px-5 lg:mx-40 py-20">
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
      </main>

      <Footer />
    </>
  );
};

export default Service;
