import React, { FC } from "react";
import Link from "next/link";
import { ServiceProps } from "@/lib/types";

const Service: FC<ServiceProps> = ({ service }): JSX.Element => {
  return (
    <div
      key={service.service}
      className="bg-dull-yellow px-7 py-8 rounded-md flex flex-col gap-y-6 lg:gap-y-12"
    >
      <div className="flex justify-between items-center">
        <h3 className="basis-9/12 text-dark text-xl lg:text-3xl font-medium">
          {service.service}
        </h3>
        <Link
          href={`/services/${service.slug}`}
          className="basis-3/12 text-deep-blue text-lg font-bold underline underline-offset-4"
        >
          Service details
        </Link>
      </div>
      <div className="flex flex-col gap-y-8">
        <p className="text-base text-dark text-start lg:text-justify lg:text-lg">{service.description}</p>
        <div className="flex flex-col gap-y-6">
          <h4 className="text-lg lg:text-2xl text-black font-regular">Benefits</h4>
          <div className="flex gap-4 flex-wrap">
            {service.benefits.map((benefit) => (
              <span
                key={benefit.title}
                className="bg-deep-blue text-white text-sm font-semibold text-center p-2.5 rounded-md"
              >
                {benefit.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
