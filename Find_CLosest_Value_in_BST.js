/**** Optimal solution in average case O(logn)t | O(1)s because of iterative method we have less call stacks */
/**** Optimal solution in worst case O(n)t | O(1)s */
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;

  while (currentNode != null) {
    if (Math.abs(target - closest) >= Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

//o(logn)T o(logn)S-->since memory frames for every recursive call
//o(n)TS-->worst

function findClosestValueInBst(tree, target) {
  return findClosestValueBstHelper(tree, target, Number.MAX_VALUE);
}

function findClosestValueBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - tree.value) < Math.abs(target - closest))
    closest = tree.value;
  if (tree.value < target)
    return findClosestValueBstHelper(tree.right, target, closest);
  else if (tree.value > target)
    return findClosestValueBstHelper(tree.left, target, closest);
  else return closest; //when both target & cosest are same
}

/***** Sample input */

//   BinaryTree {
//     value: 10,
//     left: BinaryTree {
//       value: 5,
//       left: BinaryTree { value: 2, left: [BinaryTree], right: null },
//       right: BinaryTree { value: 5, left: null, right: null }
//     },
//     right: BinaryTree {
//       value: 15,
//       left: BinaryTree { value: 13, left: null, right: [BinaryTree] },
//       right: BinaryTree { value: 22, left: null, right: null }
//     }
//   }
