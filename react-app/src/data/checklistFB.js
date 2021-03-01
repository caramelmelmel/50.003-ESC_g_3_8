const checklistFB = [
    {
        id: "professionalism_01",
        category: "professionalism",
        item: "Shop is open and ready to service patients / visitors according to operating hours",
        checked: 0,
        noncompliance: false
    },
    {
        id: "professionalism_02",
        category: "professionalism",
        item: "Staff Attendance: Adequate staff for peak and non-peak hours",
        checked: 0,
        noncompliance: false
    },
    {
        id: "professionalism_03",
        category: "professionalism",
        item: "At least one (1) clearly assigned person in-charge on site",
        checked: 0,
        noncompliance: false
    }

]

export function getAllChecklistItems(){
    return checklistFB;
}

export function getChecklistItem(id) {
    return checklistFB.find(m => m.id == id);
}