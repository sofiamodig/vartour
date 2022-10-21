import { NextPage } from "next";
import React from "react";
import { client } from ".";

interface Props {
  players: any;
}

const Players: NextPage<Props> = ({ players }) => {
  console.log("players", players);

  return <div>Players</div>;
};

export default Players;

export async function getStaticProps() {
  const players = await client.fetch(`*[_type == "player"]`);

  return {
    props: {
      players,
    },
  };
}
