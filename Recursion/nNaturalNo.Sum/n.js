let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
	idx++;
	return data[idx - 1];
}

function sumOfFirstN(n){
	//Implement this function
	if(n===1) return 1;
	return n + sumOfFirstN(n-1);
}

let n = parseInt(readLine());
console.log(sumOfFirstN(n)); 

