export default {
  name: "content",
  title: "Innehåll",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Namn",
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
      title: "name",
    },
  },
};
