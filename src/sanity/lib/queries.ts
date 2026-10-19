import { defineQuery } from "next-sanity";

export const STATS_QUERY = defineQuery(`*[_type == "stats"][0]{items}`);

const SERVICE_PROJECTION = `{
  service,
  "slug": slug.current,
  metaDescription,
  description,
  beneficiaries,
  benefits[]->{"title": benefit, description}
}`;

export const SERVICES_QUERY = defineQuery(
  `*[_type == "service"]${SERVICE_PROJECTION}`,
);

export const SERVICE_BY_SLUG_QUERY = defineQuery(
  `*[_type == "service" && slug.current == $slug][0]${SERVICE_PROJECTION}`,
);

export const SERVICE_SLUGS_QUERY = defineQuery(
  `*[_type == "service"]{"slug": slug.current}`,
);

export const PRICING_QUERY = defineQuery(`*[_type == "pricing"]{
  "id": _id,
  serviceLabel,
  "serviceSlug": service->slug.current,
  priceKES,
  "sessionDurationMinutes": sessionDuration,
  description,
  packageSessions,
  packagePriceKES
}`);
