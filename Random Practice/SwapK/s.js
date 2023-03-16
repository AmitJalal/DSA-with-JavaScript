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

// METHOD without arrays

let num=readLine().split(" ")
let n=parseInt(num[0]);
let k=parseInt(num[1]);
let arr=readLine().split(" ")
//console.log(arr);
let temp=arr[k-1];
arr[k-1]=arr[n-k];
arr[n-k]=temp;
let res="";
for(let i=0;i<n;i++)
{
    let t=arr[i];
    res=res +t +" ";
}
console.log(res);

// METHOD with arrays-->

// function swapKthEle(arr, k) {
//     // let kthStart = arr[k-1];
//     // let kthEnd = arr[n-k];
//     let newArr = [...arr];
//     let temp = arr[k - 1]
//     newArr[k - 1] = arr[n - k];
//     newArr[n - k] = temp;
//     return newArr;
// }
// // input part
// let input = readLine().split(" ");
// let n = parseInt(input[0]);
// let k = parseInt(input[1]);
// let arrIn = readLine().split(" ");
// // convert arr list into integer
// function convertArrToNum() {
//     for (let i = 0; i < arrIn.length; i++) {
//         arrIn[i] = parseInt(arrIn[i]);
//     }
// }
// let intArr = convertArrToNum(arrIn);
// let swap = swapKthEle(arrIn, k);
// console.log(swap);



//another method

// function swapKthEle(arr, k) {
//     let temp = arr[k - 1]
//     arr[k - 1] = arr[n - k];
//     arr[n - k] = temp;
//     return arr;
// }

// // input part
// let input = readLine().split(" ");
// let n = parseInt(input[0]);
// let k = parseInt(input[1]);
// let arrIn = readLine().split(" ");
// let swap = swapKthEle(arrIn, k);
// console.log(swap);
