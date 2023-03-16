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

let code = [".-", "-...", "-.-.",
    "-..", ".", "..-.", "--.",
    "....", "..", ".---",
    "-.-", ".-..", "--", "-.",
    "---", ".--.", "--.-", ".-.",
    "...", "-", "..-", "...-", ".--",
    "-..-", "-.--", "--.."];
for (let i = 0; i < testCases; i++) {
    let words = readLine().trim().split(" ");
    let resultSet = new Set();

    for (let j = 0; j < words.length; j++) {
        let morseCode = "";
        let currWord = words[j];
        for (let k = 0; k < currWord.length; k++) {
            morseCode += (code[currWord.charCodeAt(k) - 97]);
        }
        resultSet.add(morseCode);
    }
    console.log(resultSet.size);
}