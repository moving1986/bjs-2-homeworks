"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  arr = Math.pow(b, 2) - 4 * a * c;

  if(arr < 0) {
     arr = [];
  }

  if(arr === 0) {
    arr = -b/(2*a);
  }

  if(arr > 0) {

   let root1 = (-b + Math.sqrt(d) )/(2*a);
   let root2 = (-b - Math.sqrt(d) )/(2*a);

   arr = [root1, root2];

  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}