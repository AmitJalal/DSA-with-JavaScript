let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

const splitGrains = (list) => {
  let leftSum = 0,totalSum = 0,index = 0,res = [];

  for (const ele of list) totalSum += ele;

  for (const ele of list) {
    if (totalSum === leftSum) break;
    (leftSum += ele), (totalSum -= ele), index++;
  }

  while (index < list.length) {
    res.push(list[index]);
    index++;
  }
  return res;
};

let testCases = parseInt(readLine());
for (let i = 1; i <= testCases; i++) {
  let list = readLine().trim().split(" ").map(Number).sort((a, b) => a - b);
  console.log(i);
  console.log(...splitGrains(list));
}

//testing other implementations --> to be fixed
// while (index < list.length) {
// 	res += list[index] + " "
// 	index++;
// }
// return res.split(" ").filter(element => element !== '').map(Number);
