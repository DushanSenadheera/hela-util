import { provinces } from "../index.js";

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