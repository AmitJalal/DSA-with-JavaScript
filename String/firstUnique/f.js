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

function indexOfFirstUnique(map, s){
    let target=-1;
    for(const key of map.keys()){
        if(map.get(key)===1){
            target = key;
           break;
        }
    }
    for(let i=0; i<s.length; i++){
        if(target===s[i]) return i;
    }
    return target;
}

function firstUnique(s){
    let charFreq = new Map();
    for(const char of s){
        charFreq.has(char) ? charFreq.set(char, charFreq.get(char)+1) : charFreq.set(char, 1);
    }
    return indexOfFirstUnique(charFreq, s);
}

let n = parseInt(readLine());
for(let i=0; i<n; i++){
    let inputString = readLine().trim();
    console.log(firstUnique(inputString));
}



// function firstUnique(s){
//     let charFreq = new Map();
//     for(let char of s){
//         charFreq.has(char) ? charFreq.set(char, charFreq.get(char)+1) : charFreq.set(char, 1);
//     }

//     let found = [];
//     for(let [key, value] of charFreq){
//         if(value > 1) continue;
//         value === 1 ? found.push(key) : found.push(-1);
//     }

//     return found.length ? found[0] : -1;
// }