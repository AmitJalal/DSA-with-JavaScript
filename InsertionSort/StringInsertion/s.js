let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function stringInsertionSort(str) {
    for (let i = 1; i < str.length; i++) {
        let j = i - 1, key = str[i];

        while (j >= 0 && key < str[j]) {
            str[j + 1] = str[j];
            j--; //decrements the value of j by 1 (j = j - 1)
        }
        str[j + 1] = key;
    }
    return str.join("");
}



//DO NOT CHANGE ANYTHING BELOW THIS LINE

let string = readLine().trim();
console.log(stringInsertionSort(string.split("")));
