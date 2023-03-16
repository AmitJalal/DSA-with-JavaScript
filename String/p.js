let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// function insertionSort(arr){
//     //odd
//     for(let i = 1; i<arr.length; i++)
//     {
//         let j = i-1;
//         let key = arr[i];
//         while(j>=0 && key<arr[j]){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }
//     //even
//     for(let i = 1; i<arr.length; i++)
//     {
//         let j = i-1;
//         let key = arr[i];
//         while(j>=0 && key<arr[j]){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
//     }

//     return arr;
// }

// console.log(insertionSort([0, 2, 7, 4, 1, 5, 3]));
//  let num = "ab";
//  let num2 = "a";

//  console.log(num.charAt(1), num2.charCodeAt());
//  console.log(num.at(0));





