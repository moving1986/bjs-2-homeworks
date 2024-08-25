"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  
  let d = Math.pow(b, 2) - 4 * a * c;

  if(d < 0) {
     arr = [];
  }

  if(d === 0) {
    arr = [-b/(2*a)];
  }

  if(d > 0) {

   arr.push = [(-b + Math.sqrt(d)) / (2*a), (-b - Math.sqrt(d)) / (2*a)];

  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let bet = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (bet + (bet / (((1 + bet) ** countMonths) - 1)));
  let total = monthPayment * countMonths + contribution;
  let roundedTotal =  parseFloat(total.toFixed(2));

  return roundedTotal;

}
