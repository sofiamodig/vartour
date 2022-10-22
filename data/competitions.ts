import { groq } from "next-sanity";
import { client } from "../pages";

export const getAllCompetitionsPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "competition" && defined(slug.current)][].slug.current`
  );

  return paths.map((slug: string) => ({ params: { slug } }));
};

export const getAllCompetitions = async () => {
  const players = await client.fetch(`*[_type == "competition"]`);
  return players;
};

export const getCompetition = async (slug: string) => {
  const query = groq`*[_type == "competition" && slug.current == $slug][0]`;

  const player = await client.fetch(query, { slug });
  return player;
};
