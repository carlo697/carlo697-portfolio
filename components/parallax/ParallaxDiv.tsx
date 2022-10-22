import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {};

const ParallaxDiv = ({
  children,
  style,
  ...rest
}: React.PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);
  const [halfParallax, setHalfParallax] = useState(0);
  const [invertedParallax, setInvertedParallax] = useState(0);
  const [halfInvertedParallax, setHalfInvertedParallax] = useState(0);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const windowHeight = window.innerHeight;
      const windowTop = window.scrollY;
      const windowBottom = windowTop + windowHeight;
      const divHeight = ref.current.offsetHeight;
      const divTop = ref.current.offsetTop;
      const divBottom = divTop + divHeight;

      let parallax: number;
      if (windowTop > divBottom) {
        parallax = 1;
      } else if (windowBottom > divTop) {
        parallax = (windowBottom - divTop) / (windowHeight + divHeight);
      } else {
        parallax = 0;
      }

      const halfParallax = Math.min(parallax, 0.5) * 2;

      setParallax(parallax);
      setHalfParallax(halfParallax);
      setInvertedParallax(1 - parallax);
      setHalfInvertedParallax(1 - halfParallax);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

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
