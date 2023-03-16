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


// Node class 
class Node {
    //Constructor to initialize the node object 
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}
class LinkedList {
    // Function to initialize head 
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // ------------ DO NOT MANE ANY CHANGE ABOVE THIS LINE ---------
    search(key) {
        // WRITE YOUR IMPLEMENTATION OF SEARCH HERE
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            if(currentNode == key) return "True";
            
            currentNode = currentNode.next;
            counter++;
        }
        return "False";
    }
}
// ----------- DO NOT MAKE ANY CHANGES BELOW THIS LINE ---------
// reading from input and making linked list
let numTests = parseInt(readLine());

for (let test = 0; test < numTests; test++) {
    let ll = new LinkedList();
    let key = parseInt(readLine());
    let ar = readLine().trim().split(" ").map(Number);

    for (let e of ar) {
        ll.append(e);
    }
    console.log(ll.search(key));
}