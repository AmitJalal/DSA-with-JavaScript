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


// A || B can sit
// same grp <= 2   
//-->  valid arrangement = aabaabba
// size of panel = N  

// let n = parseInt(readLine());
let list = readLine();
let len = list.length
let hash = new Map()
// const a = new Map();
console.log(hash);
for(let i=0; i<len; i++){
	let letter = list[i];
	hash[letter] ? hash[letter] += 1 : hash[letter] = 1;	
	
}
console.log();
let sum = 0;
for(let key in hash){
   sum += hash[key];
}

console.log(hash);
console.log(sum);