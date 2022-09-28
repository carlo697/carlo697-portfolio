import { Canvas } from "@react-three/fiber";
import React from "react";
import { NoToneMapping } from "three";
import styles from "../../styles/Home.module.css";
import TerrainContent from "./TerrainContent";
import { terrainTotalSize } from "./terrainConstants";
import { PerformanceMonitor } from "@react-three/drei";

const TerrainCanvas = () => {
  return (
    <div className={styles["terrain-canvas"]}>
      <Canvas
        camera={{
          position: [-terrainTotalSize, 200, terrainTotalSize],
          near: 1,
          far: 1000,
          fov: 30,
        }}
        shadows
        style={{ backgroundColor: "transparent" }}
        gl={{ antialias: false, toneMapping: NoToneMapping }}
        frameloop="demand"
      >
        <PerformanceMonitor>
          <TerrainContent />
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
};

export default TerrainCanvas;
