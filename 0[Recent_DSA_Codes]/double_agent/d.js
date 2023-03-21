let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

let noOfPlanets = parseInt(readLine());

let list = readLine().trim().split(" "), max = 0, map = new Map();

for (let i = 0; i < noOfPlanets; i++) list[i] = list[i].split("").sort().join("");

for (let ele of list) {
    map.has(ele) ? map.set(ele, map.get(ele) + 1) : map.set(ele, 1);
}

max = Math.max(...map.values())
console.log(max);
