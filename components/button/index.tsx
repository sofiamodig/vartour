import React, { FunctionComponent } from "react";
import { ArrowIcon } from "../../images/icons/arrow";
import styles from "./button.module.scss";

interface Props {
  label: string;
}

export const Button: FunctionComponent<Props> = ({ label }) => {
  return (
    <div className={styles.button}>
      {label}
      <span>
        <ArrowIcon />
      </span>
    </div>
  );
};
