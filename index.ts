import type { Province, PostalCode } from "./types/types.js";
import provincesData from "./data/provinces.json" with { type: "json" };
import postalCodesData from "./data/postal_codes.json" with { type: "json" };

export const provinces: Province[] = provincesData;
export const postalCodes: PostalCode[] = postalCodesData;
export * from "./utils/util.js";