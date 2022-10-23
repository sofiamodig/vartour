import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from ".";
import Row from "../components/row";
import Section from "../components/section";
import { getAllPlayers } from "../data/players";
import { Player } from "../types";
import styles from "./deltagare.module.scss";

interface Props {
  players: Player[];
}

const Players: NextPage<Props> = ({ players }) => {
  console.log("players", players);

  const boardMembers = [...players].filter((player) => player.board_member);

  return (
    <>
      <Row>
        <h1>Deltagare</h1>
      </Row>
      <Section>
        <Row>
          <h2>Styrelsen</h2>
          <div className={styles.players}>
            {boardMembers.map((player) => {
              const imageUrl = urlFor(player.image).url();

              return (
                <Link href={"/deltagare/" + player.slug.current} shallow>
                  <div key={player.slug.current} className={styles.playerCard}>
                    <Image src={imageUrl} layout="fill" objectFit="cover" />
                    <span>{player.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>Spelare</h2>
          <div className={styles.players}>
            {players.map((player) => {
              const imageUrl = urlFor(player.image).url();

              return (
                <Link href={"/deltagare/" + player.slug.current} shallow>
                  <div key={player.slug.current} className={styles.playerCard}>
                    <Image src={imageUrl} layout="fill" objectFit="cover" />
                    <span>{player.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Row>
      </Section>
    </>
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
