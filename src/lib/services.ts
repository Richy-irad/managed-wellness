import { sanityFetch } from "@/sanity/lib/live";
import { client } from "@/sanity/lib/client";
import {
  SERVICES_QUERY,
  SERVICE_BY_SLUG_QUERY,
  SERVICE_SLUGS_QUERY,
} from "@/sanity/lib/queries";
import type { ServiceType } from "@/lib/types";

export const getService = async (
  slug: string | undefined,
): Promise<{ slug: string | undefined } & Partial<ServiceType>> => {
  const { data: service } = await sanityFetch({
    query: SERVICE_BY_SLUG_QUERY,
    params: { slug: slug ?? "" },
  });

  return {
    slug,
    ...(service as Partial<ServiceType> | null),
  };
};

export const getAllServices = async (): Promise<ServiceType[]> => {
  const { data } = await sanityFetch({ query: SERVICES_QUERY });
  return data as ServiceType[];
};

export const getMinServices = async (): Promise<ServiceType[]> => {
  const services = await getAllServices();
  return services.slice(0, 3);
};

// Uses the plain client (not the live-wrapped sanityFetch): generateStaticParams
// runs at build time, outside request scope, where draftMode()/sanityFetch can't be called.
export const getServiceParams = async (): Promise<{ slug: string }[]> => {
  return client.fetch(SERVICE_SLUGS_QUERY);
};
