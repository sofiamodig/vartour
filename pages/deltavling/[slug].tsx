import { NextPage } from "next";
import Image from "next/image";
import { urlFor } from "..";
import Row from "../../components/row";
import Section from "../../components/section";
import {
  getAllCompetitionsPaths,
  getCompetition,
} from "../../data/competitions";
import { getAllPlayersPaths, getPlayer } from "../../data/players";
import { Competition, Player, SlugParams } from "../../types";
import { PortableText } from "@portabletext/react";
import { PageHero } from "../../components/heros/pageHero";
import styles from "./deltavling.module.scss";

interface Props {
  competition: Competition;
}

const Competition: NextPage<Props> = ({ competition }) => {
  const imgUrl =
    competition && competition.image
      ? urlFor(competition.image).width(200).url()
      : null;

  const heroImageUrl =
    competition && competition.image
      ? urlFor(competition.hero_image).width(2000).url()
      : null;

  if (!heroImageUrl || !imgUrl) {
    return null;
  }

  return (
    <article>
      <PageHero
        title={competition.name}
        subTitle="Deltävling"
        image={heroImageUrl}
      />
      <Section>
        <Row maxWidth="800px">
          <div className={styles.rowWrapper}>
            <div className={styles.imageWrapper}>
              {imgUrl && (
                <Image
                  src={imgUrl}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="0 0"
                />
              )}
            </div>
            <div className={styles.text}>
              <label className="above-title">Deltävling</label>
              <h2>{competition.name.toUpperCase()}</h2>
              <PortableText value={competition.description} />
            </div>
          </div>
        </Row>
      </Section>
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
