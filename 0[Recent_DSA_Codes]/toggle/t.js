let fs = require('fs');
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//function to toggle the string
function toggleString(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i).toUpperCase())
      res += str.charAt(i).toLowerCase(str[i]);
    else res += str.charAt(i).toUpperCase(str[i]);
  }
  return res;
}

// input
let string = readLine();

console.log(toggleString(string));
