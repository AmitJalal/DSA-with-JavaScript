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


let n = parseInt(readLine());
let list = readLine().split(" ");
let len = list.length;

let hash = {}

for (let i = 0; i < len; i++) {
    let letter = list[i];
    hash[letter] ? hash[letter] += 1 : hash[letter] = 1;
}
let arr = [];
for (let key in hash) {
    if (hash[key] > n) arr.push(key);
}

if (arr.length == 0) {
    console.log("no such names in this town!!!");
}

else {
    arr.sort();
    for (x of arr)
        console.log(x);
}


// console.log(hash);


// let n = parseInt(readLine());
// let line = readLine().split(" ");
// let mapDict = new Map();
// for(str of line){
//     if(mapDict.has(str)){
//         mapDict.set(str, mapDict.get(str)+1);
//     }
//     else
//     mapDict.set(str, 1);
// }
// let arr = [];
// for(key of mapDict.keys()){
//     if(mapDict.get(key)>n){
//         arr.push(key);
//     }
//     // console.log(val);
// }
// if(arr.length==0){
//     console.log("no such names in this town!!!");
// }
// else{
//     arr.sort();
//     for(x of arr)
//     console.log(x);
// }



// let n = parseInt(readLine())
// let string = readLine()
// let hash = {}
// for (let str of string) {
// 	if (hash[str]) {
// 		hash[str] += 1
// 	} else {
// 		hash[str] = 1
// 	}
// }

// let sum = 0;
// for (let key in hash) {
// 	sum += hash[key];
// }

// console.log(hash);
// console.log(sum);