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

// refactored solution by map
function lengthOfLongestSubstring(s) {
    if (s.length <= 1) return s.length;

    const seen = new Map();
    let left = 0, longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currChar = s[right];
        const prevSeenChar = seen.get(currChar);

        if (prevSeenChar >= left) left = prevSeenChar + 1;

        seen.set(currChar, right);

        longest = Math.max(longest, (right - left + 1));
    }
    return longest;
};

//input part
let testCases = parseInt(readLine());

//output part
for (let i = 0; i < testCases; i++) {
    let string = readLine().trim();
    console.log(lengthOfLongestSubstring(string));
}


//FIXME
// function lengthOfLongestSubstring(s) {
//     let i = 0, j = 1, longestSubStr = 1;
//     if(s.length===0) return 0;
    
//    while(j<s.length){
//       if(s[i]!==s[j]) {
//         longestSubStr++
//         j++;
//       }
//       else if(s[i]===s[j]) {
//         i++;
//         longestSubStr--;
//     }
//    }
//    return longestSubStr;
// }




// function lenOfLongestSubstringWithoutReapeat(string) {
//     let len = string.length, max = 0, start = 0;

//     const noRepeatStringCount = {};

//     for (let end = 0; end < len; end++) {
//         let rightChar = string[end];
//         noRepeatStringCount[rightChar] = noRepeatStringCount[rightChar] + 1 || 1;

//         while (noRepeatStringCount[rightChar] > 1) {
//             let leftChar = string[start];

//             noRepeatStringCount[leftChar] > 1 ? noRepeatStringCount[leftChar]--
//                                               : delete noRepeatStringCount;[leftChar];

//             start++;
//         }
//         max = Math.max(max, (end - start) + 1);
//     }
//     return max;
// }



//Fn for counting longest substring without repeat;
// function lengthOfLongestSubstring(s) {
//     if (s.length === 0) return 0;

//     let char = new Map();
//     let left = 0;
//     let right = 0;
//     let res = 0;
//     while (right < s.length) {
//         if (char.has(s.charAt(right)))
//             left = Math.max(char.get(s.charAt(right)) + 1, left);

//         char.set(s.charAt(right), right);

//         res = Math.max(res, right - left + 1);
//         right++;
//     }

//     return res;
// }

// solution by hashTables / object
// function lengthOfLongestSubstring(s) {
//     if (s.length <= 1) return s.length;

//     const seen = {};
//     let left = 0, longest = 0;

//     for (let right = 0; right < s.length; right++) {
//         const currChar = s[right];
//         const prevSeenChar = seen[currChar];

//         if (prevSeenChar >= left) left = prevSeenChar + 1;

//         seen[currChar] = right;

//         longest = Math.max(longest, (right - left + 1));
//     }

//     return longest;
// }

