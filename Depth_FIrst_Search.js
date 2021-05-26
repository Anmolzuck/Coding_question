/*
Ques- You're given a Node class that has a name  and an array of optional  children  nodes. When put together, nodes form
  an acyclic tree-like structure.
  Implement the depthFirstSearch  method on the NOde  class, which takes in an empty array, traverses the tree
  using the Depth-first Search approach (specifically navigating the tree from left to right), stores all of the nodes' names
 in the input array, and returns  it.

Input
       Graph = A
            /  |  \
            B   C   D
            / \     / \
            E   F   G   H
            / \   \
            I   J   K

 O/P - [A,B,E,F,I,J,C,D,G,K,H]
 */

/*************   Recurssive aprroach         ********* */
//O(V+E)T-->E since we had to make a for loop to traverse each child of every vertex V
//O(V)S-->we make V function calls for every V

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
