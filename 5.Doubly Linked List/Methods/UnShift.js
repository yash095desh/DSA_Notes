// Unshift Method

/*
    Adding a new node to the beginnig of the Doubly Linked list 

    #pseudocode:
    1)Create a New Node with the value passed in the function 
    2)If the length of the list is 0
        - Set the head to the newNode 
        - Set tail to the new Node
    3) Otherwise 
        - Set the prev property of the head to be the newNode 
        - Set the next property of the newNode to be the head 
        -update the head of the list to newNode 
    4) Increment the length
    5) Return the List 
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
    transverse(){
        let arr = []
        let node = this.head
        for (let i = 0; i < this.length; i++) {
            arr.push(node.value)
            node = node.next
        }
        return arr
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
    shift(){
        if(!this.head)return undefined
        let oldhead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
        this.head = oldhead.next;
        this.head.prev = null
        oldhead.next = null
        this.length--
        }
        return oldhead
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }
}
let list = new DoublyLinkedlist()
list.push('Hello!')
list.push('there')
list.push('what')
console.log(list.unshift('Hi'))
console.log(list.transverse())