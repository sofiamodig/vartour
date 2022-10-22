import { NextPage } from "next";
import Image from "next/image";
import { urlFor } from "..";
import { getAllPlayersPaths, getPlayer } from "../../data/players";
import { Player, SlugParams } from "../../types";

interface Props {
  player: Player;
}

const Player: NextPage<Props> = ({ player }) => {
  const imgUrl =
    player && player.image ? urlFor(player.image).width(200).url() : null;

  return (
    <article>
      <h1>{player?.name}</h1>
      {imgUrl && (
        <div style={{ position: "relative", width: "200px", height: "300px" }}>
          <Image src={imgUrl} layout="fill" objectFit="cover" />
        </div>
      )}
    </article>
  );
};

export default Player;

export async function getStaticPaths() {
  return {
    paths: await getAllPlayersPaths(),
    fallback: true,
  };
}

export const getStaticProps = async ({ params }: SlugParams) => {
  const { slug = "" } = params;
  const player = await getPlayer(slug);

  return {
    props: {
      player,
    },
  };
};
