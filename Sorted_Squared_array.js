/*-------- O(nlogn) time | O(n) space --------- This take more time because of sorting*/

function sortedSquaredArray(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * array[i]);
  }
  return result.sort((a, b) => a - b);
}
console.log(sortedSquaredArray([-3, -1, 2, 5, -10]));

/*-------Without using push------ */

function sortedSquaredArray(array) {
  const result = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result[i] = value * value;
  }
  return result.sort((a, b) => a - b);
}
console.log(sortedSquaredArray([-3, -1, 2, 5, -10]));

/*-------- O(n) time | O(n) space ---------*/

function sortedSquaredArray(array) {
  const newArr = [];
  let small = 0;
  let large = array.length - 1;
  for (let i of array) {
    (smallerValue = array[small]), (largerValue = array[large]);
    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      newArr.unshift(smallerValue * smallerValue);
      small++;
    } else {
      newArr.unshift(largerValue * largerValue);
      large--;
    }
  }
  return newArr;
}
console.log(sortedSquaredArray([-3, -1, 2, 5, -10]));

/*--------Best code takes O(n) time | O(n) space ---------*/

function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0); // best way to intialize an array
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[i] = smallerValue * smallerValue;
      smallerValueIdx++;
    } else {
      sortedSquares[i] = largerValue * largerValue;
      largerValueIdx--;
    }
  }
  return sortedSquares;
}
console.log(sortedSquaredArray([-3, -1, 2, 5, -10]));
