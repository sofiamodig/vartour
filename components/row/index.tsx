import React, { FunctionComponent, ReactNode } from "react";
import styles from "./row.module.scss";
import cx from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
  maxWidth?: string;
}

const Row: FunctionComponent<Props> = ({
  children,
  className,
  maxWidth = "1120px",
}) => {
  return (
    <div
      className={cx(styles.wrapper, className)}
      style={{ maxWidth: maxWidth }}
    >
      {children}
    </div>
  );
};

export default Row;
