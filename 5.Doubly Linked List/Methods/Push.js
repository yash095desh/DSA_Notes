// Pushing Method 

/*
    Adding a new node to the end of the Doubly Linked List 

Pushing Pseudocode : 
        a) Create a new node with the value passes to the function 
        b) If the head property is null set the head and tail to be the newly created node 
        c) If not , set the next property on the tail to be that node 
        d) Set the previous property on the newly created to be the tail 
        e) Set the tail to be the newly created node 
        f) Increment the length
        g) Return the Doubly linked list 
*/

class Node {
    constructor(val){
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedlist {
    constructor (){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    push(val){
        let newnode = new Node(val)
        if(!this.head){
            this.head = newnode
            this.tail = newnode
        }
        else{
            this.tail.next = newnode
            newnode.prev = this.tail
            this.tail = newnode
        }
        this.length++
        return this
    }
}
let list = new DoublyLinkedlist()
list.push('Hello!')
list.push('there')
list.push('what')
console.log(list.head.value)
console.log(list.head.next.value)
console.log(list.head.next.next.value)