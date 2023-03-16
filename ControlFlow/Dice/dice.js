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

//1-6,2-5,4-3
let n = parseInt(readLine());
let N = 7 - n;
console.log(N);

// let n = parseInt(readLine());
// if (n==1){
//     console.log(6);
// }
// else if (n==2){
//     console.log(5);
// }
// else if (n==3){
//     console.log(4);
// }
// else if (n==4){
//     console.log(3);
// }
// else if (n==5){
//     console.log(2);
// }
// else if (n==6){
//     console.log(1);
// }

