import React, { FunctionComponent, ReactNode } from "react";
import styles from "./section.module.scss";

interface Props {
  children: ReactNode;
}

const Section: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Section;
