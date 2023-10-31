class Tree {
	constructor(value) {
		this.root = new Node(value);
	}
}

class Node {
	children = [];

	// binary tree : 탐색 기능 없음. 노드의 자식이 2개 이하 => 탐색 기능이 있는 경우 binary search tree
	// left = null;
	// right = null;

	constructor(value) {
		this.value = value;
	}

	push(value) {
		this.children.push(new Node(value));
	}
}

const tree = new Tree();
tree.root.push(0);
tree.root.push(1);
tree.root.children[0].push(0);
tree.root.children[0].push(1);
tree.root.children[1].push(0);
tree.root.children[1].push(1);
