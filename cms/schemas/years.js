export default {
  name: "years",
  title: "Years",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Year",
      type: "string",
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
      type: "object",
      fields: [
        {
          title: "Vår tour",
          name: "var_tour",
          type: "reference",
          to: [{ type: "player" }],
        },
        {
          title: "Nitty Gritty",
          name: "nitty_gritty",
          type: "reference",
          to: [{ type: "player" }],
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
  preview: {
    select: {
      title: "name",
    },
  },
};
