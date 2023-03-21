let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// flower sorting 
function flowerSort(arr, n) {
    for (let i = 1; i < n; i++) {
        let j = i - 1, key = arr[i];
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// input 
let n = parseInt(readLine());
let list = readLine().trim().split(" ").map(Number);
console.log(...flowerSort(list, n));