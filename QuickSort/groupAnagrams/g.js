let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------


const groupAnagrams = strs => {
    strs.sort()
    const myMap = new Map();

    for (const word of strs) {
        const key = make_key(word);
        if (!myMap.has(key)) {
            myMap.set(key, []);
        }
        myMap.get(key).push(word);
    }

    let reqArr = Array.from(myMap.values());
    let arr = [];

    for (let i = 0; i < reqArr.length; i++) {
        for (let j = 0; j < reqArr[i].length; j++) {
            arr.push(reqArr[i][j])
        }
    }
    return arr;
};

function make_key(word) {
    return word.split('').sort().join('');
}
let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
    let len = parseInt(readLine());
    let list = readLine().trim().split(" ");
    console.log(groupAnagrams(list));
}