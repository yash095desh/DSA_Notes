// REMOVE METHOD
/*
 : Removing a node from a linked List  at a specific position 

 # Pseudocode 
 1) If the index is less than zero or greater than the length ,return undefined 
 2) If the index is the same as the length-1 ,pop 
 3) If the index is 0 ,shift 
 4) Otherwise , using the get method , access the node at the index -1 
 5) Set the next property on that node to be the next of the next node 
 6) Decrement the length 
 7) Return the value of the node removed  
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
        return current
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
        return prev
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
    remove(index){
        if(!Number.isInteger(index))return ReferenceError('Not a num')
        if(index<0 || index>=this.length)return undefined
        if(index === this.length-1)return this.pop()
        if(index === 0)return this.shift()
        let prev = this.get(index-1)
        let current = prev.next
        prev.next = current.next
        this.length--
        return current
    }
}

let list = new SinglyLinkedList

list.push("hi")
list.push("there")
list.push("What")
list.push("are")
list.push("You")
list.push("doing")
console.log(list.remove(5))
list.transverse()