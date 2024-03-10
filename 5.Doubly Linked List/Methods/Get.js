// Get Method
/*
    Accessing a Node in a Doubly Linked List
   
    # Pseudocode 
    - If the index is less than 0 or greater or equal to the length ,return null
    - If the index is less than or equal to the half of the length of list 
        - Loop through the list starting from the head and loop towards middle 
        - Return the node once it is found 
    - If the index is greater than half the length of the list 
        - Loop through the list starting from the tail and loop towars middle
        - Return the node once it is found 
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
    get(index){
        if(index<0 || index>=this.length)return null
        if(index<=(this.length/2)){
            console.log('from forwards')
            let node = this.head
            while(index>0){
                node = node.next
                index--
            }
            return node
        }else{
            console.log('from backwards')
            let node = this.tail
            while(index<this.length-1){
                node = node.prev
                index++
            }
            return node
        }

    }
}
let list = new DoublyLinkedlist()
list.push('Hello!')
list.push('there')
list.push('what')
list.push('do')
list.push('you')
list.push('want')
console.log(list.get(2))
console.log(list.transverse())