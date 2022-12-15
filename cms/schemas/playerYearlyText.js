export default {
  name: "playerYearlyText",
  title: "Krönikor",
  type: "document",
  fields: [
    {
      title: "Spelare",
      name: "player",
      type: "reference",
      to: [{ type: "player" }],
    },
    {
      name: "year",
      title: "År",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: "Spelare",
      name: "player",
      by: [{ field: "player.name", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      player: "player.name",
      image: "player.image",
      year: "year",
    },
    prepare(selection) {
      const { player, image, year } = selection;

      return {
        title: `${player + " - " + year}`,
        media: image,
      };
    },
  },
};
