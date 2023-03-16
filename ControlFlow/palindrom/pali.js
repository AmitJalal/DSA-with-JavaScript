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
let int = parseInt(readLine());
let rev = 0;

for (let i=0;  i<=int; i++){

    rev = parseInt(rev * 10) + parseInt(int % 10);
	int = parseInt(int / 10);
   
	
}

console.log(rev);