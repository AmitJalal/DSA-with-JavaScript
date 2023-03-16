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
let list = readLine().trim().split(" ").map(Number);

//finding the max ele
let max = -Infinity, maxIndex = 0;
for (let i = 0; i < n; i++) {
    if (list[i] >= max) {
        max = list[i];
        maxIndex = i;
    }
}
//finding the min ele
let min = +Infinity, minIndex = 0;
for (let i = 0; i < n; i++) {
    if (list[i] < min) {
        min = list[i];
        minIndex = i;
    }
}

// conditonal swapping
// if (maxIndex > minIndex) {
//     list[maxIndex] = min
//     list[minIndex] = max;
// } 

let beautifullness = 0;
let j = 1;
for (let i = 0; i < n; i++) {
    beautifullness += Math.abs(list[i] - j);
    j++;
}
console.log(list);
console.log(beautifullness);

// let count = 0;
// for (let i = 0; i < n; i++) {
//     if (count === 0) {
//         if (list[i] < max) {
//             list[maxIndex] = list[i];
//             list[i] = max;
//             count++;
//         }
//     }
// }
