import { useFrame } from "@react-three/fiber";
import React, { Suspense, useLayoutEffect } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Clock,
  Group,
  MathUtils,
  Vector3,
} from "three";
import { terrainChunkResolution } from "./terrainConstants";
import {
  getVertexColorAt,
  getWorldHeightAt,
  maxTerrainHeight,
  rockColorArray,
  waterColor,
  waterLevel,
} from "./terrainGeneration";
import TerrainTrees from "./TerrainTrees";

const totalSizeTime = 3;
const crossSectionColor = rockColorArray;
const crossSectionBelow = -5;

const FinalTerrain = ({
  position = new Vector3(),
  size = 100,
}: {
  position?: Vector3;
  size?: number;
}) => {
  const geometryRef = React.useRef<BufferGeometry>(null);
  const meshRef = React.useRef<Group>(null);
  const clock = React.useRef<Clock>(new Clock());

  const cellSize = size / terrainChunkResolution;

  useFrame(() => {
    if (meshRef.current) {
      const time = clock.current.getDelta();

      meshRef.current.scale.y = Math.min(
        1,
        meshRef.current.scale.y + time / totalSizeTime
      );
    }
  });

  useLayoutEffect(() => {
    if (geometryRef.current) {
      const vertices: number[] = [];
      const vertexColor: number[] = [];

      for (let x = 0; x < terrainChunkResolution; x++) {
        for (let z = 0; z < terrainChunkResolution; z++) {
          const startX = x * cellSize;
          const startZ = z * cellSize;

          const x1 = startX;
          const z1 = startZ;
          const y1 = getWorldHeightAt(x1 + position.x, z1 + position.z);

          const x2 = startX + cellSize;
          const z2 = startZ;
          const y2 = getWorldHeightAt(x2 + position.x, z2 + position.z);
          // const color2 = getVertexColorAt(x2, y2, z2);

          const x3 = startX + cellSize;
          const z3 = startZ + cellSize;
          const y3 = getWorldHeightAt(x3 + position.x, z3 + position.z);
          // const color3 = getVertexColorAt(x3, y3, z3);

          const x4 = startX;
          const z4 = startZ + cellSize;
          const y4 = getWorldHeightAt(x4 + position.x, z4 + position.z);
          // const color4 = getVertexColorAt(x4, y4, z4);

          const middleX = (x1 + x2 + x3 + x4) / 4;
          const middleY = (y1 + y2 + y3 + y4) / 4;
          const middleZ = (z1 + z2 + z3 + z4) / 4;
          const middleColor = getVertexColorAt(
            middleX + position.x,
            middleY + position.y,
            middleZ + position.z
          );

          const diagonal1 = (y1 + y3) / 2;
          const diagonal2 = (y2 + y4) / 2;

          if (
            Math.random() < 0.5 ||
            (diagonal1 > diagonal2 && Math.abs(diagonal1 - diagonal2) > 0.2)
          ) {
            // First face
            //  3__2
            //  | /
            //  |/
            //  1
            vertices.push(x1, y1, z1);
            vertices.push(x3, y3, z3);
            vertices.push(x2, y2, z2);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);

            // // Second face
            // //    3
            // //   /|
            // //  /_|
            // // 1   2
            vertices.push(x1, y1, z1);
            vertices.push(x4, y4, z4);
            vertices.push(x3, y3, z3);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);
          } else {
            // First face
            //  3
            //  |\
            //  |_\
            // 1   2
            vertices.push(x1, y1, z1);
            vertices.push(x4, y4, z4);
            vertices.push(x2, y2, z2);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);

            // Second face
            // 3___2
            //  \ |
            //   \|
            //    1
            vertices.push(x4, y4, z4);
            vertices.push(x3, y3, z3);
            vertices.push(x2, y2, z2);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);
            vertexColor.push(...middleColor);
          }

          // Generate -x corner
          if (x === 0) {
            vertices.push(x1, crossSectionBelow, z1);
            vertices.push(x4, crossSectionBelow, z4);
            vertices.push(x4, y4, z4);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);

            vertices.push(x1, crossSectionBelow, z1);
            vertices.push(x4, y4, z4);
            vertices.push(x1, y1, z1);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
          }

          // Generate +x corner
          if (x === terrainChunkResolution - 1) {
            vertices.push(x3, crossSectionBelow, z3);
            vertices.push(x2, crossSectionBelow, z2);
            vertices.push(x2, y2, z2);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);

            vertices.push(x3, crossSectionBelow, z3);
            vertices.push(x2, y2, z2);
            vertices.push(x3, y3, z3);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
          }

          // Generate -z corner
          if (z === 0) {
            vertices.push(x2, crossSectionBelow, z2);
            vertices.push(x1, crossSectionBelow, z1);
            vertices.push(x1, y1, z1);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);

            vertices.push(x2, crossSectionBelow, z2);
            vertices.push(x1, y1, z1);
            vertices.push(x2, y2, z2);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
          }

          // Generate +z corner
          if (z === terrainChunkResolution - 1) {
            vertices.push(x4, crossSectionBelow, z4);
            vertices.push(x3, crossSectionBelow, z3);
            vertices.push(x3, y3, z3);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);

            vertices.push(x4, crossSectionBelow, z4);
            vertices.push(x3, y3, z3);
            vertices.push(x4, y4, z4);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
            vertexColor.push(...crossSectionColor);
          }

          // vertices.push(x1, 0, z1);
          // vertices.push(x1, y3, z1 + cellSize);
          // vertices.push(x1, y2, z1);
          // vertexColor.push(...middleColor);
          // vertexColor.push(...middleColor);
          // vertexColor.push(...middleColor);
        }
      }

      geometryRef.current.setAttribute(
        "position",
        new BufferAttribute(new Float32Array(vertices), 3)
      );
      geometryRef.current.setAttribute(
        "color",
        new BufferAttribute(new Float32Array(vertexColor), 3)
      );
      geometryRef.current.computeVertexNormals();

      // Decimate mesh
      // const modifier = new SimplifyModifier();
      // const newGeomtry = modifier.modify(
      //   geometryRef.current,
      //   Math.floor(geometryRef.current.attributes.position.count * 0.12)
      // );
      // geometryRef.current.copy(newGeomtry);
    }
  }, [cellSize, position.x, position.y, position.z]);

  return (
    <>
      <group ref={meshRef} scale={[1, 0, 1]}>
        <mesh
          position={[
            position.x + size / 2,
            waterLevel * maxTerrainHeight,
            position.z + size / 2,
          ]}
          rotation={[MathUtils.degToRad(-90), 0, 0]}
        >
          <planeGeometry args={[size, size]} />
          <meshStandardMaterial
            opacity={0.6}
            transparent
            color={waterColor}
            roughness={0.3}
          />
        </mesh>
        <mesh castShadow receiveShadow position={position}>
          <bufferGeometry attach="geometry" ref={geometryRef} />
          <meshStandardMaterial vertexColors roughness={0.6} />
        </mesh>
        <Suspense fallback={null}>
          <TerrainTrees position={position} size={size} />
        </Suspense>
      </group>
    </>
  );
};

export default FinalTerrain;
