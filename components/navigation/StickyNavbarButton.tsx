import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getTop } from "../helpers";
import useIsClientSide from "../hooks/useIsClientSide";
import styles from "./StickyNavbarButton.module.scss";

type Props = LinkProps & {
  end?: string;
  start?: string;
};

const StickyNavbarButton = ({
  children,
  end,
  start,
  ...rest
}: React.PropsWithChildren<Props>) => {
  const isClient = useIsClientSide();
  const [isActive, setIsActive] = useState(false);

  const startElement = useMemo<HTMLElement | null>(
    () =>
      isClient && start ? document.querySelector<HTMLElement>(start) : null,
    [isClient, start]
  );
  const endElement = useMemo<HTMLElement | null>(
    () => (isClient && end ? document.querySelector<HTMLElement>(end) : null),
    [isClient, end]
  );

  const handleScroll = useCallback(() => {
    if (startElement && endElement) {
      const scrollY = window.scrollY;
      const offset = window.innerHeight / 2;
      const start = getTop(startElement) - offset;
      const end = getTop(endElement) - offset;

      if (scrollY >= start && scrollY < end) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
  }, [startElement, endElement]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Link {...rest}>
      <a className={classNames(styles["button"], isActive && styles["active"])}>
        <div className={styles["line"]}></div>
        <span> {children}</span>
      </a>
    </Link>
  );
};

export default StickyNavbarButton;
