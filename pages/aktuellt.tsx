import { NextPage } from "next";
import React from "react";
import { getOngoingContent } from "../data/content";
import { PortableText } from "@portabletext/react";
import Row from "../components/row";
import Section from "../components/section";
import { PageHero } from "../components/heros/pageHero";
import { urlFor } from ".";
import styles from "./aktuellt.module.scss";
import Link from "next/link";
import { Button } from "../components/button";

interface Props {
  content: any;
}

const Aktuellt: NextPage<Props> = ({ content }) => {
  const heroImage = urlFor(content.image).url();

  console.log("content", content);

  return (
    <>
      <PageHero
        image={heroImage}
        title="Aktuellt"
        subTitle="Var lirar vi nästa gång?"
      />
      <Section>
        <Row maxWidth="736px">
          <label className="above-title">Aktuellt</label>
          <h2>{content.title}</h2>
          <div className={styles.text}>
            <PortableText value={content.content} />
          </div>
        </Row>
        <Row maxWidth="736px">
          <table className={styles.table}>
            <tr>
              <td>Plats:</td>
              <td>
                <PortableText value={content.location} />
              </td>
            </tr>
            <tr>
              <td>När:</td>
              <td>
                <PortableText value={content.dates} />
              </td>
            </tr>
            <tr>
              <td>Starttider:</td>
              <td>
                <PortableText value={content.startTimes} />
              </td>
            </tr>
            <tr>
              <td>Pris:</td>
              <td>
                <PortableText value={content.price} />
              </td>
            </tr>
            <tr>
              <td>Övrigt:</td>
              <td>
                <PortableText value={content.more} />
              </td>
            </tr>
          </table>
        </Row>
      </Section>
      <Section background="white">
        <Row>
          <div className="center-text">
            <label className="above-title">Kontakt</label>
            <h2>Har du frågor eller funderingar?</h2>
            <Link href="">
              <Button label="Kontakta oss" />
            </Link>
          </div>
        </Row>
      </Section>
    </>
  );
};

export default Aktuellt;

export async function getStaticProps() {
  const content = await getOngoingContent();

  return {
    props: {
      content,
    },
  };
}
