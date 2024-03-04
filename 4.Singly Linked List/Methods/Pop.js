// Popping pseudocode 
/*
     -If there are no nodes in the list ,return undefined 
     -loop through the list until you reach the tail 
     -Set the next property of the  2nd to last  node to be null
     - Set the tail to be the 2nd to last node 
     - Decrement the length of the  list by 1 
     - Returne the value of the node removed 

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
}

let list = new SinglyLinkedList
list.push("hi")
list.push("there")
list.push("What")
list.push("are")
list.push("You")
list.push("doing")
list.pop()
list.pop()
 list.pop()
list.transverse()