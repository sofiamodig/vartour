import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { getAllCompetitions } from "../data/competitions";
import { Competition } from "../types";

interface Props {
  competitions: Competition[];
}

const Competitions: NextPage<Props> = ({ competitions }) => {
  console.log("competitions", competitions);

  return (
    <div>
      {competitions.map((competition: any) => (
        <p key={competition.slug.current}>
          <Link href={"/deltavling/" + competition.slug.current} shallow>
            <a>{competition.name}</a>
          </Link>
        </p>
      ))}
    </div>
  );
};

export default Competitions;

export async function getStaticProps() {
  const competitions = await getAllCompetitions();

  return {
    props: {
      competitions,
    },
  };
}
