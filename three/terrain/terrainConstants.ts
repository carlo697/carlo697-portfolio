const seeds = [1005, 1, 2, 3, 4, 7, 9, 12, 13, 14, 15, 16, 17, 20];
export const terrainSeed = seeds[Math.floor(Math.random() * seeds.length)];
// export const terrainSeed = 1005;

export const terrainTotalSize = 100;
export const terrainChunkDivisions = 4;
export const terrainChunkResolution = 25;

export const assembleTimeStart = 0;
export const assembleTimeEnd = 2;
export const assembleTimeDiff = 1.5;
export const assembleResolution = 10;

export const finalTerrainTime = assembleTimeEnd;

export const maxTreesPerChunk = 100;
