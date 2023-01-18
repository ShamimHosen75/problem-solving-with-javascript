// Problem : Calculates total points of a team from number of wins(3pts), draws(1pt), and losses(0pt)
function footballPoints(wins, draws, losses){
  //Write Your Solution Here
}

console.log(footballPoints(4, 3, 1)); // 15
console.log(footballPoints(10, 5, 0)); // 35
console.log(footballPoints(11, 0, 9)); // 33

// Solution is here
function footballPoints(wins, draws, losses){
  let points = (wins*3) + (draws*1) + (losses*0)
  return points;
}