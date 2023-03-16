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

let m = parseInt(readLine());
let matrix = [], revMatrix = [];

for (let i = 0; i < m; i++) matrix[i] = readLine().trim().split(" ");

let n = matrix[0].length, k = 0;

for (let i = 0; i < n; i++) revMatrix[i] = [];

for (let i = m - 1; i >= 0; i--) {
    k = 0;
    for (let j = 0; j < n; j++) revMatrix[k++].push(matrix[i][j]);
}

console.log(n);
for (const ele of revMatrix) console.log(...ele);