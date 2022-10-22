import { groq } from "next-sanity";
import { client } from "../pages";

export const getAllYearsPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "years" && defined(slug.current)][].slug.current`
  );

  return paths.map((slug: string) => ({ params: { slug } }));
};

export const getAllYears = async () => {
  const years = await client.fetch(`*[_type == "years"]`);
  return years;
};

export const getYear = async (slug: string) => {
  const query = groq`*[_type == "years" && slug.current == $slug][0]`;

  const year = await client.fetch(query, { slug });
  return year;
};
