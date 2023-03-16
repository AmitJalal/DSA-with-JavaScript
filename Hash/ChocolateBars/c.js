let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

//----------------------------------------

let n = parseInt(readLine());
let inputList = readLine().trim().split(" ").map(Number);

function numOfDivisorOfX(arr) {

	let count = 0;
	for (let i = 1; i <= Math.sqrt(arr); i++) {
		if (arr % i === 0) {
			i === parseInt(arr / i) ? count += 1 : count += 2;
		}
	}
	return count;
}

let map = {};

for (let i = 0; i < n; i++) {
	let x = numOfDivisorOfX(inputList[i]);
	map[x] ? map[x] += 1 : map[x] = 1;  
}

console.log(map);
let differentTypesOfChocolate = 0;
for (let key in map) {
    console.log(key);
	differentTypesOfChocolate += parseInt((map[key] * (map[key] - 1)) / 2);
}


console.log(differentTypesOfChocolate);