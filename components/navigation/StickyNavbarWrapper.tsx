import classNames from "classnames";
import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./StickyNavbarWrapper.module.scss";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

const StickyNavbarWrapper = ({
  children,
  ...props
}: PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [sticked, setSticked] = useState(false);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const navRect = ref.current.getBoundingClientRect();
      setSticked(navRect.top <= 0);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={classNames(styles["wrapper"], sticked && styles["sticked"])}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};

export default StickyNavbarWrapper;
