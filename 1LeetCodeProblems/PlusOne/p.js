function plusOne(digits) {
    let n = digits.length - 1;
    let lastNum = digits[n];
    let sum = lastNum + 1;
    if (sum < 9) {
        digits[n] = sum;
    }
    else if (sum > 9) {
         digits.pop();
         digits.push(1);
         digits.push(0);
    }
    return digits;
};
let arr = plusOne([1, 2, 3, 9])
console.log(arr);