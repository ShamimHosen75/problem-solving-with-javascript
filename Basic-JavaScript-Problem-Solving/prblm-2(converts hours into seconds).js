// Problem : Converts hours into seconds
function howManySeconds(hours) {
  // Write Your solution Here
}
console.log(howManySeconds(12)); // 43200
console.log(howManySeconds(8)); // 28800
console.log(howManySeconds(3)); // 10800



// Solution is here
function howManySeconds(hours){
  let hoursToSeconds = (hours*3600);
  return(hoursToSeconds);
}