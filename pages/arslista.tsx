import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Row from "../components/row";
import Section from "../components/section";
import { getAllPlayers } from "../data/players";
import { getAllYears } from "../data/years";
import { Player, Winners, Year } from "../types";
import styles from "./arslista.module.scss";

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

    if (winner) {
      return winner.name;
    }

    return "";
  };

  return (
    <div>
      <Row>
        <h1>Årslista</h1>
      </Row>
      <Section>
        <Row>
          <div className={styles.row}>
            {years.map((year) => (
              <Link
                key={year.slug.current}
                href={"/year/" + year.slug.current}
                shallow
              >
                <button className={styles.yearButton}>
                  {year.slug.current}
                  <span>{year.location}</span>
                  <span>Vinnare: {findWinner(year.winners)}</span>
                </button>
              </Link>
            ))}
          </div>
        </Row>
      </Section>
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
