const checklistFB = [
    {
        id: "professionalism_01",
        category: "professionalism",
        item: "Shop is open and ready to service patients / visitors according to operating hours",
        checked: false,
        
    },
    {
        id: "professionalism_02",
        category: "professionalism",
        item: "Staff Attendance: Adequate staff for peak and non-peak hours",
        checked: false,
        
    },
    {
        id: "professionalism_03",
        category: "professionalism",
        item: "At least one (1) clearly assigned person in-charge on site",
        checked: false,
        
    },
    {
        id: "staff_hygiene_01",
        category: "staff_hygiene",
        item: "Staff who are unfit for work due to illness should not report to work",
        checked: false,
        
    },
    {
        id: "staff_hygiene_02",
        category: "staff_hygiene",
        item: "Staff who are fit for work but suffering from the lingering effects of a cough and/or cold should cover their mouths with a surgical mask",
        checked: false,
        
    },
    {
        id: "staff_hygiene_03",
        category: "staff_hygiene",
        item: "Clean clothes/uniform or aprons are worn during food preparation and food service",
        checked: false,
        
    },
    {
        id: "staff_hygiene_04",
        category: "staff_hygiene",
        item: "Hair is kept tidy (long hair must be tied up) and covered with clean caps or hair nets where appropriate",
        checked: false,
        
    },
    {
        id: "staff_hygiene_05",
        category: "staff_hygiene",
        item: "Sores, wounds or cuts on hands, if any, are covered with waterproof and brightly-covered plaster",
        checked: false,
        
    },
    {
        id: "staff_hygiene_06",
        category: "staff_hygiene",
        item: "Hands are washed thoroughly with soap and water, frequently and at appropriate times",
        checked: false,
        
    },
    {
        id: "staff_hygiene_07",
        category: "staff_hygiene",
        item: "Fingernails are short, clean, unpolished and without nail accessories",
        checked: false,
        
    },
    {
        id: "staff_hygiene_08",
        category: "staff_hygiene",
        item: "No wrist watches/ rings or other hand jewellery (with exception of wedding ring) is worn by staff handling food",
        checked: false,
        
    },
    {
        id: "staff_hygiene_09",
        category: "staff_hygiene",
        item: "Food is handled with clean utensils and gloves",
        checked: false,
        
    },
    {
        id: "staff_hygiene_10",
        category: "staff_hygiene",
        item: "Disposable gloves are changed regularly and/or in between tasks\n - Staff do not handle cash with gloved hands",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_01",
        category: "environment_cleanliness",
        item: "Cleaning and maintenance records for equipment, ventilation and exhaust system",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_02",
        category: "environment_cleanliness",
        item: "Adequate and regular pest control\n - Pest control record",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_03",
        category: "environment_cleanliness",
        item: "Goods and equipment are within shop boundary",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_04",
        category: "environment_cleanliness",
        item: "Store display/ shop front is neat and tidy",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_05",
        category: "environment_cleanliness",
        item: "Work/ serving area is neat, clean and free of spillage",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_06",
        category: "environment_cleanliness",
        item: "Uncluttered circulation space free of refuse/ furniture",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_07",
        category: "environment_cleanliness",
        item: "Tables are cleared promptly within 10 minutes",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_11",
        category: "environment_cleanliness",
        item: "Fixtures and fittings including shelves, cupboards and drawers are clean and dry, free from pests, and in a good state",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_12",
        category: "environment_cleanliness",
        item: "Ceiling/ ceiling boards are free from stains/ dust with no gaps",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_13",
        category: "environment_cleanliness",
        item: "Fans and air-con units are in proper working order and clean and free from dust. Proper maintenance and routine cleaning are carried out regularly",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_14",
        category: "environment_cleanliness",
        item: "Equipment, exhaust hood, crockery and utensils are clean, in good condition and serviced",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_15",
        category: "environment_cleanliness",
        item: "Surfaces, walls and ceilings within customer areas are dry and clean",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_16",
        category: "environment_cleanliness",
        item: "Floor within customer areas is clean, dry and non-greasy",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_17",
        category: "environment_cleanliness",
        item: "Waste bins are properly lined with plastic bags and covered at all times",
        checked: false,
        
    },
    {
        id: "environment_cleanliness_18",
        category: "environment_cleanliness",
        item: "Adequate number of covered waste pedal bins are available and waste is properly managed and disposed.\n - Waste bins are not over-filled\n - Waste Management: Proper disposal of food stuff and waste\n -Waste is properly bagged before disposing it at the waste disposal area/ bin centre",
        checked: false,
        
    },
    {
        id: "hand_hygiene_01",
        category: "hand_hygiene",
        item: "Hand washing facilities are easily accessible, in good working condition and soap is provided",
        checked: false,
        
    },
    {
        id: "hand_hygiene_02",
        category: "hand_hygiene",
        item: "Adequate facilities for hand hygiene are available including liquid soap and disposable hand towels",
        checked: false,
        
    },
    {
        id: "hand_hygiene_03",
        category: "hand_hygiene",
        item: "Adequate facilities for hand hygiene are available including liquid soap and disposable hand towels",
        checked: false,
        
    },
    {
        id: "storage_prep_food_01",
        category: "storage_prep_food",
        item: "Food is stored in appropriate conditions and at an appropriate temperature",
        checked: false,
        
    },
    {
        id: "storage_prep_food_02",
        category: "storage_prep_food",
        item: "Food and non-food are clearly segregated; Non-food items (e.g insecticides, detergents and other chemicals) are not stored together with the food items",
        checked: false,
        
    },
    {
        id: "storage_prep_food_03",
        category: "storage_prep_food",
        item: "Food is not placed near sources of contamination",
        checked: false,
        
    },
    {
        id: "storage_prep_food_04",
        category: "storage_prep_food",
        item: "Storage of food does not invite pest infestation",
        checked: false,
        
    },
    {
        id: "storage_prep_food_05",
        category: "storage_prep_food",
        item: "Dry goods (e.g canned food and drinks) and other food items are stored neatly on shelves, off the floor and away from walls",
        checked: false,
        
    },
    {
        id: "storage_prep_food_06",
        category: "storage_prep_food",
        item: "Proper stock rotation system such as the First-Expired-First-Out (FEFO) system is used for inventory management",
        checked: false,
        
    },
    {
        id: "storage_prep_food_07",
        category: "storage_prep_food",
        item: "Food is protected from contamination; packaging is intact and no products are found with signs of spoilage",
        checked: false,
        
    },
    {
        id: "storage_prep_food_08",
        category: "storage_prep_food",
        item: "Ice machine is clean and well maintained",
        checked: false,
        
    },
    {
        id: "storage_prep_food_09",
        category: "storage_prep_food",
        item: "Ice machine is clean and well maintained; Only ice is stored in the ice machine to prevent contamination of the ice",
        checked: false,
        
    },
    {
        id: "storage_prep_food_10",
        category: "storage_prep_food",
        item: "Scoop for ice is stored outside the ice machine in a dedicated container",
        checked: false,
        
    },
    {
        id: "storage_prep_food_11",
        category: "storage_prep_food",
        item: "Food supplied is clean and not expired",
        checked: false,
        
    },
    {
        id: "storage_prep_food_12",
        category: "storage_prep_food",
        item: "Clear labelling of date of date of preparation/ manufacture/ expiry on all food containers/ packaging",
        checked: false,
        
    },
    {
        id: "storage_prep_food_13",
        category: "storage_prep_food",
        item: "Cooked food is properly covered to prevent cross-contamination",
        checked: false,
        
    },
    {
        id: "storage_prep_food_14",
        category: "storage_prep_food",
        item: "Proper work flow and segregation of areas to prevent cross-contamination between raw and cooked/ ready-to-eat food areas",
        checked: false,
        
    },
    {
        id: "storage_prep_food_15",
        category: "storage_prep_food",
        item: "Proper separation of cooked food/ ready-to-eat food, raw meat, seafood and vegetable to prevent cross-contamination; e.g different chopping boards, knives and other utensils are used for cooked/ ready-to-eat and raw food",
        checked: false,
        
    },
    {
        id: "storage_prep_food_16",
        category: "storage_prep_food",
        item: "Frozen food is thawed in the chiller, microwave or under running water",
        checked: false,
        
    },
    {
        id: "storage_prep_food_17",
        category: "storage_prep_food",
        item: "Ingredients used are clean and washed thoroughly before cooking",
        checked: false,
        
    },
    {
        id: "storage_prep_food_18",
        category: "storage_prep_food",
        item: "All cooking ingredient (e.g cooking oil, sauces) are properly covered in proper containers and properly labelled, including all the content and date of expiry",
        checked: false,
        
    },
    {
        id: "storage_prep_food_19",
        category: "storage_prep_food",
        item: "All sauces are stored at appropriate condition & temperature",
        checked: false,
        
    },
    {
        id: "storage_prep_food_20",
        category: "storage_prep_food",
        item: "Cooking oil is not used for more than 1 day",
        checked: false,
        
    },
    {
        id: "storage_prep_food_21",
        category: "storage_prep_food",
        item: "Cooking oil is properly stored with a cover",
        checked: false,
        
    },
    {
        id: "storage_prep_food_22",
        category: "storage_prep_food",
        item: "Perishable food is stored in the fridge",
        checked: false,
        
    },
    {
        id: "storage_prep_food_23",
        category: "storage_prep_food",
        item: "Raw food and cooked food/ ready to serve food are clearly segregated",
        checked: false,
        
    },
    {
        id: "storage_prep_food_24",
        category: "storage_prep_food",
        item: "Food preperation area is free of bird and animal (e.g dog or cat)",
        checked: false,
        
    },
    {
        id: "storage_prep_food_25",
        category: "storage_prep_food",
        item: "Food is not prepared on the floor, near drain or near/ in the toilet",
        checked: false,
        
    },
    {
        id: "storage_prep_food_26",
        category: "storage_prep_food",
        item: "Personal belongings are kept separately in the staff locker area or cabinet, away from the food storage and preperation area",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_01",
        category: "storage_refrigerator_warmer",
        item: "Daily Temperature Log for food storage units (freezers, chillers, warmers, steamers, ovens) using independent thermometer, etc. is maintained for inspection from time to time",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_02",
        category: "storage_refrigerator_warmer",
        item: "Food storage units (freezers, chillers, warmers, steamers, ovens) are kept clean and well maintained. All rubber gaskets of refrigerators/ warmers are free from defect, dirt and mould",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_03",
        category: "storage_refrigerator_warmer",
        item: "Food storage units are not overstocked to allow good air circulation",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_04",
        category: "storage_refrigerator_warmer",
        item: "For walk-in freezers and chillers, food items are stored neatly on shelves and off the floor",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_05",
        category: "storage_refrigerator_warmer",
        item: "Frozen food is stored at a temperature of not more than -12 degrees celsius",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_06",
        category: "storage_refrigerator_warmer",
        item: "Chilled food is stored at a temperature of not more than 4 degrees celsius",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_07",
        category: "storage_refrigerator_warmer",
        item: "Hot food are held above 60 degrees celsius",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_08",
        category: "storage_refrigerator_warmer",
        item: "Perishable food is stored at a temperature of not more than 4 degrees celsius",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_09",
        category: "storage_refrigerator_warmer",
        item: "Dairy products are stored at a temperature of not more than 7 degrees celsius",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_10",
        category: "storage_refrigerator_warmer",
        item: "Cooked/ ready-to-eat food are stored above raw food",
        checked: false,
        
    },
    {
        id: "storage_refrigerator_warmer_11",
        category: "storage_refrigerator_warmer",
        item: "Food items are properly wrapped/ covered in proper containers and protected from contamination",
        checked: false,
        
    },
    {
        id: "food_01",
        category: "food",
        item: "Min. no. of healthier variety of food items per stall",
        checked: false,
        
    },
    {
        id: "food_02",
        category: "food",
        item: "Lease Term: 50% of food items",
        checked: false,
        
    },
    {
        id: "food_03",
        category: "food",
        item: "Label caloric count of healthier options",
        checked: false,
        
    },
    {
        id: "food_04",
        category: "food",
        item: "Include HPB's Identifiers beside healthier options",
        checked: false,
        
    },
    {
        id: "food_05",
        category: "food",
        item: "Use of healthier cooking oils",
        checked: false,
        
    },
    {
        id: "food_06",
        category: "food",
        item: "Offer wholemeal/ whole-grain option",
        checked: false,
        
    },
    {
        id: "food_07",
        category: "food",
        item: "Healthier option food sold at lower price than regular items",
        checked: false,
        
    },
    {
        id: "food_08",
        category: "food",
        item: "Limit deep-fried and pre-deep fried food items sold (<= 20% deep-fried items)",
        checked: false,
        
    },
    {
        id: "beverage_01",
        category: "beverage",
        item: "No sugar/ Lower-sugar brewed beverage offerings accoring to guidelines",
        checked: false,
        
    },
    {
        id: "beverage_02",
        category: "beverage",
        item: "Healthier option beverages sold at lower price than regular items",
        checked: false,
        
    },
    {
        id: "beverage_03",
        category: "beverage",
        item: "Label caloric count of healthier options",
        checked: false,
        
    },
    {
        id: "beverage_04",
        category: "beverage",
        item: "Limit sugar content on commercially-prepared sweetened beverages (>= 70% commercially-prepared sweetened beverages sold to have HCS)",
        checked: false,
        
    },
    {
        id: "general_safety_01",
        category: "general_safety",
        item: "All food handlers have Basic Food Hygiene certificate and a valid Refresher Food Hygiene certificate (if applicable)",
        checked: false,
        
    },
    {
        id: "general_safety_02",
        category: "general_safety",
        item: "MSDS for all industrial chemicals are available and up to date",
        checked: false,
        
    },
    {
        id: "general_safety_03",
        category: "general_safety",
        item: "Proper chemicals storage",
        checked: false,
        
    },
    {
        id: "general_safety_04",
        category: "general_safety",
        item: "All detergent and bottles containing liquids are labelled appropriately",
        checked: false,
        
    },
    {
        id: "general_safety_05",
        category: "general_safety",
        item: "All personnel to wear safety shoes and safety attire when necessary",
        checked: false,
        
    },
    {
        id: "general_safety_06",
        category: "general_safety",
        item: "Knives and sharp objects are kept at a safe place",
        checked: false,
        
    },
    {
        id: "general_safety_07",
        category: "general_safety",
        item: "Area under the sink should not be cluttered with items other than washing agents",
        checked: false,
        
    },
    {
        id: "general_safety_08",
        category: "general_safety",
        item: "Delivery personnel do not stack goods above the shoulder level",
        checked: false,
        
    },
    {
        id: "general_safety_09",
        category: "general_safety",
        item: "Stacking of goods does not exceed 600mm from the ceiling and heavy items at the bottom, light items on top",
        checked: false,
        
    },
    {
        id: "general_safety_10",
        category: "general_safety",
        item: "Proper signage/ label (fire, hazards, warnings, food stuff) and Exit signs in working order",
        checked: false,
        
    },
    {
        id: "general_safety_11",
        category: "general_safety",
        item: "Equipment, crockery and utensils are not chipped, broken or cracked",
        checked: false,
        
    },
    {
        id: "fire_01",
        category: "fire",
        item: "Fire extinguishers access is unobstructed; Fire extinguishers are not expired and employees know how to use them",
        checked: false,
        
    },
    {
        id: "fire_02",
        category: "fire",
        item: "Escape routes and exits are unobstructed",
        checked: false,
        
    },
    {
        id: "fire_03",
        category: "fire",
        item: "First aid box is available and well-equipped",
        checked: false,
        
    },
    {
        id: "electrical_01",
        category: "electrical",
        item: "Electrical sockets are not overloaded - one plug to one socket",
        checked: false,
        
    },
    {
        id: "electrical_02",
        category: "electrical",
        item: "Plugs and cords are intact and free from exposure/ tension with PSB safety mark",
        checked: false,
        
    },
    {
        id: "electrical_03",
        category: "electrical",
        item: "Power points that are in close proximity to flammable and/ or water sources are installed with a plastic cover",
        checked: false,
        
    },
    {
        id: "electrical_04",
        category: "electrical",
        item: "Electrical panel/ DBs are covered",
        checked: false,
        
    },
]

export function getAllChecklistItems(){
    return checklistFB;
}

export function getChecklistItem(id) {
    return checklistFB.find(m => m.id == id);
}

export function getAllChecklistId() {
    let allIds = [];
    var i;
    for (i = 0; i < getAllChecklistItems().length; i++) {
        allIds.push(checklistFB[i].id);
    } 
    return allIds;
}