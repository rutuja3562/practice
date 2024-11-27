//A LinkedList is a linear data structure where elements (or nodes) are stored
// in a sequence, and each node points to the next node in the list.
// linked lists do not have a fixed size

// Types of Linked Lists:

// Singly Linked List: Each node points to the next node, and the last node points
//  to null.

// Doubly Linked List: Each node contains two pointers: one to the next node and
// one to the previous node.

// Circular Linked List: The last node points back to the first node, forming a
// circle.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addNodeAtStart(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
    return `Node with value ${val} added at the start`;
  }

  addNodeAtEnd(val) {
    const newNode = new Node(val);

    if (this.head == null) {
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
    this.size++;
    return `Node with value ${val} added at the start`;
  }

  deleteNode(data) {
    // if (this.head === null) {
    //   return "Linked list must contains at least one node";
    // }
    // if (this.head.data === data) {
    //   this.head = this.head.data;
    //   return;
    // }
    // let curr = this.head;
    // while (curr.next !== null && curr.next.data !== data) {
    //   curr = curr.next;
    // }
    // if (curr.next !== null) {
    //   curr.next = curr.next.next;
    // }
    if (this.head === null) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next !== null) {
      current.next = current.next.next;
    }
  }

  printList() {
    let current = this.head;
    let output = "";
    while (current !== null) {
      output += current.value + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }
}
const list = new linkedList();

// Add node at start of linked List

list.addNodeAtStart(10);
list.addNodeAtStart(20);
list.addNodeAtStart(30);
list.addNodeAtStart(40);
list.printList();

// add node at last of linked list

list.addNodeAtEnd(50);
list.addNodeAtEnd(60);
list.addNodeAtEnd(70);
list.printList();
// Delete node from linked list

list.deleteNode(20);

list.printList();
