import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import ParallaxDiv from "../animations/ParallaxDiv";
import SimpleDivider from "../separators/SimpleDivider";
import styles from "./ProjectSection.module.scss";

type Props = {
  title: ReactNode;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  invert?: boolean;
};

const ProjectSection = ({
  children,
  title,
  imageSrc,
  imageAlt,
  invert,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      className={classNames(
        "row pb-6 gx-md-2",
        invert && "direction-md-row-reverse"
      )}
    >
      {invert && <div className={classNames("col-md-1")}></div>}

      <div className={classNames("col-md-5 pb-3")}>
        <ParallaxDiv>
          <div className={styles["parallax"]}>
            <h2
              className={classNames(
                "font-size-3",
                invert ? "text-md-left" : "text-md-right"
              )}
            >
              {title}
            </h2>
          </div>
        </ParallaxDiv>

        <ParallaxDiv>
          <div className={styles["parallax"]}>
            <Image src={imageSrc} alt={imageAlt} />
          </div>
        </ParallaxDiv>
      </div>

      <div className="col-md-1 display-flex justify-content-center">
        <SimpleDivider direction="vertical" />
      </div>

      <div className={classNames("col-md-5")}>
        <ParallaxDiv>
          <div className={styles["parallax"]}>{children}</div>{" "}
        </ParallaxDiv>
      </div>
    </div>
  );
};

export default ProjectSection;
