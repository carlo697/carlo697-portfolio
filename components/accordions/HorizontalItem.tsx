import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import React, {
  CSSProperties,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { accordionContext } from "./HorizontalAccordion";
import styles from "./HorizontalItem.module.scss";

type Props = {
  id: string;
  title?: React.ReactNode;
  backgroundSrc?: string | StaticImageData;
  backgroundPosition?: string;
};

const HorizontalItem = ({
  id,
  children,
  title,
  backgroundSrc,
  backgroundPosition = "center center",
}: React.PropsWithChildren<Props>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { activeTab, openTab, minHeight } = useContext(accordionContext);
  const active = activeTab === id;
  const [height, setHeight] = useState(0);

  const handleOpen = () => {
    if (contentRef.current) {
      updateHeight();
      openTab(id);
    }
  };

  // Update the height
  const updateHeight = useCallback(() => {
    if (contentRef.current && height !== contentRef.current.offsetHeight) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [height]);

  // Call onResize on window resize event
  useEffect(() => {
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [updateHeight]);

  // Update height on first render
  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  return (
    <div
      className={classNames(styles["wrapper"], active && styles["active"])}
      style={
        {
          minHeight: `${Math.max(height || 0, minHeight || 0)}px`,
        } as CSSProperties
      }
    >
      {backgroundSrc && (
        <div className={styles["background"]}>
          <Image
            src={backgroundSrc}
            layout="fill"
            alt="background"
            objectFit="cover"
            objectPosition={backgroundPosition}
            placeholder="blur"
          />
        </div>
      )}

      <button
        className={classNames(styles["button"], styles["padding"])}
        onClick={handleOpen}
        disabled={active}
      >
        <span className={styles["title-wrapper"]}>{title}</span>
      </button>

      <div className={classNames(styles["content-wrapper"])}>
        <div
          className={classNames(styles["content"], styles["padding"])}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HorizontalItem;
