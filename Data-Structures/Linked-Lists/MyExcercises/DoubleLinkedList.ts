// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//         previous: {
//           value: 10
//         }
//       },
//     previous: null
//     }
//   }
// };

type DoubleNode = {
    value: number | string | boolean | Object,
    next: null | DoubleNode,
    previous: null | DoubleNode
};

class DoubleLinkedList {
    head: DoubleNode;
    tail: DoubleNode;
    length = 0;

    constructor(value: DoubleNode["value"]) {
        this.head = {
            value,
            next: null,
            previous: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value: DoubleNode["value"]) {
        // we create the new node object to use it several times
        const newNode = {
            value,
            next: null,
            previous: null
        };
        newNode.previous = this.tail;
        // console.log(newNode);
        // we assign newNode to tail.next that is also head.next
        this.tail.next = newNode;
        // this way, we update this.head.next and the node inside it
        // and so on
        // console.log(this.tail, this.head);
        // then, we update the value of this.tail with the single new node
        // but this.head did not change
        this.tail = newNode;
        // console.log(this.tail, this.head);
        this.length++;
        return this;
    }

    prepend(value: DoubleNode["value"]) {
        // we assign this.head to new node object next so we can move the values to the right
        const newNode = {
            value,
            next: this.head,
            previous: null
        };
        // console.log(newNode);
        // then, we update the value of this.head with new node
        // this way, we loop all numbers to the right
        this.head = newNode;
        // then, we assign the prev element of the first next node with the value
        this.head.next.previous = this.head;
        // console.log(this.head);
        this.length++;
        return this;
    }

    printList() {
        if (this.length === 1) {
            return [this.head.value]
        }
        // we are going to use an array to print all values
        const listArray = [];
        // we start setting the head to the current element
        let current = this.head;
        // while current is not equal to null
        while (current !== null) {
            // push the current.value to the array
            listArray.push([{
                previous: current.previous?.value || null,
                value: current.value,
                next: current.next?.value || null
            }]);
            // update current to the next one
            current = current.next;
        }
        // return the array when the while loop stops
        return listArray;
    }

    reverse() {
        if (this.length === 1) {
            return this.head.value;
        }
        let first = this.head;
        let second = this.head.next;

        while(second){
            
        }

        return this.printList();

        return this.printList();
    }

    insert(index: number, value: DoubleNode['value']) {
        // if index is 0, we use prepend
        if (index === 0) {
            this.prepend(value);
            return this.printList();
            // if index is greater or equals to length, we use append
        } else if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        // we create the new node with the value and next is null
        // because we don't know yet wich node will be move
        let newNode = {
            value,
            next: null,
            previous: null
        };
        // we declare a new object who is going to be the node before inserting
        // the new one
        let leader = this.getElementByIndex(index - 1);
        // we set the newNode.next with the leader.next
        newNode.next = leader.next;
        // we set the newNode.previous with the leader value
        newNode.previous = leader;
        // then, we updated leader next with the value of newNode
        leader.next = newNode;
        // now, we update the pointer of old leader.next.prev to the newNode value
        leader.next.next.previous = leader.next;
        // increase the length
        this.length++;
        return this.printList();
    }

    remove(index: number) {
        // if index equals 0
        if (index === 0) {
            // we get the next node
            let end = this.getElementByIndex(1);
            // set that node to the head
            this.head = end;
            // we update the prev to null for head
            this.head.previous = null;
            // update the length
            this.length--;
            return this.printList();
            // if index is greater or equals to length
        } else if (index >= this.length) {
            // we get the pre-last node
            let end = this.getElementByIndex(this.length - 2);
            // set it to the tail
            this.tail = end;
            // update the node.next to null because is the tail
            end.next = null;
            // update the length
            this.length--;
            return this.printList();
        }
        // we are going to separate the start and end elements
        let start = this.getElementByIndex(index - 1);
        let end = this.getElementByIndex(index + 1);
        // we set start.next with the end element
        start.next = end;
        // we updated the prev value of the next with the start value
        start.next.previous = start;
        // reduce the length
        this.length--;
        return this.printList();
    }


    getElementByIndex(index: number) {
        let flag = 0;
        let current = this.head;
        while (flag !== index) {
            current = current.next;
            flag++;
        }
        return current;
    }
}

let myDoubleLinkedList = new DoubleLinkedList(10);
/*console.log(myDoubleLinkedList.append(5));
console.log(myDoubleLinkedList.append(16));
console.log(myDoubleLinkedList.append(50));
console.log(myDoubleLinkedList.prepend(1));
console.log(myDoubleLinkedList.append(80));
console.log(myDoubleLinkedList.prepend(30));
console.log(myDoubleLinkedList.insert(2, 99), myDoubleLinkedList.length);
console.log(myDoubleLinkedList.remove(2), myDoubleLinkedList.length);*/
console.log(myDoubleLinkedList.printList());
console.log(myDoubleLinkedList.reverse());






