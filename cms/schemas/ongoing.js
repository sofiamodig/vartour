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
    {
      name: "location",
      title: "Plats",
      type: "blockContent",
    },
    {
      name: "dates",
      title: "När",
      type: "blockContent",
    },
    {
      name: "startTimes",
      title: "Starttider",
      type: "blockContent",
    },
    {
      name: "price",
      title: "Pris",
      type: "blockContent",
    },
    {
      name: "more",
      title: "Övrigt",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
