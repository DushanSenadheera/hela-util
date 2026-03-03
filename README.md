# 🇱🇰 hela-util

A lightweight, type-safe utility library for working with Sri Lankan administrative regions (provinces and districts).

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)

## ✨ Features

- 📦 **Lightweight**: Zero dependencies (only uses raw data).
- 🛡️ **Type-safe**: Built with TypeScript with full type definitions.
- 🚀 **ESM Ready**: Supports modern environments and NodeNext resolution.
- 🗺️ **Comprehensive**: Includes names in English, Sinhala, and Tamil, plus ISO codes.

## 📦 Installation

```bash
npm install hela-util
```

## 🚀 Quick Start

Here is how you can use `hela-util` in your project:

```typescript
import { getProvinces, getDistrictsByProvince, provinces } from "hela-util";

// Get all provinces with metadata
const allProvinces = getProvinces();
console.log(allProvinces);

// Get districts for a specific province
const centralDistricts = getDistrictsByProvince("Central");
console.log(centralDistricts); // ["Kandy", "Matale", "Nuwara Eliya"]

// Access the raw data directly
console.log(provinces[0].sinhala_name); // "බස්නාහිර"
```

## 📖 API Reference

### `getProvinces()`
Returns an array of all Province objects. Each object contains:
- `name`: English name
- `sinhala_name`: Sinhala name
- `tamil_name`: Tamil name
- `iso_code`: ISO 3166-2 code
- `capital`: Provincial capital
- `districts`: List of district names

### `getDistrictsByProvince(provinceName: string)`
Returns an array of district names (strings) for the given province name.

### `provinces` (Constant)
The raw array of Province data.

## 🛠️ Development

If you want to contribute to the project:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the example: `npm run dev`.
4. Build the project: `npm run build`.

## 📄 License

This project is licensed under the [ISC License](LICENSE).
