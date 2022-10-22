import { NextPage } from "next";
import Image from "next/image";
import { urlFor } from "..";
import { getAllYearsPaths, getYear } from "../../data/years";
import { SlugParams, Year } from "../../types";

interface Props {
  year: Year;
}

const Year: NextPage<Props> = ({ year }) => {
  console.log("year", year);

  return (
    <article>
      <h1>{year.slug.current}</h1>
      <p>{year.location}</p>
    </article>
  );
};

export default Year;

export async function getStaticPaths() {
  return {
    paths: await getAllYearsPaths(),
    fallback: true,
  };
}

export const getStaticProps = async ({ params }: SlugParams) => {
  const { slug = "" } = params;
  const year = await getYear(slug);

  return {
    props: {
      year,
    },
  };
};
