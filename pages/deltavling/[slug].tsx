import { NextPage } from "next";
import Image from "next/image";
import { urlFor } from "..";
import {
  getAllCompetitionsPaths,
  getCompetition,
} from "../../data/competitions";
import { getAllPlayersPaths, getPlayer } from "../../data/players";
import { Competition, Player, SlugParams } from "../../types";

interface Props {
  competition: Competition;
}

const Competition: NextPage<Props> = ({ competition }) => {
  console.log("competition", competition);
  const imgUrl =
    competition && competition.image
      ? urlFor(competition.image).width(200).url()
      : null;

  return (
    <article>
      <h1>{competition?.name}</h1>
      {imgUrl && (
        <div style={{ position: "relative", width: "200px", height: "300px" }}>
          <Image src={imgUrl} layout="fill" objectFit="cover" />
        </div>
      )}
    </article>
  );
};

export default Competition;

export async function getStaticPaths() {
  return {
    paths: await getAllCompetitionsPaths(),
    fallback: true,
  };
}

export const getStaticProps = async ({ params }: SlugParams) => {
  const { slug = "" } = params;
  const competition = await getCompetition(slug);

  return {
    props: {
      competition,
    },
  };
};
