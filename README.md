# 🇱🇰 hela-util

An ultra-lightweight, type-safe utility library for working with Sri Lankan administrative regions (provinces, districts, and DS divisions) and postal codes.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NPM Version](https://img.shields.io/npm/v/hela-util?style=flat-square)](https://www.npmjs.com/package/hela-util)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)

---

## ✨ Features

- 🪶 **Ultra-lightweight**: Under **230kB** unpacked size with **Zero external dependencies**.
- 🛡️ **Type-safe**: Built with TypeScript; full type definitions included.
- 🚀 **Modern**: supports ES Modules (ESM) and CommonJS (CJS).
- 🗺️ **Comprehensive Data**: 
  - All 9 Provinces (English, Sinhala, Tamil names + ISO & P-codes).
  - All 25 Districts.
  - 331 Divisional Secretariat (DS) Divisions with GN division counts.
  - Complete list of Postal Codes for major locations.
- ✅ **Validation**: Built-in helper for validating Sri Lankan postal codes.

---

## 📦 Installation

```bash
npm install hela-util
```

---

## 🚀 Quick Start

```typescript
import { 
    getProvinces, 
    getDistrictsByProvince, 
    getDSDivisionsByDistrict,
    getDSDivisions,
    getPostalCodeByLocation,
    isValidPostalCode 
} from "hela-util";

// 1. Get all provinces with Sinhala/Tamil names and districts
const provinces = getProvinces();
console.log(provinces[0].name);          // "Central"
console.log(provinces[0].sinhala_name);  // "මධ්‍යම"

// 2. Get districts for a specific province
const districts = getDistrictsByProvince("Central"); 
// Output: ["Kandy", "Matale", "Nuwara Eliya"]

// 3. Get DS Divisions for a specific district
const colomboDivisions = getDSDivisionsByDistrict("Colombo");
// Output: [{ name: 'Colombo', gn_divisions: 35 }, ...]

// 4. Get all districts and their DS divisions
const allDS = getDSDivisions();
// Output: [{ district: 'Colombo', ds_divisions: [...] }, ...]

// 5. Find a postal code by location name
const code = getPostalCodeByLocation("Athurugiriya(CO)");
// Output: { postal_code: '10150', location: 'Athurugiriya(CO)' }

// 6. Validate a 5-digit postal code
const isValidResult = isValidPostalCode("10250"); // true
```

---

## 📖 API Reference

### Provinces & Districts
- **`getProvinces()`**: Returns an array of `Province` objects (includes Sinhala/Tamil names, capital, ISO codes, and districts).
- **`getDistrictsByProvince(provinceName)`**: Returns a string array of district names for the given province.

### DS Divisions
- **`getDSDivisionsByDistrict(districtName)`**: Returns an array of `DSDivision` objects (`name` and `gn_divisions`) for the given district.
- **`getDSDivisions()`**: Returns the full list of districts and their DS divisions.

### Postal Codes
- **`getPostalCodeByLocation(location)`**: Returns a `PostalCode` object (`postal_code` and `location`) for the matched string.
- **`getPostalCodes()`**: Returns the full array of postal codes.
- **`isValidPostalCode(code)`**: Returns `true` if the string matches the 5-digit Sri Lankan postal code format.

---

## 🛠️ Development

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development watch: `npm run dev`.
4. Build the production files: `npm run build`.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---
*Maintained with ❤️ for the Sri Lankan developer community.*

