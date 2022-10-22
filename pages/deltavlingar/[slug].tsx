import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { FunctionComponent, useEffect, useState } from "react";
import { client, urlFor } from "..";

interface Props {
  competition: any;
}

const Competition: FunctionComponent<Props> = ({ competition }) => {
  console.log("player", competition);

  // const imgUrl = null;
  const imgUrl =
    competition && competition.image
      ? urlFor(competition.image).width(200).url()
      : null;

  return (
    <article>
      <h1>{competition?.name}</h1>
      {imgUrl && (
        <div style={{ position: "relative", width: "200px", height: "300px" }}>
          <Image src={imgUrl} layout="fill" objectFit="cover" />
        </div>
      )}
    </article>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "player" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;

  console.log("slug", slug);
  const competition = await client.fetch(
    `*[_type == "competition" && slug.current == ${slug}][0]`,
    { slug }
  );

  return {
    props: {
      competition,
    },
  };
}

export default Competition;
