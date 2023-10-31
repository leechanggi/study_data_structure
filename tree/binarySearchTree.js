class BinarySearchTree {
	root = null;

	#insert(node, value) {
		if (value < node.value) {
			if (node.left) {
				this.#insert(node.left, value);
			} else {
				node.left = new Node(value);
			}
		} else {
			if (node.right) {
				this.#insert(node.right, value);
			} else {
				node.right = new Node(value);
			}
		}
	}

	insert(value) {
		if (!this.root) {
			this.root = new Node(value);
		} else {
			this.#insert(this.root, value);
		}
		// 숙제 : 같은 값을 넣은경우 Error 처리(alert, throw)
	}

	#search(node, value) {
		if (value < node.value) {
			this.#search(node.left, value);
		} else if (value > node.value) {
			this.#search(node.right, value);
		} else {
			return node;
		}
	}

	search(value) {
		if (value === this.root.value) {
			return this.root;
		} else {
			this.#search(this.root, value);
		}
	}
	remove(value) {}
}

class Node {
	left = null;
	right = null;
	constructor(value) {
		this.value = value;
	}
}

const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(7);
bst.insert(9);
bst.insert(5);
bst.insert(6);
bst.insert(3);
bst.insert(1);
bst.insert(8);
bst.insert(2);
bst.search(5);
