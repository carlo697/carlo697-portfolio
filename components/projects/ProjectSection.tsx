import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import React, { ReactNode } from "react";
import ParallaxDiv, {
  easeOutSine,
  ParallaxDivProps,
} from "../animations/ParallaxDiv";
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
  const wrapperParallax: ParallaxDivProps = {
    viewportStart: 0.8,
    viewportEnd: 0.2,
    useInternalDiv: true,
    className: styles["wrapper"],
    startClassname: styles["start"],
    endClassname: styles["end"],
  };

  return (
    <div className="pb-6">
      <ParallaxDiv {...wrapperParallax}>
        <div
          className={classNames(
            "row gx-md-2",
            invert && "direction-md-row-reverse"
          )}
        >
          {invert && <div className={classNames("col-md-1")}></div>}

          <div className={classNames("col-md-5 pb-3")}>
            <h2
              className={classNames(
                "font-size-3",
                invert ? "text-md-left" : "text-md-right"
              )}
            >
              {title}
            </h2>
            <Image src={imageSrc} alt={imageAlt} />
          </div>

          <div className="col-md-1 display-flex justify-content-center">
            <SimpleDivider direction="vertical" />
          </div>

          <div className={classNames("col-md-5")}>
            <h2
              className={classNames("font-size-3")}
              style={{ visibility: "hidden" }}
            >
              {title}
            </h2>
            {children}
          </div>
        </div>
      </ParallaxDiv>
    </div>
  );
};

export default ProjectSection;
