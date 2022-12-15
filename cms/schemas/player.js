export default {
  name: "player",
  title: "Spelare",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Namn",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "board_member",
      title: "Är med i styrelsen",
      type: "boolean",
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  initialValue: {
    board_member: false,
  },
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
