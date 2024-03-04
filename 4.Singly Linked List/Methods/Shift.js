// Shifting : 

/* Removing a new node from the beginning of the linked list  

# Shifting Pseudocode 
    - If there are no nodes return undefined
    - Store the current head property in a variable
    - Set the head property to be the current head next property 
    - decrement the length by 1
    - Return the value of the node removed
*/


class Node {
    constructor(value){ 
        this.value = value,
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0,
        this.head = null,
        this.tail = null
    }
    push(value){
        let newnode = new Node(value)
        if(!this.head){
            this.head = newnode
            this.tail = newnode
        }else{
            this.tail.next = newnode
            this.tail = newnode
        }
        this.length ++
    }
    transverse(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let current = this.head
        let newtail = current
        while(current.next){
            newtail = current
            current = current.next
        }
        newtail.next = null
        this.tail = newtail
        this.length--
        if(this.length === 0){
            this.head = null,
            this.tail = null
        }
        return current.value
    }
    shift(){
        if(!this.head){
            return undefined
        }
        let prev = this.head
        this.head = this.head.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return prev.value
    }
}

let list = new SinglyLinkedList
list.push("hi")
list.push("there")
list.push("What")
list.push("are")
list.push("You")
list.push("doing")
list.shift()
list.shift()
list.shift()
list.shift()
console.log(list.shift())
console.log(list.shift())
console.log(list.shift())
list.transverse()
