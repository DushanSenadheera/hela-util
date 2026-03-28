import type { Province, PostalCode, DistrictDSDivisions, DistrictGNDivisions } from "../types/types.js";
import provincesData from "../data/provinces.json" with { type: "json" };
import postalCodesData from "../data/postal_codes.json" with { type: "json" };
import dsDivisionsData from "../data/ds_divisions.json" with { type: "json" };
import gnDivisionsData from "../data/gn_divisions.json" with { type: "json" };

let _provinces: Province[] | null = null;
let _postalCodes: PostalCode[] | null = null;
let _dsDivisions: DistrictDSDivisions[] | null = null;
let _gnDivisions: DistrictGNDivisions[] | null = null;

export const loadProvinces = (): Province[] => {
    if (!_provinces) {
        _provinces = (provincesData as any[]).map(p => ({
            name: p[0],
            sinhala_name: p[1],
            tamil_name: p[2],
            iso_code: p[3],
            p_code: p[4],
            capital: { name: p[5][0], sinhala_name: p[5][1], tamil_name: p[5][2] },
            districts: p[6].map((d: any) => ({ name: d[0], sinhala_name: d[1], tamil_name: d[2] }))
        }));
    }
    return _provinces;
};

export const loadPostalCodes = (): PostalCode[] => {
    if (!_postalCodes) {
        _postalCodes = (postalCodesData as any[]).map(p => ({
            postal_code: p[0],
            location: { name: p[1][0], sinhala_name: p[1][1], tamil_name: p[1][2] }
        }));
    }
    return _postalCodes;
};

export const loadDSDivisions = (): DistrictDSDivisions[] => {
    if (!_dsDivisions) {
        _dsDivisions = (dsDivisionsData as any[]).map(d => ({
            district: d[0],
            ds_divisions: d[1].map((ds: any) => ({ name: ds[0], gn_divisions: ds[1] }))
        }));
    }
    return _dsDivisions;
};

export const loadGNDivisions = (): DistrictGNDivisions[] => {
    if (!_gnDivisions) {
        _gnDivisions = (gnDivisionsData as any[]).map(d => ({
            district: d[0],
            ds_divisions: d[1].map((ds: any) => ({
                name: ds[0],
                gn_divisions: ds[1].map((gn: any) => ({ name: gn[0], sinhala_name: gn[1], tamil_name: gn[2] }))
            }))
        }));
    }
    return _gnDivisions;
};
