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
