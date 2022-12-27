import React, { FunctionComponent } from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import styles from "./startPageHero.module.scss";
import { Button } from "../button";

interface Props {
  year: string;
  winner: string;
}

export const StartPageHero: FunctionComponent<Props> = ({ year, winner }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <Image src={logo} />
        </div>
        <h1>VÅR TOUR</h1>
        <p>Sedan 1994</p>
        {year && <Button label={`Vinnare ${year} - ${winner}`} />}
      </div>
    </div>
  );
};
