export default {
  name: "content",
  title: "Content",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
