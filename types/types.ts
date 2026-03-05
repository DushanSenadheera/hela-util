export type Province = {
    name: string;
    sinhala_name: string;
    tamil_name: string;
    iso_code: string;
    p_code: string;
    capital: string;
    districts: string[];
}

export type PostalCode = {
    postal_code: string;
    location: string;
}