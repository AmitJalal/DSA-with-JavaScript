let testCase = [5, 5, 6, 2, 4, 5, 6, 3, 7, 8];
let map = new Map();
console.log(map);
 for(let i=0; i<testCase.length; i++){
    // map[testCase[i]] ? map[testCase[i]] +=1 : map[testCase[i]] =1;
    if(map.has(testCase[i])){
        map.set(testCase[i], 1 + map.get(testCase[i]))
    }
    else {
        map.set(testCase[i], 1)
    }
    // console.log(map);
 }
 console.log(map);

//  for(let key in map){
//     console.log(key);
//  }

//  for(let i=0; i< testCase.length; i++){
//     console.log(map[i]);
//  }