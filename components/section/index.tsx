import React, { FunctionComponent, ReactNode } from "react";
import styles from "./section.module.scss";

interface Props {
  children: ReactNode;
  padding?: "normal" | "small" | "none";
  background?: "white" | "transparent";
}

const Section: FunctionComponent<Props> = ({
  children,
  padding = "normal",
  background = "transparent",
}) => {
  let paddingStyle = styles.normal;

  if (padding === "small") {
    paddingStyle = styles.small;
  } else if (padding === "none") {
    paddingStyle = styles.none;
  }

  return (
    <div
      className={styles.wrapper + " " + paddingStyle}
      style={{ background: background }}
    >
      {children}
    </div>
  );
};

export default Section;
