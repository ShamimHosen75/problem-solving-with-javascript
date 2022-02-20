// Solved The Problem Convert ana To Vori. 

function anaToVori(ana){  // Here I Declare ana to vori function.
    // Create condition for Wrong Input.
    if(ana < 0){
        return "Please Enter A Positive Number";
    }
    else if(typeof(ana) != "number"){
        return "This Is Not A Number. Try To Enter A Number Please";
    }
    else{
        const vori = ana * 0.0625;  // Note: we know, 1 ana = 0.0625 vori.
        return vori;
    }
    
}

let gold = anaToVori(100);  // Here I call the function anaToVori into dhan variable.
console.log(gold);  // for see the result console log it.