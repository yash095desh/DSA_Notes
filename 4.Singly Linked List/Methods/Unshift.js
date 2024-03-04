// UnShifting

/*
    Adding a new node to the beginning of the linked list 

    # Unshifting Pseudocode
    - This function should accept a value 
    - Create a new node using the value passed to the function 
    - If there is no head property on the list set head and tail to be the newly createed one 
    - Otherwise set the newly created nodes next property to be the current head property 
    - Set the head property on the list to be that newly created node 
    - Increment the length of the list by 1 and return the list 
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
    unshift(value){
        let newNode = new Node(value) 
        if(!this.head){
            this.head = newNode,
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
            this.length++
            return this
    }
}

let list = new SinglyLinkedList

list.unshift("there")
console.log(list.unshift("Hello"))
list.transverse()

