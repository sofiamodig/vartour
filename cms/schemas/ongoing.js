export default {
  name: "ongoing",
  title: "Aktuellt",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Innehåll",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
