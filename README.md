# 🇱🇰 hela-util

An ultra-lightweight, type-safe utility library for working with Sri Lankan administrative regions (provinces, districts, DS divisions, GN divisions) and postal codes with full multilingual support.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NPM Version](https://img.shields.io/npm/v/hela-util?style=flat-square)](https://www.npmjs.com/package/hela-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- 🪶 **Ultra-lightweight**: Under **1MB** unpacked size with **Zero external dependencies**.
- 🛡️ **Type-safe**: Built with TypeScript; full type definitions included.
- 🚀 **Modern & Optimized**: 
  - Supports ES Modules (ESM) and CommonJS (CJS).
  - **Side-effects free** and **Tree-shakable**.
  - **Lazy Data Loading**: Large datasets (like GN divisions) are only initialized when first accessed.
- 🗺️ **Full Multilingual Support**: 
  - All names (Provinces, Districts, Capitals, Postal Locations, GN Divisions) available in **English, සිංහල, and தமிழ்**.
- 🗺️ **Comprehensive Data**: 
  - All 9 Provinces (ISO, P-codes, Capitals).
  - All 25 Districts.
  - 331 Divisional Secretariat (DS) Divisions.
  - **Grama Niladhari (GN) Divisions** list (~2,500+ across major districts).
  - Complete list of Postal Codes (~2,100+) with localized names.
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
    getDistricts,
    getDistrictsByProvince, 
    getDSDivisionsByDistrict,
    getGNDivisionsByDSDivision,
    getPostalCodeByLocation,
    isValidPostalCode 
} from "hela-util";

// 1. Get provinces with full multilingual support
const provinces = getProvinces();
console.log(provinces[0].sinhala_name);  // "මධ්‍යම"

// 2. Get all districts in Sri Lanka
const allDistricts = getDistricts();
// allDistricts[0] -> { name: "Kandy", sinhala_name: "මහනුවර", tamil_name: "கண்டி" }

// 3. Search Postal Codes by name in ANY language
const code = getPostalCodeByLocation("අතුරුගිරිය"); // or "Athurugiriya"
console.log(code.postal_code);            // "10150"

// 4. GN Divisions (Grama Niladhari) lookup
const gns = getGNDivisionsByDSDivision("Colombo", "Thimbirigasyaya");
// gns[0] -> { name: "Sammanthranapura", ... }

// 5. Validation
isValidPostalCode("10150"); // true
```

---

## 📖 API Reference

### Provinces & Districts
- **`getProvinces()`**: Returns `Province[]`. Includes localized names for both the province and its districts.
- **`getDistricts()`**: Returns a flattened array of all 25 `District` objects.
- **`getDistrictsByProvince(provinceName)`**: Returns `District[]` for the given province name (English).

### DS & GN Divisions
- **`getDSDivisionsByDistrict(districtName)`**: Returns `DSDivision[]` for the given district.
- **`getDSDivisions()`**: Returns the full list of districts and their DS divisions.
- **`getGNDivisionsByDSDivision(district, dsDivision)`**: Returns `LocalizedName[]` (GN divisions) for a specific DS area.
- **`getGNDivisions()`**: Returns high-detail mapping of all currently available GN divisions.

### Postal Codes
- **`getPostalCodeByLocation(location)`**: Returns a `PostalCode` object. Matches against English, Sinhala, or Tamil location names.
- **`getPostalCodes()`**: Returns the full list of ~2,100+ postal codes with localized names.
- **`isValidPostalCode(code)`**: Returns `true` for valid 5-digit Sri Lankan postal codes.

---

## 🛠️ Development

1. Clone the repository: `git clone https://github.com/DushanSenadheera/hela-util.git`
2. Install dependencies: `npm install`
3. Run dev environment: `npm run dev`
4. Build for production: `npm run build`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to help:
1. **Fork** the repository.
2. Create your **feature branch**.
3. **Commit** your changes.
4. **Push** to the branch.
5. Submit a **Pull Request**.

If you're updating administrative data (GN divisions, postal codes, etc.), please provide a link to the official source if possible to help with verification.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
*Maintained with ❤️ for the Sri Lankan developer community.*
