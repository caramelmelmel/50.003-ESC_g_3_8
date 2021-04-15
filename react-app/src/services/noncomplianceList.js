const noncomplianceList = [
    {
     id: "01",
     tenant_id: "Kopitiam",
     image: ["Image1", "Image2"],
     nc_id: "professionalism_01",
     resolved: false,
     comments: [{message: "This is a test 01 ", images: ["data:image/png;base64", "data.image/jpeg;base64,/9j/4"], email: "staff1@singhealth.com.sg"}, {message: "This is a second test", images: ["data:image/png;base64", "data.image/jpeg;base64,/9j/4"], email: "staff1@singhealth.com.sg"} ]
    },
    {
        id: "02",
        tenant_id: "Kopitiam",
        image: ["Image1", "Image2"],
        nc_id: "professionalism_02",  
        resolved: false,
        comments: [{message: "This is a test 02", images: ["data:image/png;base64", "data.image/jpeg;base64,/9j/4"], email: "staff2@singhealth.com.sg"}]
       },
       {
        id: "01",
        tenant_id: "Kopitiam",
        image: ["Image1", "Image2"],
        nc_id: "professionalism_03", 
        resolved: false,
        comments: [{message: "This is a test 03", images: ["data:image/png;base64", "data.image/jpeg;base64,/9j/4"], email: "staff3@singhealth.com.sg"}]
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

export function addComment(nc_id, comment) {
    let i = 0;
    for (i; i<noncomplianceList.length; i++) {
        if (nc_id == noncomplianceList[i].nc_id){
            noncomplianceList[i].comments.push(comment);
        }
    }
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