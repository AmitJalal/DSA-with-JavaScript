function removeDuplicate(arr) {
    let i = 0;
    let j = i + 1;
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            arr[j] = "_";
            j++;
        }
        else if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return (arr);
}

let removed = removeDuplicate([1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6]);
console.log(removed);    // o/p--> [1, 2, 3, 4, 5, 6, _, _, _, _, _, _]