import classNames from "classnames";
import React from "react";
import styles from "./ListGroup.module.scss";

type Props = {
  className?: string;
};

const ListGroup = ({ children, className }: React.PropsWithChildren<Props>) => {
  const classes = classNames(styles["wrapper"], className);

  return <div className={classes}>{children}</div>;
};

export default ListGroup;
