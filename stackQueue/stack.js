class Stack {
	arr = [];
	push(value) {
		return this.arr.push(value);
	}
	pop() {
		return this.arr.pop();
	}
	top() {
		return this.arr.at(-1);
	}
	get length() {
		return this.arr.length;
	}
}

const stack = new Stack();
stack.push('일');
stack.push('이');
stack.push('삼');
stack.push('사');
stack.push('오');
stack.pop();
stack.top();

// linkedList.js의 코드를 참고하여 Stack 클래스를 구현하세요.
