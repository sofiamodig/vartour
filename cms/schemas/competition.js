export default {
  name: "competition",
  title: "Tävlingar",
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
      name: "hero_image",
      title: "Herobild",
      type: "image",
    },
    {
      name: "image",
      title: "Bild på pokal",
      type: "image",
    },
    {
      name: "description",
      title: "Beskrivning",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
