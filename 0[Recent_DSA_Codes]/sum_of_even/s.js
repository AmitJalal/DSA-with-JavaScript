let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let n = parseInt(readLine());

let list = readLine().trim().split(" ").map(Number);

let sum = 0;
for(let i=0; i<n; i++) {
	if(list[i] % 2 == 0) sum += list[i];
}
console.log(sum)