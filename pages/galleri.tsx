import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { urlFor } from ".";
import Gallery from "../components/gallery";
import { getLargeGallery } from "../data/gallery";
import { GalleryType } from "../types";

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
    <div>
      <Gallery images={images} />
    </div>
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
