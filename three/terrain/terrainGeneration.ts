import { Color, MathUtils, Vector3 } from "three";
import Fractal from "../../utils/tooloud/Fractal";
import Perlin from "../../utils/tooloud/Perlin";
import Worley from "../../utils/tooloud/Worley";
import { terrainSeed } from "./terrainConstants";

// Noise
const perlin = new Perlin(terrainSeed);
const worley = new Worley(terrainSeed + 1);

// Height values
const noiseScale = 0.04;
export const maxTerrainHeight = 0.7 / noiseScale;
const bumpsSize = noiseScale * 50;
const bumpsHeight = maxTerrainHeight * 0.25;
export const waterLevel = 0.1;
export const snowLevel = 0.7;

// Colors
export const waterColor = new Color("rgb(24, 82, 228)");
export const waterColorArray = waterColor.toArray();
export const grassColor = new Color("rgb(84, 136, 35)");
export const grassColorArray = grassColor.toArray();
export const rockColor = new Color("rgb(88, 88, 88)");
export const rockColorArray = rockColor.toArray();
export const dirtColor = new Color("rgb(155, 118, 83)");
export const dirtColorArray = dirtColor.toArray();
export const snowColor = new Color("rgb(255, 255, 255)");
export const snowColorArray = snowColor.toArray();

// Other
const up = new Vector3(0, 1, 0);

const fractalPerlin4 = (x: number, y: number, z: number) => {
  return perlin.noise(x, y, z);
};

export const getWorldHeightAt = (x: number, z: number) => {
  const noiseX = noiseScale * x;
  const noiseY = noiseScale * z;
  const noiseZ = 0;

  // Mountains
  const mountains =
    worley.Euclidean(noiseX, noiseY, noiseZ)[0] * maxTerrainHeight;

  // Bumps
  const bumps =
    Fractal.noise(
      noiseX * bumpsSize,
      noiseY * bumpsSize,
      noiseZ * bumpsSize,
      3,
      fractalPerlin4
    ) * bumpsHeight;

  return mountains + bumps;
};

export const getVertexColorAt = (x: number, y: number, z: number): number[] => {
  const normalizedHeight = y / maxTerrainHeight;

  // Snow
  if (normalizedHeight > snowLevel) {
    return snowColorArray;
  }

  const steepness = getSteepnessAt(x, z);

  // Rock
  if (steepness > 35) {
    return rockColorArray;
  }

  // Dirt
  if (normalizedHeight < waterLevel + 0.05) {
    return dirtColorArray;
  }

  // Grass
  return grassColorArray;
};

// // From: https://gamedev.stackexchange.com/questions/89824/how-can-i-compute-a-steepness-value-for-height-map-cells
// const getSteepness = (x: number, z: number) => {
//   const height = getWorldHeightAt(x, z);

//   // Compute the differentials by stepping over 1 in both directions.
//   const dx: number = getWorldHeightAt(x + 0.1, z) - height;
//   const dy: number = getWorldHeightAt(x, z + 0.1) - height;

//   // The "steepness" is the magnitude of the gradient vector
//   // For a faster but not as accurate computation, you can just use abs(dx) + abs(dy)
//   return Math.sqrt(dx * dx + dy * dy) * 10;
// };

export const getSteepnessAt = (x: number, z: number) => {
  const x1 = x;
  const z1 = z;
  const y1 = getWorldHeightAt(x1, z1);
  const p1 = new Vector3(x1, y1, z1);

  // Compute the differentials by stepping over 1 in both directions.
  const x2 = x + 1;
  const z2 = z;
  const y2: number = getWorldHeightAt(x2, z2);
  const p2 = new Vector3(x2, y2, z2);

  const x3 = x;
  const z3 = z + 1;
  const y3: number = getWorldHeightAt(x3, z3);
  const p3 = new Vector3(x3, y3, z3);

  const v1 = p3.sub(p1);
  const v2 = p2.sub(p1);

  const normal = new Vector3().crossVectors(v1, v2).normalize();

  // return up.dot(crossProduct);
  return MathUtils.radToDeg(
    Math.acos(normal.dot(up) / (up.length() * normal.length()))
  );
};
