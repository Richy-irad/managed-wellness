import { HeartIcon } from "@sanity/icons/Heart";
import { defineField, defineType } from "sanity";

/**
 * This is the schema type for benefit document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'benefit',
 *    title: 'Benefit',
 *    type: 'benefit'
 *  }
 */

export const benefit = defineType({
  name: "benefit",
  title: "Benefits",
  type: "document",
  icon: HeartIcon,
  fields: [
    defineField({
      name: "benefit",
      title: "Benefit",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "benefit",
    },
  },
});
