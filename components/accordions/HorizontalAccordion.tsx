import React, {
  createContext,
  CSSProperties,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./HorizontalAccordion.module.scss";

type Props = {};

type AccordionState = {
  activeTab?: string | null | undefined;
  activeHeight?: number | null | undefined;
  openTab: (id: string) => void | null;
} & Props;

export const accordionContext = createContext<AccordionState>(
  {} as AccordionState
);

const AccordionProvider = accordionContext.Provider;

const HorizontalAccordion = ({ children }: React.PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (ref.current) {
      setWidth(ref.current.offsetWidth);
    }
  }, []);

  // Call onResize on window resize event
  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [updateWidth]);

  // Call onResize on first frame
  useEffect(() => {
    updateWidth();
  }, [updateWidth]);

  const openTab = (id: string) => {
    setActiveTab(id);
  };

  return (
    <AccordionProvider value={{ activeTab: activeTab, openTab }}>
      <div
        className={styles["wrapper"]}
        ref={ref}
        style={
          {
            "--width": `${width}px`,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </AccordionProvider>
  );
};

export default HorizontalAccordion;
