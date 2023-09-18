let example = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`;
let input = example.toString().split("\n");

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let left = input[0].split("");
let right = [];
let n = parseInt(input[1]);

for (let i = 2; i < n + 2; i++) {
	let [c, v] = input[i].split(" ");
	if (c === "L" && left.length) right.push(left.pop());
	else if (c === "D" && right.length) left.push(right.pop());
	else if (c === "B") left.pop();
	else if (c === "P") left.push(v);
}

let answer = left.join("");
answer += right.reverse().join("");
console.log(answer);
