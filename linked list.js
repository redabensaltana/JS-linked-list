class Node {
    constructor(data) {
        this.data = data
        this.next = null  
        // this.previous = null              
    }
}

class List {
    constructor(head = null) {
        this.head = head
    }
    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    clear() {
        this.head = null;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) { //check if there is a list first
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    getFirst() {
        return this.head;
    }
    addAtFirst(data){
        var node = new Node(data)
        
        node.next = this.head
        this.head = node
    }
}

//creating nodes
let node1 = new Node("data1")
let node2 = new Node("data2")
let node3 = new Node("data3")
node1.next = node2
node2.next = node3
// node3.previous = node2
// node2.previous = node1

//creating list
let list1 = new List(node1)
// let list2 = new List(node3)


// console.log(list1.head.next.data)
// console.log(list2.head.previous.data)


list1.addAtFirst("data firstyy")

console.log(list1.getFirst())