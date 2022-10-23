export default {
  name: "player",
  title: "Players",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "board_member",
      title: "Is a board member",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
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
