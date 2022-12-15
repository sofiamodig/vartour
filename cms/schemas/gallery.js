export default {
  name: "gallery",
  type: "document",
  title: "Galleri",
  fields: [
    {
      name: "gallery_name",
      title: "Gallerinamn",
      type: "string",
      readOnly: ({ document }) => document?.gallery_name,
    },
    {
      name: "images",
      type: "array",
      title: "Bilder",
      of: [
        {
          name: "image",
          type: "image",
          title: "Bild",
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      gallery_name: "gallery_name",
      images: "images",
      image: "images.0",
    },
    prepare(selection) {
      const { gallery_name, images, image } = selection;

      return {
        title: `${gallery_name + " - " + Object.keys(images).length} images`,
        media: image,
      };
    },
  },
};
