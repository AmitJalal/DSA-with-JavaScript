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

//Fn for maxConsecutiveVowels
function maxConsecutiveVowels(str) {
  let vowel = new Set(['a', 'e', 'i', 'o', 'u']), prevCount = 1, count = 0;
  if(str.length == 1 && vowel.has(str[0])) return 1;

  let i = 0, j = 1;
  while (j < str.length) {
  
    if (str[i] == str[j] && vowel.has(str[i])) {
      prevCount++;
      count = Math.max(prevCount, count);
    } else {
      prevCount = 1
      i = j;
    }
    j++;
  }

  return count;
}

//input
let testCases = parseInt(readLine());

while (testCases > 0) {
  let str = readLine();
  console.log(maxConsecutiveVowels(str));
  testCases--;
}
