class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')

a.next = b, b.next = c, c.next = d, d.next = e;

// A -> b -> c -> d -> e -> Null


// print linkedList 
const printLinkedList = head => {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}
// printLinkedList(a)

//print linkedList recursive fn
const printRecursive = (head) => {
    if (head === null) return
    console.log(head.val);
    printRecursive(head.next)
}
// printRecursive(a)


//push values in arrays
const linkedListValues = (head) => {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next
    }
    return arr;
}

// console.log(linkedListValues(a))

// recursively push values in arrays

const recursivelyPushValues = head => {
    let arr = []
    fillValues(head, arr);
    return arr;
}

const fillValues = (head, arr) => {
    if (head === null) return;
    arr.push(head.val);
    fillValues(head.next, arr);
}

// console.log(recursivelyPushValues(a));