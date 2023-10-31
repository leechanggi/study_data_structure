class Queue {
	arr = [];
	enqueue(value) {
		return this.arr.push(value);
	}
	dequeue() {
		return this.arr.shift();
	}
	peek() {
		return this.arr[0];
	}
	get length() {
		return this.arr.length;
	}
}

const queue = new Queue();
queue.enqueue('일');
queue.enqueue('이');
queue.enqueue('삼');
queue.enqueue('사');
queue.enqueue('오'); // 5
console.log(queue.length); // 5
queue.dequeue(); // 1
console.log(queue.peek()); // 3

// linkedList.js의 코드를 참고하여 Queue 클래스를 구현하세요.
