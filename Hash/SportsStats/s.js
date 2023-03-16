let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

//-------------------

// let count =0;
// for(let key of color.keys()){
//     count += parseInt(color.get(key)/2)
// }
// console.log(count)

let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
    let list = readLine().trim().split(" ");
    let name = list[0];
    let favSports = list[1]
    console.log(name, favSports);
    // let nameCount = new Set();
    // for(let i=0; i<testCases; i++){
    //     if(nameCount.has(name[i])){
    //         nameCount.add(name[i], 1 + nameCount.values(name[i]));
    //     }
    //     else {
    //         nameCount.add(name[i], 1);
    //     }
    // }
    // console.log(nameCount);    

    let favSportsCount = new Map();
    for (let i = 0; i < testCases; i++) {
        if (favSportsCount.has(favSports[i])) {
            favSportsCount.set(favSports[i], 1 + favSportsCount.get(favSports[i]));
        }
        else {
            favSportsCount.set(favSports[i], 1)
        }
    }
    console.log(favSportsCount);
}
