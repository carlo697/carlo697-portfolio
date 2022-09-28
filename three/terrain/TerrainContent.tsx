import {
  Bounds,
  OrbitControls,
  usePerformanceMonitor,
} from "@react-three/drei";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import React, { Suspense, useRef } from "react";
import { Color, MathUtils, Vector3 } from "three";
import { BlendFunction } from "postprocessing";
import TerrainChunk from "./TerrainChunk";
import { terrainChunkDivisions, terrainTotalSize } from "./terrainConstants";

const shadowSize = 200;

const TerrainContent = () => {
  const ssaoRef = useRef<any>();
  const terrainChunkSize = terrainTotalSize / terrainChunkDivisions;

  const chunks: JSX.Element[] = [];
  const boundChunks: JSX.Element[] = [];

  for (let x = 0; x < terrainChunkDivisions; x++) {
    for (let z = 0; z < terrainChunkDivisions; z++) {
      const position = new Vector3(
        x * terrainChunkSize,
        0,
        z * terrainChunkSize
      );
      const size = terrainChunkSize;

      const times: { x: number; z: number; offset: number; speed: number }[] =
        [];
      let offset = 0;
      for (let timeX = 0; timeX < terrainChunkDivisions * 2; timeX++) {
        for (let timeZ = 0; timeZ < terrainChunkDivisions; timeZ++) {
          const checkX = timeZ;
          const checkZ = timeX - timeZ;

          if (
            checkX >= 0 &&
            checkX < terrainChunkDivisions &&
            checkZ >= 0 &&
            checkZ < terrainChunkDivisions
          ) {
            times.push({
              x: checkX,
              z: checkZ,
              offset,
              speed: 1,
            });
            offset++;
          }
        }
      }

      const foundOffset = times.find((item) => item.x === x && item.z === z);

      const chunk = (
        <TerrainChunk
          position={position}
          size={size}
          timeOffset={
            (foundOffset ? foundOffset.offset / foundOffset.speed : 0) * 1
          }
          key={`${x}-${z}`}
        />
      );

      const boundChunk = (
        <mesh
          castShadow
          receiveShadow
          position={[position.x + size / 2, position.y, position.z + size / 2]}
          visible={false}
          key={`${x}-${z}`}
        >
          <boxGeometry args={[size, 0.1, size]} />
          <meshStandardMaterial />
        </mesh>
      );

      chunks.push(chunk);
      boundChunks.push(boundChunk);
    }
  }

  usePerformanceMonitor({
    onChange: (api) => {
      ssaoRef.current.blendMode.setBlendFunction(
        api.factor < 0.7 ? BlendFunction.SKIP : BlendFunction.MULTIPLY
      );
    },
  });

  return (
    <>
      <Suspense fallback={null}>
        <Bounds fit observe margin={1.1}>
          {boundChunks}
        </Bounds>

        {chunks}
      </Suspense>

      {/* <mesh castShadow receiveShadow position={[0, -0.1, 0]}>
          <boxGeometry args={[terrainSize, 0.1, terrainSize]} />
          <meshStandardMaterial color={"red"} />
        </mesh> */}

      {/* <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh position={[0, 0, 10]} castShadow receiveShadow>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial color="red" />
      </mesh> */}

      {/* Lightning */}
      <ambientLight intensity={0.05} />

      <directionalLight
        position={[100, 60, 50]}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={0}
        shadow-camera-far={200}
        shadow-camera-left={-shadowSize}
        shadow-camera-right={shadowSize}
        shadow-camera-top={shadowSize}
        shadow-camera-bottom={-shadowSize}
        shadow-bias={-0.0001}
        color={new Color("rgb(255, 214, 137)")}
      />

      <directionalLight
        intensity={0.1}
        position={[-100, 60, -50]}
        color={new Color("rgb(137, 170, 255)")}
      />

      {/* Controls */}
      <OrbitControls
        minPolarAngle={MathUtils.degToRad(60)}
        maxPolarAngle={MathUtils.degToRad(60)}
        autoRotate
        makeDefault
        autoRotateSpeed={-1}
        enableZoom={false}
      />

      {/* <GizmoHelper renderPriority={2}>
        <GizmoViewport />
      </GizmoHelper> */}

      <EffectComposer>
        <SSAO
          ref={ssaoRef}
          samples={32}
          radius={0.025}
          distanceThreshold={5}
          intensity={30}
        />
      </EffectComposer>
    </>
  );
};

export default TerrainContent;
