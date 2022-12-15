import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { urlFor } from "..";
import Row from "../../components/row";
import Section from "../../components/section";
import { getAllCompetitions } from "../../data/competitions";
import {
  getAllPlayersPaths,
  getPlayer,
  getPlayerYearlyTexts,
} from "../../data/players";
import { getAllYears } from "../../data/years";
import { Competition, Player, SlugParams, Year } from "../../types";
import { PortableText } from "@portabletext/react";

type scoreObjType = { [key in string]: number };

interface Props {
  player: Player;
  years: Year[];
  competitions: Competition[];
  playerYearlyTexts: any;
}

const Player: NextPage<Props> = ({
  player,
  years,
  competitions,
  playerYearlyTexts,
}) => {
  const [score, setScore] = useState<scoreObjType>({});

  const imgUrl =
    player && player.image ? urlFor(player.image).width(200).url() : null;

  useEffect(() => {
    const compScoreObj: scoreObjType = {};
    competitions.map((comp) => {
      compScoreObj[comp._id] = 0;
    });

    years.map((year) => {
      year.winners.map((obj) => {
        if (obj.winner._ref === player._id) {
          compScoreObj[obj.competition._ref] =
            compScoreObj[obj.competition._ref] + 1;
        }
      });
    });

    setScore(compScoreObj);
  }, [competitions]);

  useEffect(() => {}, [playerYearlyTexts]);

  return (
    <article>
      <Section>
        <Row>
          <h1>{player?.name}</h1>
          {imgUrl && (
            <div
              style={{ position: "relative", width: "200px", height: "300px" }}
            >
              <Image src={imgUrl} layout="fill" objectFit="cover" />
            </div>
          )}
          <div>
            {playerYearlyTexts.map((obj) => (
              <div key={obj._id}>
                <p>{obj.year}</p>

                <PortableText value={obj.text} />
              </div>
            ))}
          </div>
        </Row>
        <Row>
          {Object.keys(score).map((key) => {
            const compName = competitions.find(
              (comp) => comp._id === key
            )?.name;
            return (
              <div key={key}>
                <h6>{compName}</h6>
                <p>{score[key]}</p>
              </div>
            );
          })}
        </Row>
      </Section>
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
  const years = await getAllYears();
  const competitions = await getAllCompetitions();
  const playerYearlyTexts = await getPlayerYearlyTexts(player._id);

  return {
    props: {
      player,
      years,
      competitions,
      playerYearlyTexts,
    },
  };
};
