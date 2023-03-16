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

function matchMaker(len, g, b) {
    let girls = sort(g);
    let boys = sort(b).reverse();
    let match = 0;
    for (let i = 0; i < len; i++) {
        if (girls[i] % boys[i] === 0 || boys[i] % girls[i] === 0) match++;
    }
    return match;
}

// sorting girl heights in ascending order
function mergeSortedArray(arr1, arr2) {
    let res = [], i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        res.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        res.push(arr2[j])
        j++;
    }
    return res;
}

function sort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = sort(arr.slice(0, mid));
    let right = sort(arr.slice(mid));
    return mergeSortedArray(left, right);
}

//input
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
    let noOfGirlsOrBoys = parseInt(readLine());
    let girls = readLine().trim().split(" ").map(Number);
    let boys = readLine().trim().split(" ").map(Number);
    console.log(matchMaker(noOfGirlsOrBoys, girls, boys));
}