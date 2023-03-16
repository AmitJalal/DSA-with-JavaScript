class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(2), b = new Node(5), c = new Node(7), d = new Node(10);

a.next = b, b.next = c, c.next = d;
// console.log(a);



const findInList = (head, element) => {
    while(head!==null){
        if(head.val === element) return true;
        head=head.next;
    }
    return false;
}
// console.log(findInList(a, 7)); // true
// console.log(findInList(a, 3)); // false
// console.log(findInList(a, 100)); // false

//recursive approach:
const findInListRecursive = (head, ele) => {
    if(head.next===null) return false;
    if(head.val===ele) return true;
    return findInListRecursive(head.next, ele);
}

console.log(findInListRecursive(a, 7)); // true
console.log(findInListRecursive(a, 8)); // false
console.log(findInListRecursive(a, 17)); // false
console.log(findInListRecursive(a, 5)); // true