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
