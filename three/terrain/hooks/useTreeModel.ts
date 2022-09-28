import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
  nodes: {
    pine: THREE.Mesh;
    pine_1: THREE.Mesh;
  };
  materials: {
    leaves: THREE.MeshStandardMaterial;
    bark: THREE.MeshStandardMaterial;
  };
};

export const useTreeModel = () => {
  const model = useGLTF("/models/pine.glb") as GLTFResult;
  return model;
};
