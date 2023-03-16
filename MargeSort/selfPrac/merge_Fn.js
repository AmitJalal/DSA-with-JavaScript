/**
 * 
 * @param {array} arr1 
 * @param {array} arr2 
 */

// just merging sorted array
function mergeSortedArray(arr1, arr2) {
    let res = [], i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i])
        i++;
    }

    while (j < arr2.length) {
        res.push(arr2[j])
        j++;
    }

    return res;
}

// console.log(mergeSortedArray([100, 200], [1, 2, 3, 5, 6]));

//function for dividing array into single sorted array

// Recrusive Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeSortedArray(left, right);
}
console.log(...mergeSort([7, 4, 0, 00, 30, 40, -4, -Infinity, 7, 7,7, 7, 9, 10]));