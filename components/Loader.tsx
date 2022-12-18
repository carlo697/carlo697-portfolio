import classNames from "classnames";
import React from "react";
import styles from "./Loader.module.scss";

type Props = {
  className?: string;
};

const Loader = ({ className }: Props) => {
  return (
    <div
      className={classNames(
        "display-flex justify-content-center align-items-center height-100",
        className
      )}
    >
      <div className={styles["lds-dual-ring"]}></div>
    </div>
  );
};

export default Loader;
