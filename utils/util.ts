import { loadProvinces, loadPostalCodes, loadDSDivisions, loadGNDivisions } from "./data-loader.js";

/**
 * Get all provinces
 * @returns {Province[]}
 */
export const getProvinces = () => {
    return loadProvinces();
}

/**
 * Get all districts by province
 * @param province - Province name
 * @returns {District[]}
 */
export const getDistrictsByProvince = (province: string) => {
    return loadProvinces().find((p) => p.name === province)?.districts;
}

/**
 * Get all districts
 * @returns {District[]}
 */
export const getDistricts = () => {
    return loadProvinces().flatMap((p) => p.districts);
}

/**
 * Get postal code by location
 * @param location - Location name
 * @returns {PostalCode}
 */
export const getPostalCodeByLocation = (location: string) => {
    return loadPostalCodes().find((p) => p.location.name === location || p.location.sinhala_name === location || p.location.tamil_name === location);
}

/**
 * Get all postal codes
 * @returns {PostalCode[]}
 */
export const getPostalCodes = () => {
    return loadPostalCodes();
}

/**
 * Check whether the postal code is valid or not
 * @param postalCode - Postal code
 * @returns {boolean}
 */
export const isValidPostalCode = (postalCode: string): boolean => {
    const regex = /^\d{5}$/;
    return regex.test(postalCode);
}

/**
 * Get all DS divisions by district
 * @param district - District name
 * @returns {DSDivision[]}
 */
export const getDSDivisionsByDistrict = (district: string) => {
    return loadDSDivisions().find((d) => d.district === district)?.ds_divisions;
}

/**
 * Get all DS divisions
 * @returns {DistrictDSDivisions[]}
 */
export const getDSDivisions = () => {
    return loadDSDivisions();
}

/**
 * Get GN divisions by DS division
 * @param district - District name
 * @param dsDivision - DS division name
 * @returns {LocalizedName[]}
 */
export const getGNDivisionsByDSDivision = (district: string, dsDivision: string) => {
    return loadGNDivisions().find((d) => d.district === district)?.ds_divisions.find((ds) => ds.name === dsDivision)?.gn_divisions;
}

/**
 * Get all GN divisions
 * @returns {DistrictGNDivisions[]}
 */
export const getGNDivisions = () => {
    return loadGNDivisions();
}