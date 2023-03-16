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


// TLE FIXME
// const ColorSort = arr => {
//     for(let i=0; i<arr.length; i++){
//         let key = arr[i], j=i-1;
//         while(j>=0 && key<arr[j]){
//             arr[j+1] = arr[j];
//             j= j-1;
//         }
//         arr[j+1] = key;
//     }
//     return arr;
// }

const swap = (arr , i , j) => {
    let temp =  arr[j] ;
    arr[j] = arr[i];
    arr[i] = temp;
}

const  ColorSort = arr => {
    let left = 0,right = arr.length-1, i= 0;
    while(i <= right){
        if(arr[i] == 0 ){ 
            swap(arr,i,left);
            left++;
            i++;
        } else if(arr[i] == 2 ){ 
            swap(arr,right,i);
            right--;
        } else{
            i++;
        }  
    }
    return arr;
}
let t = parseInt(readLine());
let arr = []
for(let i=0; i<t; i++){
  arr[i] = parseInt(readLine());
}
ColorSort(arr);

for(const ele of arr){
    console.log(ele);
}