import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { getAllPlayers } from "../data/players";

interface Props {
  players: any;
}

const Players: NextPage<Props> = ({ players }) => {
  console.log("players", players);

  return (
    <div>
      {players.map((player: any) => (
        <p key={player.slug.current}>
          <Link href={"/deltagare/" + player.slug.current} shallow>
            <a>{player.name}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Players;

export async function getStaticProps() {
  const players = await getAllPlayers();

  return {
    props: {
      players,
    },
  };
}
