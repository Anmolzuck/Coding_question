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
