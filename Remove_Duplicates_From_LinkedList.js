/*
Ques -  You're given the head of a Singly Linked List whose nodes are in sorted order
        with respect to their values. Write a function that returns a modified version
        of the Linked List that doesn't contain any nodes with duplicate values. The
        Linked List should be modified in place (i.e., you shouldn't create a brand
        new list), and the modified Linked List should still have its nodes sorted
        with respect to their values.

        Each linkedList node has an integer value as well as a next node
        pointing to the next node in the linked list or to Node/null if its the 
        tail of the linked list

        Input-
        linked list = 1->1->3->4->4->4->5->6->6

        Output-
        linked list = 1->3->4->5->6
*/

// O(n)T | O(1)S

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let current = linkedList;
  while (current !== null) {
    let nextDistinctNode = current.next;
    while (
      nextDistinctNode !== null &&
      nextDistinctNode.value === current.value
    ) {
      nextDistinctNode = nextDistinctNode.next;
    }
    current.next = nextDistinctNode;
    current = nextDistinctNode;
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
