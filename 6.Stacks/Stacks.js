// Writing our own stack from scratch

class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
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
    push(val){
        let newNode = new Node(val)
        if(!this.first){
            this.first= newNode
            this.last= newNode
        }
        else{
            newNode.next = this.first
            this.first =newNode
        }
        return ++this.size
    }
    pop(){
        if(!this.first)return null
        let first = this.first
        if(this.size === 1){
            this.length = null
        }
        this.first = this.first.next
        this.size--
        return first
    }
}

const list = new Stack()
list.push('hi')
list.push('hello')
list.push('there')
console.log(list.pop())
console.log(list.print())