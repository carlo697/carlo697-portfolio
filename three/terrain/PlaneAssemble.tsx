import { useFrame } from "@react-three/fiber";
import React, { RefObject, useMemo, useRef } from "react";
import { InstancedMesh, MathUtils, Object3D, Vector3 } from "three";
import { TerrainChunkProps } from "./TerrainChunkProps";
import {
  assembleTimeDiff,
  assembleTimeEnd,
  assembleTimeStart,
  assembleResolution,
} from "./terrainConstants";

const cellCount = assembleResolution * assembleResolution;

const PlaneAssemble = ({
  position = new Vector3(),
  size = 100,
}: TerrainChunkProps) => {
  const temp = useMemo<Object3D>(() => new Object3D(), []);
  const ref = useRef() as RefObject<InstancedMesh>;
  const clock = React.useRef<number>(0);
  const cellSize = size / assembleResolution;
  const cellOffset = -cellSize / 2;
  const cornerPosition = new Vector3(-cellOffset, 0, cellOffset);

  useFrame((_, delta) => {
    if (ref.current) {
      if (delta < 1) {
        clock.current += delta;
      }
      const time = clock.current;

      // Set positions
      let index = 0;
      for (let x = 0; x < assembleResolution; x++) {
        for (let z = 0; z < assembleResolution; z++) {
          const id = index++;

          // Calculate position
          const finalPosition = new Vector3(
            x * cellSize - cellOffset,
            0,
            z * cellSize - cellOffset
          ).add(position);
          const distanceToCorner = cornerPosition.distanceTo(finalPosition);
          // Map the distance to a time
          const offsetTime = MathUtils.mapLinear(
            distanceToCorner,
            0,
            size * Math.sqrt(2) - cellSize * Math.sqrt(2),
            0,
            assembleTimeDiff
          );
          const startAt = assembleTimeStart;
          const endAt = assembleTimeEnd - assembleTimeDiff;
          const animationTime = MathUtils.clamp(
            time - offsetTime,
            startAt,
            endAt
          );
          finalPosition.y = MathUtils.mapLinear(
            animationTime,
            startAt,
            endAt,
            110,
            0
          );

          // Position
          temp.position.set(finalPosition.x, finalPosition.y, finalPosition.z);
          // Scale
          temp.scale.set(cellSize, cellSize, 1);
          // Rotation
          temp.rotation.x = MathUtils.degToRad(-90);
          // Set matrix
          temp.updateMatrix();
          ref.current.setMatrixAt(id, temp.matrix);
        }
      }

      ref.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <instancedMesh ref={ref} args={[undefined, undefined, cellCount]}>
        <planeGeometry />
        <meshPhysicalMaterial wireframe />
      </instancedMesh>
    </>
  );
};

export default PlaneAssemble;
