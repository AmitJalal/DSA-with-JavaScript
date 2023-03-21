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

function frequencySort(arr) {
    let freq = new Map();
    for (const ele of arr) {
        freq.set(ele, freq.get(ele) + 1 || 1);
    }

    freq = new Map([...freq.entries()].sort((a, b) => a[1] - b[1] || b[0] - a[0]));

    let i = 0;
    for (let [key, val] of freq) {
        while (val > 0) {
            arr[i] = key;
            i++;
            val -= 1;
        }
    }
    return arr;
}

let t = parseInt(readLine());

for (let i = 0; i < t; i++) {
    let size = parseInt(readLine());
    let list = readLine().split(" ").map(Number);
    console.log(...frequencySort(list));
}
