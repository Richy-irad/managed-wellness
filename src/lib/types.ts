import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

// custom types
export type BenefitType = {
  title: string;
  description: string;
};

export type ServiceType = {
  service: string;
  slug: string;
  description: string;
  benefits: BenefitType[];
};

export interface ServiceProps {
  service: ServiceType;
  background?: string;
}

export type CustomLinkProps = {
  children: ReactNode;
  href: Url;
};

export interface IndexProps {
  services: ServiceType[];
}

export interface ServicesProps {
  services: ServiceType[];
}
