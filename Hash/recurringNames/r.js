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
const k = parseInt(readLine());
const peopleInTown = readLine().trim().split(" ");
let map = new Map();
for (const names of peopleInTown) {
    map.has(names) ? map.set(names, map.get(names) + 1) : map.set(names, 1);
}

let reqNames = [];
for (let [key, value] of map) {
    if (value > k) reqNames.push(key);
}
reqNames.sort();

if (!reqNames.length) {
    console.log('no such names in this town!!!');
}
else {
    for (const ele of reqNames) {
        console.log(ele);
    }
}
