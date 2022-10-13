import { Canvas } from "@react-three/fiber";
import React from "react";
import { NoToneMapping } from "three";
import TerrainContent from "./TerrainContent";
import { terrainTotalSize } from "./terrainConstants";
import { PerformanceMonitor } from "@react-three/drei";
import { useInView } from "react-intersection-observer";

const TerrainCanvas = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { ref, inView } = useInView();
  const frameloop = inView ? "demand" : "never";

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
      frameloop={frameloop}
      {...props}
      ref={ref}
    >
      <PerformanceMonitor>
        <TerrainContent />
      </PerformanceMonitor>
    </Canvas>
  );
};

export default TerrainCanvas;
