// let example = `A*(B+C)`;
// let input = example.toString().trim().split("\n");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [string] = input;

function calc(string) {
	const split = string.split("");
	const stack = [];
	let answer = "";

	for (let i = 0; i < split.length; i++) {
		const e = split[i];

		if (e === "(") {
			stack.push(e);
		} else if (e === ")") {
			while (stack.length && stack[stack.length - 1] !== "(") {
				answer += stack.pop();
			}
			stack.pop();
		} else if (e === "*" || e === "/") {
			while ((stack.length && stack[stack.length - 1] === "*") || stack[stack.length - 1] === "/") {
				answer += stack.pop();
			}
			stack.push(e);
		} else if (e === "+" || e === "-") {
			while (stack.length && stack[stack.length - 1] !== "(") {
				answer += stack.pop();
			}
			stack.push(e);
		} else {
			answer += e;
		}
	}

	while (stack.length) {
		answer += stack.pop();
	}
	return answer;
}

const answer = calc(string);
console.log(answer);
