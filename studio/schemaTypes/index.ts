import { type SchemaTypeDefinition } from "sanity";

import { benefit } from "./benefitType";
import { blockContent } from "./blockContentType";
import { category } from "./categoryType";
import { post } from "./postType";
import { author } from "./authorType";
import { service } from "./serviceType";
import { team } from "./teamType";
import { pricing } from "./pricingType";
import { testimonial } from "./testimonialType";
import { stats } from "./statsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    benefit,
    blockContent,
    category,
    post,
    author,
    service,
    team,
    pricing,
    testimonial,
    stats,
  ],
};
