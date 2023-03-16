let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
////////////////////////

class Node {
    constructor(val) {
        this.head = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(ele) {
        let newNode = new Node(ele);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    print() {
        let list = new Set();
        let currentNode = this.head;
        
        while (currentNode !== null) {
            list.add(currentNode.head)
            currentNode = currentNode.next;

        }
        return list;
    }
}


//input 
const size = parseInt(readLine());
const list = readLine().trim().split(' ').map(Number);

let myList = new SinglyLinkedList();

for (let ele of list) {
    myList.append(ele);
}


console.log(...myList.print());

// console.log(removeDuplicates(myList));