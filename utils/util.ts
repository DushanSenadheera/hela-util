import { provinces, postalCodes, dsDivisions } from "../index.js";

/**
 * Get all provinces
 * @returns {Province[]}
 */
export const getProvinces = () => {
    return provinces;
}

/**
 * Get all districts by province
 * @param province - Province name
 * @returns {string[]}
 */
export const getDistrictsByProvince = (province: string) => {
    return provinces.find((p) => p.name === province)?.districts;
}

/**
 * Get postal code by location
 * @param location - Location name
 * @returns {PostalCode}
 */
export const getPostalCodeByLocation = (location: string) => {
    return postalCodes.find((p) => p.location === location);
}

/**
 * Get all postal codes
 * @returns {PostalCode[]}
 */
export const getPostalCodes = () => {
    return postalCodes;
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
    return dsDivisions.find((d) => d.district === district)?.ds_divisions;
}

/**
 * Get all DS divisions
 * @returns {DistrictDSDivisions[]}
 */
export const getDSDivisions = () => {
    return dsDivisions;
}