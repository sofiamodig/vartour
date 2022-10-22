export default {
  name: "years",
  title: "Years",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "Year",
      type: "slug",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "start_date",
      title: "Start date",
      type: "date",
    },
    {
      name: "end_date",
      title: "End date",
      type: "date",
    },
    {
      name: "image_of_winner",
      title: "Image of the winner",
      type: "image",
    },
    {
      name: "winners",
      title: "Winners",
      type: "array",
      of: [
        {
          name: "winners",
          title: "Winners",
          type: "object",
          fields: [
            {
              title: "Competition",
              name: "competition",
              type: "reference",
              to: [{ type: "competition" }],
            },
            {
              title: "Winner",
              name: "winner",
              type: "reference",
              to: [{ type: "player" }],
            },
          ],
          preview: {
            select: {
              title: "competition.name",
            },
          },
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Year",
      name: "year",
      by: [{ field: "slug", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "slug.current",
    },
  },
};
