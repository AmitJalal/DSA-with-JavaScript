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

let input = readLine();

let map  = {};
for(let i=0; i<input.length; i++){
    map[input[i]] ? map[input[i]]+=1 : map[input[i]] = 1
}
let count = Object.values(map)
count = Math.min(count[0], count[1])
console.log(count);