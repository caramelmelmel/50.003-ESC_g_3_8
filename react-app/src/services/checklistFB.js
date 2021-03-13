const checklistFB = [
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
        item: "Staff who are unfit for work due to illness should not report to work",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_02",
        category: "staff_hygiene",
        item: "Staff who are fit for work but suffering from the lingering effects of a cough and/or cold should cover their mouths with a surgical mask",
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
        id: "staff_hygiene_04",
        category: "staff_hygiene",
        item: "Hair is kept tidy (long hair must be tied up) and covered with clean caps or hair nets where appropriate",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_05",
        category: "staff_hygiene",
        item: "Sores, wounds or cuts on hands, if any, are covered with waterproof and brightly-covered plaster",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_06",
        category: "staff_hygiene",
        item: "Hands are washed thoroughly with soap and water, frequently and at appropriate times",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_07",
        category: "staff_hygiene",
        item: "Fingernails are short, clean, unpolished and without nail accessories",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_08",
        category: "staff_hygiene",
        item: "No wrist watches/ rings or other hand jewellery (with exception of wedding ring) is worn by staff handling food",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_09",
        category: "staff_hygiene",
        item: "Food is handled with clean utensils and gloves",
        checked: false,
        noncompliance: false
    },
    {
        id: "staff_hygiene_10",
        category: "staff_hygiene",
        item: "Disposable gloves are changed regularly and/or in between tasks\n - Staff do not handle cash with gloved hands",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_01",
        category: "environment_cleanliness",
        item: "Cleaning and maintenance records for equipment, ventilation and exhaust system",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_02",
        category: "environment_cleanliness",
        item: "Adequate and regular pest control\n - Pest control record",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_03",
        category: "environment_cleanliness",
        item: "Goods and equipment are within shop boundary",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_04",
        category: "environment_cleanliness",
        item: "Store display/ shop front is neat and tidy",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_05",
        category: "environment_cleanliness",
        item: "Work/ serving area is neat, clean and free of spillage",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_06",
        category: "environment_cleanliness",
        item: "Uncluttered circulation space free of refuse/ furniture",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_07",
        category: "environment_cleanliness",
        item: "Tables are cleared promptly within 10 minutes",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_11",
        category: "environment_cleanliness",
        item: "Fixtures and fittings including shelves, cupboards and drawers are clean and dry, free from pests, and in a good state",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_12",
        category: "environment_cleanliness",
        item: "Ceiling/ ceiling boards are free from stains/ dust with no gaps",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_13",
        category: "environment_cleanliness",
        item: "Fans and air-con units are in proper working order and clean and free from dust. Proper maintenance and routine cleaning are carried out regularly",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_14",
        category: "environment_cleanliness",
        item: "Equipment, exhaust hood, crockery and utensils are clean, in good condition and serviced",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_15",
        category: "environment_cleanliness",
        item: "Surfaces, walls and ceilings within customer areas are dry and clean",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_16",
        category: "environment_cleanliness",
        item: "Floor within customer areas is clean, dry and non-greasy",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_17",
        category: "environment_cleanliness",
        item: "Waste bins are properly lined with plastic bags and covered at all times",
        checked: false,
        noncompliance: false
    },
    {
        id: "environment_cleanliness_18",
        category: "environment_cleanliness",
        item: "Adequate number of covered waste pedal bins are available and waste is properly managed and disposed.\n - Waste bins are not over-filled\n - Waste Management: Proper disposal of food stuff and waste\n -Waste is properly bagged before disposing it at the waste disposal area/ bin centre",
        checked: false,
        noncompliance: false
    },


]

export function getAllChecklistItems(){
    return checklistFB;
}

export function getChecklistItem(id) {
    return checklistFB.find(m => m.id == id);
}

