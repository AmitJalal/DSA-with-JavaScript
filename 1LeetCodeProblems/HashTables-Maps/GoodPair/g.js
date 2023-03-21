// function numIdenticalPairs(nums) {
//     let len = nums.length;
//     let hash = {};
//     for (let i = 0; i < len; i++) {
//         hash[nums[i]] ? hash[nums[i]] += 1 : hash[nums[i]] = 1;
//     }
//     let sum = 0;

//     //-->Object.keys(hash).length -->this is the way to find length of hashmap

//     for (let key in hash) {
//         if (hash[key] >= 2) {
//             // if (key == Object.keys(hash).length) {
//                 sum += parseInt((hash[key] * hash[key] - 1)/2);
//             // } else sum += hash[key];
//         }
//     }
//      console.log(sum);
//     // let goodPairs = (sum * (sum - 1)) / 2;

//     return sum===0 ? 0 : Math.abs(sum-1);
// };

// console.log(numIdenticalPairs([2,1,3,2]));

// // console.log(Object.keys(hash).length); //--> this is the way to find length of hashmap

function numIdenticalPairs(nums) {
    let len = nums.length;
    let map = new Map();
    let result = 0;
    for (let i = 0; i < len; i++) {
        if (map.get(nums[i]) == null) {
            map.set(nums[i], 1);
        }
        else {
            let seen = map.get(nums[i]);
            result += seen;

            map.set(nums[i], seen + 1);
        }
    }
    console.log(map);
    return result;
}
let goodPairs = numIdenticalPairs([1,2,3,1,1,3])
console.log(goodPairs);