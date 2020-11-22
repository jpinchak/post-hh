/*
Reverse a linked list
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

const reverseLL = head => {
  let curr = head;
  let prev = null;
  let tempNext = null;
  while(curr) {
    tempNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNext;
  }
  return prev;
}

// 1 => 2 => 3
// want to be 3 => 2 => 1

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;
console.log(node1);

const ll = new LinkedList();
ll.head = node1;
ll.tail = node3;

console.log(ll);

console.log(reverseLL(node1));