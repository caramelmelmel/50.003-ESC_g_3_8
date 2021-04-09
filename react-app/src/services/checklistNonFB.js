const checklistNonFB = [
    {
        id: "nfb_professionalism_01",
        category: "professionalism",
        item: "Shop is open and ready to service patients / visitors according to operating hours",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_professionalism_02",
        category: "professionalism",
        item: "Staff Attendance: Adequate staff for peak and non-peak hours",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_professionalism_03",
        category: "professionalism",
        item: "At least one (1) clearly assigned person in-charge on site",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_staff_hygiene_01",
        category: "staff_hygiene",
        item: "Staff uniform/ attire is not soiled",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_staff_hygiene_02",
        category: "staff_hygiene",
        item: "Staff who are unfit for work due to illness should not report to work",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_staff_hygiene_03",
        category: "staff_hygiene",
        item: "Clean clothes/uniform or aprons are worn during food preparation and food service",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_01",
        category: "environment_cleanliness",
        item: "Adequte and regular pest control; pest control record",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_02",
        category: "environment_cleanliness",
        item: "Goods and equipment are within shop boundary",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_03",
        category: "environment_cleanliness",
        item: "Store display/ Shop front is neat and tidy",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_04",
        category: "environment_cleanliness",
        item: "Work/ serving area is neat, clean and free of spillage",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_05",
        category: "environment_cleanliness",
        item: "Uncluttered circulatino space free of refuse/ furniture",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_06",
        category: "environment_cleanliness",
        item: "Fixtures and fittings including shelves, cupboards and drawers are clean and dry and in a good state",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_07",
        category: "environment_cleanliness",
        item: "Ceiling/ ceiling boards are free from stains/ dust with no gaps",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_08",
        category: "environment_cleanliness",
        item: "Fans and air-con units are in proper working order and clean and free from dust. Proper maintenance and routine cleaning are carried out regularly",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_09",
        category: "environment_cleanliness",
        item: "Equipment is clean, in good condition and serviced",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_10",
        category: "environment_cleanliness",
        item: "Surfaces, walls and ceilings within customer areas are dry and clean",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_11",
        category: "environment_cleanliness",
        item: "Floor within customer areas is clean and dry",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_environment_cleanliness_12",
        category: "environment_cleanliness",
        item: "Waste is properly managed and disposed; Waste bins are not over-filled; Waste Management: Proper disposal of general waste",
        checked: false,
        resolved: false

    },

    {
        id: "nfb_general_safety_01",
        category: "general_safety",
        item: "MSDS for all industrial chemicals are available and up to date",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_02",
        category: "general_safety",
        item: "Proper chemicals storage",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_03",
        category: "general_safety",
        item: "All detergent and bottles containing liquids are labelled appropriately",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_04",
        category: "general_safety",
        item: "All personnel to wear safety shoes and safety attire when necessary",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_05",
        category: "general_safety",
        item: "Knives and sharp objects are kept at a safe place",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_06",
        category: "general_safety",
        item: "Area under the sink should not be cluttered with items other than washing agents",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_07",
        category: "general_safety",
        item: "Delivery personnel do not stack goods above the shoulder level",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_08",
        category: "general_safety",
        item: "Stacking of goods does not exceed 600mm from the ceiling and heavy items at the bottom, light items on top",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_general_safety_09",
        category: "general_safety",
        item: "Proper signage/ label (fire, hazards, warnings, food stuff) and Exit signs in working order",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_fire_emergency_safety_01",
        category: "fire",
        item: "Fire extinguishers access is unobstructed; Fire extinguishers are not expired and employees know how to use them",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_fire_emergency_safety_02",
        category: "fire",
        item: "Escape route and exits are unobstructed",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_fire_emergency_safety_03",
        category: "fire",
        item: "First aid box is available and well-equipped",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_electrical_safety_01",
        category: "electrical",
        item: "Electrical sockets are not overloaded -- one plug to one socket",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_electrical_safety_02",
        category: "electrical",
        item: "Plugs and cords are intact and free from exposure / tension with PSB safety marks",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_electrical_safety_03",
        category: "electrical",
        item: "Power points that are in close proximity to flammable and/ or water sources are installed with a plastic cover",
        checked: false,
        resolved: false
    },
    {
        id: "nfb_electrical_safety_04",
        category: "electrical",
        item: "Electrical panels / DBs are covered",
        checked: false,
        resolved: false

    },


]

export function getAllChecklistItems(){
    return checklistNonFB;
}

export function getChecklistItem(id) {
    return checklistNonFB.find(m => m.id == id);
}

export function getAllChecklistId() {
    let allIds = [];
    var i;
    for (i = 0; i < getAllChecklistItems().length; i++) {
        allIds.push(checklistNonFB[i].id);
    } 
    return allIds;
}