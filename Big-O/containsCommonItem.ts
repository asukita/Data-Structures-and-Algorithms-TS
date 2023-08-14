// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// return true or false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 't'];

function containsCommonItem(arr1: Array<string>, arr2: Array<string>) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false
}

//O(a*b)
//O(1) - Space Complexity

interface Foo {
  [key: string]: boolean;
}

function containsCommonItem2(arr1: Array<string>, arr2: Array<string>) {
  // loop through first array and create object where properties === items in the array
  // can we assume always 2 params?

  let mapObj: Foo = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!mapObj[arr1[i]]) {
      const item = arr1[i];
      mapObj[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object. 
  for (let j = 0; j < arr2.length; j++) {
    if (mapObj[arr2[j]]) {
      return true;
    }
  }
  return false
}

//O(a + b) Time Complexity
//O(1) Space Complexity

// another option could be using find
function containsCommonItem4(arr1: Array<string>, arr2: Array<string>) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.find((elem) => elem === arr1[i])){
      return true;
    }
  }
  return false
}
//O(a + b) Time Complexity
//O(a) Space Complexity

// containsCommonItem2(array1, array2)

function containsCommonItem3(arr1: Array<string>, arr2: Array<string>) {
  return arr1.some(item => arr2.includes(item))
}


console.log(containsCommonItem(array1, array2));
console.log(containsCommonItem2(array1, array2));
console.log(containsCommonItem3(array1, array2));
console.log(containsCommonItem4(array1, array2));

