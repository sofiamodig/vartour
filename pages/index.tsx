import type { NextPage } from "next";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Section from "../components/section";
import Row from "../components/row";

export const client = createClient({
  projectId: "p2jab1yc",
  dataset: "production",
  apiVersion: "2022-10-21",
  useCdn: false,
});

export const imgBuilder = imageUrlBuilder({
  projectId: "p2jab1yc",
  dataset: "production",
});

export function urlFor(source: any) {
  return imgBuilder.image(source);
}

const Home: NextPage = () => {
  return (
    <Section>
      <Row>HEM</Row>
    </Section>
  );
};

export default Home;
