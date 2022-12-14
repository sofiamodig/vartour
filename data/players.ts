import { groq } from "next-sanity";
import { client } from "../pages";

export const getAllPlayersPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "player" && defined(slug.current)][].slug.current`
  );

  return paths.map((slug: string) => ({ params: { slug } }));
};

export const getAllPlayers = async () => {
  const players = await client.fetch(`*[_type == "player"] | order(name desc)`);
  return players;
};

export const getPlayer = async (slug: string) => {
  const query = groq`*[_type == "player" && slug.current == $slug][0]`;

  const player = await client.fetch(query, { slug });
  return player;
};
export const getPlayerYearlyTexts = async (player: string) => {
  const query = groq`*[_type == "playerYearlyText" && player._ref == $player]`;

  const texts = await client.fetch(query, { player });
  return texts;
};
