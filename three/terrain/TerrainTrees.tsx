import React, {
  RefObject,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Euler, InstancedMesh, MathUtils, Object3D, Vector3 } from "three";
import { useTreeModel } from "./hooks/useTreeModel";
import { TerrainChunkProps } from "./TerrainChunkProps";
import { maxTreesPerChunk } from "./terrainConstants";
import {
  getSteepnessAt,
  getVertexColorAt,
  getWorldHeightAt,
  grassColor,
  maxTerrainHeight,
} from "./terrainGeneration";

const minTreeSize = maxTerrainHeight * 0.2;
const maxTreeSize = maxTerrainHeight * 0.3;
const maxTreeHeight = maxTerrainHeight * 0.6;

type TreeData = {
  position: Vector3;
  scale: Vector3;
  rotation: Euler;
  index: number;
};

const TerrainTrees = ({
  position = new Vector3(),
  size = 100,
}: TerrainChunkProps) => {
  const trunkRef = useRef() as RefObject<InstancedMesh>;
  const leavesRef = useRef() as RefObject<InstancedMesh>;
  const temp = useMemo<Object3D>(() => new Object3D(), []);
  const treModel = useTreeModel();
  const [trees, setTrees] = useState<TreeData[]>([]);

  // Generate the tree array
  useLayoutEffect(() => {
    let treeIndex = 0;
    const newTrees: TreeData[] = [];

    for (let i = 0; i < maxTreesPerChunk; i++) {
      const x = position.x + Math.random() * size;
      const z = position.z + Math.random() * size;
      const y = position.y + getWorldHeightAt(x, z);

      const color = getVertexColorAt(x, y, z);
      const angle = getSteepnessAt(x, z);
      if (
        y < maxTreeHeight &&
        color[0] === grassColor.r &&
        color[1] === grassColor.g &&
        color[2] === grassColor.b &&
        angle < 45
      ) {
        const size = MathUtils.mapLinear(
          Math.random(),
          0,
          1,
          minTreeSize,
          maxTreeSize
        );

        const tree = {
          position: new Vector3(x, y, z),
          scale: new Vector3(size, size, size),
          rotation: new Euler(0, 0, 0),
          index: treeIndex,
        };
        newTrees.push(tree);
        treeIndex++;
      }
    }

    setTrees(newTrees);
  }, [position.x, position.y, position.z, size]);

  // Set the instances using the tree array
  useLayoutEffect(() => {
    if (trunkRef.current && leavesRef.current) {
      for (let treeIndex = 0; treeIndex < trees.length; treeIndex++) {
        const tree = trees[treeIndex];

        // Trunk instance
        temp.position.copy(tree.position);
        temp.scale.copy(tree.scale);
        temp.rotation.copy(tree.rotation);
        temp.updateMatrix();
        trunkRef.current.setMatrixAt(tree.index, temp.matrix.clone());

        // Leaves instance
        leavesRef.current.setMatrixAt(tree.index, temp.matrix.clone());
      }
    }
  }, [trees, temp]);

  return (
    <>
      {trees.length > 0 && (
        <>
          <instancedMesh
            ref={trunkRef}
            args={[
              treModel.nodes.pine_1.geometry,
              treModel.materials.bark,
              trees.length,
            ]}
            castShadow
            receiveShadow
          ></instancedMesh>

          <instancedMesh
            ref={leavesRef}
            args={[
              treModel.nodes.pine.geometry,
              treModel.materials.leaves,
              trees.length,
            ]}
            castShadow
            receiveShadow
          ></instancedMesh>
        </>
      )}
    </>
  );
};

export default TerrainTrees;
