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


function reversedString(string){
    let res = " "
    for(let i=string.length-1; i>=0; i--){
       res+= string[i]
    }
    return res;
}
let n = parseInt(readLine());
for(let i=0; i<n; i++){
    let string = readLine();
    console.log(reversedString(string));
}




// function rotatearray(arrElement,rotatetime){
//     for(i=0;i<rotatetime;i++){
//         let x = arrElement.pop()
//         arrElement.unshift(x)
//     }
//     return rotatearray
// }
// let arrElement =readLine().split(" ")
// let rotatetime=parseInt(readLine())
// let rotate = rotatearray(arrElement, rotatetime)
// for(element of arrElement){
//   console.log(element)
// }