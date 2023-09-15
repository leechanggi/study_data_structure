let example = `abcd
3
P x
L
P y`;

let input = example.trim().split("\n");
let [str, n, ...commands] = input;
let values = str.trim().split("");

const findCursor = value => {
	return value.indexOf("|");
};

const moveLeft = (value, index) => {
	if (index > 0) {
		value.splice(index, 1);
		value.splice(index - 1, 0, "|");
	}
	return value;
};

const moveRight = (value, index) => {
	if (index > 0) {
		value.splice(index, 1);
		value.splice(index + 1, 0, "|");
	}
	return value;
};

const removeStr = (value, index) => {
	if (index > 0) {
		value.splice(index, 1);
		value.splice(index - 1, 1, "|");
	}
	return value;
};

const addStr = (value, index, str) => {
	if (index > 0) {
		value.splice(index, 1);
		value.splice(index, 0, str);
		value.splice(index + 1, "|");
	} else {
	}
	return value;
	// index가 0일 경우 무시
	// index + 1, splice
};

const removeCursor = () => {};

// 인자값은 항상 전달해야함. 마지막의 반환은 |을 삭제
// 시간복잡도를 O(n)으로

values.push("|");
console.log(values);
values = moveLeft(values, findCursor(values));
console.log(values);
values = moveRight(values, findCursor(values));
console.log(values);
values = removeStr(values, findCursor(values));
console.log(values);
values = addStr(values, findCursor(values), "z");
console.log(values);
