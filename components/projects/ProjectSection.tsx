import classNames from "classnames";
import React, { ReactNode } from "react";
import ParallaxDiv, { ParallaxDivProps } from "../animations/ParallaxDiv";
import SimpleDivider from "../separators/SimpleDivider";
import Slider, { SliderProps } from "../sliders/Slider";
import styles from "./ProjectSection.module.scss";

type Props = {
  title: ReactNode;
  invert?: boolean;
} & SliderProps;

const ProjectSection = ({
  children,
  title,
  invert,
  images,
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
            "row gx-xl-2",
            invert && "direction-xl-row-reverse"
          )}
        >
          <div className={classNames("col col-xl-6 pb-3 pt-xl-3")}>
            <h2
              className={classNames(
                "font-size-3 font-size-md-2",
                invert ? "text-xl-left" : "text-xl-right"
              )}
            >
              {title}
            </h2>
            {/* <Image src={imageSrc} alt={imageAlt} placeholder="blur" /> */}
            <Slider images={images} />
          </div>

          <div className="col-xl-1 display-none display-xl-flex justify-content-center">
            <SimpleDivider direction="vertical" />
          </div>

          <div
            className={classNames(
              "col-xl-5 pt-xl-3 display-flex align-items-center"
            )}
          >
            <div className={styles["content"]}>{children}</div>
          </div>
        </div>
      </ParallaxDiv>
    </div>
  );
};

export default ProjectSection;
