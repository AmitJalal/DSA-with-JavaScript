function fillCups(amount) {
    amount.sort((a, b) => b - a);
    let x = amount[0];
    let y = amount[1];
    let z = amount[2];
    let sum = x + y + z;
    if (x + y > z) return (sum / 2) + (sum % 2);
    if (x == 0 && y == 0) return z;
    else return z;
};

console.log(fillCups[1, 4, 2]);



