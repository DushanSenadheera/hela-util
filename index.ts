import type { Province, PostalCode, DistrictDSDivisions } from "./types/types.js";
import provincesData from "./data/provinces.json" with { type: "json" };
import postalCodesData from "./data/postal_codes.json" with { type: "json" };
import dsDivisionsData from "./data/ds_divisions.json" with { type: "json" };

export const provinces: Province[] = (provincesData as any[]).map(p => ({
    name: p[0],
    sinhala_name: p[1],
    tamil_name: p[2],
    iso_code: p[3],
    p_code: p[4],
    capital: p[5],
    districts: p[6]
}));

export const postalCodes: PostalCode[] = (postalCodesData as any[]).map(p => ({
    postal_code: p[0],
    location: p[1]
}));

export const dsDivisions: DistrictDSDivisions[] = (dsDivisionsData as any[]).map(d => ({
    district: d[0],
    ds_divisions: d[1].map((ds: any) => ({
        name: ds[0],
        gn_divisions: ds[1]
    }))
}));

export * from "./utils/util.js";