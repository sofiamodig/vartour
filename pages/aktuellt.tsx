import { NextPage } from "next";
import React from "react";
import { getOngoingContent } from "../data/content";
import { PortableText } from "@portabletext/react";
import Row from "../components/row";
import Section from "../components/section";

interface Props {
  content: any;
}

const Aktuellt: NextPage<Props> = ({ content }) => {
  return (
    <Section>
      <Row>
        <PortableText value={content.content} />
      </Row>
    </Section>
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
