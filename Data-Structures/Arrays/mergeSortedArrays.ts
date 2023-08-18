// always numbers
// not always sorted
// always two arrays
// return a array
/*let array1: Array<number> = [0, 3, 4, 31];
let array2: Array<number> = [3, 4, 6, 30];*/
let array1: Array<number> = [0, 3, 4, 31];
let array2: Array<number> = [3, 4, 6, 30];
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1: Array<number>, array2: Array<number>) {
    validation(array1, array2);
    return array1.concat(array2).sort((a, b) => a - b);
}

const mergeSortedArrays2 = (array1: Array<number>, array2: Array<number>) => {
    validation(array1, array2);
    return [...array1, ...array2].sort((a, b) => a - b);
};

function mergeSortedArraysHard(array1: Array<number>, array2: Array<number>) {
    validation(array1, array2);
    array2.forEach((item: number) => {
        array1.push(item);
    });
    return array1.sort((a, b) => a - b);
}

function mergeSortedArraysHard2(array1: Array<number>, array2: Array<number>) {
    validation(array1, array2);
    const newArray: Array<number> = [];
    let firstItemArr = array1[0];
    let firstItemArr2 = array2[0];
    let counter = 1;
    let counter2 = 1;

    while (firstItemArr || firstItemArr2) {
        if (firstItemArr2 === undefined || firstItemArr < firstItemArr2) {
            newArray.push(firstItemArr);
            firstItemArr = array1[counter];
            counter++;
        } else {
            newArray.push(firstItemArr2);
            firstItemArr2 = array2[counter2];
            counter2++;
        }
    }

    return newArray;
}

function validation(array1: Array<number>, array2: Array<number>) {
    if (array1.length === 0 && array2.length !== 0) {
        return array2;
    } else if (array2.length === 0 && array1.length !== 0) {
        return array1;
    }
}

console.log(mergeSortedArrays(array1, array2))
console.log(mergeSortedArrays2(array1, array2));
/* it changes the value array1, so is commented
console.log(mergeSortedArraysHard(array1, array2));*/
console.log(mergeSortedArraysHard2(array1, array2));