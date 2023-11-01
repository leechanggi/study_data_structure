import { BinarySearchTree } from './binarySearchTree.js';
import { Queue } from '../stackQueue/queue.js';
import { Stack } from '../stackQueue/stack.js';

// 너비 우선 탐색(BFS)
function bfs(tree) {
	const queue = new Queue();
	queue.enqueue(tree.root);
	while (queue.length > 0) {
		const node = queue.dequeue();
		console.log(node.value);
		if (node.left) {
			queue.enqueue(node.left);
		}
		if (node.right) {
			queue.enqueue(node.right);
		}
	}
}

// 깊이 우선 탐색(DFS) = PreOrder
function dfs(tree) {
	const stack = new Stack();
	stack.push(tree.root);
	while (stack.length > 0) {
		const node = stack.pop();
		console.log(node.value);
		if (node.right) {
			stack.push(node.right);
		}
		if (node.left) {
			stack.push(node.left);
		}
	}
}

// InOrder
function inOrder(tree) {
	inOrder(root.left);
	console.log(root.value);
	inOrder(root.right);
}

// PostOrder
function postOrder(tree) {}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);

// bfs(bst);
// bst;

// dfs(bst);
// bst;
