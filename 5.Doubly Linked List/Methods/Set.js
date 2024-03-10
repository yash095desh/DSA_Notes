// Set Methods

/*
    Replacing  the value of a node to the given value in the Doubly Linked list 
    
    # pseudocode
    -Create a variable which is the result of get method at the index passed to the function 
    -If the get method returns a valid node set the value of that node to be the value passed in the function
    -Return true
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
    set(index,value){
        let node = this.get(index)
        if(node){
            node.value = value
            return true
        }else{
            return false
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
console.log(list.set(0,'Hi'))
console.log(list.transverse())