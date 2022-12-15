import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import styles from "./startPageHero.module.scss";

export const StartPageHero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <Image src={logo} />
        </div>
        <h1>VÅR TOUR</h1>
        <p>Sedan 1994</p>
      </div>
    </div>
  );
};
