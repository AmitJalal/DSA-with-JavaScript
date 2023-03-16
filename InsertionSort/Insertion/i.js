let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function Convert_to_number(list){
  for(let each in list){
    list[each]=Number(list[each])
  }
}


function insertionSort(arr, n){
  // write from here
  for(let i=1; i<n; i++){
    let key = arr[i], j=i-1;

    while(j>=0 && key<arr[j]){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
  }
  return arr;
}
// DO NOT EDIT ANYTHING BELOW THIS LINE

let n = parseInt(readLine())
let arr = readLine().trim().split(" ")
Convert_to_number(arr)
insertionSort(arr, n);
console.log(...arr)