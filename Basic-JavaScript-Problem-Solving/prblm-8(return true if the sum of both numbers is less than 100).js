// Problem : Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(){
  //Write your solution here
}

console.log(lessThan100(10, 20)); // true
console.log(lessThan100(65, 75)); // false
console.log(lessThan100(25, 50)); // true

// Solution is here
function lessThan100(a, b){
  if(a + b < 100){
    return true;
  }
  else {
    return false;
  }
};