class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const num1 = new Node(3), num2 = new Node(5), num3 = new Node(7), num4 = new Node(7),
    num5 = new Node(10), num6 = new Node(19), num7 = new Node(37);

num1.next = num2, num2.next = num3, num3.next = num4,
    num4.next = num5, num5.next = num6, num6.next = num7;

//Fn for summing all the values in the linkedlist

//iterative approach
const printSum = (head) => {
    let sum = 0;
    while (head !== null) {
        sum += head.val;
        head = head.next;
    }
    return sum;
}

// console.log(printSum(num1));  //88 -> correct


//refactored recursive approach:
const recursiveSum = head => {
    if (head === null) return 0;
    return head.val + recursiveSum(head.next);

}
// console.log(recursiveSum(num1)); // 88

//recursive approach  //O(n) space, due to recursive call stack
// const recursiveSum = head => {
//     if (head === null) return 0;
//     let sum = head.val;
//     sum += recursiveSum(head.next);
//     return sum;
// }
// console.log(recursiveSum(num1)); // 88