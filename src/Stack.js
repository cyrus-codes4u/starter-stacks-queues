class Node{
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack{
    constructor(){
        this.top = null
    }

    pop(){
        const popped = this.top
        this.top = popped.next
        return popped.value
    }
    push(value){
        this.top = new Node(value, this.top)
        return this
    }
}