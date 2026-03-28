import {
    getProvinces,
    getDistrictsByProvince,
    getDistricts,
    getPostalCodeByLocation,
    getPostalCodes,
    isValidPostalCode,
    getDSDivisionsByDistrict,
    getDSDivisions,
    getGNDivisionsByDSDivision,
    getGNDivisions
} from "./index.js";

// --- Provinces ---
console.log("--- Provinces ---");
const provinces = getProvinces();
console.log(`Total Provinces: ${provinces.length}`);
console.log(`First Province (English): ${provinces[0].name}`);
console.log(`First Province (Sinhala/Tamil): ${provinces[0].sinhala_name} / ${provinces[0].tamil_name}`);
console.log(`First Province Capital: ${provinces[0].capital.name}`);

// --- Districts ---
console.log("\n--- Districts ---");
const kandyDistricts = getDistrictsByProvince("Central");
console.log(`Districts in Central: ${kandyDistricts?.map(d => d.name).join(", ")}`);

const allDistricts = getDistricts();
console.log(`Total Districts in SL: ${allDistricts.length}`);

// --- Postal Codes ---
console.log("\n--- Postal Codes ---");
const codeByLoc = getPostalCodeByLocation("Athurugiriya");
console.log(`Postal code for Athurugiriya: ${codeByLoc?.postal_code}`);

const codeBySinhala = getPostalCodeByLocation("අතුරුගිරිය");
console.log(`Lookup by Sinhala (අතුරුගිරිය) result: ${codeBySinhala?.postal_code}`);

const allCodes = getPostalCodes();
console.log(`Total Postal Codes: ${allCodes.length}`);

// --- Validation ---
console.log("\n--- Validation ---");
console.log(`Is '10150' a valid postal code? ${isValidPostalCode("10150")}`);
console.log(`Is '123' a valid postal code? ${isValidPostalCode("123")}`);

// --- DS Divisions ---
console.log("\n--- DS Divisions ---");
const colomboDS = getDSDivisionsByDistrict("Colombo");
console.log(`First DS division in Colombo: ${colomboDS?.[0].name} (Grama Niladhari count: ${colomboDS?.[0].gn_divisions})`);

const allDS = getDSDivisions();
console.log(`Total District-DS mappings: ${allDS.length}`);

// --- GN Divisions ---
console.log("\n--- GN Divisions ---");
const thimbirigasyayaGNs = getGNDivisionsByDSDivision("Colombo", "Thimbirigasyaya");
console.log(`Total GN divisions in Thimbirigasyaya: ${thimbirigasyayaGNs?.length}`);
console.log(`Example GN (Multilingual): ${thimbirigasyayaGNs?.[0].name} | ${thimbirigasyayaGNs?.[0].sinhala_name} | ${thimbirigasyayaGNs?.[0].tamil_name}`);

const allGN = getGNDivisions();
console.log(`Total District-GN data entries: ${allGN.length}`);
