export class BinarySearchTree {
	root = null;
	lenght = 0; // 숙제

	#insert(node, value) {
		if (value < node.value) {
			if (node.left) {
				this.#insert(node.left, value);
			} else {
				node.left = new Node(value);
			}
		} else if (value > node.value) {
			if (node.right) {
				this.#insert(node.right, value);
			} else {
				node.right = new Node(value);
			}
		} else {
			throw new Error('중복된 값은 넣을 수 없습니다.');
		}
	}

	insert(value) {
		if (!this.root) {
			this.root = new Node(value);
		} else {
			this.#insert(this.root, value);
		}
	}

	#search(node, value) {
		if (value < node.value) {
			if (!node.left) {
				return null;
			}
			if (value === node.left.value) {
				return node.left;
			}
			return this.#search(node.left, value);
		} else {
			if (!node.right) {
				return null;
			}
			if (value === node.right.value) {
				return node.right;
			}
			return this.#search(node.right, value);
		}
	}

	search(value) {
		if (!this.root) {
			return null;
		}
		if (value === this.root.value) {
			return this.root;
		}
		return this.#search(this.root, value);
	}

	#remove(node, value) {
		if (!node) {
			return null;
		}

		if (value === node.value) {
			// 자식
			if (!node.left && !node.right) {
				return null;
			} else if (!node.right) {
				return node.left;
			} else if (!node.left) {
				return node.right;
			} else {
				let exchange = node.left;
				while (exchange.right) {
					exchange = exchange.right;
				}
				const temp = node.value;
				node.value = exchange.value;
				exchange.value = temp;
				node.left = this.#remove(node.left, temp);
				return node;
			}
		} else {
			// 부모
			if (value < node.value) {
				node.left = this.#remove(node.left, value);
				return node;
			} else {
				node.right = this.#remove(node.right, value);
				return node;
			}
		}
	}

	remove(value) {
		// 1, leaf(양팔 다 없음) => 제거
		// 2, left만 있음 => left로 대체
		// 3, right만 있음 => right로 대체
		// 4, 양팔 다 있음 => left의 가장 큰 값(가장 오른쪽 값)으로 대체
		this.root = this.#remove(this.root, value);
	}
}

class Node {
	left = null;
	right = null;
	constructor(value) {
		this.value = value;
	}
}

// const bst = new BinarySearchTree();

// bst.insert(4);
// bst.insert(7);
// bst.insert(9);
// bst.insert(5);
// bst.insert(6);
// bst.insert(3);
// bst.insert(1);
// bst.insert(8);
// bst.insert(2);
// bst.remove(6);
// console.log(bst.search(6));
// console.log(bst.search(5));
// console.log(bst.root);

// const bst2 = new BinarySearchTree();

// bst2.insert(50);
// bst2.remove(50);
// bst2.remove(1);
// console.log(bst2.search(50));
// console.log(bst2.root);
