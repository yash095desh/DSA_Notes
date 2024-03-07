// Popping Method 

/*
    : Removing a node from the end of the Doubly Linked List 

    # pseudocode
    a) If there is no head ,return undefined
    b)Store the current tail in a variable to return later
    c) If the length 1 set the head and tail to be null 
    d) Update the tail to be the previous node 
    e) Set the newTails next to null 
    f) Decrement the length 
    g) Return the value Removed 
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
    pop(){
        if(!this.head)return undefined
        let removedtail = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = removedtail.prev
            this.tail.next = null
            removedtail.prev = null
        }
            this.length--;
            return removedtail
    }
}
let list = new DoublyLinkedlist()
list.push('Hello!')
list.push('there')
list.push('what')
console.log(list.pop())
console.log(list.head.value)
console.log(list.head.next.value)
console.log(list)