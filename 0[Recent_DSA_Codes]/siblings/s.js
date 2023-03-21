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

let [people, query] = readLine().split(' ').map(Number);

let numberAssociated = readLine().split(' ').map((ele) => +ele.split('').reverse().join(''));

while (query > 0) {
  const [ele1, ele2] = readLine().split(' ').map(Number);

  if (numberAssociated[ele1] == numberAssociated[ele2].toString().split('').reverse().join('')) console.log('Siblings');
  else console.log('Not Siblings');
  query--;
}

// console.log(people, query)

// console.log(numberAssociated)

// let str = "10120"
// console.log(+str.split("").reverse().join(""))

// console.log(numberAssociated[ele1].toString().split("").reverse().join(""))
// console.log(numberAssociated[ele2].toString().split("").reverse().join(""))
