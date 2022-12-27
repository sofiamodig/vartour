import Image from "next/image";
import React, { FunctionComponent } from "react";
import styles from "./pageHero.module.scss";

interface Props {
  title: string;
  subTitle: string;
  image: string;
}

export const PageHero: FunctionComponent<Props> = ({
  title,
  subTitle,
  image,
}) => {
  return (
    <div
      className={styles.heroWrapper}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.innerWrapper}>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};
