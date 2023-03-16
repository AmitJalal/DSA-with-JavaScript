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

//refractored solution:
function isLongPressedName(name, typed) {
    if (name.length > typed.length) return "False";
    let i = 0, j = 0;

    while (j < typed.length) {
       if(i < name.length && name[i]===typed[j]) i++;

       else if(j===0 || typed[j] !== typed[j-1]) return "False";

        j++;
    }
    return (i === name.length) ? "True" : "False";
};

// input part;
const testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
    const [name, typed] = readLine().trim().split(" ");
    console.log(isLongPressedName(name, typed));
}


// const testCases = parseInt(readLine());
// for(let i=0; i<testCases; i++){
// const [name, typed] = readLine().trim().split(" ");

// //name frequency Fn
// const nameCharCount = name => {
//     const nameMap = {};
//     for(let char of name){
//         nameMap[char] = (nameMap[char] || 0) + 1;
//     }
//     return nameMap;
// }
// console.log(nameCharCount(name));

// //typed frequency Fn
// const typedCharCount = typed => {
//     const typedMap = {};
//     for(let char of typed){
//         typedMap[char] ? typedMap[char]+=1 : typedMap[char]=1;
//     }
//     return typedMap;
// }
// console.log(typedCharCount(typed));



// }

// ---> Two pointer Approach;

// function isLongPressedName(name, typed) {

//     if (name.length > typed.length) return "False";

//     let i = 0, j = 0;

//     while (i < name.length && j < typed.length) {
//         let nameChar = name[i];
//         let typedChar = typed[j];

//         if (nameChar !== typedChar) return "False";

//         let nameCharCount = 0, typedCharCount = 0;

//         while (i < name.length && name[i] === nameChar) {
//             i++;
//             nameCharCount++;
//         }
//         while (j < typed.length && typed[j] === typedChar) {
//             j++;
//             typedCharCount++;
//         }

//         if (typedCharCount < nameCharCount) return "False";
//     }

//     return ((i === name.length) && (j === typed.length)) ? "True" : "False";
// }

//input part;
// const testCases = parseInt(readLine());
// for (let i = 0; i < testCases; i++) {
//     const [name, typed] = readLine().trim().split(" ");
//     console.log(isLongPressedName(name, typed));
// }



//--> FIXME
// const noOfTestCases = parseInt(readLine());
// for (let i = 0; i < noOfTestCases; i++) {
//     let testCase = readLine().trim().split(" ");
//     let name = testCase[0];
//     let typedName = testCase[1];
//     let longPress = "True";
//     let sketchName = new Map();
//     let sketchTyped = new Map();

//     if (typedName.length < name.length || name[0] != typedName[0] || name[name.length - 1] != typedName[typedName.length - 1]) {
//         longPress = "False";
//     }
//     else {
//         for (let j = 0; j < typedName.length; j++) {
//             // let char = name[j];
//             // sketchName.has(char) ? sketchName.set(char, sketchName.get(char) + 1) : sketchName.set(char, 1);
//             if (j < name.length) {
//                 if (sketchName.has(name[j])) {
//                     sketchName.set(name[j], 1 + sketchName.get(name[j]));
//                 }
//                 else {
//                     sketchName.set(name[j], 1);
//                 }
//             }
//             if (sketchTyped.has(typedName[j])) {
//                 sketchTyped.set(typedName[j], 1 + sketchTyped.get(typedName[j]));
//             }
//             else {
//                 sketchTyped.set(typedName[j], 1);
//             }
//         }
//         if (sketchName.Size != sketchTyped.Size) {
//             longPress = "False";
//             // console.log(sketchName.size,sketchTyped.size);
//         }
//         else {
//             let keys = sketchName.keys();
//             //  console.log(keys.next().value);
//             for (let k = 0; k < sketchTyped.size; k++) {
//                 let key = keys.next().value;
//                 if (sketchTyped.get(key) < sketchName.get(key)) {
//                     longPress = "False";
//                 }
//             }
//         }
//     }
//     console.log(longPress);
// }


//FIXME
// function isLongPressedName(s1, s2) {
//     let i = 0, j = 0, sp = 0;
//     let newStr = "";

//     while (i < s1.length && j < s2.length) {
//         if (s2[sp] === s1[i]) {
//             newStr = newStr.trim() + s2[sp];
//             sp++;
//             i++;
//             j++;
//         }
//         if (s2[j] === s2[j - 1]) {
//             sp = j + 1;
//             j++;
//         }
//     }
//     if (newStr === s1) return "True";
//     else return "False";
// }


