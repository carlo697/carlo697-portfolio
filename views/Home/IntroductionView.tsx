import classNames from "classnames";
import styles from "./IntroductionView.module.scss";
import ParallaxDiv from "../../components/animations/ParallaxDiv";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../../components/Loader";

const TerrainCanvas = dynamic(
  () => import("../../three/terrain/TerrainCanvas"),
  { suspense: true }
);

const IntroductionView = () => {
  return (
    <section className={classNames(styles["terrain-section"], "pb-5")}>
      <ParallaxDiv startPosition={0} viewportStart={0} viewportEnd={0}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center mb-0 pt-2 pt-md-4 font-size-2 font-size-md-1">
                Carlos Peña
              </h1>
            </div>
          </div>

          <div className="position-relative">
            <div className="row pb-md-6 pb-lg-2">
              <div className="col-12 col-md-10">
                <div className={styles["terrain-canvas-parent"]}>
                  <Suspense fallback={<Loader />}>
                    <TerrainCanvas
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Suspense>
                </div>
              </div>
            </div>

            <div className="position-md-absolute bottom-md-0 right-md-0 width-md-50">
              <div className="text-center text-md-right font-weight-light">
                <p className="font-size-4 mb-1">
                  ¡Presione y arrastre el mapa para girarlo!
                </p>
                <p className="font-size-5 color-light-gray">
                  Este modelo es generado, animado y renderizado de forma
                  procedimental (procedural) en tiempo real usando JavaScript y{" "}
                  <a
                    href="https://threejs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Three.js
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxDiv>
    </section>
  );
};

export default IntroductionView;
