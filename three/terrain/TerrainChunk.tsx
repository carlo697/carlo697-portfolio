import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { Clock, Vector3 } from "three";
import FinalTerrain from "./FinalTerrain";
import PlaneAssemble from "./PlaneAssemble";
import { TerrainChunkProps } from "./TerrainChunkProps";
import { finalTerrainTime } from "./terrainConstants";

const TerrainChunk = ({
  position = new Vector3(),
  size = 100,
  timeOffset = 0,
}: TerrainChunkProps) => {
  const [stage, setStage] = useState(0);
  const clock = React.useRef<Clock>(new Clock());

  useFrame(() => {
    const time = clock.current.getElapsedTime();

    if (time > finalTerrainTime + timeOffset && stage === 0) {
      setStage(1);
    }
  });

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        position={[position.x + size / 2, position.y, position.z + size / 2]}
        visible={false}
      >
        <boxGeometry args={[size, 0.1, size]} />
        <meshStandardMaterial />
      </mesh>

      {stage === 0 && (
        <PlaneAssemble
          position={position}
          size={size}
          timeOffset={timeOffset}
        />
      )}
      {stage === 1 && <FinalTerrain position={position} size={size} />}
    </>
  );
};

export default TerrainChunk;
