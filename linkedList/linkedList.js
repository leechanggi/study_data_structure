class LinkedList {
	length = 0;
	head = null;
	tail = null;

	add(value) {
		if (this.head) {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = new Node(value);
			current.next.prev = current;
			this.tail = current.next;
		} else {
			this.head = new Node(value);
		}
		this.length++;
		return this.length;
	}

	search(index) {
		return this.#search(index)[1]?.value;
	}

	#search(index) {
		let count = 0;
		let prev;
		let current = this.head;
		while (count < index) {
			prev = current;
			current = current?.next;
			count++;
		}
		return [prev, current];
	}

	remove(index) {
		const [prev, current] = this.#search(index);
		if (prev && current) {
			prev.next = current.next;
			this.length--;
			return this.length;
		} else if (current) {
			// index가 0일 때
			this.head = current.next;
			this.length--;
			return this.length;
		}
		// 삭제하고자 하는 대상이 없을 때
		// 아무것도 안 함
	}
}

class Node {
	prev = null;
	next = null;
	constructor(value) {
		this.value = value;
	}
}

const ll = new LinkedList();
ll.add('일'); // 1
ll.add('이'); // 2
ll.add('삼'); // 3
ll.add('사'); // 4
ll.add('오'); // 5
ll.add('육'); // 6
ll.search(6); // undefined
ll.remove(4);
ll.search(4); // 6;
ll.remove(4);
ll.search(4); // undefined
ll.remove(4); // undefined

// prev 추가
// 삽입을 O의 1으로 만들기
