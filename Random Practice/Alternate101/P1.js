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
let elements = readLine().split(" ");
function eleToNum(elements) {
    for (let i = 0; i < n; i++) {
        elements[i] = parseInt(elements[i])
    }
    return elements;
}
eleToNum(elements);
let sum = 0;
for (let i = 0; i < n; i+=2) {
    sum += elements[i];
}
console.log(sum);
