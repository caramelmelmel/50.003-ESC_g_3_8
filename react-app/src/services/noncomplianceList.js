const noncomplianceList = [
    {
     id: "01",
     tenant_id: "Kopitiam",
     image: ["Image1", "Image2"],
     nc_id: "professionalism_01"  
    },
    {
        id: "02",
        tenant_id: "Kopitiam",
        image: ["Image1", "Image2"],
        nc_id: "storage_refrigerator_warmer_09"   
    }
]

export function getAllNoncompliance(){
    return noncomplianceList;
}

export function getNC(id) {
    return noncomplianceList.find(m => m.id == id);
}

export function getLength() {
    return noncomplianceList.length;
}

export function getAllNC() {
    let allNC = [];
    var i;
    for (i = 0; i < getAllNoncompliance().length; i++) {
        allNC.push(noncomplianceList[i].id);
    } 
    return allNC;
}