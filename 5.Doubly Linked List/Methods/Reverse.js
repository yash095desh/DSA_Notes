
// reverse Method

/*  Reverse the linked list in place */


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
            let node = this.head
            while(index>0){
                node = node.next
                index--
            }
            return node
        }else{
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
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0)return this.shift(index)
        if(index === this.length - 1) return this.pop(index) 
        let node = this.get(index)
        node.prev.next = node.next
        node.next.prev = node.prev
        node.prev = null
        node.next = null;
        this.length--
        return node
    }
    reverse(){
        if(!this.head)return false
        if(this.length === 1)return this
        let current = this.head
        let prev,head,next;
        for (let i = 0; i < this.length; i++) {
            next = current.next
            prev = current.prev
            current.prev = current.next
            current.next = prev
            current = next
        }
        head = this.head
        this.head = this.tail
        this.tail = head
        return this
    }
}
let list = new DoublyLinkedlist()
list.push('Hello!')
list.push('there')
list.push('what')
list.push('do')
list.push('you')
list.push('want')
console.log(list.reverse())
console.log(list.transverse())