let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



function isEditDistanceOne(string1, string2) {
    // Complete this function, and return True/False
    let m = string1.length, n =string2.length;
    let len = Math.max(m, n);

    let editCount = 0;
    for (let i = 0; i < len; i++) {
        if (string1[i] !== string2[i]) editCount++;
    }

    return editCount === 1 ? "True" : "False";
}

let testCase = parseInt(readLine());
for (let i = 0; i < testCase; i++) {
    let [input_string1, input_string2] = readLine().trim().split(" ")
    console.log(isEditDistanceOne(input_string1, input_string2))
}