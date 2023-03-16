let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let userInput = readLine().split(" ");
let N = parseInt(userInput[0]);
let K = parseInt(userInput[1]);
let diff = Math.abs((K - (N % K)) - (K - (K - (N % K))));
if (N % K == 0) {
	console.log(0);
}
else {
	console.log(diff);
}