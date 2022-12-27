import { groq } from "next-sanity";
import { client } from "../pages";

export const getAllGalleries = async () => {
  const galleries = await client.fetch(`*[_type == "gallery"]`);
  return galleries;
};

export const getPlayer = async (slug: string) => {
  const query = groq`*[_type == "player" && slug.current == $slug][0]`;

  const player = await client.fetch(query, { slug });
  return player;
};

export const getLargeGallery = async () => {
  const gallery = await client.fetch(
    `*[_type == "gallery" && _id == "a8fceea5-b687-4f4e-9f62-c1b93cabfdcd"][0]`
  );
  return gallery;
};

export const getStartPageGallery = async () => {
  const gallery = await client.fetch(
    `*[_type == "gallery" && _id == "654147e8-5c43-4673-9814-0e08f3800b1b"][0]`
  );
  return gallery;
};
