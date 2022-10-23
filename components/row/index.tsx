import React, { FunctionComponent, ReactNode } from "react";
import styles from "./row.module.scss";
import cx from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

const Row: FunctionComponent<Props> = ({ children, className }) => {
  return <div className={cx(styles.wrapper, className)}>{children}</div>;
};

export default Row;
