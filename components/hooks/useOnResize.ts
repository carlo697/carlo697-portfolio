import { useEffect } from "react";

const useOnResize = (func: () => void) => {
  useEffect(() => {
    func();
    window.addEventListener("resize", func);

    return () => {
      window.removeEventListener("resize", func);
    };
  }, [func]);
};

export default useOnResize;
