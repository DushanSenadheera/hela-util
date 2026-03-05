# 🇱🇰 hela-util

A lightweight, type-safe utility library for working with Sri Lankan administrative regions (provinces, districts, and DS divisions) and postal codes.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)

---

## ✨ Features

- 📦 **Lightweight**: Zero external dependencies.
- 🛡️ **Type-safe**: Built with TypeScript with full type definitions included.
- 🚀 **Modern**: Supports ES Modules (ESM) and modern Node.js environments.
- 🗺️ **Comprehensive**: 
  - All 9 Provinces (English, Sinhala, Tamil names + ISO codes).
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
    getPostalCodeByLocation,
    isValidPostalCode 
} from "hela-util";

// 1. Get all provinces
const allProvinces = getProvinces();

// 2. Get districts for a specific province
const districts = getDistrictsByProvince("Central"); 
// Output: ["Kandy", "Matale", "Nuwara Eliya"]

// 3. Get DS Divisions for a district
const colomboDivisions = getDSDivisionsByDistrict("Colombo");
/* Output: [
     { name: 'Colombo', gn_divisions: 35 },
     { name: 'Kolonnawa', gn_divisions: 46 },
     ...
   ] 
*/

// 4. Find a postal code
const code = getPostalCodeByLocation("Athurugiriya(CO)");
// Output: { postal_code: '10150', location: 'Athurugiriya(CO)' }

// 5. Validate a postal code
const isValid = isValidPostalCode("10250"); // true
```

---

## 📖 API Reference

### Provinces & Districts
- **`getProvinces()`**: Returns an array of `Province` objects (includes Sinhala/Tamil names, ISO codes, and districts).
- **`getDistrictsByProvince(provinceName)`**: Returns a string array of district names.

### DS Divisions
- **`getDSDivisionsByDistrict(districtName)`**: Returns an array of `DSDivision` objects (`name` and `gn_divisions`).
- **`getDSDivisions()`**: Returns the full hierarchy of districts and their DS divisions.

### Postal Codes
- **`getPostalCodeByLocation(location)`**: Returns a `PostalCode` object for the matched location.
- **`getPostalCodes()`**: Returns the full array of postal codes.
- **`isValidPostalCode(code)`**: Returns `true` if the string matches the 5-digit Sri Lankan postal code format.

---

## 🛠️ Development

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development example: `npm run dev`.
4. Build the production files: `npm run build`.

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).

---
*Maintained with ❤️ for the Sri Lankan developer community.*
