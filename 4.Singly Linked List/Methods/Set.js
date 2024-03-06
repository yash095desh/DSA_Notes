// Set Method

/*
    pseudocode
    - This function should accept a value and a index
    - Use your get function to find the specific node 
    - If the node is node found ,return false
    - If the Node is found ,set the value of that node to be the value 
      passesd to the function and return old value  

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
}

let list = new SinglyLinkedList

list.push("hi")
list.push("there")
list.push("What")
list.push("are")
list.push("You")
list.push("doing")
console.log(list.set('learning',5))
list.transverse()