import { getDistrictsByProvince, getProvinces, isValidPostalCode, getPostalCodeByLocation, getPostalCodes } from "./utils/util.js";

const provinces = getProvinces();
console.log(provinces);

const districts = getDistrictsByProvince("Central");
console.log(districts);

const postalCode = getPostalCodeByLocation("Athurugiriya(CO)");
console.log(postalCode);

const isValidPostalCodeResult = isValidPostalCode("10250");
console.log(isValidPostalCodeResult);

const postalCodes = getPostalCodes();
console.log(postalCodes);
