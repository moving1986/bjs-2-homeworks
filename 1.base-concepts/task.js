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

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}