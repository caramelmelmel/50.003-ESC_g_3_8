var noncomplianceList = [
    {
     id: "01",
     tenant_id: "Kopitiam",
     nc_id: "professionalism_01",
     resolved: false,
     comments: [{message: "This is a test 01 ", image: "https://i.pinimg.com/236x/8c/dd/78/8cdd7805970b2a8ea3285b28bde395e6.jpg", email: "staff1@singhealth.com.sg"}, {message: "This is a second test", image: "https://64.media.tumblr.com/9ce9554ccb9239efc738f5d92c3631e5/tumblr_nm5q43icJv1ryd7qso1_1280.jpg", email: "staff1@singhealth.com.sg"} ]
    },
    {
        id: "02",
        tenant_id: "Kopitiam",
        nc_id: "professionalism_02",  
        resolved: false,
        comments: [{message: "This is a test 02", image: "https://64.media.tumblr.com/9ce9554ccb9239efc738f5d92c3631e5/tumblr_nm5q43icJv1ryd7qso1_1280.jpg", email: "staff2@singhealth.com.sg"}]
       },
       {
        id: "03",
        tenant_id: "Kopitiam",
        nc_id: "professionalism_03", 
        resolved: false,
        comments: [{message: "This is a test 03", image: "data.image/jpeg;base64,/9j/4", email: "staff3@singhealth.com.sg"}]
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

export function setAllNoncompliance(all) {
    noncomplianceList = all;
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