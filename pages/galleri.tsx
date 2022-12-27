import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { urlFor } from ".";
import Gallery from "../components/gallery";
import { PageHero } from "../components/heros/pageHero";
import Row from "../components/row";
import Section from "../components/section";
import { getLargeGallery } from "../data/gallery";
import { GalleryType } from "../types";
import heroImage from "../images/32.jpg";

interface Props {
  gallery: GalleryType;
}

const GalleryPage: NextPage<Props> = ({ gallery }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const images = gallery.images.map((img) => urlFor(img).url());
    setImages(images);
  }, [gallery]);

  return (
    <>
      <PageHero
        image={heroImage.src}
        title="Galleri"
        subTitle="Bilder genom åren"
      />
      <Section>
        <Row>
          <Gallery images={images} />
        </Row>
      </Section>
    </>
  );
};

export default GalleryPage;

export async function getStaticProps() {
  const gallery = await getLargeGallery();

  return {
    props: {
      gallery,
    },
  };
}
