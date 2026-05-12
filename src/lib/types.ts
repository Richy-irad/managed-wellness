import { ReactNode } from "react";

export type BenefitType = {
  title: string;
  description: string;
};

export type MessageType = {
  title: string;
  description: string;
};

export type ServiceType = {
  service: string;
  slug: string;
  description: string;
  beneficiaries: string[];
  benefits: BenefitType[];
  metaDescription?: string;
};

export interface ServiceProps {
  service: ServiceType;
  background?: string;
}

export type CustomLinkProps = {
  children: ReactNode;
  href: string;
};

export interface IndexProps {
  services: ServiceType[];
}

export interface ServicesProps {
  services: ServiceType[];
}

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
};

export type TeamMember = {
  slug: string;
  name: string;
  title: string;
  credentials: string;
  specialisations: string[];
  bio: string;
  photoUrl: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  clientName: string;
  clientContext?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  serviceSlug?: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category?: string;
};

export type PricingEntry = {
  id: string;
  serviceLabel: string;
  serviceSlug?: string;
  priceKES: number;
  sessionDurationMinutes: number;
  description?: string;
  packageSessions?: number;
  packagePriceKES?: number;
};
