// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format


// let len =  parseInt(readLine());
// let inputArr = [];
// for(let i=0; i<len; i++){
// 	inputArr[i] = parseInt(readLine());
// }

// let res = [];

// for(let i=0; i<len; i++){
// 	let index = parseInt(readLine());
// 	if(inputArr[index]){
// 		[inputArr[i], inputArr[index]] = [inputArr[index], inputArr[i]];
// 	}
//     res.push(inputArr[index])
// }
// for(const ele of res) {
// 	console.log(ele)
// }




// function countVowels(str) {
// 	let mergedStr = str.split(" ").join("");
// 	mergedStr = mergedStr.toLowerCase();
// 	let count = new Map();

// 	for (const ele of mergedStr) {
// 		count.has(ele) ? count.set(ele, 1 + count.get(ele)) : count.set(ele, 1)
// 	}

// 	const vowels = { "a":0, "e":0, "i":0, "o":0, "u":0 };
// 	let countOfVowels = new Map();

//     for(let key in vowels){
// 		if(count.has(key) && count.get(key)>0) countOfVowels.set(key, count.get(key));
// 	}

// 	return countOfVowels;
// }

// console.log(countVowels("Hiiielloooaaa"));


let str = "abbaabaa";

let counts = {};

for (const ele of str) {
	counts[ele] ? counts[ele] += 1 : counts[ele]=1 ;
}
console.log(counts);