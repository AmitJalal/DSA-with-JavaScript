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

}

function returnNFromLast(llist, n, ar) {
	//Implement this
	let lengthOfList = llist.length;
	let postion = lengthOfList - n;
	let element = ar[postion];
    return element;
}

let [N, n] = readLine().trim().split(" ");

let aLlist = new LinkedList();

let ar = readLine().split(" ").map(Number);
for (let i of ar) {
	aLlist.append(i)
}

console.log(returnNFromLast(aLlist, n, ar));