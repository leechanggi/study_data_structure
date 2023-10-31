class BinarySearchTree {
	root = null;

	#insert(node, value) {
		if (node.value > value) {
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
		// 어떤 값을 넣으려할때, 일단 어디에 넣을지 모르겠다.
		// 그래서 왼팔, 오른팔한테 맡긴다.
		// 근데 만약 왼팔, 오른팔이 없으면 거기에다가 넣는다.

		if (!this.root) {
			this.root = new Node(value);
		} else {
			this.#insert(this.root, value);
		}

		// 숙제 : 같은 값을 넣은경우 Error 처리(alert, throw)

		// if (this.root.value > value) {
		// 	// 루트노드보다 작은 경우
		// 	this.#insert(this.root.left, value);
		// } else {
		// 	// 루트노드보다 큰 경우
		// 	this.#insert(this.root.right, value);
		// }
	}

	search(value) {}
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
