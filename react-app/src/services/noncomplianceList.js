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
        nc_id: "professionalism_02"  
   
       },
       {
        id: "01",
        tenant_id: "Kopitiam",
        image: ["Image1", "Image2"],
        nc_id: "professionalism_03"  
   
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

/*
noncomplainces:[
{ncprofessionalism_02: comments: [
“Example statement”,
[“data:image/jpeg;base64/9j/4, “data:image/jpeg;base64,/9j/4”]
“staff”,
{“resolved”: false}] },
{ncprofessionalism_01: comments: [
“Hello”,
[“data:image/jpeg;base64,/9j/4”]
“staff”,
{“resolved”: false}] },
]
*/