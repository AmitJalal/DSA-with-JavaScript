let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const { resourceLimits } = require("worker_threads");
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
let list = readLine().trim().split(" ").map(Number);
let maxScore = list[0];
let minScore = list[0];
let maxCount = 0;
let minCount = 0;

let set = new Set(list); // unique

for (const val of set) {
    if (val > maxScore) {
        maxCount++;
        maxScore = val;
    }
    if (val < minScore) {
        minCount++;
        minScore = val;
    }
}
console.log(maxCount, minCount);






// let n = parseInt(readLine());
// let arr = readLine().trim().split(" ").map(Number);
// let minimum = arr[0];
// let maximum = arr[0];
// let mincnt = 0;
// let maxcnt = 0;
// for (let i = 0; i < n; i++) {
    //     if (arr[i] > maximum) {
        //         maximum = arr[i];
        //         maxcnt++;
        //     }
//     if (arr[i] < minimum) {
    //         minimum = arr[i];
    //         mincnt++;
//     }
// }
// let s = "";
// s += maxcnt + " " + mincnt;
// console.log(s);


// let maxScore = list[0];
// let minScore = list[0];

// for (let i = 1; i < testCases; i++) {
//     if (list[i] > maxScore) {
//         maxCount++;
//         maxScore = list[i];
//     }
//     if(list[i]< minScore) {
//         minCount++;
//         minScore = list[i];
//     }
// }
// console.log(maxCount, minCount);