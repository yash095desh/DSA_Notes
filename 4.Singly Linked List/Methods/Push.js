// Pushing Pseodocode

/*
    - This function accept a value 
    - Creates a new node using the value passed to the function
    - If there is no head property on the list ,set the head and tail 
        to be the newly created node 
    - Otherwise set the next property on the tail to be the newnode 
        and set the tail property on the list to be the newly created node 
    - Increment the length by one 

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
}

let list = new SinglyLinkedList
list.push("hi")
list.push("there")
list.push("What")
list.push("are")
list.push("You")
list.push("doing")
list.transverse()
