/*
*******Node Depths******
The distance between a node in a Binary Tree and the tree's root is called the node's depth. 
Write a function that takes in a Binary Tree and returns the sum of its nodes' depths. 
Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or NONE/NULL. 
Optimal Space/Time Complexity: o(n)time and o(h)space - h is height of binary tree
EX:
"tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": "3", "value": 1},
      {"id": "2", "left": "4", "right": "5", "value": 2},
      {"id": "3", "left": "6", "right": "7", "value": 3},
      {"id": "4", "left": "8", "right": "9", "value": 4},
      {"id": "5", "left": null, "right": null, "value": 5},
      {"id": "6", "left": null, "right": null, "value": 6},
      {"id": "7", "left": null, "right": null, "value": 7},
      {"id": "8", "left": null, "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }
  output: 16
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": null, "right": null, "value": 2}
    ],
    "root": "1"
  }
  output: 1
  "tree": {
    "nodes": [
      {"id": "1", "left": "2", "right": null, "value": 1},
      {"id": "2", "left": "3", "right": null, "value": 2},
      {"id": "3", "left": "4", "right": null, "value": 3},
      {"id": "4", "left": "5", "right": null, "value": 4},
      {"id": "5", "left": "6", "right": null, "value": 5},
      {"id": "6", "left": "7", "right": null, "value": 6},
      {"id": "7", "left": "8", "right": null, "value": 7},
      {"id": "8", "left": "9", "right": null, "value": 8},
      {"id": "9", "left": null, "right": null, "value": 9}
    ],
    "root": "1"
  }
  output: 36
*/
/*
 ***** QUESTIONS *****
 WRITE QUESTIONS YOU'D ASK HERE - though AlgoExpert prompts give you most of the edge cases
 */
/* 
***** PSEUDOCODE *****
WRITE PSEUDOCODE HERE 
*/
function nodeDepths(root) {
	// Write your code here.
}
// This is the class of the input binary tree.
class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}