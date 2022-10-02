import { Canvas, Props } from "@react-three/fiber";
import React from "react";
import { NoToneMapping } from "three";
import TerrainContent from "./TerrainContent";
import { terrainTotalSize } from "./terrainConstants";
import { PerformanceMonitor } from "@react-three/drei";

const TerrainCanvas = (
  props: React.HTMLAttributes<HTMLDivElement>
) => {
  return (
    <Canvas
      camera={{
        position: [-terrainTotalSize, 200, terrainTotalSize],
        near: 1,
        far: 1000,
        fov: 30,
      }}
      shadows
      gl={{ antialias: false, toneMapping: NoToneMapping }}
      frameloop="demand"
      {...props}
    >
      <PerformanceMonitor>
        <TerrainContent />
      </PerformanceMonitor>
    </Canvas>
  );
};

export default TerrainCanvas;
