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
    },
    {
        id: "staff_hygiene_01",
        category: "staff_hygiene",
        item: "Staff who are unfit for work due to illness should not report to work",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_02",
        category: "staff_hygiene",
        item: "Staff who are fit for work but suffering from the lingering effects of a cough and/or cold should cover their mouths with a surgical mask",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_03",
        category: "staff_hygiene",
        item: "Clean clothes/uniform or aprons are worn during food preparation and food service",
        noncompliance: false
    },
    {
        id: "staff_hygiene_04",
        category: "staff_hygiene",
        item: "Hair is kept tidy (long hair must be tied up) and covered with clean caps or hair nets where appropriate",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_05",
        category: "staff_hygiene",
        item: "Sores, wounds or cuts on hands, if any, are covered with waterproof and brightly-covered plaster",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_06",
        category: "staff_hygiene",
        item: "Hands are washed thoroughly with soap and water, frequently and at appropriate times",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_07",
        category: "staff_hygiene",
        item: "Fingernails are short, clean, unpolished and without nail accessories",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_08",
        category: "staff_hygiene",
        item: "No wrist watches/ rings or other hand jewellery (with exception of wedding ring) is worn by staff handling food",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_09",
        category: "staff_hygiene",
        item: "Food is handled with clean utensils and gloves",
        checked: 0,
        noncompliance: false
    },
    {
        id: "staff_hygiene_10",
        category: "staff_hygiene",
        item: "Disposable gloves are changed regularly and/or in between tasks; Staff do not handle cash with gloved hands",
        checked: 0,
        noncompliance: false
    },


]

export function getAllChecklistItems(){
    return checklistFB;
}

export function getChecklistItem(id) {
    return checklistFB.find(m => m.id == id);
}

