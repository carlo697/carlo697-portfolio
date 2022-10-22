import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  endPosition?: number;
  windowEndPosition?: number;
  defaultPosition?: number;
};

const ParallaxDiv = ({
  children,
  style,
  endPosition = 0,
  windowEndPosition = 1,
  defaultPosition = 0,
  ...rest
}: React.PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(defaultPosition);
  const [halfParallax, setHalfParallax] = useState(defaultPosition);
  const [invertedParallax, setInvertedParallax] = useState(1 - defaultPosition);
  const [halfInvertedParallax, setHalfInvertedParallax] = useState(
    1 - defaultPosition
  );

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const windowHeight = window.innerHeight * windowEndPosition;
      const windowTop = window.scrollY;
      const windowBottom = windowTop + windowHeight;
      const divHeight = ref.current.offsetHeight;
      const divTop = ref.current.offsetTop;

      const extra = divHeight * endPosition;

      let parallax: number;
      if (windowBottom > divTop) {
        parallax = (windowBottom - divTop) / (windowHeight + extra);
      } else {
        parallax = 0;
      }
      parallax = Math.min(parallax, 1);

      const halfParallax = Math.min(parallax, 0.5) * 2;

      setParallax(parallax);
      setHalfParallax(halfParallax);
      setInvertedParallax(1 - parallax);
      setHalfInvertedParallax(1 - halfParallax);
    }
  }, [endPosition, windowEndPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={ref}
      {...rest}
      style={
        {
          ...style,
          "--parallax": `${parallax}`,
          "--half-parallax": `${halfParallax}`,
          "--inverted-parallax": `${invertedParallax}`,
          "--half-inverted-parallax": `${halfInvertedParallax}`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default ParallaxDiv;
