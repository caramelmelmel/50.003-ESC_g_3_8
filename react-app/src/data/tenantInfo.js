const tenantInfo = {
        institutions: [
            "Singapore General Hospital", 
            "Changi General Hospital", 
            "KK Hospital",
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