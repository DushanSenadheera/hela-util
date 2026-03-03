import type { Province } from "./types/types.js";
import rawData from "./data/provinces.json" with { type: "json" };

export const provinces: Province[] = rawData;
export * from "./utils/util.js";