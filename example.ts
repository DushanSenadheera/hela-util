import { getDistrictsByProvince, getProvinces } from "./utils/util.js";

const provinces = getProvinces();
console.log(provinces);

const districts = getDistrictsByProvince("Central");
console.log(districts);
