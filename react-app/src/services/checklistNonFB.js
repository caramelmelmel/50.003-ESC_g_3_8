const checklistNonFB = [
    {
        id: "professionalism_01",
        category: "professionalism",
        item: "Shop is open and ready to service patients / visitors according to operating hours",
        checked: false,
        noncompliance: false
    },
    {
        id: "professionalism_02",
        category: "professionalism",
        item: "Staff Attendance: Adequate staff for peak and non-peak hours",
        checked: false,
        noncompliance: false
    },
    {
        id: "professionalism_03",
        category: "professionalism",
        item: "At least one (1) clearly assigned person in-charge on site",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_01",
        category: "staff_hygiene",
        item: "Staff uniform/ attire is not soiled",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_02",
        category: "staff_hygiene",
        item: "Staff who are unfit for work due to illness should not report to work",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_03",
        category: "staff_hygiene",
        item: "Clean clothes/uniform or aprons are worn during food preparation and food service",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_01",
        category: "environment_cleanliness",
        item: "Adequte and regular pest control; pest control record",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_02",
        category: "environment_cleanliness",
        item: "Goods and equipment are within shop boundary",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_03",
        category: "environment_cleanliness",
        item: "Store display/ Shop front is neat and tidy",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_04",
        category: "environment_cleanliness",
        item: "Work/ serving area is neat, clean and free of spillage",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_05",
        category: "environment_cleanliness",
        item: "Uncluttered circulatino space free of refuse/ furniture",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_06",
        category: "environment_cleanliness",
        item: "Fixtures and fittings including shelves, cupboards and drawers are clean and dry and in a good state",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_07",
        category: "environment_cleanliness",
        item: "Ceiling/ ceiling boards are free from stains/ dust with no gaps",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_08",
        category: "environment_cleanliness",
        item: "Fans and air-con units are in proper working order and clean and free from dust. Proper maintenance and routine cleaning are carried out regularly",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_09",
        category: "environment_cleanliness",
        item: "Equipment is clean, in good condition and serviced",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_10",
        category: "environment_cleanliness",
        item: "Surfaces, walls and ceilings within customer areas are dry and clean",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_11",
        category: "environment_cleanliness",
        item: "Floor within customer areas is clean and dry",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_12",
        category: "environment_cleanliness",
        item: "Waste is properly managed and disposed; Waste bins are not over-filled; Waste Management: Proper disposal of general waste",
        checked: false,
        noncompliance: false
    },


]

export function getAllChecklistItems(){
    return checklistNonFB;
}

export function getChecklistItem(id) {
    return checklistNonFB.find(m => m.id == id);
}

