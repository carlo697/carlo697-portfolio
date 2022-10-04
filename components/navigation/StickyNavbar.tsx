import classNames from "classnames";
import React from "react";
import styles from "./StickyNavbar.module.scss";

const StickyNavbar = ({ children }: React.PropsWithChildren) => {
  return <nav className={classNames(styles["wrapper"])}>{children}</nav>;
};

export default StickyNavbar;
