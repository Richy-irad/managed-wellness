import { ThListIcon } from "@sanity/icons/ThList";
import { defineField, defineType } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "document",
  icon: ThListIcon,
  fields: [
    defineField({
      name: "serviceLabel",
      title: "Service Label",
      type: "string",
      description:
        "The label for the service associated with this pricing plan.",
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      to: { type: "service" },
      description: "Related service for this pricing plan.",
    }),
    defineField({
      name: "priceKES",
      title: "Price (KES)",
      type: "number",
      description: "The price of the service in Kenyan Shillings (KES).",
    }),
    defineField({
      name: "sessionDuration",
      title: "Session Duration",
      type: "number",
      description:
        "The duration of the session for this pricing plan (in minutes).",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of the pricing plan.",
    }),
    defineField({
      name: "packageSessions",
      title: "Package Sessions",
      type: "number",
      description: "Number of sessions included if this plan is offered as a package deal.",
    }),
    defineField({
      name: "packagePriceKES",
      title: "Package Price (KES)",
      type: "number",
      description: "Total price in KES for the package deal.",
    }),
  ],
  preview: {
    select: {
      title: "serviceLabel",
      subtitle: "priceKES",
    },
  },
});
