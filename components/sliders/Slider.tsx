import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import styles from "./Slider.module.scss";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import classNames from "classnames";

export type SliderImage = {
  src: string | StaticImageData;
  alt: string;
};

export type SliderProps = {
  images: Array<SliderImage>;
};

const Slider = ({ images }: React.PropsWithoutRef<SliderProps>) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const setIndex = (index: number) => {
    if (index > images.length - 1) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  const enableButtons = images.length > 1;

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["slides-wrapper"]}>
        {images.map(({ src, alt }, index) => {
          const className =
            index < currentSlide
              ? styles["slide-left"]
              : index > currentSlide
              ? styles["slide-right"]
              : styles["slide-active"];

          return (
            <div
              className={classNames(styles["img-wrapper"], className)}
              key={index}
            >
              <Image
                src={src}
                alt={alt}
                placeholder="blur"
                className="hola"
                objectFit="contain"
              />
            </div>
          );
        })}
      </div>

      {enableButtons && (
        <div className={styles["second-row"]}>
          <button
            className={styles["arrow-button"]}
            onClick={() => setIndex(currentSlide - 1)}
          >
            <BsChevronCompactLeft />
          </button>

          <div className={styles["previews"]}>
            {images.map(({ src, alt }, index) => {
              return (
                <button
                  className={classNames(
                    styles["img-preview-wrapper"],
                    index === currentSlide && styles["active"]
                  )}
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                >
                  <Image
                    src={src}
                    alt={alt}
                    placeholder="blur"
                    objectFit="cover"
                  />
                </button>
              );
            })}
          </div>

          <button
            className={styles["arrow-button"]}
            onClick={() => setIndex(currentSlide + 1)}
          >
            <BsChevronCompactRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slider;
