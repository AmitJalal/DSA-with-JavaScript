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

let testCases = parseInt(readLine());
for(let i=0; i<testCases; i++){
	let size = parseInt(readLine());
	let givenStr = readLine();

	let myMap = new Map();
	let result =0;

	for(let j=0; j<size; j++){
		if(myMap.has(givenStr[j])){
			result += myMap.get(givenStr[j]);
            console.log(result, "  result");
            console.log(myMap , "  inside if"); //Output 1
			myMap.set(givenStr[j], 1+myMap.get(givenStr[j]));
            console.log(myMap, "  after set map");  //Output 2
		}else{
			myMap.set(givenStr[j], 1+0);
            console.log(myMap, "   inside else");   //Output 3
		}
	}console.log(myMap);
	console.log(result);
}