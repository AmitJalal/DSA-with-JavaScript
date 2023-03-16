let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

///////////

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
        let list = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            list.push(currentNode.head);
            currentNode = currentNode.next;

        }
        
        let i = 0, j = list.length - 1;
        while (i < j) {
            if(list[i]!==list[j]) return "False";
            i++;
            j--;
        }
        return "True";
    }
}


//input 


const testCases = parseInt(readLine());

for (let i = 0; i < testCases; i++) {

    const list = readLine().trim().split(' ')

    let myList = new SinglyLinkedList();
    for (let ele of list) {
        myList.append(ele);
    }

    // console.log(isPalindrome(myList));
    console.log(myList.print());
}



