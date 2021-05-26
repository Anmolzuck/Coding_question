/*
Ques- The distance between a node in a Binary Tree and the tree's root is called the node's depth. 
      Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
      Each binary tree node has a integer value a left child node and right child node.
      Children nodes can either be BinaryTree nodes themeselves or Null  
      
Input
  1
  /     \
 2       3
/   \   /   \
4     5 6     7
/   \
8     9

Output - 16
*/

/********************** Reccursive Approch *******************/
// Time complexity O(n)T | Space complexity O(h)S -> because we h is the height of the bst and we have h number of function calls in our call stack

function nodeDepths(root, depth = 0) {
  if (root === null) return 0;
  return (
    nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1) + depth
  );
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;

/********************** Iterative Approch *******************/
// Time complexity O(n)T | Space complexity O(h)S

function nodeDepths(root) {
  // Write your code here.
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
