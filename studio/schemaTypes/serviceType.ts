import { PackageIcon } from "@sanity/icons/Package";
import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * This is the schema type for service document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'service',
 *    title: 'Service',
 *    type: 'service'
 *  }  
 */
export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "service",
      title: "Service",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "service",
        maxLength: 96,
      },
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      description:
        "This is the meta description for the service page. It should be a brief summary of the service, and should be no more than 160 characters.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "beneficiaries",
      title: "Beneficiaries",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "benefit" } })],
    }),
  ],
  preview: {
    select: {
      title: "service",
    },
  },
});
