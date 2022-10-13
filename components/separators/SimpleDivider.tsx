import classNames from "classnames";
import React from "react";
import styles from "./SimpleDivider.module.scss";

type Props = {
  containerClassName?: string;
  dividerClassName?: string;
  direction?: "vertical" | "horizontal";
  useContainer?: boolean;
};

const SimpleDivider = ({
  containerClassName,
  dividerClassName,
  direction = "horizontal",
  useContainer = false,
}: Props) => {
  const containerClasses = classNames("container", containerClassName);
  const dividirClasses = classNames(
    styles["base"],
    direction === "horizontal" ? styles["horizontal"] : styles["vertical"],
    dividerClassName
  );

  const content = <div className={dividirClasses}></div>;

  return (
    <>
      {useContainer ? (
        <div className={containerClasses}>{content}</div>
      ) : (
        content
      )}
    </>
  );
};

export default SimpleDivider;
