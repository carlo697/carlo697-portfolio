import classNames from "classnames";
import React, {
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MathUtils } from "three";

// From https://easings.net/
export function easeOutSine(x: number): number {
  return Math.sin((x * Math.PI) / 2);
}
// From https://easings.net/
export function easeInOutSine(x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}
// From https://easings.net/
export function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}
// From https://easings.net/
export function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export type ParallaxDivProps = React.HTMLAttributes<HTMLDivElement> & {
  startPosition?: number;
  endPosition?: number;
  viewportStart?: number;
  viewportEnd?: number;
  defaultPosition?: number;
  func?: (x: number) => number;
  useInternalDiv?: boolean;
  outerClassName?: string;
  startClassname?: string;
  endClassname?: string;
};

const ParallaxDiv = ({
  children,
  style,
  startPosition = 0,
  endPosition = 1,
  viewportStart = 1,
  viewportEnd = 0,
  defaultPosition = 0,
  func = undefined,
  useInternalDiv = false,
  outerClassName = "",
  className = "",
  startClassname = "",
  endClassname = "",
  ...rest
}: React.PropsWithChildren<ParallaxDivProps>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(defaultPosition);
  const [halfParallax, setHalfParallax] = useState(defaultPosition);
  const [invertedParallax, setInvertedParallax] = useState(1 - defaultPosition);
  const [halfInvertedParallax, setHalfInvertedParallax] = useState(
    1 - defaultPosition
  );

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const windowHeight = window.innerHeight;
      const windowTop = window.scrollY;

      const divRect = ref.current.getBoundingClientRect();
      const divHeight = divRect.height;
      const divTop = divRect.top + windowTop;
      const pivotStart = divTop + divHeight * startPosition;
      const pivotEnd = divTop + divHeight * endPosition;

      let parallax: number = MathUtils.mapLinear(
        windowTop,
        pivotStart - windowHeight * viewportStart,
        pivotEnd - windowHeight * viewportEnd,
        0,
        1
      );

      parallax = MathUtils.clamp(parallax, 0, 1);
      if (func) {
        parallax = func(parallax);
      }
      const halfParallax = Math.min(parallax, 0.5) * 2;

      setParallax(parallax);
      setHalfParallax(halfParallax);
      setInvertedParallax(1 - parallax);
      setHalfInvertedParallax(1 - halfParallax);
    }
  }, [startPosition, endPosition, viewportStart, viewportEnd, func]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const finalStyle = (style = {
    ...style,
    "--parallax": `${parallax}`,
    "--half-parallax": `${halfParallax}`,
    "--inverted-parallax": `${invertedParallax}`,
    "--half-inverted-parallax": `${halfInvertedParallax}`,
  } as CSSProperties);

  const finalClass = classNames(
    className,
    parallax > 0 && startClassname,
    parallax === 1 && endClassname
  );

  if (useInternalDiv) {
    return (
      <div ref={ref} style={finalStyle} {...rest} className={outerClassName}>
        <div className={finalClass}>{children}</div>
      </div>
    );
  }

  return (
    <div ref={ref} style={finalStyle} className={finalClass} {...rest}>
      {children}
    </div>
  );
};

export default ParallaxDiv;
