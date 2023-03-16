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

//function for rotating matrix clockwise --> O(n) tc and sc &&
// pop in arrays or objects access the elements in O(1)
function rotateArrClockWise(arr, m) {
  let num = 0;
  let poppedArr = [];
  let i = 0;

  while (i < m) {
    num = arr.pop()
    poppedArr.push(num);
    i++;
  }

  let poppedNum = poppedArr.reverse();
  let desiredRes = poppedNum.concat(arr);
  return desiredRes;
}

//input taking part
//input array list
let inputArr = readLine().split(" ");
//convert into integer
for (let i = 0; i < inputArr.length; i++) {
  inputArr[i] = parseInt(inputArr[i]);
}
//input number for rotation
let m = parseInt(readLine());

let rotatedArr = rotateArrClockWise(inputArr, m);

//output process in the given format 
function outInNextLines(rotatedArr){
  for (ele of rotatedArr) {
    console.log(ele);
  }
}
let answer= outInNextLines(rotatedArr);

