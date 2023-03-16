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

let testCases = parseInt(readLine());
let bulb = "OFF";
let count = 0;
for (let i = 0; i < testCases; i++) {
    let instruction = readLine().trim();
    if (instruction === "OFF") bulb = "OFF";
    if (instruction === "ON" && bulb === "OFF") {
        count++;
        bulb = "ON";
    }
    if (instruction === "Toggle") {
        if (bulb === "OFF") {
            count++;
            bulb = "ON";
        }
        else bulb = "OFF";
    }
}

console.log(count);