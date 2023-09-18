let example = `A*(B+C)`;
let input = example.toString().replace(/\s+/g, "");
let stack = [];

// 공백 제거, [A,*,[B,+,C]]

console.log(input);
