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
   let k1 = (-b + Math.sqrt(d)) / (2 * a);
   let k2 = (-b - Math.sqrt(d)) / (2 * a);
   arr.push(k1, k2);
 }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let bet = parseInt(percent) / 100 / 12;

  if (isNaN(bet) || bet < 0) {
		return `false`;
	} else {
			let s = amount - contribution;
			let n = countMonths;
			let pay = s * (bet + bet / (((1 + bet) ** n) - 1));
			let totalAmount = (pay * n).toFixed(2);
			return +totalAmount;
   }
}
