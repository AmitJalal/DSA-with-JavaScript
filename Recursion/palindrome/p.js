// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1];
// }

// //------------------

// function isPalindromeHelper(l, r, s) {
//     if(s.length<=1) return "true";
//     if (l >= r) return "true";
//     if (s.charAt(l) !== s.charAt(r)) return "false";
//     return isPalindrome(l + 1, r - 1, s);
// }

// function isPalindrome(s) {
//     return isPalindromeHelper(0, s.length - 1, s);
// }

// let testCases = parseInt(readLine());
// for (let i = 0; i < testCases; i++) {
//     let string = readLine();
//     console.log(isPalindrome(string));
// }
let str = "abcdef"
str.charAt(1) = str.charAt(2)
console.log(str);