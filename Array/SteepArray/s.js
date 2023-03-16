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


const steepArr = list => {
    let last = n - 1, max = list[last], steepness = 0;

    for (let i = last; i >= 0; i--) {
        max = Math.max(max, list[i]);
        steepness += max - list[i];
    }

    return steepness;
}

let n = parseInt(readLine());
let list = readLine().trim().split(" ").map(Number);
console.log(steepArr(list));
