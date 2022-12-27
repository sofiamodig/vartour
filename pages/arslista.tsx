import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PageHero } from "../components/heros/pageHero";
import Row from "../components/row";
import Section from "../components/section";
import { getAllPlayers } from "../data/players";
import { getAllYears } from "../data/years";
import { Player, Winners, Year } from "../types";
import img from "../images/45.jpg";
import styles from "./arslista.module.scss";
import { varTourRef } from "./_app";

interface Props {
  years: Year[];
  players: Player[];
}

const Years: NextPage<Props> = ({ years, players }) => {
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
      <PageHero
        title="Årslista"
        subTitle="Lista på alla år sedan 1994"
        image={img.src}
      />
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
