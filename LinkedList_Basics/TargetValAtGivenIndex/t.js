class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a=new Node(4), b=new Node(7), c=new Node(10), d=new Node(9);
a.next =b; b.next=c; c.next=d;


// iterative approach:
const valueAtGivenIndex = (head, position) => {
    let index = 0;
    while(head!==null){
        if(index===position) return head.val;
        index++;
        head = head.next;
    }
    return "not found"
}
// console.log(valueAtGivenIndex(a, 9)); // not found
// console.log(valueAtGivenIndex(a, 3)); // 9
// console.log(valueAtGivenIndex(a, 0)); // 4


//recursive approach:
const getElementAtGivenPosition = (head, pos) => {
    if(head===null) return "not found";  //--> **dont put head.next since it will break at last position!!

    if(pos === 0) return head.val;

    return getElementAtGivenPosition(head.next, pos-1)
}

// console.log(getElementAtGivenPosition(a, 2));  // 10
// console.log(getElementAtGivenPosition(a, 0));  // 4
// console.log(getElementAtGivenPosition(a, 100));  // not found
// console.log(getElementAtGivenPosition(a, -1));  // not found
// console.log(getElementAtGivenPosition(a, 3));  // 9