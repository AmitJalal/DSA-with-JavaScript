let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    traverseToPosition(position) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== position) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    deleteNode(position) {
        // YOU ONLY NEED TO COMPLETE THIS FUNCTION.
        const leader = this.traverseToPosition(position - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }


    //Utility function to print the linked LinkedList 
    printList() {
        let list = "";
        let currentNode = this.head;

        while (currentNode !== null) {
            list += currentNode.value + " ";
            currentNode = currentNode.next;
        }
        return list;
    }
}

// Do not change anything below this line

let n = parseInt(readLine());

// Start with the empty list 
let list = readLine().trim().split(" ").map(Number);
let llist = new LinkedList(list[0]);

for(let i=1; i<list.length; i++){
    let ele = list[i];
    llist.append(ele)
}

let position = parseInt(readLine());

llist.deleteNode(position);
console.log(llist.printList());