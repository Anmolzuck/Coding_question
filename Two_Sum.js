/*  
Ques -Write a function that takes in a non-empty array of distinct integers and an
      integer representing a target sum. If any two numbers in the input array sum
      up to the target sum, the function should return them in an array, in any
      order. If no two numbers sum up to the target sum, the function should return
      an empty array.

      Note that the target sum has to be obtained by summing two different integers
      in the array; you can't add a single integer to itself in order to obtain the
      target sum.
      You can assume that there will be at most one pair of numbers summing up to
      the target sum. 

    Input -> array= [3, 5, -4, 8, 11, 1, -1, 6]    targetSum=10
     Output =[-1, 11] 

Hints: 1-->
      Try using two for loops to sum all possible pairs of numbers in the input array.
       What are the time and space implications of this approach?
      2-->
      Realize that for every number X in the input array, you are essentially trying to find a corresponding number Y such that X + Y = targetSum.
      With two variables in this equation known to you, it shouldn't be hard to solve for Y.
      3-->
      Try storing every number in a hash table, solving the equation mentioned in Hint #2 for every number,
      and checking if the Y that you find is stored in the hash table. What are the time and space implications of this approach?

      O(n) time | O(n) space - where n is the length of the input array
*/


/** O(n*2) time | o(1) space. In this code two for loops are used thats why time complexity becomes n square */

function twoNumberSum(array, targetSum) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = 0;
      sum = array[i] + array[j];
      if (sum === targetSum) {
        result.push(array[i], array[j]);
        return result;
      }
    }
  }
  return result;
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

/*** O(n) time | O(n) space . In this objects are used hash tables which reduce the time complexity of the code */

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

/**Best- O(nlog(n)) time | O(1) space . In this we sort the array first and then intialize two pointers left and right .*/

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
