class HashTablePam {
    data: any[];

    constructor(size: number) {
        this.data = new Array(size);
    }

    private _hash(key: string): number {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key: string, value: number): number {
        let hash = this._hash(key);
        let indexSel = -1;
        if (!this.data[hash]) {
            this.data[hash] = [];
        }
        // TODO: make it better 0(1)
        // we need to loop in case we pass the same key in some case
        for (let i = 0; i < this.data[hash].length; i++) {
            const find = Array(this.data[hash][i]).findIndex((value) => {
                return value[0] === key;
            });
            if (find >= 0) {
                indexSel = i;
            }

        }
        // if we detect the same key, we update the value
        if (indexSel !== -1) {
            this.data[hash][indexSel] = [key, value];
        } else {
            this.data[hash].push([key, value])
        }
        return hash;
    }

    get(key: string) {
        let hash = this._hash(key);
        const current = this.data[hash];
        if (current) {
            for (let i = 0; i < current.length; i++) {
                if (current[i][0] === key) {
                    // if we only want to return the value
                    return current[i][1];
                    /* // if want to return the pair in array
                    return current[i];
                    // if want to return as an object
                    return {
                        [current[i][0]]: current[i][1]
                    };*/
                }
            }
        }
        return undefined;
    }

    keys() {
        const returnArray: string[] = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                    returnArray.push(this.data[i][j][0]);
                }
            } else if (this.data[i]) {
                returnArray.push(this.data[i][0][0]);
            }
        }
        return returnArray;
    }

    values() {
        const returnArray: any[] = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                    returnArray.push(this.data[i][j][1]);
                }
            } else if (this.data[i]) {
                returnArray.push(this.data[i][0][1]);
            }
        }
        return returnArray;
    }

    list() {
        let returnData: {
            [key: string]: number | string | boolean
        } = {};
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                    returnData[this.data[i][j][0]] = this.data[i][j][1];
                }
            } else if (this.data[i]) {
                returnData[this.data[i][0][0]] = this.data[i][0][1];
            }
        }
        return returnData;
    }
}

const myHashTable = new HashTablePam(2);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.set('apples', 9));
console.log(myHashTable.get('apples'));
console.log(myHashTable.set('oranges', 2));
console.log(myHashTable.set('apples', 10));
console.log(myHashTable.set('grapes', 50));


console.log(myHashTable.keys());
console.log(myHashTable.values());
console.log(myHashTable.list());


