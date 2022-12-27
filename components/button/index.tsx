import React, { FunctionComponent } from "react";
import { ArrowIcon } from "../../images/icons/arrow";
import styles from "./button.module.scss";

interface Props {
  label: string;
}

export const Button: FunctionComponent<Props> = ({ label }) => {
  return (
    <button className={styles.button}>
      <div className={styles.buttonInner}>
        <span>{label}</span>
        <span className={styles.arrow}>
          <ArrowIcon />
        </span>
      </div>
    </button>
  );
};
