// Solved The Problem Calculate Picnic Budget.

function picnicBudget(totalTraveler){ // Here I Declare picnicBudget function.
    // Here I Reserved All Stage Picnic Cost Value In Different Variable. 
    let firstStageCost = 5000;
    let secondStageCost = 4000; 
    let thirdStageCost = 3000; 
    
    if(totalTraveler < 0 || typeof(totalTraveler) != "number"){ 
        // condition for Wrong Input.
        return "Your Input is not valid. Please Enter a Positive Number";
    }
    else if(totalTraveler <= 100){ // condition for First Stage Picnic Cost.
        let picnicCost = totalTraveler * firstStageCost;
        return picnicCost;
    }
    else if(totalTraveler <= 200){ // condition for second Stage Picnic Cost.
        let firstStageTraveler = 100; 
        let secondStageTraveler = totalTraveler - firstStageTraveler;
        let picnicCost = (secondStageTraveler * secondStageCost) + (firstStageTraveler * firstStageCost);
        return picnicCost;
    }
    else{ // condition for third and last Stage Picnic Cost.
        let firstStageTraveler = 100;
        let secondStageTraveler = 100; 
        let thirdStageTraveler = totalTraveler - 200;
        let picnicCost = (thirdStageTraveler * thirdStageCost) + (secondStageTraveler * secondStageCost) + (firstStageTraveler * firstStageCost);
        return picnicCost;
    }
}

let totalPicnicCost = picnicBudget(250); 
// Call the function picnicBudget in a variable.
console.log(totalPicnicCost);  // For see the result console log it.