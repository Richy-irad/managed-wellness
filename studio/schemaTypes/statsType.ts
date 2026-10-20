import { ChartUpwardIcon } from "@sanity/icons/ChartUpward";
import { defineArrayMember, defineField, defineType } from "sanity";

export const stats = defineType({
  name: "stats",
  title: "Stats",
  type: "document",
  icon: ChartUpwardIcon,
  fields: [
    defineField({
      name: "items",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "statItem",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description:
                'The displayed value, e.g. "8+", "2K+", "98%". Kept as text so prefixes/suffixes are preserved.',
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      items: "items",
    },
    prepare({ items }) {
      return {
        title: "Stats",
        subtitle: `${Array.isArray(items) ? items.length : 0} stat(s)`,
      };
    },
  },
});
