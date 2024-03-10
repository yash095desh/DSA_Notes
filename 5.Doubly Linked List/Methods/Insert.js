// Insert 

/*
    Adding a node in a Doubly linked list by a certain position 

    # Pseudocode
    a) IF the index is less than or greater than or equal to the length of list then return false
    b) If the index is 0 ,unshift 
    c) If the index is the same as the length ,push
    d) Use the get method to access the index -1 
    e)Set the next and prev properties on the correct node to link everything together
    f) Increment the length
    g) Return true

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
    insert(index,value){
        if(index<0 || index>this.length)return false
        if(index == 0) return !!this.unshift(value)
        if(index == this.length) return !!this.push(value)

            let newNode = new Node(value)
            let pre = this.get(index-1)
            newNode.prev = pre
            newNode.next = pre.next
            pre.next.prev = newNode
            pre.next = newNode
            this.length++
            return true
    }
}
let list = new DoublyLinkedlist()
list.push('Hello!')
list.push('there')
list.push('what')
list.push('do')
list.push('you')
list.push('want')
console.log(list.insert(3,'Hi'),list.length)
console.log(list.transverse())