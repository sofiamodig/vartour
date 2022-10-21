export default {
  name: "gallery",
  type: "document",
  title: "Gallery",
  fields: [
    {
      name: "gallery_name",
      title: "Gallery name",
      type: "string",
      readOnly: ({ document }) => document?.gallery_name,
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
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
