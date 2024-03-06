// REVERSE METHOD

/*
 : Reverse the linked list in place
  pseudocode
  1) Swap the head and tail
  2) Create a variables called next , prev
  3) Create a variable called node and initialized it to the head property 
  4)loop through the list 
  5)Set next to be the next property on whatever node is 
  6) Set prev to be the value of the node variable
  7) set the node variable to be the value of the next variable 
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
    reverse(){
       let prev = null
       let current = this.head
       let next ;
       while(current){
        next = current.next
        current.next = prev
        prev = current
        current = next
       }
       let head = this.head
       this.head = this.tail
       this.tail = head
       return this
    }
}

let list = new SinglyLinkedList

list.push("hi")
list.push("there")
list.push("What")
list.push("are")
list.push("You")
list.push("doing")
console.log(list.reverse())
list.transverse()