// Creating own Queue from Scratch

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    print(){
        let arr = []
        let node = this.first
        for (let i = 0; i < this.size; i++) {
            arr.push(node.value)
            node = node.next
        }
        return {arr,size:this.size}
    }
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size
    }
    dequeue(){
        if(!this.first)return null
        if(this.first === this.last){
            this.last = null
        }
        let first = this.first
        this.first = first.next
        this.size--
        return first
    }
}

let queue = new Queue()
queue.enqueue("HI")
queue.enqueue("Hello")
queue.enqueue("there")
queue.dequeue()
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.print())