// INSERT NODE METHOD
/*
Insert : 
    Adding a node to the linked list at a specific position 

Pseudocode : 
 1) If the index is less than 0 or greater than list length return null 
 2) If the index is 0 , unshift new Node to the start of the list 
 3) If the index is 0 , push a new node to the end of the list 
 4) Otherwise using get method get the node at the index -1 
 5)set the next property on that node to the new node
 4) Set the next prooperty on the new node to be the previous next 
 7) Increment the length
 8) return true
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
    get(index){
        if(!Number.isInteger(index))return ReferenceError('Not a num')
        if(index<0 || index>=this.length){
            return null
        }
        let value = this.head
        while(index>0){
            value = value.next
            index--
        }
        return value
    }
    set(val,index){
        if(!Number.isInteger(index))return ReferenceError('Not a num')
        if(index<0 || index>=this.length)return null
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.value = val
        }else{
            return false
        }
        return true
    }
    insert(value,index){
        if(!Number.isInteger(index))return ReferenceError('Not a num')
        if(index<0 || index>this.length)return false
        if(index === this.length){
            this.push(value)
            return true
        }
        if(index === 0 ){
            this.unshift(value)
            return true
        }
        let newNode = new Node(value)
        let prev = this.get(index-1)
        let nextNode = prev.next
        if(prev && newNode && nextNode){
            prev.next = newNode
            newNode.next = nextNode
            this.length++
            return true
        }
        return false
    }
}

let list = new SinglyLinkedList

list.push("hi")
list.push("there")
list.push("What")
list.push("are")
list.push("You")
list.push("doing")
console.log(list.insert("hello!",0))
list.transverse()