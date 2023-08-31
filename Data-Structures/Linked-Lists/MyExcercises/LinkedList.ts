// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

type Data = {
    value: number | string | boolean | Object,
    next: null | Data
};

class LinkedList {
    head: Data;
    tail: Data;
    length = 0;

    constructor(value: Data["value"]) {
        this.initiate(value);
    }

    /**
     * NAIVE APPROACH
     * 1. check if is the 2nd value, so we just append at tail and head.next
     * 2. if not, iterates the object until we find next = null, and then
     * 3. set that next value to the data given
     * 4. that object will have now next: null
     * 5. increase length
     *
     * @param {Data["value"]} value
     * @memberof LinkedList
     */
    appendNaive(value: Data["value"]) {
        const newNode = {
            value,
            next: null
        }
        // if the list have only one element, we inmediatly set the values
        if (this.length === 1) {
            this.head.next = newNode;
            this.tail = this.head.next;
            this.length++;
            return value;
        } else {
            // else, we started with the head
            let current: Data | null = this.head;
            // this counter will help us to stop the while loop
            let counter = this.length + 1;
            while (counter !== 0) {
                // if current is not null
                // console.log('current', current, counter);
                if (current) {
                    // the next in current is now next
                    current = current.next;
                    // console.log('next', current);
                } else {
                    // get to the deep of the object and set & return the value assigned
                    return this.getDeep(newNode);
                }
                counter--;
            }
            return undefined;
        }

    }

    append(value: Data["value"]) {
        // we create the new node object to use it several times
        const newNode = {
            value,
            next: null
        };
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

    prepend(value: Data["value"]) {
        // we assign this.head to new node object next so we can move the values to the right
        const newNode = {
            value,
            next: this.head
        };
        // console.log(newNode);
        // then, we update the value of this.head with new node
        // this way, we loop all numbers to the right
        this.head = newNode;
        // console.log(this.head);
        this.length++;
        return this;
    }

    /**
     * NAIVE: Using previous functions as deepValue && console logs :P
     *
     * @memberof LinkedList
     */
    printListNaive() {
        console.log('head_0', this.head.value);
        let concat = 'head';
        for (let i = 1; i < this.length; i++) {
            concat += `.next`;
            console.log(`next_${i}`, this.deepValue(concat, this).value);
        }
    }

    printList() {
        // we are going to use an array to print all values
        const listArray = [];
        // we start setting the head to the current element
        let current = this.head;
        // while current is not equal to null
        while (current !== null) {
            // push the current.value to the array
            listArray.push(current.value);
            // update current to the next one
            current = current.next;
        }
        // return the array when the while loop stops
        return listArray;
    }

    insert(index: number, value: Data['value']) {
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
            next: null
        };
        // we declare a new object who is going to be the node before inserting
        // the new one
        let leader = this.getElementByIndex(index - 1);
        // we set the newNode.next with the leader.next
        newNode.next = leader.next;
        // then, we updated leader next with the value of newNode
        leader.next = newNode;
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
        // reduce the length
        this.length--;
        return this.printList();
    }

    reverseFirst() {
        // if we have only one element, we return the linkedList
        if (this.length === 1) {
            return this.printList();
        }
        // we start with the first node
        let node = this.head;
        // myArray will help us save the values
        let myArray: Array<Data["value"]> = [];
        // we loop through the list until node is null
        while (node) {
            // we save the value of current node in the array
            myArray.push(node.value);
            // then, we assign the next value
            node = node.next;
        }
        // we reverse the array
        myArray.reverse();
        // we clear the list
        this.clear();
        // initiate with the first element of the array
        this.initiate(myArray[0]);
        // iterate with the other elements of the array
        for (let i = 1; i < myArray.length; i++) {
            // append the elements
            this.append(myArray[i]);
        }
        // return the list
        return this;
    }

    reverseSecond() {
        // we use counter to stop the loop and as a flag
        let counter = this.length - 1;
        while (counter !== 0) {
            // take the element before the flag(counter)
            let element = this.getElementByIndex(counter - 1);
            // we insert it to the tail
            this.append(element.value);
            // we remove the element from the original place
            this.remove(counter - 1);
            // we reduce the counter to go with the next one
            counter--;
        }
        return this;
    }

    reverse() {
        // [1, 2, 3]
        // if the list as one node, we return the head
        if (!this.head.next) {
            return this.head;
        }
        // start with the head as first node 
        // Ex. [1]
        let first = this.head;
        // the tail will be the head at the end, so we assign it
        // Ex. this.tail = [1]
        this.tail = this.head;
        // second node will start with the 2nd node
        // Ex. [1, 2, 3] ==> second = [2]
        let second = first.next;
        // while node exists
        while (second) {
            // temp node will be the next node of second item
            // Ex. [1, 2, 3] ==> temp = [3]
            const temp = second.next;
            // second next will be the first item, 
            // so we can arrange backwards everything
            // Ex. second [2] next ===> [1]
            second.next = first;
            // first now will be second
            // Ex. first = [2] next => [1]
            first = second;
            // second now will be temp
            // second = [3]
            second = temp;
            // and in the next all will end like
            // Ex. temp = null (there aren't more items next to 3)
            // second.next = [2] next => [1]
            // first = [3] next=> [2] next=> [1]
            // second = null;
            // the while stops
        }
        // the head.next is null bc it has the previous pointer
        this.head.next = null;
        // now this head is first element
        this.head = first;
        return this.printList();
    }

    clear() {
        this.head = {
            value: null,
            next: null
        };
        this.tail = {
            value: null,
            next: null
        };
        this.length = 0;
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

    deepValue(path: string, baseObj: LinkedList) {
        let pieces = path.split('.');
        // get root level object
        let obj = baseObj[pieces[0]];
        for (let i = 1, len = pieces.length; i < len; i++) {
            obj = obj[pieces[i]];
        }
        return obj;
    }

    getDeep(newNode: Data) {
        // if current is null, it means is the last one
        // we concat .next as many times as the object length minus 1
        // to get the object deep to retreive it
        let concat = 'head';
        // console.log('length', this.length)
        for (let i = 0; i < this.length - 1; i++) {
            concat += `.next`;
        }
        //console.log('concat', concat, this.deepValue(concat, this));
        // we get the object to assing the new value
        this.deepValue(concat, this).next = newNode;
        // the tail is now the value
        this.tail = newNode;
        // increasing the length
        this.length++;
        return newNode.value;
    }

    private initiate(value: Data["value"]) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
}

/*let myLinkedList = new LinkedList(10);
console.log(myLinkedList.appendNaive(5));
console.log(myLinkedList.appendNaive(16));
console.log(myLinkedList.appendNaive(30));
console.log(myLinkedList.appendNaive(50));
console.log(myLinkedList.appendNaive(80));
console.log(myLinkedList.appendNaive('lalalala'));
console.log(myLinkedList.head.next.next.next.next.next);*/

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.append(16));
console.log(myLinkedList.append(50));
console.log(myLinkedList.append(80));
console.log(myLinkedList.prepend(30));
console.log(myLinkedList.insert(2, 99), myLinkedList.length);
console.log(myLinkedList.remove(80), myLinkedList.length);
// myLinkedList.printListNaive();
// console.log(myLinkedList.printList());
// console.log(myLinkedList.reverseFirst());
// console.log(myLinkedList.reverseSecond());
console.log(myLinkedList.reverse());






