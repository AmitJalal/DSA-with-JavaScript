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


const SnapShot = (x1, v1, x2, v2) => {
	if (v1 < v2)  return "NO";
	else if ((x2 - x1) % (v1 - v2) === 0)  return "YES";
	return "NO";
}

let t = parseInt(readLine());
for (let i = 0; i < t; i++) {
	let [x1, v1, x2, v2] = readLine().trim().split(' ').map(Number);
	console.log(SnapShot(x1, v1, x2, v2));
}

