/*
Ques- Given two non-empty arrays of integers, write a function that determines
      whether the second array is a subsequence of the first one.

      A subsequence of an array is a set of numbers that aren't necessarily adjacent
      in the array but that are in the same order as they appear in the array. For
      instance, the numbers [1, 3, 4] form a subsequence of the array
      [1, 2, 3, 4] and so do the numbers [2, 4]. 
       Note that a single number in an array and the array itself are both valid
       subsequences of the array.

 Input--> array= [5, 1, 22, 25, 6, -1, 8, 10]
        sequence = [1, 6, -1, 10]
 Output-->true
 
*/

//Solution 1  : O(n) T | O(1) S

function isValidSubsequence(array, sequence) {
  const result = [];
  let c = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[c]) {
      result.push(array[i]);
      c++;
    }
  }

  return result.toString() === sequence.toString() ? true : false;
}
console.log(isValidSubsequence([1, 5, 2, 4, 9], [2, 4, 9, 1]));

//Solution 2  : O(n) T | O(1) S

function isValidSubsequence(array, sequence) {
  let sequenceIdx = 0;
  for (const value of array) {
    if (sequenceIdx === sequence.length) break;
    if (sequence[sequenceIdx] === value) sequenceIdx++;
  }
  return sequenceIdx === sequence.length;
}
console.log(isValidSubsequence([1, 5, 2, 4, 9], [2, 4, 9]));

//Solution 3 : O(n) T | O(1) S

function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let sequenceIdx = 0;
  while (arrIdx < array.length && sequenceIdx < sequence.length) {
    if (array[arrIdx] === sequence[sequenceIdx]) sequenceIdx++;
    arrIdx++;
  }
  return sequenceIdx === sequence.length;
}
console.log(isValidSubsequence([1, 5, 2, 4, 9], [2, 4, 9]));
