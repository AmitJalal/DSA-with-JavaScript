let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function findLuckyNumber(nums) {
    // implement this function
    let luckyNum = 0;
    let i = 0;
    let j = 1;
    let count = 1;
    while (j < nums.length) {
        if (nums[i] == nums[j]) {
            count++;
            luckyNum += count;
        }
        else if (nums[i] != nums[j]) count = 0;
        i++;
        j++;
    }
    if (count == nums[i]) luckyNum = nums[i];
    return luckyNum !== 0 ? luckyNum : -1;
}
// DO NOT change anything below this line
let numElems = parseInt(readLine());
let inputArr = [];
for (let index = 0; index < numElems; index++) {
    inputArr.push(parseInt(readLine()));
}
console.log(findLuckyNumber(inputArr));