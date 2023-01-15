// Solved The Problem Calculate Panda Cost.

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity){ // Here I declare total sales function. 
    // Here I Reserved All Product Value In Different Variable. 
    let perSingaraPrice = 7; 
    let perSomuchaPrice = 10; 
    let perJilapiPrice = 15; 

    // Create condition for Wrong Input.
    if(singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0){
        return "Your Input is Wrong, Pls Enter Positive Number";
    }
    else if(typeof(singaraQuantity) != "number" || typeof(somuchaQuantity) != "number" || typeof(jilapiQuantity) != "number"){
        return "Please Enter The Number Type Value Only";
    }
    else{
        // multiply per product price with his seles value and then add all product's total price.
        const totalPrice  = (perSingaraPrice*singaraQuantity) + (perSomuchaPrice*somuchaQuantity) + (perJilapiPrice*jilapiQuantity);
        return totalPrice;
    }
}

let iBought = pandaCost(10,5,4); // Call the function pandaCost in a variable.
console.log(iBought); // for see the result console log it.