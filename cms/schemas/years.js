export default {
  name: "years",
  title: "År",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "År",
      type: "slug",
    },
    {
      name: "location",
      title: "Plats",
      type: "string",
    },
    {
      name: "start_date",
      title: "Startdatum",
      type: "date",
    },
    {
      name: "end_date",
      title: "Slutdatum",
      type: "date",
    },
    {
      name: "image_of_winner",
      title: "Bild på vinnaren",
      type: "image",
    },
    {
      name: "winners",
      title: "Vinnare",
      type: "array",
      of: [
        {
          name: "winners",
          title: "Vinnare",
          type: "object",
          fields: [
            {
              title: "Tävling",
              name: "competition",
              type: "reference",
              to: [{ type: "competition" }],
            },
            {
              title: "Vinnare",
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
      title: "Bilder",
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
      title: "År",
      name: "slug",
      by: [{ field: "slug.current", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "slug.current",
    },
  },
};
