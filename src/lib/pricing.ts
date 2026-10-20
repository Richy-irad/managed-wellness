import { sanityFetch } from "@/sanity/lib/live";
import { PRICING_QUERY } from "@/sanity/lib/queries";
import type { PricingEntry } from "@/lib/types";

export const getAllPricing = async (): Promise<PricingEntry[]> => {
  const { data } = await sanityFetch({ query: PRICING_QUERY });
  return data as PricingEntry[];
};
