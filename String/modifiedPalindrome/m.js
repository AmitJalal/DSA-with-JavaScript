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

function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        }
        else return "False";
    }
    return "True";
}

// Fn for making string palindrome by modifying it atmost one delete
function isModifiedPalindrome(s) {
    if (s.length <= 2) return "True";
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        }
        else return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    return "True";
}

//input
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let string = readLine().trim();
    console.log(isModifiedPalindrome(string));
}
