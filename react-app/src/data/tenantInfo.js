const tenantInfo = {
    institutions: [
        "CGH", 
        "KKH", 
        "SGH",
        "SKH",
        "NCCS", 
        "NHCS", 
        "BVH",
        "OCH",
        "Academia",
    ],
    tenants: [
        "Kopitiam",
        "FairPrice",
        "Starbucks",
    ],
    categories: [
        "F&B",
        "Non-F&B"
    ]
}

export function getAllTenantInfo(){
    return tenantInfo;
}