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
class InputReader {
	//implement the methods here 
	constructor(num, typeOfInput) {
		this.num = num;
		this.typeOfInput = typeOfInput;
	}
	readStrings(num) {
		let arr = [];
		for (let i = 0; i < num; i++) {
			arr.push(readLine());
		}
		for (let i = 0; i < num; i++) {
			console.log(i, arr[i]);
		}
	}

	readIntegers(num) {
		let arr = [];
		for (let i = 0; i < num; i++) {
			arr.push(parseInt(readLine()));
		}
		for (let i = 0; i < num; i++) {
			console.log(i, arr[i]);
		}
	}

	readFloats(num) {
		let arr = [];
		for (let i = 0; i < num; i++) {
			arr.push(parseFloat(readLine()).toFixed(2));
		}
		for (let i = 0; i < num; i++) {
			console.log(i, arr[i]);
		}
	}


};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
let NewInputReader = new InputReader();
if (typeOfInput === "string") {
	NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
	NewInputReader.readIntegers(num);
} else {
	NewInputReader.readFloats(num);
}