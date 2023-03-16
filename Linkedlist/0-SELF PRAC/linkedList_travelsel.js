class Node {
    constructor(val){
        this.head = val;
        this.next = null;
    }
}

let a = new Node("A")
let b = new Node("b")
let c = new Node("c")
let d = new Node("d")

a.next = b;
b.next = c;
c.next = d;

console.log(b);

const printLinkedList = (head)=>{
    let current = head;

    while(current !== null){
        console.log(current.head);
        current = current.next;
    }
}

printLinkedList(a);