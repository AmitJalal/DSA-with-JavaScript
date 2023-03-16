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

let hash = {};

// feed arr1 elements to hash
let arr1 = parseInt(readLine());
for (let i = 0; i < arr1; i++) {
    let digit = parseInt(readLine());
    hash[digit] ? hash[digit] += 1 : hash[digit] = 1
}

// feed arr2 elements to hash
let arr2 = parseInt(readLine());
for (let i = 0; i < arr2; i++) {
    let digit = parseInt(readLine());
    hash[digit] ? hash[digit] += 1 : hash[digit] = 1
}

// feed arr3 elements to hash
let arr3 = parseInt(readLine());
for (let i = 0; i < arr3; i++) {
    let digit = parseInt(readLine());
    hash[digit] ? hash[digit] += 1 : hash[digit] = 1
}

//condition check whether the element occurred in all 3 arrays

let arr = []
for(let key in hash){
    if (hash[key]===3) {
            arr.push(key);
        }
}

if(arr.length ===0) console.log(0);
else{
    for(let ele of arr) console.log(ele);
}


// if (Object.values(hash) === 3) {
    // for (let key in hash) {
        // console.log(key[hash], "key[hash]");
        // console.log("\n \n");
    //     console.log(hash[key], "hash[key]");
    //     console.log("\n ");
    //     console.log(key, "key");
    //     console.log("\n ");
    // }
// }
// else console.log(0);
// console.log(Object.keys(hash))
// console.log(Object.values(hash));

// for(let [key, value] in hash){
//     console.log(key, value);
// }