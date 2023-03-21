// function reArrangeTheArray(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         arr[arr[i] % n] += i * n;
//     }

//     for (let i = 0; i < n; i++) {
//         arr[i] = Math.floor(arr[i] / n);
//     }
//     return arr;
// }

// let A = [4, 2, 3, 0, 1];
// console.log(reArrangeTheArray(A));

// let arr = [4, 2, 3, 0, 1];

// let up = [...arr]
// for (let i = 0; i < arr.length; i++) {
//     up[arr[i]] = i

// }
// console.log(up);


// function sort(arr) {
//     let left = 0, right = arr.length - 1;
//     while (left < right) {
//         if (arr[left] < arr[right]) {
//             left++;
//         }

//         if (arr[left] == arr[right] && arr[left] == 1) {
//             right--;
//             [arr[left], arr[right]] = [arr[right], arr[left]];
//         }

//     }
//     return arr;
// }

// console.log(sort([1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1]));

// const aboutMe = (dailyHrs,) => {
//    return hardWork;
// }

// const hardWork = (masteringTechStacks, problemSolving = "2", workOnOwnSkills = "2") => {
//     if()
//     let dailyPractice = masteringTechStacks + problemSolving + workOnOwnSkills;
//     let selfSatisfaction = 24 - dailyPractice;
//     if (!(selfSatisfaction > 7)) return hardWork(masteringTechStacks+1, problemSolving+1, workOnOwnSkills+1)
// }

// console.log(aboutMe([1, 3, 5, 2]))

const arr = (f) => {
   return f
}

const input = (s) =>{
   return s.sort()
}

console.log(arr(input([1,5,3,7])));
