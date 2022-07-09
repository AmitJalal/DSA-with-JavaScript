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
let grades = [];
for (let i = 0; i < testCases; i++) {
    grades[i] = parseInt(readLine());
}
let roundGrades = [...grades];
for (let i = 0; i < testCases; i++) {
    for (let j = 0; j < 5; j++) {
        roundGrades[i] += 1;
        if (roundGrades[i] % 5 == 0) break;
    }
}

for (let index = 0; index < testCases; index++) {
    if (grades[index] < 38) {
        roundGrades[index] = grades[index];
    }
    else {
        let difference = roundGrades[index] - grades[index];
        if (difference >= 3) {
            roundGrades[index] = grades[index];
        }
    }
}
for (let ele of roundGrades) {
    console.log(ele);
}