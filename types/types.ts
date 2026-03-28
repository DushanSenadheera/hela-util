type District = {
    name: string;
    sinhala_name: string;
    tamil_name: string;
}

type Capital = {
    name: string;
    sinhala_name: string;
    tamil_name: string;
}

type LocalizedName = {
    name: string;
    sinhala_name: string;
    tamil_name: string;
}

type Province = {
    name: string;
    sinhala_name: string;
    tamil_name: string;
    iso_code: string;
    p_code: string;
    capital: Capital;
    districts: District[];
}

type PostalCode = {
    postal_code: string;
    location: LocalizedName;
}

type DSDivision = {
    name: string;
    gn_divisions: number;
}

type DistrictDSDivisions = {
    district: string;
    ds_divisions: DSDivision[];
}

type DSDGNDivisions = {
    name: string;
    gn_divisions: LocalizedName[];
}

type DistrictGNDivisions = {
    district: string;
    ds_divisions: DSDGNDivisions[];
}

export {
    District,
    Capital,
    LocalizedName,
    Province,
    PostalCode,
    DSDivision,
    DistrictDSDivisions,
    DSDGNDivisions,
    DistrictGNDivisions
}
