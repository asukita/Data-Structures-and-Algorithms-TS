//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

/**
 * REAL BRUTE FORCE APPROACH O(n^2)
 * 1. LOOP ENTIRE ARRAY TWICE
 * 2. COMPARE IF THERE IS THE CURRENT VALUE
 * 3. IF YES, RETURN THAT VALUE, END
 * 4. IF NO, CONTINUE
 * @param {Array<number>} input
 * @return {*}  {(Number | undefined)}
 */
function firstRecurringCharacter(input: Array<number>): Number | undefined {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] === input[i]) {
                return input[i];
            }
        }
    }
    return undefined;
}

/**
 * BRUTE FORCE APPROACH 2 (so bonus array can work)  O(n^2)
 * 1. LOOP ENTIRE ARRAY
 * 2. SAVING IN ANOTHER ARRAY THE VALUES
 * 3. LOOP 2ND ARRAY
 * 4. COMPARE IF THERE IS THE CURRENT VALUE
 * 5. IF YES, RETURN THAT VALUE, END
 * 6. IF NO, CONTINUE
 * @param {Array<number>} input
 * @return {*}  {(Number | undefined)}
 */
function firstRecurringCharacter1(input: Array<number>): Number | undefined {
    const valuesArray: Array<number> = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < valuesArray.length; j++) {
            if (valuesArray[j] === input[i]) {
                return input[i];
            }
        }
        valuesArray.push(input[i]);
    }
    return undefined;
}

/**
 * APPROACH 2  O(n)
 * 1. LOOP ENTIRE ARRAY
 * 2. SAVING IN ANOTHER ARRAY THE VALUES
 * 3. FIND CURRENT VALUE IN 2ND ARRAY
 * 4. COMPARE IF THERE IS THE CURRENT VALUE
 * 5. IF YES, RETURN THAT VALUE, END
 * 6. IF NO, CONTINUE
 * @param {Array<number>} input
 * @return {*}  {(Number | undefined)}
 */
function firstRecurringCharacter2(input: Array<number>): Number | undefined {
    const valuesArray: Array<number> = [];
    for (let i = 0; i < input.length; i++) {
        let find = valuesArray.find((number) => input[i] === number);
        if (find) {
            return input[i];
        } else {
            valuesArray.push(input[i]);
        }
    }
    return undefined;
}

/**
 * SET APPROACH  O(n)
 * 1. LOOP ENTIRE ARRAY
 * 2. SAVING IN ANOTHER ARRAY THE VALUES
 * 3. FIND CURRENT VALUE IN 2ND ARRAY
 * 4. COMPARE IF THERE IS THE CURRENT VALUE
 * 5. IF YES, RETURN THAT VALUE, END
 * 6. IF NO, CONTINUE
 * @param {Array<number>} input
 * @return {*}  {(Number | undefined)}
 */
function firstRecurringCharacter3(input: Array<number>): Number | undefined {
    const setValues = new Set();
    for (let i = 0; i < input.length; i++) {
        if (setValues.has(input[i])) {
            return input[i];
        } else {
            setValues.add(input[i]);
        }
        // console.log(setValues);
    }
    return undefined;
}

/**
 * OBJECT/HASHTABLE APPROACH O(n)
 * 1. LOOP ENTIRE ARRAY
 * 2. SAVING IN ANOTHER ARRAY THE VALUES
 * 3. FIND CURRENT VALUE IN 2ND ARRAY
 * 4. COMPARE IF THERE IS THE CURRENT VALUE
 * 5. IF YES, RETURN THAT VALUE, END
 * 6. IF NO, CONTINUE
 * @param {Array<number>} input
 * @return {*}  {(Number | undefined)}
 */
function firstRecurringCharacter4(input: Array<number>): Number | undefined {
    const objectValues: { [index: number]: boolean } = {};
    for (let i = 0; i < input.length; i++) {
        if (objectValues[input[i]]) {
            return input[i];
        } else {
            objectValues[input[i]] = true;
        }
        // console.log(objectValues);
    }
    return undefined;
}

/**
 * MAP APPROACH  O(n)
 * 1. LOOP ENTIRE ARRAY
 * 2. SAVING IN ANOTHER ARRAY THE VALUES
 * 3. FIND CURRENT VALUE IN 2ND ARRAY
 * 4. COMPARE IF THERE IS THE CURRENT VALUE
 * 5. IF YES, RETURN THAT VALUE, END
 * 6. IF NO, CONTINUE
 * @param {Array<number>} input
 * @return {*}  {(Number | undefined)}
 */
function firstRecurringCharacter5(input: Array<number>): Number | undefined {
    const mapValues = new Map();
    for (let i = 0; i < input.length; i++) {
        if (mapValues.get(input[i])) {
            return input[i];
        } else {
            mapValues.set(input[i], true);
        }
        // console.log(mapValues);
    }
    return undefined;
}

// const inputArray = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// const inputArray = [2,1,1,2,3,5,1,2,4];
// const inputArray = [2,3,4,5];
 const inputArray = [2, 5, 5, 2, 3, 5, 1, 2, 4];

// this won't work with the bonus array :
console.log(firstRecurringCharacter(inputArray));
console.log(firstRecurringCharacter1(inputArray));
console.log(firstRecurringCharacter2(inputArray));
console.log(firstRecurringCharacter3(inputArray));
console.log(firstRecurringCharacter4(inputArray));
console.log(firstRecurringCharacter5(inputArray));



//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2