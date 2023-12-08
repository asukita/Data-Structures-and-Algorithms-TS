class NodeElement {
    value: number | string | boolean | Object | null;
    next: NodeElement | null;
    constructor(value: number | string | boolean | Object | null) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    top: NodeElement;
    bottom: NodeElement;
    length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value: NodeElement['value']) {
        let newNode = new NodeElement(value);
        if (this.isEmpty()) {
            this.top = this.bottom = newNode;
            this.length++;
        } else {
            if (this.top.next === null) {
                this.top.next = this.bottom;
            }
            newNode.next = this.top;
            this.top = newNode;
            this.bottom.next = null;
            this.length++;
        }

        return this;
    }

    pop() {
        let last = this.bottom;
        let current = this.top.next;
        let counter = 1;
        while (counter !== this.length - 2) {
            current = current['next'];
            counter++;
        }
        this.bottom =  {
            value:current.value, 
            next : null
        };
        this.length--;
        return last;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();
console.log(myStack.isEmpty());

console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.push(4));

// console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack);

