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
console.log(list.addNodeAtStart(10));
// list.addNodeAtStart(20);
// list.addNodeAtStart(30);
// list.addNodeAtStart(40);
list.addNodeAtEnd(20);
list.addNodeAtEnd(30);
list.addNodeAtEnd(40);
list.printList();
