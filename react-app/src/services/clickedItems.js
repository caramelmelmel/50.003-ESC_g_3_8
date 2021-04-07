let clickedItems = []

export function getClickedItems(){
    return clickedItems;
}

export function setClickedItems(array) {
    clickedItems = array;
    return clickedItems;
}

export function calculateScore(array, toReturn) {
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;
    let E = 0;
    let i = 0;
    let totalScore = 0;

    for (i=0; i < array.length; i++) {
        //console.log(array[i].substring(0,14));

        if (array[i].substring(0, 15) == "professionalism" || array[i].substring(0, 13) == "staff_hygiene") {
            A += 1;
        } else if (array[i].substring(0, 23) == "environment_cleanliness" || array[i].substring(0, 12) == "hand_hygiene") {
            B += 1; 
        } else if (array[i].substring(0, 17) == "storage_prep_food" || array[i].substring(0, 27) == "storage_refrigerator_warmer") {
            C += 1; 
        } else if (array[i].substring(0, 4) == "food" || array[i].substring(0, 8) == "beverage") {
            D += 1; 
        } else if (array[i].substring(0, 14) == "general_safety" || array[i].substring(0, 4) == "fire" || array[i].substring(0,10) == "electrical") {
            E += 1; 
        }
    }

    // The following functions return a normalised value of the categories:
    function calculateA(A){
        let AScore = A / 13;
        return AScore.toFixed(2);
    }

    function calculateB(B){
        let BScore = B / 18;
        return BScore.toFixed(2);
    }

    function calculateC(C){
        let CScore = C / 37;
        return CScore.toFixed(2);
    }

    function calculateD(D){
        let DScore = D / 12;
        return DScore.toFixed(2);
    }

    function calculateE(E){
        let EScore = E / 18;
        return EScore.toFixed(2);
    }

    totalScore = ((A / 13 * 0.1) + (B / 18 * 0.2) + (C / 37 * 0.35) + (D / 12 * 0.15) + (E / 18 * 0.2))*100;
    //totalScore = calculateA(A) + calculateB(B) + calculateC(C) + calculateD(D) + calculateE(E);
    
    console.log("TOTAL SCORE: ", totalScore);
    
    if (toReturn == "totalScore"){
        return totalScore.toFixed(0);
    } else if (toReturn == "A"){
        return calculateA(A)*100;
    } else if (toReturn == "B"){
        return calculateB(B)*100;
    } else if (toReturn == "C"){
        return calculateC(C)*100;
    } else if (toReturn == "D"){
        return calculateD(D)*100;
    } else if (toReturn == "E"){
        return calculateE(E)*100;
    } else 
    return totalScore.toFixed(0);
    

}
