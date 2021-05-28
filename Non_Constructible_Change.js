/*
Ques- Given an array of positive integers representing the values of coins in your
      possession, write a function that returns the minimum amount of change (the
      minimum sum of money) that you cannot  create. The given coins can have
      any positive integer value and aren't necessarily unique (i.e., you can have
      multiple coins of the same value).
      
    i/p--> coins = [5, 7, 1, 1, 2, 3, 22]
    o/p-->20
*/
/**** Optimal solution O(nlogn)t | O(1)s  **********/

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let change = 0;
  for (let num of coins) {
    if (num > change + 1) return change + 1;
    change = change + num;
  }
  return change + 1;
}
console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
