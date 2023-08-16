class MyArrayPam {
    length: number;
    data: { [index: number]: number | string | boolean };

    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index: number) {
        return this.data[index];
    }

    push(item: number | string | boolean) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    deleteAtIndex(index: number) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
    }

    unshift(item: number | string | boolean) {
        this.unshiftItems();
        this.data[0] = item;
        const firstItem = this.data[0];
        this.length++;
        return firstItem;
    }

    unshift2(item: number | string | boolean) {
        let dataCopy: { [index: number]: number | string | boolean } = {};
        dataCopy[0] = item;
        this.unshiftItems2(dataCopy);
        this.length++;
    }

    unshiftItems() {
        for (let i = this.length - 1; i >= 0; i--) {
            this.data[i + 1] = this.data[i];
        }
    }

    unshiftItems2(dataCopy: { [index: number]: number | string | boolean }) {
        for (let i = 0; i < this.length; i++) {
            dataCopy[i + 1] = this.data[i];
        }
        for (let i = 0; i < this.length + 1; i++) {
            this.data[i] = dataCopy[i];
        }
    }
}

const myArray = new MyArrayPam();
myArray.push('hi');
myArray.push('you');
/*myArray.push('!');
myArray.pop();
myArray.deleteAtIndex(0);*/
myArray.push('are');
myArray.push('nice');
//myArray.shiftItems(0);
console.log(myArray);
myArray.unshift(true);
console.log(myArray);

