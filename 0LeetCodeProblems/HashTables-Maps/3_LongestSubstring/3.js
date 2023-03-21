function lengthOfLongestSubstring(s) {
    let char = new Map();
    let left = 0;
    let right = 0;
    let res = 0;
    while (right < s.length) {
        if (char.has(s.charAt(right))) 
        left = Math.max(char.get(s.charAt(right)) + 1, left);

        char.set(s.charAt(right), right);

        res = Math.max(res, right - left + 1);
        right++;
    }

    return res;
};



// var lengthOfLongestSubstring = function(s) {
//     if (s.length === 0 || s.length === 1) return s.length;
    
//     let start = 0;
//     let end = 0;
//     let chars = {};
//     let len = 0;
//     let diff = 0;
    
//     while (end <= s.length){
//         len = diff > len ? diff : len;
      
//       // found a duplicate
//       if (chars[s[end]] != undefined && chars[s[end]] != end) {
//         // start from the previous ocurrence of the duplicate char + 1
//         start = chars[s[end]] + 1;
//         end = start;
//         // console.log(chars, diff)
//         chars = {};
//         diff = 0;
//       } else {
//         // console.log('diff', diff)
//         chars[s[end]] = end;
//         diff++;
//         end++;
//       }
//       // console.log('diff at end', diff, len)
//     }
  
    
//     return len;
//   }


let ans = lengthOfLongestSubstring("pwwkew");
console.log(ans);
// let str = "amit";
// console.log(str.charAt(1));

// let hash = {1:"2", 2:"3", 3:"4"}
// console.log(hash);
// console.log(Object.keys(hash).length);