let example = `3`;
let input = example.toString().trim() * 1;

function solution(number) {
	let count = number;
	console.log(count);
	for (let i = 1; i < number; i++) {
		let pow = Math.pow(i, 3);
		let res = pow % count;
		console.log(pow, count, res);
		count--;
	}
	return count;
}

const answer = solution(input);
