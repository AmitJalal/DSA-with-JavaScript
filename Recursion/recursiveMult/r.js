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

function product(n){
    	if (n===0) return 0;
        if (n<0) return -1 * prodOfDigits(n);
        return prodOfDigits(n);
}

function prodOfDigits(n){
    if (n===0) return 1;
	return (n%10) * prodOfDigits(parseInt(n/10));
}

let n = parseInt(readLine());
for(let i=0; i<n; i++){
    let num = parseInt(readLine());
    console.log(product(num));
}