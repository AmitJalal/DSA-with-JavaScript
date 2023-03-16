let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

//sliding window O(n)
function compressString(s) {
  let i = 0, result = "";

  while (i < s.length) {
    let j = i + 1, count = 1;
    result += s[i];

    while (j < s.length && s[i] === s[j]) {
      count++;
      j++;
    }
    if (s[j] !== s[i]) {
      if (count > 1) result += count;
      i = j;
    }
  }
  return result;
}

//input part:
let t = parseInt(readLine())
for (let i = 0; i < t; i++) {
  st = readLine().trim();
  console.log(compressString(st));
}




//FIXME leetcode soln:
function compress(chars) {
  let i = 0, result = "";
  while (i < chars.length) {
    let j = i + 1, count = 1;
    result += chars[i];

    while (j < chars.length && chars[i] === chars[j]) {
      count++;
      j++;
    }
    if (chars[j] !== chars[i]) {
      if (count > 1) {
        result += count;
      }
      i = j;
    }
  }
  let compressed = [...result];
  return compressed;
}
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));



