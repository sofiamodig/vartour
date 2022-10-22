import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { getAllPlayers } from "../data/players";
import { getAllYears } from "../data/years";
import { Player, Winners, Year } from "../types";

interface Props {
  years: Year[];
  players: Player[];
}

const Years: NextPage<Props> = ({ years, players }) => {
  const varTourRef = "e955edeb-eefc-4be9-8116-2e99680840f2";

  const findWinner = (winners: Winners[]) => {
    const winnerRef = winners.find((obj) => obj.competition._ref === varTourRef)
      ?.winner._ref;

    const winner = players?.find((player) => player._id === winnerRef);
    console.log("findWinner", findWinner);
    if (winner) {
      return winner.name;
    }

    return "";
  };

  return (
    <div>
      {years.map((year) => (
        <Link
          key={year.slug.current}
          href={"/year/" + year.slug.current}
          shallow
        >
          <button style={{ background: "lime", padding: "20px" }}>
            {year.slug.current}
            <span>{year.location}</span>
            <span>Vinnare: {findWinner(year.winners)}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Years;

export async function getStaticProps() {
  const years = await getAllYears();
  const players = await getAllPlayers();

  return {
    props: {
      years,
      players,
    },
  };
}
