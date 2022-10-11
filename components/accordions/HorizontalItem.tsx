import classNames from "classnames";
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
  title?: React.ReactNode | undefined;
};

const HorizontalItem = ({
  id,
  children,
  title,
}: React.PropsWithChildren<Props>) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { activeTab, openTab } = useContext(accordionContext);
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
          minHeight: height ? `${height}px` : undefined,
        } as CSSProperties
      }
    >
      <button
        className={classNames(styles["button"], styles["padding"])}
        onClick={handleOpen}
        disabled={active}
      >
        <span className={styles["title-wrapper"]}>{title}</span>
      </button>

      <div
        className={classNames(styles["content-wrapper"], styles["padding"])}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalItem;
