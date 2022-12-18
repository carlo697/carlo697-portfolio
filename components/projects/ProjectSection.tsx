import classNames from "classnames";
import React, { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import ParallaxDiv, { ParallaxDivProps } from "../animations/ParallaxDiv";
import SimpleDivider from "../separators/SimpleDivider";
import Slider, { SliderProps } from "../sliders/Slider";
import styles from "./ProjectSection.module.scss";

type Props = {
  title: ReactNode;
  invert?: boolean;
  websiteUrl?: string;
  sourceCodeUrl?: string;
} & SliderProps;

const ProjectSection = ({
  children,
  title,
  invert,
  images,
  websiteUrl,
  sourceCodeUrl,
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
    <div
      className={classNames(
        "pt-5 pb-5",
        invert && "background-black",
        styles["parent"]
      )}
    >
      <div className="container">
        <ParallaxDiv {...wrapperParallax}>
          <div
            className={classNames(
              "row gx-xl-2",
              invert && "direction-xl-row-reverse"
            )}
          >
            <div className="col-12 display-xl-none">
              <h2 className="text-center">{title}</h2>
            </div>

            <div
              className={classNames(
                "col-12 col-xl-6 pb-3 pb-xl-0 pt-xl-0",
                styles["slider-parent"]
              )}
            >
              <Slider images={images} />
            </div>

            <ParallaxDiv
              {...{
                useInternalDiv: true,
                outerClassName: classNames(
                  "col-12 col-xl-6 display-flex align-items-center"
                ),
                className: styles["text-parallax"],
              }}
            >
              <div
                className={classNames(
                  "font-size-md-5 py-xl-4",
                  styles["content"],
                  invert ? "pr-xl-5 " : "pl-xl-5 "
                )}
              >
                <h2 className="display-none display-xl-block font-size-2 text-left mb-3">
                  {title}
                </h2>

                <SimpleDivider dividerClassName="mb-3" />

                {children}

                {(websiteUrl || sourceCodeUrl) && (
                  <div className={classNames("btn-group pt-3 pt-md-4")}>
                    {websiteUrl && (
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={classNames(
                          "btn btn-primary btn-icon-right",
                          styles["button"]
                        )}
                      >
                        ¡Visitar! <HiCursorClick />
                      </a>
                    )}

                    {sourceCodeUrl && (
                      <a
                        href={sourceCodeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={classNames(
                          "btn btn-dark btn-icon-right",
                          styles["button"]
                        )}
                      >
                        Código <FaGithub />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </ParallaxDiv>
          </div>
        </ParallaxDiv>
      </div>
    </div>
  );
};

export default ProjectSection;
