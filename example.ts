import {
    getDistrictsByProvince,
    getProvinces,
    isValidPostalCode,
    getPostalCodeByLocation,
    getDSDivisionsByDistrict,
    getDSDivisions
} from "./utils/util.js";

console.log("--- Provinces ---");
const provinces = getProvinces();
console.log(provinces);

console.log("\n--- Districts in Central ---");
const districts = getDistrictsByProvince("Central");
console.log(districts);

console.log("\n--- Postal Code for Athurugiriya ---");
const postalCode = getPostalCodeByLocation("Athurugiriya(CO)");
console.log(postalCode);

console.log("\n--- Is 10250 a valid postal code? ---");
const isValidPostalCodeResult = isValidPostalCode("10250");
console.log(isValidPostalCodeResult);

console.log("\n--- DS Divisions in Colombo ---");
const dsDivisions = getDSDivisionsByDistrict("Colombo");
console.log(dsDivisions);

console.log("\n--- Total DS Divisions ---");
const allDS = getDSDivisions();
console.log(JSON.stringify(allDS));
