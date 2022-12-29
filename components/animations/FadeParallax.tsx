import React from "react";
import ParallaxDiv from "./ParallaxDiv";
import styles from "./FadeParallax.module.scss";

const FadeParallax = ({ children }: React.PropsWithChildren) => {
  return (
    <ParallaxDiv
      viewportStart={0.75}
      viewportEnd={0.2}
      useInternalDiv={true}
      className={styles["wrapper"]}
      startClassname={"parallax-start"}
      endClassname={"parallax-end"}
    >
      {children}
    </ParallaxDiv>
  );
};

export default FadeParallax;
