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
let int = readLine();
let rev = 0;

if (int == 0 && int < 0) {
    console.log();

   else  {
        while (int > 0) {

            rev = parseInt((rev * 10) + int % 10);
            int = parseInt(int / 10);
        }
        console.log(rev)
    }
}
